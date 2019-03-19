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
};
