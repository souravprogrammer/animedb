import AnimeModel from "../../model/Anime.js";
import success from "../../utils/Success.js";
import error from "../../utils/error.js";

const PAGE_SIZE = 10;
async function List(req, res, next) {
  const { page = 1 } = req.params;

  try {
    const data = await AnimeModel.aggregate([
      { $skip: PAGE_SIZE * (Number(page) - 1) },
      { $limit: PAGE_SIZE },
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

    const count = await AnimeModel.find({}).count();
    success(
      { total: count, pageSize: PAGE_SIZE, page: Number(page), list: data },
      res,
      200
    );
  } catch (err) {
    error(err, res, 500);
  }
}

export default List;
