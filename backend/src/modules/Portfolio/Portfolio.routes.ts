import { Router } from 'express'
import { portfolioController } from './Portfolio.controller'

const router = Router()

router.post('/', portfolioController.createPortfolio)
export const portfolioRoutes = router
