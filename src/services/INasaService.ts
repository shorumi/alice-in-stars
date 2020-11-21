import { Apod } from "src/types/Apod";

export interface INasaService {
  getApodByDate(date: String, highDefinition: Boolean): Promise<Apod>;
}