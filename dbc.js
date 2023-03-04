var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "data"
  });
function query(sql, callback){
    
      con.query(sql, function (err, result) {
        if (err) throw err;
        callback(result, con)
      });
      
}
function end(){
    con.end((err) => {
        if (err) throw err;
    });

}

module.exports.con = con;
module.exports.query = query;
module.exports.end = end;


