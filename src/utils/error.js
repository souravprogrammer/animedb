async function error(data, res, status = 500) {
  res.status(status).json({
    message: data.message,
  });
}

export default error;
