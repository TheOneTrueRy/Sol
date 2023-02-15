import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const GalaxySchema = new Schema(
  {
    name: {type: String, required: true},
    stars: {type: Number, required: true},
  },
  { timestamps: true, toJSON: { virtuals: true } }
)