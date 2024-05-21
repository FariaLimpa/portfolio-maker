import { Router } from 'express'
import { eventController } from './Event.controller'

const router = Router()

router.post('/', eventController.createEvent)
router.get('/:eventId', eventController.getEventInfo)
router.get('/', eventController.getAllEvents)
router.patch('/:eventId', eventController.updateEventInfo)
router.delete('/:eventId', eventController.deleteEvent)

export const eventRoutes = router
