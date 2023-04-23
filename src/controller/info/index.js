import mongoose from "mongoose";
import error from "../../utils/error.js";
import AnimeModel from "../../model/Anime.js";
import success from "../../utils/Success.js";

async function info(req, res, next) {
  const { id } = req.params;
  try {
    const data = await AnimeModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      // {
      //   $project: {
      //     "episodes.link": 0,
      //   },
      // },
    ]);
    if (data.length === 0) {
      success({ message: "show not found" }, res, 404);
    } else {
      success(data, res, 200);
    }
  } catch (err) {
    error(err, res, 500);
  }
}

export default info;
