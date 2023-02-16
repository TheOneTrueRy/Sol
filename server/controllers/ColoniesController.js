import { coloniesService } from "../services/ColoniesService.js";
import BaseController from "../utils/BaseController.js";


export class ColoniesController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .post('/:galaxyId/planets/:planetId/colonies', this.createColony)
  }

  async createColony(req, res, next){
    try {
      const colonyData = req.body
      const colony = await coloniesService.createColony(colonyData)
      res.send(colony)
    } catch (error) {
      next(error)
    }
  }
}