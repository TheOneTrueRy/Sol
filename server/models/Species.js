import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const SpeciesSchema = new Schema(
  {
    name: {type: String, required: true},
    
  }
)