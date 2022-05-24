import { Router, Request, Response } from "express"
import * as homeController from "../controllers/homeController";
import * as catsControllers from "../controllers/catsControllers";

const router = Router()

router.get('/', homeController.home)
router.get('/cats', catsControllers.cats)


export default router;