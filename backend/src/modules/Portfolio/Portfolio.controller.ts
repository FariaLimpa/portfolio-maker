import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendRespone'
import { portfolioService } from './Portfolio.service'

const createPortfolio = catchAsync(async (req, res) => {
  const result = await portfolioService.createPortfolio(req.body)
  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: 'portfolio created successfully',
    data: result,
  })
})

const getAllPortfolio = catchAsync(async (req, res) => {
  const result = await portfolioService.getAllPortfolio()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'portfolio fetched successfully',
    data: result,
  })
})

const getPortfolioById = catchAsync(async (req, res) => {
  const result = await portfolioService.getPortfolioById(req.params.id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'portfolio fetched successfully',
    data: result,
  })
})

const getPortfolioByPhone = catchAsync(async (req, res) => {
  const result = await portfolioService.getPortfolioByPhone(req.params.phone)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'portfolio fetched successfully',
    data: result,
  })
})

export const portfolioController = {
  createPortfolio,
  getAllPortfolio,
  getPortfolioById,
  getPortfolioByPhone,
}
