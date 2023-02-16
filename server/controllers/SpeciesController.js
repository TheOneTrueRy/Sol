import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class SpeciesController extends BaseController{
  constructor(){
  super('api/galaxies')
  this.router
  .post('/:galaxyId/planets/:planetId/species', this.createSpecies)
  }
  async createSpecies(req, res, next) {
    try {
      const speciesData = req.body
      const species = await speciesService.createSpecies(speciesData)
    } catch (error) {
      next(error)
    }
  }
}