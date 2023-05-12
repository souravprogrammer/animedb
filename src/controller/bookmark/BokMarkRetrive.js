import BookMarkModel from "../../model/BookMarks.js";
import mongoose from "mongoose";

export default async function BookMarkRetrive(req, res, next) {
  const { id } = req.params;

  const result = await BookMarkModel.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "animes",
        localField: "anime",
        foreignField: "_id",
        as: "list",
      },
    },
    {
      $unwind: "$list",
    },
    {
      $group: {
        _id: "$userId",
        list: {
          $push: {
            title: "$list.title",
            type: "$list.type",
            views: "$list.views",
            likes: "$list.likes",
            image: "$list.image",
            rating: "$list.rating",
            duration: "$list.duration",
            _id: "$list._id",
          },
        },
      },
    },
  ]);

  res.json({ message: "success", result });
}
