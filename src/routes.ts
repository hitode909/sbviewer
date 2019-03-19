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

  // XXX: sb2md appends links to `.md`...
  app.get(/^\/(.+).md$/, (req, res) => {
    const pageName: string = req.params[0];
    res.redirect(`/${pageName}`);
  });

  app.get(/^\/(.+)$/, (req, res) => {
    const pageName: string = req.params[0];
    const page = box.getPage(pageName);
    if (!page) {
      res.status(404);
      res.setHeader("Content-Type", "text/plain; charset=UTF-8");
      res.send(`Page ${pageName} is not found`);
      return;
    }
    res.render("page", { box, page });
  });
};
