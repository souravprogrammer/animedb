import error from "../../utils/error.js";
import success from "../../utils/Success.js";
import AnimeModel from "../../model/Anime.js";

async function episode(req, res, next) {
  const { id } = req.params;
  try {
    const data = await AnimeModel.aggregate([
      {
        $match: {
          "episodes._id": id,
        },
      },
      {
        $unwind: "$episodes",
      },
      {
        $match: {
          "episodes._id": id,
        },
      },
      {
        $project: {
          link: "$episodes.link",
          img: "$episodes.img",
          number: "$episodes.number",
          episodeNumber: "$episodes.episodeNumber",
          _id: "$episodes._id",
        },
      },
    ]);
    if (data.length === 0) {
      success({ message: "not found" }, res, 404);
    } else {
      success({ data: data?.[0] }, res, 200);
    }
  } catch (err) {
    error(err, res, 500);
  }
}

export default episode;
