import express = require("express");
import process from "process";
import Box from "./box";

const jsonPath = process.env.PAGES_JSON;
if (!jsonPath) {
  throw new Error("PAGES_JSON is not set.");
}
const box = new Box(jsonPath);

export const register = (app: express.Application) => {
  app.get("/", (req, res) => {
    res.render("index", { box });
  });

  app.get(/^\/pages\/(.+)$/, (req, res) => {
    const pageName: string = req.params[0];
    const page = box.getPage(pageName);
    if (!page) {
      res.status(404);
      res.end(`Page ${pageName} is not found`);
    }
    res.render("page", { box, page });
  });
};
