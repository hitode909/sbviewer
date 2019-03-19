import express = require("express");

export const register = (app: express.Application) => {
  app.get("/", (req, res) => {
    res.render("index", {
      filename: ["hoge.json"],
      keywords: ["a", "b"],
    });
  });
};
