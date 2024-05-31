"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioService = void 0;
const Portfolio_model_1 = require("./Portfolio.model");
const createPortfolio = (portfolio) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Portfolio_model_1.Portfolio.create(portfolio);
    return result;
});
const getAllPortfolio = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Portfolio_model_1.Portfolio.find();
    return result;
});
const getPortfolioById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Portfolio_model_1.Portfolio.findById(id);
    return result;
});
const getPortfolioByPhone = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Portfolio_model_1.Portfolio.findOne({ 'personalData.phone': phone });
    return result;
});
exports.portfolioService = {
    createPortfolio,
    getAllPortfolio,
    getPortfolioById,
    getPortfolioByPhone,
};
