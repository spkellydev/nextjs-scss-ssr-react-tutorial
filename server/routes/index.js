const express = require("express");
const router = express.Router();

function routes(app) {
  router.get("/movies", (req, res) => {
    res.end("We made it! And it's great");
  });
  
  router.get("/movies/:id", (req, res) => {
    return app.render(req, res, "/movies", { id: req.params.id });
  });

  return router;
};

module.exports = routes;
