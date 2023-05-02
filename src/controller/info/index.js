import mongoose from "mongoose";
import error from "../../utils/error.js";
import AnimeModel from "../../model/Anime.js";

import success from "../../utils/Success.js";

async function info(req, res, next) {
  const { id } = req.params;
  const { userId = "" } = req.query;
  let user = "";
  if (userId) {
    try {
      user = new mongoose.Types.ObjectId(userId);
    } catch (err) {}
  }
  try {
    const data = await AnimeModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $addFields: {
          userId: user,
        },
      },
      {
        $lookup: {
          from: "bookmarks",
          let: { localField1: "$userId", localField2: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$userId", "$$localField1"] },
                    { $eq: ["$anime", "$$localField2"] },
                  ],
                },
              },
            },
          ],
          as: "bookmark",
        },
      },
    ]);
    if (data.length === 0) {
      success({ message: "show not found" }, res, 404);
    } else {
      success(data, res, 200);
    }
  } catch (err) {
    console.log(err.message);
    error(err, res, 500);
  }
}

export default info;
