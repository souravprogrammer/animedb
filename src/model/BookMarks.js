import mongoose from "mongoose";

const BookMarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  anime: {
    type: mongoose.Types.ObjectId,
    ref: "animes",
  },
});

const BookMarkModel = mongoose.model("bookmark", BookMarkSchema);
export default BookMarkModel;
