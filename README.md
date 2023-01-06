# Fitness Tracker 

## Inspiration

## Details
User will be able to register and login into the Fitness Tracker. <br/>
Once logged in they will be able to update the own personal data to track their progress on their weight and measurements. <br/>
They will also able to log their workouts and meals to track their calorie consumption.<br/>
They will be able to select different exercises to target specific muscle groups.<br/>
The interface will be resizable to view on different size screens. <br/>

## Technology
* React - Frontend UI development
* NodeJS - Backend development
* CSS - UI Styling
* Bootstrap Library - UI Styling
* Sequelize - ORM to Generate and Migarte Models to Database
* Postgres on AWS RDS - Database
* Multer - local file storage
* Amazon S3 - cloud file storage
* RapidAPI to access exercises
* AWS- Web Deployment
* JWT Token Authorization - Security to authenticate user login
* BCrypt - Security to Hash Password

## API - Controllers

### Register and Login Authentication
| Method | Path | Purpose |
|--------|------|---------|
|Get | / | Authenticate User|
|Get | /* | 404 Page Not Found|

### User Data , Workout and Meal Logs
| Method | Path | Purpose |
|--------|------|---------|
|Get | /* | 404 Page Not Found|

## Database Structure
Users 1:n with UserData on user_id <br>
Users 1:n with Workouts on user_id <br>
Users 1:n with Meals on user_id<br>
Exercises <br>

## Contributors

[Alex Aguirre](https://github.com/AlexAguirre70) <br>
[Gustavo Martinez ](https://github.com/Gustavo0623) <br>
[Matthew Herrera](https://github.com/Machew115) <br>
