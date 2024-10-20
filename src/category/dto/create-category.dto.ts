import { IsNotEmpty, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @IsOptional()
  @IsUrl()
  @Length(1, 250)
  image_link?: string;
}