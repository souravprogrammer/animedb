import error from "../utils/error.js";

async function serchValidator(req, res, next) {
  const { keyw } = req.query;

  try {
    if (!keyw) throw Error("provide a search option");

    next();
  } catch (err) {
    error(err, res, 400);
  }
}

export default serchValidator;
