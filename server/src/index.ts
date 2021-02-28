import * as express from 'express';

const server = express();
const port = 8081;
const mysql = require('mysql')
const bodyParser = require('body-parser')

server.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hipages',
  database: 'hipages'
})

server.get('/', (req, res) =>{
  res.send('Welcome to lead management REST API')
});

server.get('/getInvitedUsers', (req, res) => {
  const query = 'Select * from jobs where status="new"';
  connection.query(query, (err, rows) => {
    if (err) throw err;
    
    res.json(rows);
  })
})

server.get('/getAcceptedUsers', (req, res) => {
  const query = 'Select * from jobs where status="accepted"';
  connection.query(query, (err, rows) => {
    if (err) throw err;

    res.json(rows);
  })
})

server.post('/updateUser', (req, res) => {
  console.log('input action, id :', req.body.action, ',', req.body.id)
  const action = req.body.action;
  const id = req.body.id;

  let updateResp = {
    success: false,
    message: 'Update failed'
  }

  const query = 'Update jobs set status=? where id = ?';
  if(action == 'accepted' || action =='declined') {
    connection.query(query, [action, id], (err, result) => {
      if (err) throw err;
  
      if(result.affectedRows > 0){
        updateResp.success = true;
        updateResp.message = 'Update successful';
      }
      res.json(updateResp);
    })
  } else {
    res.json(updateResp);
  }
})
  
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});