export interface IPage {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: number
    advantages: Advantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh: IHdata
    qas: unknown[]
    addresses: unknown[]
    categoryOn: string
    blog: IBlog
    sravnikus: ISravnikurs
    learningclub: ILearningclub
  }
  
  export interface Advantage {
    title: string
    description: string
    _id: string
  }
  
  export interface IHdata {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: string
    _id: string
  }
  
  export interface IBlog {
    h1: string
    metaTitle: string
    metaDescription: string
    views: number
    _id: string
  }
  
  export interface ISravnikurs {
    metaTitle: string
    metaDescription: string
    qas: unknown[]
    _id: string
  }
  
  export interface ILearningclub {
    metaTitle: string
    metaDescription: string
    qas: unknown[]
    _id: string
  }
  