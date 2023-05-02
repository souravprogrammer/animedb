import BookMarkModel from "../../model/BookMarks.js";
import mongoose from "mongoose";

export default async function BookmarkRemove(req, res, next) {
  const { id } = req.params;
  const { animeId } = req.body;

  try {
    const result = await BookMarkModel.deleteOne({
      userId: new mongoose.Types.ObjectId(id),
      anime: new mongoose.Types.ObjectId(animeId),
    });
    res.json({ message: "success", result });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}
