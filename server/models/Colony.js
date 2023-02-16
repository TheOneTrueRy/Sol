import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const ColonySchema = new Schema(
  {
    name: {type: String, required: true},
    population: {type: Number, required: true},
    planetId: {type: ObjectId, required: true, ref: 'Planet'},
    speciesId: {type: ObjectId, required: true, ref: 'Species'}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

ColonySchema.virtual('planet', {
  ref: 'Planet',
  justOne: true,
  localField: 'planetId',
  foreignField: '_id'
})

ColonySchema.virtual('species', {
  ref: 'Species',
  justOne: true,
  localField: 'speciesId',
  foreignField: '_id'
})