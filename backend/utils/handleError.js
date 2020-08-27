const handleError = (err, req, res, next) => {
  console.error(err) // eslint-disable-line

  res
    .status(err.status || 500)
    .json({ status: "error", message: err.message || err })
}

module.exports = handleError
