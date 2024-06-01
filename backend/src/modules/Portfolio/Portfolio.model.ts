import { Schema, model } from 'mongoose'
import {
  TContractData,
  TPortfolioData,
  educationData,
  experienceData,
  personalData,
  projectData,
} from './Portfolio.interface'

const contractDataSchema = new Schema<TContractData>({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  github: { type: String, required: true },
  facebook: { type: String, required: true },
  linkedin: { type: String },
  twitter: { type: String },
  stackOverflow: { type: String },
  devUsername: { type: String },
})

const educationDataSchema = new Schema<educationData>({
  title: { type: String, required: true },
  duration: { type: String, required: true },
  institution: { type: String, required: true },
})

const experienceDataSchema = new Schema<experienceData>({
  title: { type: String },
  company: { type: String },
  duration: { type: String },
})

const personalDataSchema = new Schema<personalData>({
  name: { type: String, required: true },
  profile: { type: String, required: true },
  designation: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  github: { type: String, required: true },
  facebook: { type: String },
  linkedIn: { type: String },
  twitter: { type: String },
  stackOverflow: { type: String },
  leetcode: { type: String },
  devUsername: { type: String },
  resume: { type: String, required: true },
})

const projectDataSchema = new Schema<projectData>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  tools: { type: [String], required: true },
  role: { type: String, required: true },
  code: { type: String, required: true },
  demo: { type: String },
  image: { type: String },
})

const PortfolioSchema = new Schema<TPortfolioData>(
  {
    contractData: { type: contractDataSchema, required: true },
    educationData: { type: [educationDataSchema], required: true },
    experienceData: { type: [experienceDataSchema] },
    personalData: { type: personalDataSchema, required: true },
    projectData: { type: [projectDataSchema], required: true },
    skillData: { type: [String], required: true },
  },
  { timestamps: true },
)

export const Portfolio = model<TPortfolioData>('Portfolio', PortfolioSchema)
