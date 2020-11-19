# TO DO

### Project Architecture

```bash
./src
├── api-routes    app routes / controllers
├── config        config files
├── loaders       loaders for startup modules 
├── models        db models
├── scripts       long npm scripts
├── services      business logic
└── subscribers   async task event handlers
├── app.js        app entry point
```

### Functionality
- [ ] User Auth
  - [ ] Implement user schema on database
    - [x] Setup [mongoDB](https://www.mongodb.com/)
    - [ ] Connect mongo to nodejs
    - [ ] Create user model
  - [ ] Sign in
  - [ ] Sign out
  - [ ] Sign up
  - [ ] Forgot Password
