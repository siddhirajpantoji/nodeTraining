const QUERIES = {
    EMPLOYEE:{
        "CREATE":"CREATE TABLE IF NOT EXISTS STUDENT (emp_id serial , emp_name varchar(1000) , emp_age int )",
        "INSERT":"INSERT INTO STUDENT (emp_name,emp_age) values ($1,$2) RETURNING * "
    }
}
module.exports = QUERIES;