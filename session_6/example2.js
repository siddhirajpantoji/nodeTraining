// Postgres with pool connection 
// Postgres  with Client Connection 
/*$ PGUSER=postgres \
  PGHOST=localhost \
  PGPASSWORD= \
  PGDATABASE=NodeSessionDB \
  PGPORT=5432 \*/

  const {Pool} = require ("pg");
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NodeSessionDB',
    password: 'root',
    port: 5432,
    idleTimeoutMillis:3000
  });
  
  //console.log(process.env);
  pool.connect((err => {
    if(err){
      console.log("ERROR IN CONNECTION");
    } else {
      console.log("Connection Successfully Done!!");
    }
  }));
  
  var employee = {
    fname : 'ABC',
    lname : 'XYZ',
    desig : 'BA',
    salary : 1,
    dept : 'IT'
  }
  
  function insertEmployee(){
    pool.query("insert into employee values ($1,$2, $3, $4, $5) returning *",[employee.fname, employee.lname, employee.desig, employee.salary, employee.dept], (err, data) => {
      if (err){
        console.log(err);
      } else {
        console.log(data);
      }
      //pool.end();
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
  
  
  