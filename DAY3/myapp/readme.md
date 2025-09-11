Here’s a well-formatted README.md file based on the content you provided:

# Introduction to Express JS | Cheat Sheet

## Concepts in Focus
- HTTP Server  
- Server-side Web Frameworks  
- Express JS  
- Network Call using Express JS  
- Handling HTTP Request  
- Testing Network Calls  
- Network Call to get Today’s Date  
- Network Call to get HTML Content as an HTTP Response  
- Sending File as an HTTP Response  

---

## 1. HTTP Server
- Works with HTTP requests and responses  
- Handles different paths  
- Handles query parameters  
- Sends content as HTML, CSS, etc., in HTTP responses  
- Works with databases  

### 1.1 Server-side Web Frameworks
These frameworks handle the above requirements.

Examples of Web Frameworks:  
- Express (Node JS)  
- Django (Python)  
- Ruby on Rails (Ruby)  
- Spring Boot (Java)  

---

## 2. Express JS
Express is a free and open-source server-side web application framework for Node JS.  
It provides a robust set of features to build web and mobile applications quickly and easily.

### Installation
```bash
npm install express

3. Network Call Using Express JS
Creating Express Server Instance
const express = require('express');
const app = express();

Assigning a Port Number
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

3.1 Handling HTTP Request
Syntax
app.METHOD(PATH, HANDLER)


METHOD: HTTP method in lowercase (get, post, put, delete)

PATH: The route path

HANDLER: The function executed when the route matches the request

Example – GET Request
app.get('/', (req, res) => {
    res.send('Hello World');
});


⚠️ Note: Whenever code changes, restart the server to reflect updates.

4. Testing Network Calls

Two ways to test network calls:

Browser Network Tab

Using the app.http file in VS Code

5. Network Call to Get Today’s Date
app.get('/date', (req, res) => {
    const today = new Date();
    res.send(today.toString());
});

6. Network Call to Get HTML Content as HTTP Response
6.1 Sending File as HTTP Response
Syntax
res.sendFile(PATH, { root: __dirname });


PATH: Path to the file you want to send

__dirname: The directory of the current JavaScript file

Example
app.get('/home', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});


