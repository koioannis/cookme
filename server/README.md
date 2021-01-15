# TO DO

### Project Architecture

```
./src
<<<<<<< HEAD
    ├── api
    │   ├── middlewares
    │   └── routes
    ├── config
    ├── decorators
    ├── loaders
    ├── mapping
    │   └── user
    ├── models
    │   └── user
    ├── scripts
    ├── services
    ├── subscribers
    └── templates
=======
├── api
│   ├── middlewares
│   └── routes
│       └── v1
├── config
├── decorators
├── loaders
├── mapping
│   └── user
├── models
│   └── user
├── scripts
├── services
├── subscribers
└── templates
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
```
### Documentation
- [x] Configure swagger
 - [x] Add Auth routes

### Functionality
- [x] Create A Mapper for the DTOs
<<<<<<< HEAD
- [ ] User Auth
=======
- [x] User Auth
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
  - [x] General to be implemented
    - [x] created userDTO
  - [x] Implement User & UserInfo schema on database
    - [x] Setup [mongoDB](https://www.mongodb.com/)
    - [x] Connect mongo to nodejs
    - [x] Create User & UserInfo model
  - [x] Sign up
      - [x] User can sign up
      - [x] Server checks for duplicate entries (Both email and username)
      - [x] Create one to one relationship for User and UserInfo
      - [x] Create UserInfo upon registration if needed
  - [x] Sign in
  - [x] Sign out
<<<<<<< HEAD
  - [ ] Verify Email Address
  - [x] Forgot Password (Via JWTs)
- [ ] Business Logic
  - General to be implemented
    - [ ] Create posts
=======
  - [x] Forgot Password (Via JWTs)
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
