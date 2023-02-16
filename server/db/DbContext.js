import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy.js"
import { ValueSchema } from '../models/Value'
import { PlanetSchema } from '../models/Planet.js'
import { ColonySchema } from "../models/Colony.js"
import { SpeciesSchema } from "../models/Species.js"

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Planets = mongoose.model('Planet', PlanetSchema)
  Colonies = mongoose.model('Colony', ColonySchema)
  Species = mongoose.model('Species', SpeciesSchema)
}

export const dbContext = new DbContext()
