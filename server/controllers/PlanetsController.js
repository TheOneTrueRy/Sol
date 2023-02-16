import { coloniesService } from "../services/ColoniesService.js";
import { planetsService } from "../services/PlanetsService.js";
import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .post('/:galaxyId/planets', this.createPlanet)
    .get('/:galaxyId/planets/:planetId/species', this.getSpecies)
    .get('/:galaxyId/planets/:planetId/colonies', this.getColonies)
  }
  async getSpecies(req, res, next) {
    try{
      const planetId = req.params.planetId
      const species = await speciesService.getSpecies(planetId)
      res.send(species)
    } catch (error){
      next(error)
    }

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
  async getColonies(req, res, next) {
    try {
      const planetId = req.params.planetId
      const colonies = await coloniesService.getColonies(planetId)
      res.send(colonies)
    } catch (error) {
      next(error)
    }
  }
}