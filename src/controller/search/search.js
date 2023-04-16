import AnimeModel from "../../model/Anime.js";
import success from "../../utils/Success.js";
import error from "../../utils/error.js";

async function search(req, res, next) {
  const { keyw } = req.query;
  try {
    const data = await AnimeModel.aggregate([
      {
        $match: {
          title: {
            $regex: new RegExp(`.*(?:${keyw?.split(" ")?.join("|")}).*`, "i"),
          },
        },
      },
      {
        $addFields: {
          episodesCount: { $size: "$episodes" },
          des: {
            $substr: [
              "$description",
              0,
              { $divide: [{ $strLenCP: "$description" }, 4] },
            ],
          },
        },
      },
      {
        $project: {
          episodes: 0,
          description: 0,
        },
      },
    ]);
    success(data, res, 200);
  } catch (err) {
    error(err, res, 500);
  }
}

export default search;
