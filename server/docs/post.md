# Post API Specification

## Create Post API

Endpoint : POST /api/posts

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "Manfaat Minum Kopi bagi Kesehatan",
  "slug": "manfaat-minum-kopi-bagi-kesehatan",
  "image": "images.jpg",
  "content": "Manfaat minum kopi bagi kesehatan diantaranya dapat mencegah penyakit pikun.",
  "category": 2
}
```

Respon Body success:

```json
{
  "code": 201,
  "status": "success",
  "message": "News content successfully created"
}
```

## Read Post

Endpoint : GET /api/posts

Headers :

- Authorization : token

Respone Body success :

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

Respon Body error :

```json
{
  "code": 404,
  "status": "error",
  "message": "News content isn't Available"
}
```

## Read Post by Slug

Endpoint : GET /api/posts/:slug

Headers :

- Authorization : token

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
  "status": "error",
  "message": "News content isn't Available"
}
```

## Update Post

Endpoint : PUT /api/users/:slug

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "Manfaat Minum Kopi di Pagi Hari",
  "slug": "manfaat-minum-kopi-di-pagi-hari",
  "image": "image-2.jpg",
  "content": "Manfaat minum kopi dipagi hari dapat membuat pikiran menjadi fokus.",
  "category": 2
}
```

Response Body success :

```json
{
  "code": 201,
  "status": "success",
  "message": "News content successfully updated"
}
```

Response Body error:

```json
{
  "code": 404,
  "status": "error",
  "message": "News content isn't available"
}
```

## Delete Post

Endpoint : DELETE /api/posts/:slug

Headers :

- Authorization : token

Response Body success :

```json
{
  "code": 201,
  "status": "success",
  "message": "News content successfully deleted"
}
```

Response Body error :

```json
{
  "code": 404,
  "status": "error",
  "message": "News content isn't available"
}
```
