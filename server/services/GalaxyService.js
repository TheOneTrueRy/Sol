import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";


class GalaxyService{
  async createGalaxy(galaxyData) {
  const galaxy = await dbContext.Galaxies.create(galaxyData)
  if(!galaxy){
    throw new BadRequest('Invalid Galaxy Data!')
  }
  return galaxy
  }
  async getGalaxy(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)
    if(!galaxy){
      throw new BadRequest('No galaxy with that ID!')
    }
    return galaxy
  }
  async getAllGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

}

export const galaxyService = new GalaxyService()