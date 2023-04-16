import crypto from "crypto";

//6fd8fc7d5d2a01a4112fe0d3d408ff4552f9a6ef9279d407352528285b07d574
async function validateSignature(req, res, next) {
  try {
    const key = req.header("x-api-key");
    const time = req.header("time");
    const csd = req.header("ua-des");
    const myhash = hash(key + time);
    if (myhash === csd) next();
    else
      res.status(401).json({
        message: "not allowed",
      });
  } catch (err) {
    res.status(500).json({
      message: "error 222",
    });
  }
}

function hash(key) {
  const hash = crypto.createHash("sha256");

  return hash.update(key).digest("hex");
}
export default validateSignature;
