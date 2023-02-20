import {Router} from "express";
import BookController from "./BookController.js";

const router = new Router()

router.get('/books', BookController.getAll)
router.post('/books', BookController.create)

export default router