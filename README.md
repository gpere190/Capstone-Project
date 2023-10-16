# Disney ASL

The primary goal of this application is to ignite children's enthusiasm for learning American Sign Language and encourage them to maintain their commitment through a streak tracking feature. As a user, you have the option to select your preferred profile character and monitor your daily streaks. The main appeal of this application is so that users can input their own word into the text box and let the application convert it into ASL hand gestures. 🤟

## Authors

- [@gpere190](https://www.github.com/gpere190)

![Logo](https://user-images.githubusercontent.com/41925770/275376322-f03d39a1-5228-440f-b715-076af467180f.png)

## Tech Stack

**Client:** JavaScript, React, HTML, SCSS

**Server:** Node, Express, Express-Session, MySQL, Knex, bcrypt, JWT

## Installation

Install my-project with npm

```bash
  cd capstone-project
  cd client && npm i
  cd ..
  cd server
  mysql -u root -p
    create database asl;
    exit
  npm i && npm run migrate && npm run seed
  npm start
```

## Screenshots

![image](https://github.com/gpere190/Capstone-Project/assets/41925770/496ae607-7b81-4d1d-b1af-1719fc2c33c6)

![image](https://github.com/gpere190/Capstone-Project/assets/41925770/12bf66f0-2581-45a9-a418-f96df147ff59)

![image](https://github.com/gpere190/Capstone-Project/assets/41925770/90c0b857-b61a-4e05-90de-2348b1a3b7d3)

## Features

- Without needing to log in, user can use this application to trye a word in the textbox and click on the thumbs-up to enter, word will be translated to ASL hand gestures
- User can log in or create an account for a more personalized experience, and is encouraged to maintain user by commitment through a streak tracking feature.
- Create Account Page: User can choose a profile character, and sign up by creating a username and password and clicking 'sign up'
- Login Page: User can log in using previosly created credentials and click 'sign in.'
  -User-Logged-In Page: user's name is greeted at the top of the page and a streak is initiated at the header of the page, which increases as the users consecutive days streak proceeds.

## Lessons Learned

I learned a series of full stack technologies in creating this web application, including the tech stacks listed:
**Client:** JavaScript, React, HTML, SCSS

**Server:** Node, Express, Express-Session, MySQL, Knex, bcrypt, JWT

I learned how to create my own custom API and integrate it to my back-end. I learned how to create database schemas using Knex Migrate and table using seed file. Also, creating a database to authenticate my users who create an account in this web application.
