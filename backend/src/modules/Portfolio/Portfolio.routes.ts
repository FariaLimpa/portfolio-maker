import { Router } from 'express'
import { portfolioController } from './Portfolio.controller'

const router = Router()
router.get('/', portfolioController.getAllPortfolio)
router.get('/:id', portfolioController.getPortfolioById)
router.get('/phone/:phone', portfolioController.getPortfolioByPhone)
router.post('/', portfolioController.createPortfolio)
export const portfolioRoutes = router
