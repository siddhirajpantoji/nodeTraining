// PG 

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: (process.env.ENVIRONMENT !== 'dev')
}); 
module.exports= {
    query : (query, values, callback)=> {
        // For Queries that dont need to supply values to execute
        if( typeof(values) === 'function'){
            callback = values;
        }
      pool.connect().then(client=>{
        client.query(query,values, (errQuery, result )=>{
          client.release();
          if( errQuery){
              console.error('Error While executing query ', {query,values});
              return callback(errQuery);
          }
          else{
            callback(null,result);
          }
        });
      }).catch(err=>{
        console.error('Error while establishing pool ');
        return callback(err);
      });
   }
};