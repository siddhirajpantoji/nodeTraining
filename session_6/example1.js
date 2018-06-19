// Postgres  with Client Connection 
/*$ PGUSER=postgres \
  PGHOST=localhost \
  PGPASSWORD= \
  PGDATABASE=NodeSessionDB \
  PGPORT=5432 \*/
const {Client} = require ("pg");
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'NodeSessionDB',
  password: 'root',
  port: 5432,
});

//console.log(process.env);
client.connect((err => {
  if(err){
    console.log("ERROR IN CONNECTION");
  } else {
    console.log("Connection Successfully Done!!");
  }
}));

var employee = {
  fname : 'shariq',
  lname : 'Qadri',
  desig : 'BA',
  salary : 1,
  dept : 'IT'
}

function insertEmployee(){
  client.query("insert into employee values ($1,$2, $3, $4, $5) returning *",[employee.fname, employee.lname, employee.desig, employee.salary, employee.dept], (err, data) => {
    if (err){
      console.log(err);
    } else {
      console.log(data);
    }
    client.end();
  })
};

insertEmployee();

// client.query("insert o",(err, data) => {
//   if (err){
//     console.log(err);
//   } else {
//     console.log(data.rows);
//   }
//   client.end();
// });


