import { Router, Request, Response } from "express"
import * as AnimalsController from "../controllers/AllAnimalsController";

const router = Router()

router.get('/', AnimalsController.home)
router.get('/dogs', AnimalsController.dogs)
router.get('/cats', AnimalsController.cats)
router.get('/fishes', AnimalsController.fishes)
router.get('/gender', AnimalsController.name)

export default router;