import mongoose from "mongoose";
import episodesSchema from "./Episodes.js";

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: String,
  },
  image: { type: String },
  geners: { type: [String] },
  rating: { type: String },

  episodes: {
    type: [episodesSchema],
  },
  type: {
    type: String,
  },
});

export default mongoose.model("anime", animeSchema);
