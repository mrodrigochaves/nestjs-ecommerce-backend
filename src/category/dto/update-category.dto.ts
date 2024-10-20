import { IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  name?: string;

  @IsOptional()
  @IsUrl()
  @Length(1, 250)
  image_link?: string;
}