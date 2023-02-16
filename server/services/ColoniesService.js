import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class ColoniesService{
  async getColoniesOnPlanet(planetId) {
    const colonies = await dbContext.Colonies.find({planetId}).populate('planet', 'name').populate('species', 'name')
    if(!colonies){
      throw new BadRequest('Bad Planet ID!')
    }
  }
  async createColony(colonyData) {
    const colony = await dbContext.Colonies.create(colonyData)
    if(!colony){
      throw new BadRequest('Bad Colony Data!')
    }
    return colony
  }

}

export const coloniesService = new ColoniesService()