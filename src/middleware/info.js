import error from "../utils/error.js";
import { ObjectId } from "bson";

async function idValidator(req, res, next) {
  try {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      next();
    } else {
      throw Error("invalid id");
    }
  } catch (err) {
    error(err, res, 400);
  }
}

export default idValidator;
