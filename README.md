# Blog Website & Content Management System
This project consists of a blogging website where users can view blog posts from verified authors. There is also a Content Management System where authors can create new posts, edit old posts, or delete their posts. 

![Home page preview, consisting of 2 blog posts.](https://github.com/Jpreet927/Blog-API/blob/main/client/src/assets/BlogAPI.png)

### Client
The web client was built with React.js and styled using Styled Components. The frontend targets public REST API endpoints from the server to display posts from the MongoDB database. Anyone that visits this frontend is able to view it's content. Users can click on blog post widgets on the home page to navigate to a dedicated blog post page that contains all it's content. Users can also visit an Author's page to see posts created by that specific Author.

### Content Management Service
The CMS was also built with React.js and Styled Components. Only Authors and Admins are able to access this frontend, as it's gaurded by a login page. Authors are greeted with a dashboard containing posts they have created, and given the option to view, edit, or delete that post. Authors are only given access to their posts, whereas Admins can view all posts created on this platform, and perform the same CRUD operations. This frontend targets protected REST API routes using a JSON Web Token generated during login.

### Server
This is the application's REST API service, built with Expres.js and Node.js. This REST API uses JSON Web Tokens and PassportJS to secure certain routes dedicated to admins and authors. The various endpoints retrieve data from or manipulate data in a MongoDB database using Mongoose (object data modelling library for MongoDB).

![Blog Post page preview, containing a banner image and blog content](https://github.com/Jpreet927/Blog-API/blob/main/client/src/assets/BlogAPI-2.png)

### Technologies Used
- React.js
- Express.js
- Node.js
- MongoDB
- TypeScript
- Styled Components
- JSON Web Tokens
- PassportJS
