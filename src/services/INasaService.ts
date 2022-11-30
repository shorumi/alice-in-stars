import { Apod } from "src/types/Apod"

export interface INasaService {
  getApodByDate(date: String, highDefinition: Boolean, thumbs: Boolean, conceptTags: Boolean): Promise<Apod>
  getApodByDateRange(startDate: String, endDate: String, highDefinition: Boolean, thumbs: Boolean, conceptTags: Boolean): Promise<[Apod]>
  getApodRandomly(randomQuantity: Number, highDefinition: Boolean, thumbs: Boolean, conceptTags: Boolean): Promise<[Apod]>
}