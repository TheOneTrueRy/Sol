import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .post('/:galaxyId/planets', this.createPlanet)
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