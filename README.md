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

Following 10 user stories were implemented during the development. You can see them on the done column of this repository's project board.

- USER STORY: Like a recipe *- Label: Should-Have*

  As an **user** I can **like or unlike a recipe** so that **I can promote recipes I like**

- USER STORY: Social Media Link *- Label: Could-Have*

  As an **user/site viewer** I can **access site creators social media profiles** so that **I can find out more about the site creator or contact*

- USER STORY: User Login Features *- Label: Must-Have*

  As an **site user** I can **create and account, login and logout from an account** so that ** I can create recipes, comment and like**

- USER STORY: View Selection of Recipe *- Label: Must-Have*

 As an **site viewer/user** I can **view a selection of recipes** so that **I can select the one I want to view**

- USER STORY: Comment *- Label: Must-Have*

  As a **user** I can **leave comments on a post** so that **I connect and discuss of the recipes with my fellow users**

- USER STORY: Admin Recipe Mangament *- Label: Could-Have*

  As an **site manager** I can **prevent any unauthorized users/visitors from accessing CRUD functionalities** so that **that only authorized users can access, delete and change the data**

- USER STORY: Unauthorized Access *- Label: Must-Have*
  As an **site manager** I can **prevent any unauthorized users/visitors from accessing CRUD functionalities** so that **that only authorized users can access, delete and    change the data**

- USER STORY: View Comments *- Label: Should-Have*

  As a **site viewer/user** I can **open a recipe* so that **I can read any comments**

- USER STORY: Manage a Recipe *- Label: Must-Have* 

  As an **user** I can **create, update and modify a recipe** so that **share recipes that I like**. 

- USER STORY: Site Navigation *- Label: Must-Have*

  As a **site viewer/user** I can **easily navigate the site** so that **I can find what I need**

- USER STORY: Responsive Design *- Label: Must-Have*

  As an **site viewer/user** I can **view the site from multiple screen sizes and different devices** so that **I can access the recipe book the device I have available**

**NOT IMPLEMENTED USER STORIES**

All together 5 user stories weren't implemented, you may see them on the project board of this repository.

- USER STORY: My Profile *- Label: Could-Have* 

  As an user I can view my user information so that have get more personalized experience from the application

- USER STORY: Featured Recipe *- Label: Could-Have*
  
  As an user/visitor I can see a featured recipe on top of the page so that I get suggestions I might not search myself

- USER STORY: Sort Recipes *- Label: Could-Have*

  As an site viewer/user I can sort recipes so that most relevant recipe is shown

- USER STORY: Search Recipe *- Label: Could-Have*

  As an site viewer/user I can type a search that retrieves any recipes with a match so that quickly find what I need

- USER STORY: Filter Recipes *- Label: Could-Have*

  As an site viewer/user I can filter the recipes so that I narrow down the recipes viewed

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

![Edit and Delete dopdown](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/recipe-details-2.png)

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

. 

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

### USER STORY: Like a recipe
As an **user** I can **like or unlike a recipe** so that **I can promote recipes I like**

### Acceptance Criteria:
- **Acceptance Criteria 1:** User should be able to like and unlike a recipe by clicking the heart icon. 
- **Acceptance Criteria 2:** User should be able to click the icon on the page with recipe cards and on the recipe page. 
- **Acceptance Criteria 3:** The like icon should change from outline to filled icon and the number of likes should go up.


### Tasks

- [x] Add like feature on the class based view that adds or removes user like. 
- [x] Route the view. 
- [x] Add the feature to the html.

### USER STORY: Social Media Link
As an **user/site viewer** I can **access site creators social media profiles** so that **I can find out more about the site creator or contact**

### Acceptance Criteria:
- **Acceptance Criteria 1:** Social media link to the application authors Github and Linkedin should be present on the header or on the footer. 
- **Acceptance Criteria 2:** Links should open another tab.
- **Acceptance Criteria 3:** Links should lead to the correct address

### Tasks
- [x] Create link on the header or on the footer to the authors profiles.
- [x] Add FontAwesome logos to the link.
- [x] Add descriptive text to inform users of the link use. 


### USER STORY: User Login Features
As an **site user** I can **create and account, login and logout from an account** so that ** I can create recipes, comment and like**

### Acceptance Criteria:
- **Acceptance Criteria 1:** A user should be able to signup and create an account. 
- **Acceptance Criteria 2:** The user should be able to login in if they already have an account.
- **Acceptance Criteria 3:** The user should be able to logout from their account.

### Tasks
- [x] Download Allauth to manage registration.
- [x] Route the Allauth urls.
- [x] Download Allauth templates.
- [x] Extend and modify respective Allauth template for your use.
- [x] Add more details for user to add on the user instance upon signup.


### USER STORY: View Selection of Recipe
As an **site viewer/user** I can **view a selection of recipes** so that **I can select the one I want to view**

### Acceptance Criteria:
- **Acceptance Criteria 1:** Recipes should be listed on the home page.
- **Acceptance Criteria 2:** Each recipe should display the name of the image/placeholder image, recipe, date posted, description, Region and likes.
- **Acceptance Criteria 3:** Multiple recipes should fit on the front page and after maximum is reached pagination should be added.
- **Acceptance Criteria 4:** the whole recipe card should act as a link to the recipe view.

### Tasks

- [x] Create example instances.
- [x] Add cards on index template.
- [x] Add image, name, region, likes, description and date on the card.
- [x] Add pagination.
- [x] Test pagination.


### USER STORY: Comment
As a **user** I can **leave comments on a post** so that **I connect and discuss of the recipes with my fellow users**

### Acceptance Criteria:
- **Acceptance Criteria 1:** User can view comments.
- **Acceptance Criteria 2:** User can add comments to a recipe.
- **Acceptance Criteria 3:** Users name, date of comment and text are visible.
- **Acceptance Criteria 4:** The most recent comment will show on the top.

### Tasks

- [x] Create comment class.
- [x] Create view for commenting.
- [x] Route the view to the recipe post template.
- [x] On template create add comment form.
- [x] Add posted comments to the templates.
- [x] Order the comments starting with most recent.
- [x] Add  a number of comments on top of the all comments that updates when comment is added.


As an **site manager** I can **prevent any unauthorized users/visitors from accessing CRUD functionalities** so that **that only authorized users can access, delete and change the data**


### USER STORY: Unauthorized Access
As an **site manager** I can **prevent any unauthorized users/visitors from accessing CRUD functionalities** so that **that only authorized users can access, delete and change the data**

### Acceptance Criteria:
- **Acceptance Criteria 1:** Visitor can't access features through url if not authorized.
- **Acceptance Criteria 2:** Users not authoring recipes can't delete or edit them.

### Tasks

- [x] Block edit recipe from unauthorized access.
- [x] Block delete recipe from unauthorized access.
- [x] Block share recipe from unauthorized access. 

### USER STORY: View Comments
As a **site viewer/user** I can **open a recipe* so that **I can read any comments**

### Acceptance Criteria:
- **Acceptance Criteria 1:** Any visitor or logged in user can view comments.
- **Acceptance Criteria 2:** Comments appear on same page as the recipe.
- **Acceptance Criteria 2:** Comments should also detail the name and date.

### Tasks

- [x] Add comments on the same template as the recipe itself.
- [x] Organize comments so the most recent one is always on the top.
- [x] Name and date of the comment should be visible. 

### USER STORY: Manage a Recipe
As an **user** I can **create, update and modify a recipe** so that **share recipes that I like**.

### Acceptance Criteria:
- **Acceptance Criteria 1:** A 'post a recipe' link should exist on  the home page.
- **Acceptance Criteria 2:** The 'post a recipe' link should be descriptive, visible and easy to find.
- **Acceptance Criteria 3:** The link should open only for the users who are logged on.
- **Acceptance Criteria 4:** The link should lead to the post a recipe page with a post a recipe form
- **Acceptance Criteria 5:** When submitting the recipe a success or check the form error message should pop up.
- **Acceptance Criteria 6:** Once submitted the recipe should be added to home page and user should be redirected back to the homepage.  

### Tasks
- [x] Create a recipe class.
- [x] Add a link to the create recipe template from base template.
- [x] Create create recipe template with a form.
- [x] Add a view class for creating a recipe and route it. 
- [x] Add a link to the edit recipe template from the view recipe template.
- [x] Add a view class for editing a recipe and route it. 
- [x] Added recipe appear on the front page. 

USER STORY: Site Navigation
As a **site viewer/user** I can **easily navigate the site** so that **I can find what I need**

### Acceptance Criteria:
- **Acceptance Criteria 1:** Header has a navigation menu that is available on each page. 
- **Acceptance Criteria 2:** Recipes work as links to the recipe details. 
- **Acceptance Criteria 3:** CRUD functionalities have clear buttons everywhere. 

### Tasks
- [x] Add navigation  menu to the base.html
- [x] Add link to the Create functionality.
- [x] Add link to the Update functionality.
- [x] Add link to the Delete functionality.
- [x] Recipes displayed on the frontage lead to the actual recipes.

### USER STORY: Responsive Design

As an **site viewer/user** I can **view the site from multiple screen sizes and different devices** so that **I can access the recipe book the device I have available**

### Acceptance Criteria
- **Acceptance Criteria 1:** Content should be accessible on a desktop displays from 1280×720 through 1920×1080.
- **Acceptance Criteria 2:** Content should be accessible on mobile displays from 360×640 through 414×896.
- **Acceptance Criteria 3:** Content should be accessible on tablet displays from 601×962 through 1280×800.

### USER STORY: Admin Recipe Management
As an admin I can manage recipes so that I can ensure the quality of the posted material

### Tasks
- [x] Use a stack icon for collapsible navigation menu for mobile and tablet version.
- [x] Use Bootstrap columns to organize content.

As an **admin** I can **manage recipes** so that **I can ensure the quality of the posted material**

### Acceptance Criteria:
- **Acceptance Criteria 1:** Admin has a site where they can see posted recipes.
- **Acceptance Criteria 2:** Admin should be able to carry out all the CRUD activities on the recipe objects.
- **Acceptance Criteria 3:** Admin site should be accessible only to Admin.
- **Acceptance Criteria 4:** Admin should be able to filter and sort the recipes viewed. - *Wasn't impemented*

### Tasks

- [x] Create admin account.
- [x] Create site for admin to interact with.
- [ ] Add a filters. - *Wasn't impemented*
- [ ] Add a sorting method - *Wasn't impemented*

## Bugs
No bugs were found from the final product.

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





