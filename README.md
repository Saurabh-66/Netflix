# NETFLIX Clone
<p align="center">
  <img width="460" height="300" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo">
</p>
### ***The website is currently live on this URL: https://stupefied-panini-f861d0.netlify.app/***

Netflix is an online streaming service where one can watch films, web series, TV shows, etc. Due to the current pandemic the consumption and demand for video content has increased drastically and so has the user-base of Netflix. It is a paid streaming service, i.e. you have to opt for a monthly subscription plan in order to watch the content (movies, TV shows, etc.) available on the platform.

Here we will be building a clone of **NETFLIX** using **HTML, CSS, React.js, (React Hooks, Context), Firebase and Styled Components**.

## Table of Contents

- [Tech stack used](#tech-stack-used)
- [Screenshots of the project](#screenshots-of-the-project)
- [Features](#features)

### Tech stack used

- HTML
- CSS
- React.js
- React Hooks
- React Context
- React Routers
- Styled Components
- Fuse.js
- Firebase
- Cloud Firestore
- Netlify (for deployment)

### Screenshots of the project

The web application consists of 4 pages. They are as follows.

- [Home Page](#home-page)
- [Sign In Page](#sign-in-page)
- [Sign Up Page](#sign-up-page)
- [Profile Page](#profile-page)
- [Browse Page](#browse-page)

#### Home Page

This is the home page of the clone website of Netflix. You can sign in to your account or know more about Netflix in the FAQs section on this page.

![Home Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/home_1.png)
![Home Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/home_2.png)
![Home Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/home_3.png)
![Home Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/home_4.png)
![Home Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/home_5.png)
![Home Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/home_6.png)

#### Sign In Page

This is the sign in page where users with existing account can sign in and access the browse page which consists of the catalog of films, web series, TV shows, documentaries, etc. 

![Sign In Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/sign_in_1.png)
![Sign In Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/sign_in_2.png)

#### Sign Up Page

This is the sign up page where new users can create their account on the website. 

![Sign Up Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/sign_up_1.png)
![Sign Up Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/sign_up_2.png)

#### Profile Page

Once the user successfully logs in the website he will see a welcome page along with his avatar.

![Profile Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/profile_1.png)

#### Browse Page

This is the main catalog page where registered users of the website can browse through web series, films, TV shows, etc. choose according to their convenience, watch synopsis, genres, maturity rating and trailer of the films, web series of the chosen films and even live search on the catalog on the basis of film/web series titles, genres, themes, etc. 

![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_1.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_2.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_3.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_4.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_5.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_6.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_7.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_8.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_9.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_10.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_11.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_12.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_13.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_14.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_15.png)
![Browse Page](https://github.com/Saurabh-66/Netflix/blob/master/photos/browse_16.png)

### Features

#### 1. Authentication of users (using Firebase)

Sign Up helps new users create a new account on the website whereas pre-existing users can sign in using email and password on the website (complete authentication, from creating new users to verifying credentials of users trying to log in the website is handled using Firebase).

#### 2. Protected Routes (using React Routers)

Since Netflix is a paid streaming service, you need to be a registered user of the platform who has opted for a monthly subscription plan in order to watch content on Netflix. This means that the Browse Page where the catalog of films, web series, etc. is present should only be accessible to registered users only. In short those users who successfully log in or sign up and create an account on the platform can access the browse page and not unregistered users of the website.

That's why protected routes are used using React Routers to protect the Browse page from unregistered users. If a user who hasn't logged in to the website tries to access the browse page using **/browse** in the URL will automatically be redirected to the sign in page to access the browse page legally as a registered user.

#### 3. Automatic redirect to browse page for logged in users (using React Routers)

If a user has successfully 

#### Live Search of the catalog of films, web series, etc. (using Fuse.js)
#### Dynamic catalog of films, web series (using Cloud Firestore)
#### Random avatar assigned for every new user on his/her Profile Welcome page
