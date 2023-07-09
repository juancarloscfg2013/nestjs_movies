import { Genre } from '@prisma/client';
export class GenreEntity implements Genre {
  id: number;
  name: string;
}
