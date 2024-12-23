y
### The website is an online platform, where clients can book appointments for barber services, check prices and services.
## Project features include:
- User authentication and authorization using JWT Token
- Ability to select a barber, service, date, and time - Once an appointment is booking, the selected session is removing from the barber's schedule
- Ability to check or cancel appointments in the user's personal account (implemented in the demo version)

The website has a simple, stylish, and practical design that provides easy navigation and ease of use.

## Configuration
server/.env : 

```shell
 dbUrl = "Your connection to MongoDB"
 secretKey = "Your random secret key"
```

client/src.env.local : 
```shell
REACT_APP_GOOGLE_MAPS_API_KEY = "Your google maps api key"
```
## Building
client:
```shell
 cd client
 npm i
 npm start
```
server:
```shell
 cd server
 npm i
 npm run dev
```

# Resource
[Create React App](https://create-react-app.dev/)<br>
[Mongoose](https://mongoosejs.com/)<br>
[ExpressJS](https://expressjs.com/)<br>
[Express Validator](https://express-validator.github.io/docs/)<br>
[React Router](https://reactrouter.com/)<br>
[Redux](https://redux.js.org/)<br>
[SCSS](https://sass-lang.com/)<br>
[JWT](https://github.com/auth0/node-jsonwebtoken)<br>
[Axios](https://axios-http.com/)<br>
[React Datepicker](https://reactdatepicker.com/)<br>

# Preview
![demo-registration](https://github.com/roman-kalistratov/barbershopRK/assets/80212286/9078c8ac-d1ff-411f-a328-67832b92357f)
![demo-myAccount](https://github.com/roman-kalistratov/barbershopRK/assets/80212286/b89a8225-20f9-415a-ba63-e0bef0953510)
![demo-login](https://github.com/roman-kalistratov/barbershopRK/assets/80212286/44a2a392-69ac-4e6f-8605-aa37f96c15af)
![demo-booking](https://github.com/roman-kalistratov/barbershopRK/assets/80212286/a93e8477-157e-47e7-8d7c-ed57da371c6c)
![barbershop-demo](https://github.com/roman-kalistratov/barbershopRK/assets/80212286/808db373-79ba-4cab-910c-684db8441634)
![barbershoprk onrender com_](https://github.com/roman-kalistratov/barbershopRK/assets/80212286/22280b8c-8253-4dab-9696-2bf3bab1f314)


