export class CreateMovieDto {
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

  popularity: number;
  vote_average: number;
}
