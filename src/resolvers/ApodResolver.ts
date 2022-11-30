import { NasaServiceImpl } from "../services/NasaServiceImpl"
import { Arg, Query, Resolver } from "type-graphql"
import { Service } from "typedi"
import { Apod } from "../types/Apod"

@Service()
@Resolver(Apod)
export class ApodResolver {
  constructor(
    private readonly nasaService: NasaServiceImpl,
  ) {}
  
  @Query(() => Apod)
  public async apodByDate(
    @Arg("date", { nullable: true }) date: string,
    @Arg("highDefinition", { defaultValue: false }) highDefinition: Boolean,
    @Arg("thumbs", { defaultValue: false }) thumbs: Boolean,
    @Arg("conceptTags", { defaultValue: false }) conceptTags: Boolean
  ): Promise<Apod> {
    return await this.nasaService.getApodByDate(date, highDefinition, thumbs, conceptTags)
  }

  @Query(() => [Apod])
  public async apodByDateRange(
    @Arg("startDate", { nullable: false }) startDate: string,
    @Arg("endDate", { nullable: false }) endDate: string,
    @Arg("highDefinition", { defaultValue: false }) highDefinition: Boolean,
    @Arg("thumbs", { defaultValue: false }) thumbs: Boolean,
    @Arg("conceptTags", { defaultValue: false }) conceptTags: Boolean
  ): Promise<Apod[]> {
    return await this.nasaService.getApodByDateRange(startDate, endDate, highDefinition, thumbs, conceptTags)
  }

  @Query(() => [Apod])
  public async apodRandomly(
    @Arg("randomQuantity", { nullable: false }) randomQuantity: number,
    @Arg("highDefinition", { defaultValue: false }) highDefinition: Boolean,
    @Arg("thumbs", { defaultValue: false }) thumbs: Boolean,
    @Arg("conceptTags", { defaultValue: false }) conceptTags: Boolean
  ): Promise<Apod[]>  {
    return await this.nasaService.getApodRandomly(randomQuantity, highDefinition, thumbs, conceptTags)
  }
  
}
