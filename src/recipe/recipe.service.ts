import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  findAll() {
    return this.prisma.recipe.findMany();
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
