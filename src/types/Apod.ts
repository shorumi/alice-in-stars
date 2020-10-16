import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Apod {
  @Field()
  copyright: string;
  
  @Field()
  date: string;
  
  @Field()
  explanation: string;
  
  @Field()
  hdurl: string;
  
  @Field()
  media_type: string;
  
  @Field()
  service_version: string;
  
  @Field()
  title: string;
  
  @Field()
  url: string;
}
