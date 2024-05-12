import { Injectable } from '@nestjs/common'
import { CreateAnimalDto } from './dto/create-animal.dto'
import { UpdateAnimalDto } from './dto/update-animal.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Animal } from './schemas/animal.schema'
import { Model } from 'mongoose'

@Injectable()
export class AnimalService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}
  create(createAnimalDto: CreateAnimalDto) {
    const newAnimal = new this.animalModel(createAnimalDto)
    return newAnimal.save()
  }

  findAll() {
    return this.animalModel.find().exec()
  }

  findOne(id: string) {
    return this.animalModel.findById(id)
  }

  update(id: string, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.findByIdAndUpdate(id, updateAnimalDto, {
      new: true,
    })
  }

  remove(id: string) {
    return this.animalModel.findByIdAndDelete(id)
  }
  async incrementViews(id: string) {
    const animal = await this.findOne(id)
    if (animal) {
      animal.views += 1
      await animal.save()
    }
  }
}
