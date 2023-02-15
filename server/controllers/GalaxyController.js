import { galaxyService } from "../services/GalaxyService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxyController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .get('', this.getAllGalaxies)
    .get('/:galaxyId', this.getGalaxy)
    .post('', this.createGalaxy)
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxyService.createGalaxy(galaxyData)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async getGalaxy(req, res, next) {
  try {
    const galaxyId = req.params.galaxyId
    const galaxy = await galaxyService.getGalaxy(galaxyId)
    res.send(galaxy)
  } catch (error) {
    next(error)
  }
  }
  async getAllGalaxies(req, res, next) {
    try {
      const galaxies = await galaxyService.getAllGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
}