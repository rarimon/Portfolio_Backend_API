import express from "express";
const router = express.Router();

import * as PortfolioController from "../controller/PortfolioController.js";
import * as UsersController from "../controller/UsersController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";



// User
router.post("/Registration",UsersController.Registration)
router.post("/Login/:Email",UsersController.Login)



// Portfolio
router.post("/CreatePortfolio",AuthMiddleware,PortfolioController.CreatePortfolio)
router.post("/UpdatePortfolio/:id",AuthMiddleware,PortfolioController.UpdatePortfolio)
router.get("/PortfolioList",AuthMiddleware,PortfolioController.PortfolioList)
router.delete("/DeletePortfolio/:id",AuthMiddleware,PortfolioController.DeletePortfolio)



export default router;