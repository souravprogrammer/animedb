import app from "./src/config.js";
import animeRouter from "./src/route/Anime/Anime.js";
app.use("api/", animeRouter);

app.all("*", (req, res, next) => {
  res.json({
    message: "Invalid Route",
  });
});
app.listen(4000, (err) => {
  err
    ? console.log("error ", err.message)
    : console.log("server is listening on port 4000");
});

// async function test() {
//   const files = ["./animedb/anime(D char).json"];
//   let content = [];

//   for (let f of files) {
//     let animeList = JSON.parse(fs.readFileSync(f, "utf8"));

//     animeList = animeList.map((m) => {
//       let episodes = [];
//       if (m.episodes instanceof Array) {
//         episodes = m.episodes.map((e) => {
//           const _id = new ObjectId();
//           return { ...e, _id: _id.toString() };
//         });
//       } else {
//         const _id = new ObjectId();

//         episodes.push({ ...m.episodes, _id: _id.toString() });
//       }

//       //   console.log(m.episodes);

//       return { ...m, episodes };
//     });
//     content = [...content, ...animeList];
//   }

//   const combined = JSON.stringify(content);

//   fs.writeFileSync("./combiled.json", combined);
// }
