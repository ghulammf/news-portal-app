# Public Post API Documentation

## Get All News API

Endpoint : GET /posts

Response Body success :

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "title": "Manfaat Minum Kopi bagi Kesehatan",
      "image": "http://localhost:7000/public/images/image-11223344.jpg",
      "user": {
        "name": "John Doe"
      },
      "content": "Manfaat minum kopi bagi kesehatan diantaranya dapat mencegah penyakit pikun.",
      "category": {
        "name": "Kesehatan"
      },
      "createdAt": "11-11-2024"
    },
    {
      "title": "Panen Durian di Kebun Mang Ikin",
      "image": "http://localhost:7000/public/images/image-234567.jpg",
      "user": {
        "name": "Jony Dee"
      },
      "content": "Panen durian di kebun mang Ikin dalam sehari dapat menghasilkan 100kg durian.",
      "category": {
        "name": "Nasional"
      },
      "createdAt": "11-12-2024"
    }
  ]
}
```

Response Body error :

```json
{
  "code": 404,
  "status": "Error",
  "message": "News content hasn't been available yet"
}
```

## Get News API

Endpoint : GET /posts/:slug

Response Body success :

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "title": "Manfaat Minum Kopi bagi Kesehatan",
    "image": "http://localhost:7000/public/images/image-11223344.jpg",
    "author": "John Doe",
    "content": "Manfaat minum kopi bagi kesehatan diantaranya dapat mencegah penyakit pikun.",
    "category": {
      "name": "Kesehatan"
    },
    "createdAt": "11-11-2024"
  }
}
```

Response Body error :

```json
{
  "code": 404,
  "status": "Error",
  "message": "News content isn't available"
}
```

## Get All News by Category API

Endpoint : GET /posts/categories/:category

Response Body success :

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "title": "Manfaat Minum Kopi bagi Kesehatan",
      "image": "http://localhost:7000/public/images/image-11223344.jpg",
      "user": {
        "name": "John Doe"
      },
      "content": "Manfaat minum kopi bagi kesehatan diantaranya dapat mencegah penyakit pikun.",
      "category": {
        "name": "Kesehatan"
      },
      "createdAt": "11-11-2024"
    },
    {
      "title": "8 Manfaat Jogging di Pagi Hari",
      "image": "http://localhost:7000/public/images/image-234567.jpg",
      "user": {
        "name": "Jony Dee"
      },
      "content": "Jogging di pagi hari dapat membantu tubuh tetap bugar seharian.",
      "category": {
        "name": "Kesehatan"
      },
      "createdAt": "11-12-2024"
    }
  ]
}
```

Response Body error :

```json
{
  "code": 404,
  "status": "Error",
  "message": "News category isn't available"
}
```

## Get All News by Author API

Endpoint : GET /posts/authors/:authors

Response Body Success :

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "title": "Manfaat Minum Kopi bagi Kesehatan",
      "image": "http://localhost:7000/public/images/image-11223344.jpg",
      "user": {
        "name": "John Doe"
      },
      "content": "Manfaat minum kopi bagi kesehatan diantaranya dapat mencegah penyakit pikun.",
      "category": {
        "name": "Kesehatan"
      },
      "createdAt": "11-11-2024"
    },
    {
      "title": "Kirab pusaka di HUT New Zealand",
      "image": "http://localhost:7000/public/images/image-234567.jpg",
      "user": {
        "name": "John Doe"
      },
      "content": "Upacara kirab dimeriahkan oleh berbagai pertunjukan dari masing-masing daerah",
      "category": {
        "name": "Budaya"
      },
      "createdAt": "11-12-2024"
    }
  ]
}
```

Response Body error :

```json
{
  "code": 404,
  "status": "Error",
  "message": "News author isn't available"
}
```
