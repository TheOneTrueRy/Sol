import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema(
  {
    name: {type: String, required: true},
    planetId: {type: ObjectId, required: true, ref: 'Planet'}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)