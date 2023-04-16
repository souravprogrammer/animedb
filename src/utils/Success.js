async function success(data, res, status = 200, message) {
  res.status(status).json({
    data,
    message,
  });
}

export default success;
