import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './no-spec/animal/animal.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AnimalModule,
    MongooseModule.forRoot(
      'mongodb+srv://andreisilin1:fegevi173S@cluster0.pmsyel8.mongodb.net/\n',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
