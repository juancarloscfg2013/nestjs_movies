import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie } from '@prisma/client';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return await this.prismaService.movie.create({ data: createMovieDto });
  }

  async findAll(): Promise<Movie[]> {
    return await this.prismaService.movie.findMany();
  }

  async findOne(id: number): Promise<Movie> {
    const result = await this.prismaService.movie.findUnique({
      where: { id },
    });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return await this.prismaService.movie.update({
      data: updateMovieDto,
      where: { id },
    });
  }

  async remove(id: number): Promise<Movie> {
    return await this.prismaService.movie.delete({ where: { id } });
  }
}
