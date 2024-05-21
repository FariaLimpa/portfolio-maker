import { Router } from 'express'
import { portfolioRoutes } from '../modules/Portfolio/Portfolio.routes'

const router = Router()

const modulesRoutes = [
  {
    path: '/portfolio',
    router: portfolioRoutes,
  },
]
modulesRoutes.forEach((route) => router.use(route.path, route.router))

export default router
