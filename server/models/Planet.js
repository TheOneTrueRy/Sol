import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema(
  {
    name: {type: String, required: true},
    biome: {type: String, required: true},
    atmosphere: {type: String, required: true},
    galaxyId: {type: ObjectId, required: true, ref: 'Galaxy'}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
  ref: 'Galaxy',
  justOne: true,
  localField: 'galaxyId',
  foreignField: '_id'
})