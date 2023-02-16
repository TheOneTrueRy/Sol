import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";


class SpeciesService{
  async createSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    if(!species){
      throw new BadRequest('Bad Species Data!')
    }
  }

  async getSpecies(planetId){
    const species = await dbContext.Species.find({planetId})
    if(!species){
      throw new BadRequest('Bad Planet Id!')
    }
    return species
  }
}

export const speciesService = new SpeciesService()