### The website is an online platform, where clients can book appointments for barber services, check prices and services.
## Project features include:
- User authentication and authorization using JWT Token
- Ability to select a barber, service, date, and time - Once an appointment is booking, the selected session is removing from the barber's schedule
- Ability to check or cancel appointments in the user's personal account (implemented in the demo version)

The website has a simple, stylish, and practical design that provides easy navigation and ease of use.

## Configuration
server/.env : 

```shell
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


