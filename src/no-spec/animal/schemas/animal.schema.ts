import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimalDocument = HydratedDocument<Animal>;

@Schema()
export class Animal {
  @Prop()
  name: string;

  @Prop()
  views: number;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
