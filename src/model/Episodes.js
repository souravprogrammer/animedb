import mongoose from "mongoose";

const episodesSchema = new mongoose.Schema({
  title: {
    type: {
      type: String,
    },
    number: {
      type: Number,
    },
    episodeNumber: {
      type: String,
    },
    link: {
      type: String,
    },
    img: {
      type: String,
    },
  },
});

const episodeModel = mongoose.model("episode", episodesSchema);
export default episodesSchema;

export { episodeModel };
