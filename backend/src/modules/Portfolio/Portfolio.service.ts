import { TPortfolioData } from './Portfolio.interface'
import { Portfolio } from './Portfolio.model'

const createPortfolio = async (portfolio: TPortfolioData) => {
  const result = await Portfolio.create(portfolio)
  return result
}

const getAllPortfolio = async () => {
  const result = await Portfolio.find()
  return result
}
const getPortfolioById = async (id: string) => {
  const result = await Portfolio.findById(id)
  return result
}

const getPortfolioByPhone = async (phone: string) => {
  const result = await Portfolio.findOne({ 'personalData.phone': phone })
  return result
}

export const portfolioService = {
  createPortfolio,
  getAllPortfolio,
  getPortfolioById,
  getPortfolioByPhone,
}
