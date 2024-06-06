import express from "express";
import {
  randomQuestion,
  diffrentCateg,
} from "../controler/questionController.js";

const router = express.Router();

router.get("/", randomQuestion);

router.get("/:categ", diffrentCateg);

export default router;
