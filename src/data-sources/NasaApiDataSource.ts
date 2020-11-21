import { HTTPCache, RESTDataSource } from "apollo-datasource-rest";

export class NasaApiDataSource extends RESTDataSource {
  readonly NASA_API_KEY = process.env.NASA_API_KEY;

  constructor() {
    super();
    this.baseURL = process.env.NASA_API_URL;
    this.httpCache = new HTTPCache();
  }

  async getApod(date:String, highDefinition:Boolean) {
    return this.get(`planetary/apod?date=${date}&hd=${highDefinition}&api_key=${this.NASA_API_KEY}`);
  }
}
