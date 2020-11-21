import { Apod } from "src/types/Apod";
import { Service } from "typedi";
import { INasaService } from "./INasaService";
import { NasaApiDataSource } from "../data-sources/NasaApiDataSource";

@Service()
export class NasaServiceImpl implements INasaService {
  constructor(
    private readonly nasaApiDataSource: NasaApiDataSource,
  ) {}

  getApodByDate(date: String, highDefinition: Boolean): Promise<Apod> {
    return this.nasaApiDataSource.getApod(date, highDefinition);
  }
  
}