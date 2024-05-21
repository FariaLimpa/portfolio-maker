import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendRespone'
import { eventService } from './Event.service'

const createEvent = catchAsync(async (req, res) => {
  const result = await eventService.createEvent(req.body)
  sendResponse(res, {
    statusCode: 400,
    success: true,
    message: 'Official created successfully',
    data: result,
  })
})
const getEventInfo = catchAsync(async (req, res) => {
  const result = await eventService.getEventInfoFromDB(req.params.eventId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Event info',
    data: result,
  })
})
const getAllEvents = catchAsync(async (req, res) => {
  const result = await eventService.getAllEventsFromDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All events fetched successfully',
    data: result,
  })
})
const updateEventInfo = catchAsync(async (req, res) => {
  const result = await eventService.updateEventInfoInDB(
    req.params.eventId,
    req.body,
  )
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Event info updated successfully',
    data: result,
  })
})
const deleteEvent = catchAsync(async (req, res) => {
  const result = await eventService.deleteEventFromDB(req.params.eventId)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Event deleted successfully',
    data: result,
  })
})

export const eventController = {
  createEvent,
  getEventInfo,
  getAllEvents,
  updateEventInfo,
  deleteEvent,
}
