import BookMarkModel from "../../model/BookMarks.js";
import mongoose from "mongoose";

export default async function BookMark(req, res, next) {
  const { id } = req.params;
  const { animeId } = req.body;

  const book = new BookMarkModel({
    userId: new mongoose.Types.ObjectId(id),
    anime: new mongoose.Types.ObjectId(animeId),
  });
  const result = await book.save();

  res.json({ message: "success", result });
}
