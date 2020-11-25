# TO DO

### Project Architecture

```
./src
├── api
│   └── routes
├── config
├── decorators
├── loaders
├── models
│   └── user
├── scripts
├── services
└── subscribers
```
### Documentation
- [ ] Configure swagger
 - [ ] Add Auth routes
  - [ ] Sign in
  - [ ] Sign out
  - [ ] Sign out

### Functionality
- [x] Create A Mapper for the DTOs
- [ ] User Auth
  - General to be implemented
    -[x] created userDTO
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
  - [ ] Verify Email Address
  - [x] Forgot Password
