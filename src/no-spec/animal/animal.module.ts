import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from './schemas/animal.schema';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
  imports: [
    MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }]),
  ],
})
export class AnimalModule {}
