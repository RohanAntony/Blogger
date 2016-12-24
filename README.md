#Blogger

> *This is an application that was initially developed as a part of the Microsoft Innovation Lab.*

##description
- Uses Semantic CSS library for UI and ExpressJS, NodeJS and MongoDB on server side.
- Simple blogging application that allows
  - Create new blog
  - View all blogs
  - Edit an old blog
  - Delete an old blog
  - Authentication
  - Comments

##setup
1. Install NodeJS and MongoDB on system
2. Also setup npm and bower package management
3. Download this repository
4. run `npm install` in application root folder
5. run `bower install` in public folder
6. run `npm start` in application root folder

##Design
- The application

##Server API endpoints
- `/new GET`
  - serves HTML page which allows one to create a blog.
- `/create POST`
  - adds a new blog to database with data including
  `{
    title:Title [set by user],
    content:Content [set by user],
    date:[Data of creation and cannot be set by user]
  }`
- `/all GET`
  - serves all the blogs created as a list object which can be rendered
- `/edit/:id GET`
  - here id is the mongodb generated id for each document
  - serves a HTML page with filled data allowing user to modify and update
- `/update POST`
  - updated content is sent
  `{
    title:Title [reset by user],
    content:Content [reset by user],
    date:[Data of creation and cannot be set by user]    
  }`
- `/delete/:id GET`
  - delete a blog post with given unique ID referencing the blog.
- `/getImage GET`
  - posts a file in the format of multipart to server
- `/uplaod POST`
  - gets the file and saves it
  - returns the URL of the file
  `{
    status:success,
    data:sampleFilename.extension
  }`
