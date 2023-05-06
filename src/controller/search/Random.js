import AnimeModel from "../../model/Anime.js";
import success from "../../utils/Success.js";
import error from "../../utils/error.js";

const PAGE_SIZE = 10;
async function Random(req, res, next) {
  //   const { page = 1 } = req.params;

  try {
    const data = await AnimeModel.aggregate([
      { $sample: { size: 20 } },

      {
        $addFields: {
          episodesCount: { $size: "$episodes" },
          des: "$description",
          //  {
          //   $substr: [
          //     "$description",
          //     0,
          //     { $divide: [{ $strLenCP: "$description" }, 4] },
          //   ],
          // },
        },
      },
      {
        $project: {
          episodes: 0,
          description: 0,
        },
      },
    ]).limit(18);
    success({ list: data }, res, 200);
  } catch (err) {
    error(err, res, 500);
  }
}

export default Random;
