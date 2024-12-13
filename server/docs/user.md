# User API Specification

## Register User API

Endpoint : POST /api/users/register

Requst Body :

```json
{
  "username": "johndoe",
  "firstName": "John",
  "lastname": "Doe",
  "email": "johndoe@gmail.com",
  "password": "secret_password"
}
```

Response Body success:

```json
{
  "code": 201,
  "status": "success",
  "message": "User registered successfully"
}
```

Respon Body Error:

```json
{
  "code": 400,
  "status": "error",
  "message": "User already exist"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "johndoe",
  "password": "secret_password"
}
```

Respone Body Success :

```json
{
  "code": 200,
  "status": "success",
  "token": "xxxxxxx"
}
```

Respone Body Error :

```json
{
  "code": 400,
  "status": "error",
  "message": "Username or password is wrong."
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
