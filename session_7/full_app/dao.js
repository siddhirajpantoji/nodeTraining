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

var Common = function(err,data,callback){
    if(err){
        callback(err,null)
    }
    else{
        callback(null,data.rows)
    }
}

function getAllEmployees(data1, callback){
      pool.query("Select * from employee",(err,data)=>{
        Common(err,data,callback);
      })
  }

function deleyeEmployee(data1, callback){
    var firstName = data1.firstName;
    console
    pool.query("delete from employee where FIRST_NAME = $1 returning * ",[firstName] ,(err,data)=>{
      if(err){
        console.error(err.stack);
      }
        Common(err,data,callback);
    })
}

  module.exports = {
      getAllEmployees , deleyeEmployee
  }