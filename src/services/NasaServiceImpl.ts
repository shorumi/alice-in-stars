import { Apod } from "src/types/Apod"
import { Service } from "typedi"
import { INasaService } from "./INasaService"
import { NasaApiDataSource } from "../data-sources/NasaApiDataSource"

@Service()
export class NasaServiceImpl implements INasaService {
  constructor(
    private readonly nasaApiDataSource: NasaApiDataSource,
  ) {}

  getApodByDate(date: String, highDefinition: Boolean, thumbs: Boolean, conceptTags: Boolean): Promise<Apod> {
    return this.nasaApiDataSource.getApodByDate(date, highDefinition, thumbs, conceptTags)
  }
  
  getApodByDateRange(startDate: String, endDate: String, highDefinition: Boolean, thumbs: Boolean, conceptTags: Boolean): Promise<[Apod]> {
    return this.nasaApiDataSource.getApodByDateRange(startDate, endDate, highDefinition, thumbs, conceptTags)
  }

  getApodRandomly(randomQuantity: Number, highDefinition: Boolean, thumbs: Boolean, conceptTags: Boolean): Promise<[Apod]> {
    return this.nasaApiDataSource.getApodRandomly(randomQuantity, highDefinition, thumbs, conceptTags)
  }
  
}