import { RESTDataSource } from "@apollo/datasource-rest"
import { KeyValueCache } from '@apollo/utils.keyvaluecache'
import { Service } from "typedi"

@Service()
export class NasaApiDataSource extends RESTDataSource {
  private static readonly NASA_API_KEY = process.env.NASA_API_KEY
  private static readonly apodEndPoint = 'planetary/apod'

  constructor(options: { cache: KeyValueCache }) {
    super(options);
    this.baseURL = process.env.NASA_API_URL
  }

  async getApodByDate(date:String, highDefinition:Boolean, thumbs:Boolean, conceptTags: Boolean) {
    return this.get(
      `${NasaApiDataSource.apodEndPoint}?date=${date}&hd=${highDefinition}&api_key=${NasaApiDataSource.NASA_API_KEY}&thumbs=${thumbs}&concept_tags=${conceptTags}`
    )
  }

  async getApodByDateRange(startDate:String, endDate: String, highDefinition:Boolean, thumbs:Boolean, conceptTags: Boolean) {
    return this.get(
      `${NasaApiDataSource.apodEndPoint}?start_date=${startDate}&end_date=${endDate}&hd=${highDefinition}&api_key=${NasaApiDataSource.NASA_API_KEY}&thumbs=${thumbs}&concept_tags=${conceptTags}`
    );
  }

  async getApodRandomly(randomQuantity:Number, highDefinition:Boolean, thumbs:Boolean, conceptTags: Boolean) {
    return this.get(
      `${NasaApiDataSource.apodEndPoint}?count=${randomQuantity}&hd=${highDefinition}&api_key=${NasaApiDataSource.NASA_API_KEY}&thumbs=${thumbs}&concept_tags=${conceptTags}`
    )
  }
}
