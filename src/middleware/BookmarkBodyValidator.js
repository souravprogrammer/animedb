import error from "../utils/error.js";
import { ObjectId } from "bson";

async function BookmarkValidator(req, res, next) {
  try {
    const { animeId } = req.body;

    if (ObjectId.isValid(animeId)) {
      next();
    } else {
      throw Error("invalid id");
    }
  } catch (err) {
    error(err, res, 400);
  }
}

export default BookmarkValidator;
