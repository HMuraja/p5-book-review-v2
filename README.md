# Book Review Application
Your community for learning and sharing traditions of Italian cuisine

Don't Break the Spaghetti is a recipe book of traditional italian recipes. Users can register for the site in order to post a recipe, like or comment on other recipes. Site is for anyone interested of traditional Italian cuisine and acts as a community allowing users to interact one another.

[View the active site here](https://dbts-recipe-app-f9995cb6b9df.herokuapp.com/)
![Am I responsive view of the site](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/p4-am-i-responsive.png)

## Project Goal
### Problem Statement
Following problem statement was created for a imaginary user group:
I am **a user** trying to **find an application where I can share my interest for traditional italian cuisine** but **I can't find one** because **most recipe sites are blogs or not spesific enought** which makes me feel **like there isn't anyone else interested of this subject**

### Goals
- Goal for this project is to provide a solution for the stated problem statement.
- Build an online recipe book for traditional Italian Recipes.
- Allow users to post and share recipes.
- Any visitor should be able to view recipes.
- Registered users should be able to share recipes with photo and a description.
- Registered users should be able to like and comment on recipes.
- Application should be responsive on different screen sizes.
- Application should provide a simple intuitive interface that is easy to navigate.
- Sites layout and colorscheme is pleasing and keeps users coming back to it.

# User Experience UX
## Wireframes
A wireframe for the home page was made using powerpoint.

The design for the fron page needed to display multiple recipe cards, header with navigation menu on top, a footer with social media links and a button to share recipes(if logged in). This original wireframe incuded a search and filter tab above the recipes but it was not implemented. Each page of the site should have the same header and footer for each page. Mobile version design should have a dropdown icon for the navigation links.
![Wireframe for the fron page](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/p4-dbts-wireframe2.png)


The design for the recipe should have dedicated areas for the image, summary(green section), description, ingerdients and method. Comments should be stacked under the recipe. The layout in the final product variated slightly, where the description, ingredients and method ended up being under one another. The button for editing and deleting the recipe ended up being below all the recipe content with the date of creation.
![Wireframe for the recipe details](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/p4-dbts-wireframe1.png)

The page for creating and editing was designed very roughly, with the decision that the form should fill the whole page for simplicity.
![Wireframe for the form](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images//p4-dbts-wireframe5.png)

## Color Scheme

Colorscheme for the project ended up being white, red, green,yellow, light grey and charcoal grey. White was used as background with light grey used some areas to highlight sections. Text was either charcoal or white depending on the background. Red, green and yellow to hightlight important sections. Bright highlighting colors were picked for their apetizing color that matched well the food images shared on the site without overwhelming the site.
![Color Scheme for the Page](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/coolors-colors-scheme.png)

## Data Design
A design for data was drafted using [diagrams.net](https://app.diagrams.net/).

The data diagram had three models recipe user and comment. These three tables had foreign keys that connected the data accross the tables.
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
The home page or landing displays all the shared recipes as recipe cards. Page can diplay 6 recipes at a time and a "next-button" on the bottom can be used to move between the pages. Each recipe card displays an image of the recipe, or a placeholder image, recipe name, region and city and a summary of the recipe. In the upper corner of the image, the likes are displayed.

![Landing page](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/landing-page.png)

![Next button below recipe cards](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/footer-next-button.png)

## Header/Navigation Menu
The navigation menu and the title are placed on the header of the page and are the same for every page on the site. The navigation menu items are links to home, login and signup pages. The title "Don't Break The Spagetthi" is right below the navigation menu and also acts as a link to the home page.
 
![Navigation menu](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/navigation-menu.png)

On Medium sized screens and smaller the menu collapses into a dropdown menu.

![dropdown menu before](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/dropdown-menu-before.png)

![dropdown menu after](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/dropdown-menu-after.png)
 
## Recipe Page
On the home page, hovering mouse over the recipe card will cause a shadow behind the recipe card and change in the text color.

![image of selected recipe card and animation](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/hover-over-recipe-card.png)

Clicking anywhere on the image, takes the user to a page with the recipes details. This page can be divided into three sections on the top there is the image, name, author name, region and city of the recipe and the number of likes.

![recipe header](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/recipe-details.png)

Below the header you have the body of the recipe, ith most of the information. About section acts as a field for users explain more about the recipe. Ingredients and method are the sections where the more practical information is summarized. Inside the Ingredients there are also the servings and cooking time.

![Recipe body 2](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/recipe-details-2.png)

On the bottom of the body the date of creation is detailed and the ciomment section starts. If user isn't logged in they may only view the the recipe deails and any comments that other users have left.

![image of selected recipe card and animation](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/recipe-comments.png)

Any users logged in to the recipe page can view the recipe details and comments, but in addition there are edit and delete recipe and a 'leave acomment'-form at the bottom.

![Edit and Delete button and submit form](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/edit-delete-comment-my-recipe.png)

These buttons can be used to edit the recipe, but if you aren't logged in as the author, there will be an error message below this recipe stating that only the author of this recipe can edit or delete the recipe. If user attempts to edit the recipe as a non-author, user will redirected back to the recipe page.

![Edit and Delete error](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/disabled-editing-buttons.png)

## Comment

If the user wishes to leave a comment, they must login first and click on the recipe they want to view. On the bottom of the page there is a 'Leave comment'-form that the logged in user can fill. User has to add only the text they wish to post and press submit, if the submission is succesful the the recipe page will refresh and the comment will appear on the top of the comment section. 

Each comment will have the commentors username, time and date of tghe comment added automatically. After posting a comment, the user can't unfortunately delete or edit the comment any further, but they must contact the Admin in order to do this. 

![image of selected recipe card and animation](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/edit-delete-comment-my-recipe.png)

## Like

If the user wants to like a recipe they have to log in and navigate to the recipe they like. On the recipe they must click on the heart icon, in order to like it or unlike it. The page will refresh and the number of likes will be updated and the heart icon will change depending on if the user liked (solid colored heart icon) or unliked (outlined icon). 

![Like before](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/liek%20-before.png)

![Like after](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/like-after.png)

## Login

If the user has already signed up and are logged out from their account they can press *Login* button on the navigation menu and a login window will open up.

![Edit and Delete button and submit form](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/login.png)

User needs to enter username and their password and click submit. The login form will be validated and an error message will display if the login isn't succesful.

Once the form is succesfully submitted the user is logged in and they can view the green "Logged in as >username<" tag on the navigation menu. Also, the navigation menu won't have items *Sign Up* or *Login* instead there are *Logout* and *Create Recipe* instead. In addtion a yellow "Share Recipe"-button will display above the recipe cards.

![login succesful display](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/landing-page-after-login.png)

## Signup

If the user wan't to carry out any other functionalities on the site other than viewing data, they must create a account to do that. They can do it by clicking on the signup button on the navigation menu. This opens a signup form that the new user must fill.

![Like after](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/signup-page.png)

They must add username and a password and a password confirmation. Email can be added, but is not required for creating a user account. Once all information is added, user must only press submit.

If the form is not succesfully validated the form will display an error. The error message will instruct the user to update the fiedl with the error and then they can submit the form again.

If succseful a new user instance will be created and their information will be saved onto the database. The user will be redirected to the frontpage and the navigation menu will display on a green background "Logged in as >username<", also instead of have menu items *Sign Up* or *Login* they will have *Logout* and *Create Recipe* instead. In addtion a yellow "Share Recipe"-button will display above the recipe cards.

## Logout

When the user wishes to logout from their account they must click on the *Logout* button on the navigation menu. A new site will upload and display a confrimation message if the user wants to logout from the account.

![Logout confirmation](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/logout.png)

If the user confirms yes they will be logged out and if they state 'no' the user will be redirected back to the home page with a green green "Logged in as >username<" tag at the navigation menu and the *Share Recipe*-button. If the user logs out the view will miss the button to share recipes and navigation no longer states that the user is logged in. 

## Create Recipe

If user wants to create a recipe they must click on the yellow button above then recipe cards or the navigation link stating *Share Recipe*.

![image of selected recipe card and animation](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/new-recipe-placeholder.png)

Clicking the link or the button should open the page with the "Share Recipe"-form. All the required fields, name, region, preparation time, description, ingredients and method, are marked with a '*', other fields are optional. If the user won't select an image it will be replaced with a placeholder image.

![Share recipe form top](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/share-recipe-1.png)
![Share recipe form bottom](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/share-recipe-2.png) 

The region for the recipe can only be selected from the ones listed on the dropdown menu, also unknown and none are an option. It isn't possible to leave the field empty as it has been preselcted to be none.

![Share recipe form bottom](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/select-a-region.png) 

When the user submits the form, a validation will occur, if the required field have not been filled the form wont't be submitted and the first empty required field is highlighted. 

A succesful submission will bring up a modul informing user of the succesful submission and request them to choose if they wish to return to the recipe views or to share a new recipe. The new recipe will be added to the database and showed on the home page as the first recipe card.

![Share recipe form bottom](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/succesful-submission.png) 

## Edit Recipe

Only a logged in user and the author of the recipe can edit it. They have to click on the recipe they want to edit and then got to the bottom of the page where two buttons are displayed *Edit* and *Delete*. If the user is not the author they can still see the buttons but there will be red message above them stating "Only the author of this recipe can edit/delete the recipe". Clicking the buttons as non-author will lead only the recipe details page to be relaoded.

Once the author clicks on the edit recipe button a edit recipe form will pop up. This form is the same as the 'Create Recipe'-form, the only difference is that the image field has an option to 'clear' the image available.

![edit recipe form](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/edit-recipe-form.png)

This has the same required field and validation a the create recipe so if any of the required fields is unfilled or incorrectly filled the form won't submit and highlight the first issue on the form.

If the the edited form is succesfully submitted a message will pop-up stating that the recipe was succesfully edited. Then the user can choose to return to the recipe they just updated or they may return to the home page to view all recipes.

![edit recipe succesful](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/Screenshot%202023-06-28%20152650.png)

## Delete Recipe

Only a logged in user and the author of the recipe can edit it. They have to click on the recipe they want to edit and then got to the bottom of the page where two buttons are displayed *Edit* and *Delete*. If the user is not the author they can still see the buttons but there will be red message above them stating "Only the author of this recipe can edit/delete the recipe". Clicking the buttons as non-author will lead only the recipe details page to be relaoded.

Once the author clicks on delete recipe button, a modal pops up requesting author to confirm if they wish to delete the recipe or not. 

![Deletion Confrimation](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/confirm-deletion.png)

If they answer now thye will be redirected to the recipe page, but if they select yes, they will be lead to a page stating that the selected recipe was succesfully deleted and a button that they can press to return to home page.

![Deletion Succesful page](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/deletion-succesful.png)

## Admin Comment, User and Recipe

Anyone with admin right can login to the admin site by extending the url with "/admin". 

![Navigation to the admin panel](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/admin-url.png)

A login page will open. Admin must enter admin username and password succesfully to login.

![Admin Login](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/admin-login.png)

A admin panel site will open, with the overview. Here admin can create, update and delete (CRUD) User, Comment and Recipe data if needed. Admin Just needs to click on one the datagroup they want to manage in order to access the CRUD functionalities. 

![Admin Panel](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/features/admin-panel.png) 

## Features to be implemented in the future
All together 5 features weren't installed in the end. These are deatailed in the user stories section and acceptance crieteria and tasks can be seen on the project board of this repositiory.

# Technologies
## Languages
HTML5 - Used on templates to build the structure of the sites and render an iterface.
CSS3 - Used to add design to the html structure for more pleasing interface.
Python - Used as the backend language.

## Frameworks and Libraries
Versions for all the libraries can be seen in the requirements.txt.

- Django - Used as the fullstack framefork to build the website
- Bootstap- CSS library used to style the html together with custom css.
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
Site HTML was teststed using the [W3C HTML Markup Validation Service](https://validator.w3.org/). After the first run the validator showed warning about missing language attribute on the html tag. After language attribute was added, the site passed through the validator without any errors or warnings.

Initial validation result.![initial html validation test](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/html-validation.png)

Final validation result.![final html validation test](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/html-validation-final.png)

### CI Python Linter
All python files in the *recipeapp*-folder were validated via the[CI Python Linter](https://pep8ci.herokuapp.com/). All files passed the validation without errors.

Validation results from admin.py:![admin.py](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/ci-python-linter-admin-py.png)

Validation results from apps.py:![apps.py:](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/ci-python-linter-apps-py.png)

Validation results from forms.py:![forms.py:](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/ci-python-linter-forms-py.png)

Validation results from models.py:![models.py:](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/ci-python-linter-models-py.png)

Validation results from urls.py:![urls.py:](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/ci-python-linter-urls-py.png)

Validation results from views.py:![views.py:](https://github.com/HMuraja/p4-recipe-book/blob/main/readme/images/ci-python-linter-views-py.png)

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
The project was deployed in the beginning of the development. Following steps were taken with the first deployment:
- Django and supporting libraries were installed.
- File for the development environment, env.py, was created  and added to the .gitignore file. The env.py should include the following:
    - Add 'import os' on the top of the file.
    - os.environ["DATABASE_URL"] = "[your database URL goes here]"
    - os.environ["SECRET_KEY"] = "[the secret key from that Django generates on the setting.py should be added here and reference to to it added to sertting.py]"
    - os.environ["CLOUDINARY_URL"] = "[add cloudinary URL here ]"
- Cloudinary storage was set up for the templates, static files and media files.
- Procfile was created to declare gunicorn as the webserver.
- A Heroku app was created and location set to EU.
- In 'Settings' tab of the created apps dashboard Config Vars were added by clikcing 'Reveal Config Vars' and adding the following key-value pairs:
    - CLOUDINARY_URL:           [Your cloudinary URL goes here]
    - DATABASE_URL:             [Your Elephant SQL URL goes here]
    - DISABLE_COLLECTSTATIC:    1
    - PORT:                     8000
    - SECRET_KEY:               [secret key would go here]
- Within the 'Deploy'- tab 'Github' was selected  as the Deployemnt method and app was connected to the Github repository and Automatic deployes were enabled.

## Second Deployment
Seond Deployement was done in the end of the project, once all changes had been saved to GitHub.
- Start by setting 'DEBUG = False' on on setting.py of you project file.
- Then add 'X_FRAME_OPTIONS = 'SAMEORIGIN'' on the settings.py, summernote won't work without this setting in Heroku.
- Commit all changes now, this should be the final commit before deployment. 
- In Heroku go to your project and then to settings and click 'Reveal Config Vars', remove disable  
collect static environment variable.
- Go to Activity tab and see if the project has deployed succesfully if not, click th 'View Build Log" and see what is the problem. 
- After fixing the issue you can go to Deploy tab adnd Manually Deploye from barnch, if it fails a again see the build log and repeatthe process until project has deployed succesfully.
- Click on 'Open App' and admire your work.

# Credits
Following resources were used to help build this project:
- SVG icons were obtained from [Font Awesome](https://fontawesome.com/)
- Source for recipes can be found from [vagrantsofttheworl.com](https://vagrantsoftheworld.com/traditional-italian-recipes-by-region/) and [tasteatlas](https://www.tasteatlas.com/amatriciana/recipe)
- Images are from [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/), [vagrantsofttheworl.com](https://vagrantsoftheworld.com/traditional-italian-recipes-by-region/) and [tasteatlas](https://www.tasteatlas.com/amatriciana/recipe).
- Code Institutes walk through process "I Think Therefore I Blog" was used as an inspiration for this project.
- [Django Docs](https://docs.djangoproject.com/en/4.2/) were used through out the process to solve issues and used for guidance.
- [Bootsrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/) were used through out the process to solve issues and used for guidance.
- [Summernote Docs](https://summernote.org/deep-dive/) were used through out the process to solve issues and used for guidance.





