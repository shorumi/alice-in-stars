
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
