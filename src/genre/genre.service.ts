import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Genre } from '@prisma/client';

@Injectable()
export class GenreService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    return await this.prismaService.genre.create({ data: createGenreDto });
  }

  async findAll(): Promise<Genre[]> {
    return await this.prismaService.genre.findMany();
  }

  async findOne(id: number): Promise<Genre> {
    const result = await this.prismaService.genre.findUnique({
      where: { id },
    });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    return await this.prismaService.genre.update({
      data: updateGenreDto,
      where: { id },
    });
  }
  async remove(id: number): Promise<Genre> {
    return await this.prismaService.genre.delete({ where: { id } });
  }
}
