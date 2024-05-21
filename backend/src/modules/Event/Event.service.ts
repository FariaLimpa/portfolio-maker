import { TEvent } from './Event.interface'
import { Event } from './Event.model'

const createEvent = async (event: TEvent) => {
  const result = await Event.create(event)
  return result
}

const getEventInfoFromDB = async (eventId: string) => {
  const result = await Event.findById(eventId)
  return result
}

const updateEventInfoInDB = async (eventId: string, event: TEvent) => {
  const result = await Event.findByIdAndUpdate(eventId, event, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteEventFromDB = async (eventId: string) => {
  const result = await Event.findByIdAndDelete(eventId)
  return result
}

const getAllEventsFromDB = async () => {
  const result = await Event.find()
  return result
}

export const eventService = {
  createEvent,
  getEventInfoFromDB,
  updateEventInfoInDB,
  deleteEventFromDB,
  getAllEventsFromDB,
}
