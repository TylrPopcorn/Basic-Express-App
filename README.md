### ``Basic-Express-App``

``A simple application expressing how to use basic Express.js``

This is a streamlined, beginner-friendly example of using Express.js for building basic web applications. The app demonstrates essential Express.js functionalities, including handling various HTTP methods and endpoints, and integrates the middleware 'morgan' to log request details and simplify route verification.

**Endpoints:**

| #  | Method | Endpoint           | Description                                                                 |
|----|--------|---------------------|-----------------------------------------------------------------------------|
| 1  | GET    | `/`                | Redirects users to the root endpoint.                                       |
| 2  | GET    | `/error`           | Returns a sample error message.                                             |
| 3  | GET    | `/secret`          | Reveals a developer-only secret message.                                    |
| 4  | GET    | `/cats`            | Provides a response from the `/cats` endpoint.                              |
| 5  | GET    | `/search`          | Displays search results based on query parameters.                          |
| 6  | GET    | `/r/:subreddit`    | Shows data for the specified subreddit.                                     |
| 7  | POST   | `/cats`            | Allows POST requests to the `/cats` endpoint.                               |

This repository is a great resource for understanding how to set up and structure routes in Express, and how to use middleware for enhanced functionality.

![image](https://github.com/user-attachments/assets/a61802b4-0e4c-4806-b310-136be8dc7992)

-----
## Project Setup
- [ ] Run `npm install` to install your dependencies.
- [ ] Run `nodemon index.js` to start the application.
<br>

