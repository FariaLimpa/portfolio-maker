"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Portfolio_routes_1 = require("../modules/Portfolio/Portfolio.routes");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: '/portfolio',
        router: Portfolio_routes_1.portfolioRoutes,
    },
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));
exports.default = router;
