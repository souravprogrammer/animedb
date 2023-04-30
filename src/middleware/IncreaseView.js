import AnimeModel from "../model/Anime.js";
import error from "../utils/error.js";
import mongoose from "mongoose";
export default async function IncreaseView(req, res, next) {
  const { id } = req.params;
  try {
    const result = await AnimeModel.updateOne(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      {
        $inc: {
          views: 1,
        },
      }
    );
    next();
  } catch (err) {
    error(err, res, 500);
  }
}
