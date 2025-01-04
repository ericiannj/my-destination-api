import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}

  create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: createRouteDto,
    });
  }

  findAll() {
    return this.prismaService.route.findMany();
  }

  findOne(id: string) {
    return this.prismaService.route.findUnique({
      where: { id },
    });
  }

  update(id: string, updateRouteDto: UpdateRouteDto) {
    return this.prismaService.route.update({
      where: { id },
      data: {
        ...updateRouteDto,
        updatedAt: new Date(),
      },
    });
  }

  remove(id: string) {
    return this.prismaService.route.delete({
      where: { id },
    });
  }
}
