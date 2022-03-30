import express from "express";
import { __dirname } from "../app.js";
const app = express();
const router = express.Router();

//route handlers
router.get("/list", (req, res) => {
  res.sendFile("./views/list.html", { root: __dirname });
});
router.get("/query", (req, res) => {
  res.sendFile("./views/query.html", { root: __dirname });
});
router.get("/list", (req, res) => {
  res.sendFile("./views/list.html", { root: __dirname });
});
router.get("*", (req, res) => {
  res.sendFile("./views/404page.html", { root: __dirname });
});

//fetch handlers
router.get("/get/name", (req, res) => {});

export default router;
