import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class PlanetsService{
  async createPlanet(planetData) {
    const planet = dbContext.Planets.create(planetData)
    if(!planet){
      throw new BadRequest('Invalid Planet Data!')
    }
    return planet
  }
  async getPlanet(planetId) {
    const planet = await dbContext.Planets.findById(planetId)
    if(!planet){
      throw new BadRequest('bad planet id')
    }
    return planet
  }
  async getPlanetsByGalaxy(galaxyId) {
    const planets = await dbContext.Planets.find({galaxyId}).populate('galaxy', 'name')
    if(!planets){
      throw new BadRequest('Bad Galaxy ID!')
    }
    return planets
  }

}

export const planetsService = new PlanetsService()