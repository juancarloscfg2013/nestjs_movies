import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

async function main() {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTY4MjA4N2NhMzBkZjI4MjEwZmMxMGM3MzAyNDgwZiIsInN1YiI6IjY0YTM3MmJlOGUyMGM1MDBhZTEzNWQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V3Dc84AnPUzbXki9S7kZM7rF0hDw2kC7uPTCAxO96cM',
    },
  });

  const res1 = await api.get('/genre/movie/list?language=en');
  const { genres } = res1.data;
  console.log(genres);
  if (genres.length >= 1) {
    genres.map(async (genre) => {
      await prisma.genre.create({ data: genre });
    });
  }
  const res2 = await api.get('/movie/popular');
  const movies = res2.data.results;

  if (movies.length >= 1) {
    movies.map(async (movie) => {
      const { genre_ids, ...rest } = movie;
      const save = await prisma.movie.create({ data: rest });
      if (genre_ids.length > 0) {
        genre_ids.map(async (id) => {
          await prisma.movieGenre.create({
            data: {
              movieId: save.id,
              genreId: id,
            },
          });
        });
      }
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
