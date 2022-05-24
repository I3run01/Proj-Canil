import { Request, Response } from "express";
import {Animals} from "../models/Animals";

export const home = (req: Request, res: Response ) => {
    let animals = Animals.getAll()
    
    res.render('pages/home', {
        animals,
    })
}