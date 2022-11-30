import { Apod } from "src/types/Apod"

export interface INasaService {
  getApodByDate(date: String, highDefinition: Boolean): Promise<Apod>
  getApodByDateRange(startDate: String, endDate: String, highDefinition: Boolean): Promise<[Apod]>
}