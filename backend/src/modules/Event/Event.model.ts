import { Schema, model } from 'mongoose'
import { TEvent } from './Event.interface'

const eventSchema = new Schema<TEvent>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
})

export const Event = model('Event', eventSchema)
