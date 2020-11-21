import { NasaServiceImpl } from "../services/NasaServiceImpl";
import { Arg, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Apod } from "../types/Apod";

@Service()
@Resolver(Apod)
export class ApodResolver {
  constructor(
    private readonly nasaService: NasaServiceImpl,
  ) {}
  
  @Query(() => Apod)
  public async apod(
    @Arg("date", { nullable: true }) date: string,
    @Arg("highDefinition", { nullable: true }) highDefinition: Boolean,
  ): Promise<Apod> {
    return this.nasaService.getApodByDate(date, highDefinition);
  }
}
