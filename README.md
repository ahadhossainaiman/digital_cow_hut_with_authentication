#### cow-hut-backend-server-auth assignment - 4

All Routes for Cow-Hut-Server

### Live Link(vercel):https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/

### Github Repository Link: https://github.com/Porgramming-Hero-web-course/l2b1a4-cow-hut-admin-auth-ahadhossainaiman

### Application Routes:

### Sample Login User [POST]

```json
{
  "phoneNumber": "01533887945",
  "password": "ahad017"
}
```

### sample json for User loggin successfully

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User login Successfully !",
  "data": {
    "logInUserRole": "buyer",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjAxNTMzODg3OTQ1Iiwicm9sZSI6ImJ1eWVyIiwiaWF0IjoxNjg4MjE0ODkwLCJleHAiOjE2ODgzMDEyOTB9.wRlLqk6_AVLZyzM0QlVG_kz_qKe2oBeM27I242qLMPo"
  }
}
```

### sample json for creating a new seller

```json
{
  "phoneNumber": "01680396715",
  "password": "hossain017"
}
```

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User login Successfully !",
  "data": {
    "logInUserRole": "seller",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjAxNjgwMzk2NzE1Iiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY4ODIzNTEzOSwiZXhwIjoxNjg4MzIxNTM5fQ.g8T3GUy_HRE4W432_j27kVCtGHtSsT6bI-JSaoWBgs0"
  }
}
```

```json
{
  "phoneNumber": "01680396715",
  "password": "hossain017",
  "seller": {
    "name": {
      "firstName": "Hossain",
      "lastName": "Taylor"
    },
    "phoneNumber": "+1 222-333-4444",
    "address": "987 Pine Ave, Atlanta, GA",
    "income": 1600
  }
}
```

### sample json for Seller created successfully

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Seller created successfully!",
  "data": {
    "_id": "649fe7906995204e95965fa3",
    "id": "S-00001",
    "role": "seller",
    "password": "$2b$10$AHHV7TmL.hbK85VbcUXohePLOUZMeTlb5nPv2QFopspF/AF0lGPmm",
    "phoneNumber": "01680396715",
    "seller": {
      "_id": "649fe7906995204e95965fa0",
      "id": "S-00001",
      "name": {
        "firstName": "Hossain",
        "lastName": "Taylor",
        "_id": "649fe7906995204e95965fa1",
        "id": "649fe7906995204e95965fa1"
      },
      "phoneNumber": "+1 222-333-4444",
      "address": "987 Pine Ave, Atlanta, GA",
      "income": 1600,
      "createdAt": "2023-07-01T08:45:04.162Z",
      "updatedAt": "2023-07-01T08:45:04.162Z",
      "__v": 0
    },
    "createdAt": "2023-07-01T08:45:04.273Z",
    "updatedAt": "2023-07-01T08:45:04.273Z",
    "__v": 0
  }
}
```

### sample json for creating a new Buyer

```json
{
  "phoneNumber": "01533887945",
  "password": "ahad017",
  "buyer": {
    "name": {
      "firstName": "Ahad",
      "lastName": "Hossain"
    },
    "address": "555 Oak St, Boston, MA",
    "budget": 1600
  }
}
```

### sample json for Buyer created successfully

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Buyer created successfully!",
  "data": {
    "_id": "649fe6b66995204e95965f9a",
    "id": "B-00001",
    "role": "buyer",
    "password": "$2b$10$ekIOyd5xWB4tBy4B8YlPoONqBI.AprdwoXImD7cIlsAAe3N6f.qz.",
    "phoneNumber": "01533887945",
    "buyer": {
      "_id": "649fe6b66995204e95965f97",
      "id": "B-00001",
      "name": {
        "firstName": "Ahad",
        "lastName": "Hossain",
        "_id": "649fe6b66995204e95965f98",
        "id": "649fe6b66995204e95965f98"
      },
      "address": "555 Oak St, Boston, MA",
      "budget": 1600,
      "createdAt": "2023-07-01T08:41:26.370Z",
      "updatedAt": "2023-07-01T08:41:26.370Z",
      "__v": 0
    },
    "createdAt": "2023-07-01T08:41:26.421Z",
    "updatedAt": "2023-07-01T08:41:26.421Z",
    "__v": 0
  }
}
```

### Sample create Admin [POST]

```json
{
  "password": "jannat017",
  "role": "admin",
  "name": {
    "firstName": "Fatema ",
    "lastName": "Jannat"
  },
  "phoneNumber": "01533887945",
  "address": "Dhaka"
}
```

### Response: The newly created admin Response Sample Pattern:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Admin created successfully!",
  "data": {
    "id": "A-00002",
    "role": "admin",
    "name": {
      "firstName": "Fatema ",
      "lastName": "Jannat",
      "_id": "649fbff0bb6fb8a5042d40ab"
    },
    "phoneNumber": "01533887945",
    "address": "Dhaka",
    "_id": "649fbff0bb6fb8a5042d40aa",
    "createdAt": "2023-07-01T05:56:00.020Z",
    "updatedAt": "2023-07-01T05:56:00.020Z",
    "__v": 0
  }
}
```

### Sample Login ADMIN [POST]

```json
{
  "phoneNumber": "01533887945",
  "password": "jannat017"
}
```

### Sample Login ADMIN Response type

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Admin LogIn Successfully !",
  "data": {
    "logInUserRole": "admin",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjAxNTMzODg3OTQ1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg4MjE1MDc4LCJleHAiOjE2ODgzMDE0Nzh9.W0_Z1yBKF-4Nj174XcWHYAUfxnFAgR3ln6eo0PVs460"
  }
}
```

### Sample Cow Data for create a cow

```json
{
  "name": "king4",
  "age": 4,
  "price": 1800,
  "location": "Dhaka",
  "breed": "Brahman",
  "weight": 400,
  "label": "for sale",
  "category": "Beef",
  "seller": "649fe7906995204e95965fa0"
}
```

//

#### User [AUTH]

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/auth/signup/seller [create/signup a seller] (POST)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/auth/signup/buyer [create/signup a buyer] (POST)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/auth/login [POST]
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/auth/refresh-token [POST]

#### Admin [AUTH]

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/admins/create-admin [POST]
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/admins/login [POST]

#### User

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/users (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/users/649fe6b66995204e95965f9a (get Single User) (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/users/649fe6b66995204e95965f9a (Update Single User) (PATCH)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/users/649fe6b66995204e95965f9a (Update a Single USER both seller/buyer) (DELETE)

#### Seller

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/sellers [get all users] (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/sellers/64a020c03bccd01d4670d5d3 (get Single Seller) (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/sellers/64a020c03bccd01d4670d5d3 (Update Single Seller) (PATCH)

#### Cows

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/cows/create-cow [create a cow] (POST)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/cows [get all cows] (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/cows/64a025b12fe7efe371aa7bb4 [create a single cow] (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/cows/64a025b12fe7efe371aa7bb4 [Update a single cow] (PATCH)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/cows/64a025b12fe7efe371aa7bb4 [Delete a single cow] (DELETE)

#### Orders

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/orders [create order] (POST)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/orders [Get all Users ] (GET)
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/orders/64a02680e0c36bd7d61a6106 [Get a single Order] (GET)

#### My Profile

- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/my-profile [GET]
- https://digital-cow-hut-backend-assignment-with-authentication.vercel.app/api/v1/my-profile [PATCH]

### Sample Cow Order Data to create a Order

```json
{
  "cow": "64a025b12fe7efe371aa7bb4",
  "buyer": "649fe6b66995204e95965f97"
}
```

# cow-hut-auth-admin
