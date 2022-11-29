
### NASA API
https://api.nasa.gov/

```bash
cp -a .env.development .env
docker-compose --build
docker network create dev-network
docker-compose build
```

http://localhost:4000/graphql


```graphql
{
  apod(highDefinition: true, date: "2022-11-28") {
    title
    url
    media_type
    date
    hdurl
    service_version
    copyright
  }
}
```
<img width="1792" alt="Screenshot 2022-11-29 at 20 07 39" src="https://user-images.githubusercontent.com/71681750/204669288-d3999a60-c06b-47c9-9487-c4d46b364d8b.png">
