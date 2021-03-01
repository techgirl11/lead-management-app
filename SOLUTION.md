Your Solution Documentation
===========================

Implementation of Frontend:

The frontend of the application resides in ui folder. The frontend has two tab components; The application fetches data from /getUsers Rest API created in the server directory of this project. The invited tab shows all the users with 'new' status and accepted tab shows all the users with accepted status. On click of accept / decline button, the /updateUser Rest API is called that updates the status of a user to accepted / declined.

The ui is built on react. The material-ui is used to create components like tabs, cards etc and material-ui icons for the various icons used in this project.
Axios module is to make get and post api requests.
Momentjs is used to format date in the project.

Implementation of Backend:

The backend of the application resides in server folder. The backend is implemented in Rest.
The /getUsers is GET api and accepts 'status' as parameter in the url and accordingly queries db to get users with either 'new' or 'accepted' status.
The /updateUser is POST api that accepts 'action' and 'id' in the body of the request and updates the status of that user to 'accepted' or 'declined'.

The server application port was chnaged to 8081 for local development purpose.

The backend is implemented in nodeJS with expressJS.
Mysql module is used to interact with the mysql db provided with the boilerplate code.
Body-parser module is used to read the request body of POST request. 