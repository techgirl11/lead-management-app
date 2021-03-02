Your Solution Documentation
===========================

### Implementation of Frontend:

The frontend of the application resides in ui folder. The frontend has two tab components; The application fetches data from /getUsers Rest API created in the server directory of this project. The invited tab shows all the users with '**new**' status and accepted tab shows all the users with '**accepted**' status. On click of accept / decline button, the /updateUser Rest API is called that updates the status of a user to **accepted** / **declined**.

The ui is built on react. React The material-ui is used to create components like tabs, cards etc and material-ui icons for the various icons used in this project.
React lets us create simple as well as nested components. Material UI provides a rich set of components, it is a well maintained and robust library.
Axios module is used to make get and post api requests. 
Momentjs is used to format date in the project. This library makes working with dates and time very quick and easy. 


### Implementation of Backend:

The backend of the application resides in server folder. The backend is implemented in Rest.
The /getUsers is GET api and accepts '**status**' as parameter in the url and accordingly queries db to get users with either '**new**' or '**accepted**' status.
The /updateUser is POST api that accepts 'action' and 'id' in the body of the request and updates the status of that user to '**accepted**' or '**declined**'.

The server application port was chnaged to 8081 for local development purpose.

The backend is implemented in nodeJS with expressJS.
Mysql module is used to interact with the mysql db provided with the boilerplate code.
Body-parser module is used to read the request body of POST request. 

Using the boiler plate code was the fastest way to implement the solution so I preferred it. The aim was to build an end to end working solution. Given more time, I would like to improve the UI. The data displayed within card components can be made prettier and I would like to show user a message on the action performed and then refresh tabs.

### Running the application

* For running/testing the code on docker, the mysql hostname in server/index.ts has to be replaced with the current hostname in running docker container.
* The browser used for testing can use a plugin(e.g. Moesif Origin & CORS Changer) to allow to send cross-domain requests.
