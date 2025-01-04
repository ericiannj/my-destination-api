import { Injectable } from '@nestjs/common';
import { CreatePoisDto } from './dto/create-pois.dto';
import { UpdatePoisDto } from './dto/update-pois.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PoisService {
  constructor(private prismaService: PrismaService) {}

  create(createPoisDto: CreatePoisDto) {
    return this.prismaService.poi.create({
      data: createPoisDto,
    });
  }

  findAll() {
    return this.prismaService.poi.findMany();
  }

  findOne(id: string) {
    return this.prismaService.poi.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePoisDto: UpdatePoisDto) {
    return this.prismaService.poi.update({
      where: { id },
      data: {
        ...updatePoisDto,
        updatedAt: new Date(),
      },
    });
  }

  remove(poiId: string) {
    return this.prismaService.poi.delete({
      where: {
        id: poiId,
      },
    });
  }
}
