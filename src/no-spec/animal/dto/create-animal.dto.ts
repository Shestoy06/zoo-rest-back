import { IsString } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  name: string;
}
