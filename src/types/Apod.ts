import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Apod {
  @Field({ nullable: true })
  copyright: string
  
  @Field({ nullable: true })
  date: string
  
  @Field({ nullable: true })
  explanation: string
  
  @Field({ nullable: true })
  hdurl: string
  
  @Field({ nullable: true })
  media_type: string
  
  @Field({ nullable: true })
  service_version: string
  
  @Field({ nullable: true })
  title: string
  
  @Field({ nullable: true })
  url: string
}
