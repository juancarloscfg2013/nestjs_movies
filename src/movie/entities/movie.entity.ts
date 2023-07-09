import { Movie } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export class MovieEntity implements Movie {
  genreId: number;
  id: number;
  title: string;
  status: string;
  tagline: string;
  release_date: string;
  poster_path: string;
  overview: string;
  original_title: string;
  original_language: string;
  imdb_id: string;
  homepage: string;
  backdrop_path: string;

  adult: boolean;
  video: boolean;

  vote_count: number;
  budget: number;
  revenue: number;
  runtime: number;

  popularity: Decimal;
  vote_average: Decimal;
}
