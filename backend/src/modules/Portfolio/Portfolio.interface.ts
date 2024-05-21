export type TContractData = {
  email: string
  phone: string
  address: string
  github: string
  facebook: string
  linkedin: string
  twitter: string
  stackOverflow: string
  devUsername?: string
}

export type educationData = {
  title: string
  duration: string
  institution: string
}

export type experienceData = {
  title?: string
  company?: string
  duration?: string
}

export type personalData = {
  name: string
  profile: string
  designation: string
  description: string
  email: string
  phone: string
  address: string
  github: string
  facebook: string
  linkedIn: string
  twitter?: string
  stackOverflow?: string
  leetcode?: string
  devUsername?: string
  resume: string
}

export type projectData = {
  name: string
  description: string
  tools: string[]
  role: string
  code: string
  demo: string
  image: string
}

export type skillData = [string]

export type TPortfolioData = {
  contractData: TContractData
  educationData: educationData[]
  experienceData?: experienceData[]
  personalData: personalData
  projectData: projectData[]
  skillData: skillData
}
