import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";


class GalaxyService{
  async getGalaxy(galaxyId) {
    const galaxy = dbContext.Galaxies.findById(galaxyId)
    if(!galaxy){
      throw new BadRequest('No galaxy with that ID!')
    }
    return galaxy
  }
  async getAllGalaxies() {
    const galaxies = dbContext.Galaxies.find()
    return galaxies
  }

}

export const galaxyService = new GalaxyService()