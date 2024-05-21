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

export const portfolioController = {
  createPortfolio,
}
