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

### Functionality
- [ ] Create A Mapper for the DTOs
- [ ] User Auth
  - [x] Implement User & UserInfo schema on database
    - [x] Setup [mongoDB](https://www.mongodb.com/)
    - [x] Connect mongo to nodejs
    - [x] Create User & UserInfo model
  - [ ] Sign up
      - [x] User can sign up
      - [x] Server checks for duplicate entries (Both email and username)
      - [ ] Create one to one relationship for User and UserInfo
      - [ ] Create UserInfo upon registration if needed
  - [ ] Sign in
  - [ ] Sign out
  - [ ] Forgot Password
