# Mile-Stone-3

## Inspiration

## Details
User will be able to register and login into the Fitness Tracker
Once logged in they will be able to update the own personal data to track their progress on their weight and measurements
They will also able to log their workouts and meals to track their calorie consumption
They will be able to select different exercises to target specific muscle groups
The interface will be resizable to view on different size screens

## Technology
* React - Frontend UI development
* NodeJS - Backend development
* CSS - Styling
* Sequelize - ORM to Generate and Migarte Models to Database
* Postgres on AWS RDS - Database
* AWS- Web Deployment
* JWT Token Authorization - Security to authenticate user login
* BCrypt - Security to Hash Password

## API
| Method | Path | Purpose |
|--------|------|---------|
|Get | /* | 404 Page Not Found|

## Database Structure
Users 1:n with UserData on user_id
Users 1:n with Workouts on user_id
Users 1:n with Meals on user_id
Workouts 

## Contributors
[Alex Aguirre](https://github.com/AlexAguirre70)
[Gustavo Martinez ](https://github.com/Gustavo0623)
[Matthew Herrera](https://github.com/Machew115)
