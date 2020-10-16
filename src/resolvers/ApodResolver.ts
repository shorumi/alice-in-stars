import { NasaApiDataSource } from "src/data-sources/NasaApiDataSource";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Apod } from "../types/Apod";

@Resolver(Apod)
export class ApodResolver {
  
  @Query(() => Apod)
  public async apod(
    @Arg("date", { nullable: true }) date: string,
    @Arg("highDefinition", { nullable: true }) highDefinition: Boolean,
    @Ctx("dataSources") dataSources: any
  ): Promise<Apod> {
    const nasaApiDataSource: NasaApiDataSource = dataSources.nasaApiDataSource;

    return nasaApiDataSource.getApod(date, highDefinition);
  }
}
