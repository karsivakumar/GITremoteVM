var mysql = require('mysql');

var myCredentials = {
    host:"localhost",
    port:"3306",
    user:"sivakumarkarthik",
    password:"",
    database:"quotesDB"
}

var con = mysql.createConnection ({
    host: myCredentials.host,
    user: myCredentials.user,
    password: myCredentials.password
});

con.connect(function (err)
{
    if (err) {
            console.log("MYSQL DB connection failed!");
            return;
    }
    else {
        console.log("MYSQL DB connection successful!");
    }


con.query(`CREATE DATABASE ${myCredentials.database}`, function(err, result) {
    if (err) {
        console.log("database creation failed!");
    }
    else {
        console.log("database creation successful!");
    }
});

con.changeUser({
    database:myCredentials.database
    }, function (err) {
        if (err) {
            console.log('Error in changing database', err);
            return;
        }
    }
    );

var createTableQuery = "CREATE TABLE IF NOT EXISTS Quotes (quote varchar(255), author varchar(255))";

con.query(createTableQuery, function(err, results) {
    if (err) {
            console.log("Create table failed!");
            return;
    }
    else {
        console.log("Create table successful!");
    }
}
);

var insertRecordQuery = "INSERT INTO Quotes (quote , author) Values ('If you do what youve always done, youll get what youve always got', 'Tony Robbins')"

con.query(insertRecordQuery, function(err, results) {
    if (err) {
            console.log("Insert Row failed!");
            return;
    }
    else {
        console.log("Insert Row successful!");
    }
}
);

var selectRecordsQuery = "SELECT * FROM Quotes;"

con.query(selectRecordsQuery, function(err, results, fields) {
    if (err) throw err;
    console.log(results);
}
);

});