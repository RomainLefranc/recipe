import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateRecipeDto {
  @ApiProperty({
    description: 'Name of the recipe',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description of the recipe',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Ingredients of the recipe',
  })
  @IsString()
  ingredients: string;

  @ApiProperty({
    description: 'Instructions of the recipe',
  })
  @IsString()
  instructions: string;
}
