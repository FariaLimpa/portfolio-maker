"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioRoutes = void 0;
const express_1 = require("express");
const Portfolio_controller_1 = require("./Portfolio.controller");
const router = (0, express_1.Router)();
router.get('/', Portfolio_controller_1.portfolioController.getAllPortfolio);
router.get('/:id', Portfolio_controller_1.portfolioController.getPortfolioById);
router.get('/phone/:phone', Portfolio_controller_1.portfolioController.getPortfolioByPhone);
router.post('/', Portfolio_controller_1.portfolioController.createPortfolio);
exports.portfolioRoutes = router;