import express from "express";
import search from "../../controller/search/search.js";
import info from "../../controller/info/index.js";
import episode from "../../controller/episode/index.js";
import idValidator from "../../middleware/info.js";
import serchValidator from "../../middleware/searchvalidator.js";
import validateSignature from "../../middleware/Validate.js";

/**
 *  search?keyw
 */

const animeRouter = express.Router();

// animeRouter.use(validateSignature);

animeRouter.get("/search", serchValidator, search);
animeRouter.get("/info/:id", idValidator, info);
animeRouter.get("/watch/:id", idValidator, episode);

export default animeRouter;
