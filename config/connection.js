// Inside your burger directory, create a folder named config.
// Create a connection.js file inside config directory.



// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.



// Create an orm.js file inside config directory.



// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.



// selectAll() 

// insertOne() 

// updateOne() 


// Export the ORM object in module.exports.

var require = require("mysql");

var connection = mysql.createConnection({
	  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;
