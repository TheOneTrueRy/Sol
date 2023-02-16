import { dbContext } from "../db/DbContext.js";
import { coloniesService } from "../services/ColoniesService.js";
import { galaxyService } from "../services/GalaxyService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class GalaxyController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .get('', this.getAllGalaxies)
    .get('/:galaxyId', this.getGalaxy)
    .post('', this.createGalaxy)
    .get('/:galaxyId/planets', this.getPlanetsByGalaxy)
    .get('/:galaxyId/planets/:planetId/', this.getPlanet)
    .get('/:galaxyId/planets/:planetId/colonies', this.getColoniesOnPlanet)
    .get('/:galaxyId/planets/:planetId/colonies/:colonyId', this.getColoniesOnPlanet)
  }
  async getColoniesOnPlanet(req, res, next) {
    try {
      const planetId = req.params.planetId
      const colonies = coloniesService.getColoniesOnPlanet(planetId)
      res.send(colonies)
    } catch (error) {
      
    }
  }
  async getPlanet(req, res, next) {
    try {
      const planetId = req.params.planetId
      const planet = await planetsService.getPlanet(planetId)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsByGalaxy(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsByGalaxy(galaxyId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
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