<h2>MERN-stack(back-end)<h2>
<h3>Back-End development with NodeJS, ExpressJS and MongoDB</h3>


**Deploy by clicking the button above**
[<img src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix-button.svg" width="163px" />](https://glitch.com/edit/#!/import/github/lionelroy/Node-ExpressJS-MongoDB-tut)


<h4>Chapters:</h4>
<ul>
  <li>3(NPM)</li>
  <li>4(Event Emitters)</li>
  <li>5(Node Web Server)</li>
  <li>6(ExpressJS)</li>
  <li>7(Middleware)</li>
  <li>8(Routers)</li>
  <li>9(MVC REST API)</li>
  <li>10(Authentication)</li>
  <li>11(JWT Auth)</li>
  <li>12(User Roles/Authorization)</li>
  <li>13(Intro to MongoDB and Mongoose)</li>
  <li>14(Mongoose Data Models)</li>
  <li>15(Async CRUD Operations)</li>
</ul>


Steps:
1. Create index.js with console.log('testing');
2. npm i nodemon -g(global)
3. nodemon 
4. npm init 
5. npm i date-fns
6. npm install
7. npm i nodemon -D(dev)
8. npm run dev to start nodemon in terminal.
9. npm i uuid
10. Change index.js for server.js and create the remaining folders and files
11. npm i express
12. npm i cors
13. Install Thunder client extension if you want to test API routes
14. npm i bcrypt(Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function)
15. npm i dotenv jsonwebtoken cookie-parser
16. In your node console run--->    require('crypto').randomBytes(64).toString('hex')...This will give us a random crypto bytes string we can use for our access token secret in our .env ...Run the same command a second time to get a random crypto bytes string for your refresh token secret.
17. npm i mongoose



JWT - JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.

Access token = short time(10-15minutes), refresh token = long time(can last several days).

HAZARDS of JWT:
XSS: Cross-site scripting
CSRF: CS request forgery

Access Tokens are only to be stored in memory...
DO NOT STORE IN LOCAL STORAGE OR COOKIE!!

REFRESH TOKEN: sent as http only cookie, must have expiry.

ACCESS TOKEN: Issued at auth...Client uses for API access until expires...Verified with middleware...New token issued at refresh request.

REFRESH TOKEN: Issues at aut... client uses to request new access T. ...Verified with endpoint and database... Must be allowed to expire or logout.



MVC - (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display. This "separation of concerns" provides for a better division of labor and improved maintenance.




- Delete the server.js file and uncomment the oldServer.js file to strictly use the node.js web server without ExpressJS.


<!-- Examples: -->
<!-- 
// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
  console.log('attempted to load hello.html');
  next()
}, (req, res) => {
  res.send('Hello world!');
})

// Chaining route handlers(similar to middleware)
const one = (req, res, next) => {
  console.log('one');
  next();
}

const two = (req, res, next) => {
  console.log('two');
  next();
  }

const three = (req, res) => {
  console.log('three');
  res.send('Finished');
}

app.get('/chain(.html)?', [one, two, three]); -->