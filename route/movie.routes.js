import express from "express";
import { moviecreate, moviedelete, movieindex, movieupdate } from "../controller/movie.controller.js";

const router = express.Router();

router.get('/',movieindex);

router.post('/',moviecreate);

router.put('/:id',movieupdate);

router.delete('/:id',moviedelete)

export default router;