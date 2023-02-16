import { planetsService } from "../services/PlanetsService.js";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .post('/:galaxyId/planets', this.createPlanet)
    .get('/:galacyId/planets/:planetId/species', this.getSpecies)
  }
  async getSpecies(req, res, next) {
    const planetId = req.params.planetId
    const species = speciesService.getSpecies(planetId)
    res.send(species)
  }
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const planet = await planetsService.createPlanet(planetData)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}