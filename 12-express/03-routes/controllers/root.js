const getRootHandler = (req, res) => {
  res.send("Response from express");
};

module.exports = { getRootHandler };