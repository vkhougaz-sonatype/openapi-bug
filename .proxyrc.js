module.exports = function (app) {
  app.use("/api/job/1/status", (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify("ok"));
  });
};
