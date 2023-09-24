# ReadRave a Book Review Application
A platform and a community for readers that allows you to review books and follow other readers for recommendations.

[View the active site here]()
![Am I responsive view of the site]()

## Project Goal
### Problem Statement
Following problem statement was created for an imaginary user group:
I am **a user** trying to **find an application where I can share, read and follow conent about the books I like** but **I can't find one** because **other applications aren't specific enough** which makes me feel **like I can't share my passion for books with anyone**.

### Goals
- Goal for this project is to provide a solution for the stated problem statement.
- Build an online platform for sharing revioes on books review for sharing, reading and following book reviews and other readers.
- Allow users to post reviews, read reviews and follow readers alike.
- All visitors to the page should be able to view reviews.
- Registered users should be able to share a review with a photo, review content and review score.
- Registered users should be able to like and comment on reviews.
- Application should be responsive on different screen sizes.
- Application should provide a simple intuitive interface that is easy to navigate.
- Sites layout and colorscheme is pleasing and keeps users coming back to it.

# User Experience UX
## Wireframes
A wireframe for the home page was made using powerpoint.

## Color Scheme

![Color Scheme for the Page]()

## Data Design
A design for data was drafted using [diagrams.net](https://app.diagrams.net/).

The data diagram has 5 models user, profile, review, comment and like. 
![Color Scheme for the Page](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/data-diagram.png)

## Agile Stragety
Agile methodologies were applied in the development process of this project. Following principles were followed durint he process:
- Development process maintained flexible, so changes could be implemented if it yielded better results.
- Features where kept to minimum, avoiding useless features.
- Features were implemented in order of priority.
- Project was developed in small iterations in order ensure functionality of each feature implemented.
- Github Project board was used as an information radiator to manage feature implementation.
- User Stories were used to designing user centric features

## User Stories
User Stories were made using the Github _Issues_ feature. Each issue equated a User Story. Each Issue was tagged with a lable, a Github Issues feature, based on it's importance for the application. Following labels were created (listed in order of importance): 
- Must have
- Should have
- Could-Have
- Won't-Have

Issues were added on the Github Projects Boards, a builtin management tool from GitHub, as tasks. The implementation of the features was tracked by moving the tasks on each of the boards column. Three columns were named: Todo, InProgress and Done.

### User Stories
All together 15 user stories were drafted and Acceptance Criteria together with Tasks were created. 

**IMPLEMENTED USER STORIES**

Following **number** user stories were implemented during the development. You can see them on the done column of this repository's project board.

| Title                     | Story                                                                                                                                        | Tags                | Implemented |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| Profile Summary - Backend | As a \*\*user/viewer\*\* I can \*\*view anyone's profile details\*\* so that \*\*I can see a summary of their interactions and activity\*\*. | Backend, Could Have | No          |


# Features

## Landing Page
The home page or landing displays all the shared review cards. All reviews are displayed one after each other and 10 reviews are downloaded at the time, and if user scrolls down more reviews are displayed. Each can diplay 6 recipes at a time and a "next-button" on the bottom can be used to move between the pages. Each review card displays an image of the reviewer, book/a placeholder, book title, and caption for the review. 
![Landing page]()

On the right hand side(desktop) or on the top of post(mobile) 5 most popular profiles are displayed.
![Next button below recipe cards]()

On the top of the posts you have a search bar enabling you to search reviews based on the title or author.
![Next button below recipe cards]()


## Header/Navigation Menu
App icon and the navigation items are placed on the top of the application. The navigation menu items are links to home, feed, profile and signup pages. Navigatio options available for the viewer are login, signup and home. Icon works as a link to home page. 
 
![Navigation menu]()

On Medium sized screens and smaller the menu collapses into a dropdown menu.

![dropdown menu before]()

![dropdown menu after]()
 
## Review Page
If the user clicks on the book image, they are lead on to the review's page where user can read the review and view comments. 

![review page image]()

If the logged in user is the owner of the review, a three dot icon appears and allows user to edit or delete the review.

![Edit and Delete dopdown]

On the bottom of the body the date of creation is detailed and the ciomment section starts. If user isn't logged in they may only view the the recipe details and any comments that other users have left.
![Comments]()

Any users logged can use a leave a comment form to leave a comment and edit or delete any comments left.

![Edit and Delete button and submit form]()


## Like

If the user wants to like a review they have to log in and navigate to the review they like. On the review card they must click on the heart icon, in order to like it or unlike it. The page will refresh and the number of likes will be updated and the heart icon will change depending on if the user liked (solid colored heart icon) or unliked (outlined icon). 

![Like before]()

![Like after]()

## Login

If the user has already signed up and are logged out from their account they can press *Login* button on the navigation menu and a login window will open up.

![Edit and Delete button and submit form]()

User needs to enter username and their password and click submit. The login form will be validated and an error message will display if the login isn't succesful.

Once the form is succesfully submitted the user is logged in and they can view the green "Logged in as >username<" tag on the navigation menu. Also, the navigation menu won't have items *Sign Up* or *Login* instead there are *Logout* and *Add Review* instead. 
![login succesful display]()

## Signup

If the user wan't to carry out any other functionalities on the site other than viewing data, they must create a account to do that. They can do it by clicking on the signup button on the navigation menu. This opens a signup form that the new user must fill.

![]()

## Logout


## Add Reviw

If user wants to create a recipe they must click on the button at the navigation menu or the navigation link stating *Add Review*.

![image of selected recipe card and animation]()

Clicking the link or the button should open the page with the "Add a Review"-form. All the fields, title, author, caption, content and score, are mandatory. If the user won't select an image it will be replaced with a placeholder image.

![Share recipe form top]()
![Share recipe form bottom]() 

A succesful submission will take the user to the review page.

![Share recipe form bottom]() 

## Edit Review

## Delete Review

# Technologies
## Languages
HTML5 - Used on templates to build the structure of the sites and render an iterface.
CSS3 - Used to add design to the html structure for more pleasing interface.
Python - Used as the backend language.
JavaScript - Used as the frontend language.

## Frameworks and Libraries
Versions for all the libraries can be seen in the requirements.txt.

### Backend
- Django - Used as the fullstack framefork to build the website
- Django Rest Framework - Used to build and interact with APIs
- Bootstap- CSS library used to style the html together with custom css.
- React.js - JS library used to build independent component based application.
- psycopg2 - A PostgreSQL database adapter for Python.
- gunicorn - A Python WSGI HTTP Server for UNIX.
- cloudinary - Used to connect python with cloudniary storage for all the statuc files.
- dj-database-url - A Django utility to utilise the DATABASE_URL environment variable to configure the Django application. Used with PostgreSQL.
- dj3-cloudinary-storage - A Django package that facilitates integration with Cloudinary storage.
- django - A python package for the Django framework.
- django-allauth - An integrated set of Django applications addressing user authentication, registration and account management.
- django-cleanup - A third-party library for Django that provides automated file cleanup functionality.
- django-crispy-forms - A Django package that provides tags and filters to control the rendering behaviour of Django forms.
- django-summernote - A Django package to allow for the embedding of the summernote text editor into Django.
- oauthlib - A generic, spec-compliant, thorough implementation of the OAuth request-signing logic for Python 3.6+.
- PyJWT - A Python library that allows for encoding and decoding of JSON Web Tokens (JWT).
- python3-openid - A set of Python packages to support use of the OpenID decentralized identity system.
- pytz - A Python package for world timezone definitions, modern and historical.
- requests-oauthlib - A Python package for OAuthlib authentication support for Requests.
- sqlparse - A non-validating SQL parser for Python.
- urllib3 -  Python library that provides HTTP client functionality for making HTTP requests

## Software and Web Applications Used
Following applications were used to make this project:

- Am I Responsive - A tool used to display application responsiveness on various applications.
- App Diagrams - An application used to create database diagrams to visualize the data structure.
- Cloudinary - A cloud-based storage for static files, used to store project images.
- Coolors -  Used to generate image of the color scheme.
- ElephantSQL - A PostgreSQL database hosting service used to store data in this process.
- FontAwesome - Used to generate icons for the project.
- GitHub - An online repository and version control. Also used as the project management tool.
- GitPod - An online code editor used during this process.
- Google Chrome Dev Tools - A tool provided by Chrome browser, used to troubleshoot and test responsiveness of the application.
- Google Fonts - A free online library of fonts. Used for applying suitable fonts for the project.
- Heroku - A cloud platform that is used to deploy the applications.
- PowerPoint - Used for creating the site wireframes.

# Tests
## Validator Tests
Validators services where used to validate sites HTML and python code. JavaScript was not used during this project .

### W3C

### CI Python Linter

## Tests on user stories
Site was tested to confirm the acceptance criteria and tasks on the User Stories were full-filled. 

### USER STORY: 
As a **user** I can **what** so that **what**

### Acceptance Criteria:
- **Acceptance Criteria 1:** 
- **Acceptance Criteria 2:** 
- **Acceptance Criteria 3:** 


# Deployment
## First Deployment


## Second Deployment


# Credits
Following resources were used to help build this project:
- SVG icons were obtained from [Font Awesome](https://fontawesome.com/)
- Images and content for the reviews was taken from []()
- Placeholder image was taken from [Pexels](https://www.pexels.com/)
- Code Institutes walk through process "Moments" was used as an inspiration for this project.
- [Django Docs](https://docs.djangoproject.com/en/4.2/) were used through out the process to solve issues and used for guidance.
- [Bootsrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/) were used through out the process to solve issues and used for guidance.
- [React Docs](https://legacy.reactjs.org/) were used through out the process to solve issues and used for guidance.





