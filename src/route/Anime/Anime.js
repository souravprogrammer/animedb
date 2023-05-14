import express from "express";
import search from "../../controller/search/search.js";
import info from "../../controller/info/index.js";
import episode from "../../controller/episode/index.js";
import idValidator from "../../middleware/info.js";
import serchValidator from "../../middleware/searchvalidator.js";
import validateSignature from "../../middleware/Validate.js";
import List from "../../controller/search/list.js";
import Popular from "../../controller/search/Popular.js";
import Random from "../../controller/search/Random.js";
import IncreaseView from "../../middleware/IncreaseView.js";

import BookMark from "../../controller/bookmark/BookmarkAnimes.js";
import BookMarkRetrive from "../../controller/bookmark/BokMarkRetrive.js";
import BookmarkValidator from "../../middleware/BookmarkBodyValidator.js";
import BookmarkRemove from "../../controller/bookmark/BookmarkRemove.js";

/**
 *  search?keyw
 */

const animeRouter = express.Router();

// animeRouter.use(validateSignature);

animeRouter.get("/search", serchValidator, search);
animeRouter.get("/info/:id", idValidator, IncreaseView, info);
// animeRouter.get("/list/:page", List);
animeRouter.get("/list", List);

animeRouter.get("/popular", Popular);
animeRouter.get("/Random", Random);
animeRouter.get("/bookmark/:id", idValidator, BookMarkRetrive);
animeRouter.post("/bookmark/:id", idValidator, BookmarkValidator, BookMark);
animeRouter.delete(
  "/bookmark/:id",
  idValidator,
  BookmarkValidator,
  BookmarkRemove
);

animeRouter.get("/watch/:id", idValidator, episode);

export default animeRouter;
