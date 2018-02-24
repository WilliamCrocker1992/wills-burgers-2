var mysql = require('mysql');
var connection = require('./connection.js');

//standard
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
//standard
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

var orm = {
        selectAll: function(tableName, cb) {
            var queryString = "select * from " + tableName + ";";

            	connection.query(q, function(err, result) {
                	if (err) throw err;
                	cb(result);
        		});
         },

         insertOne: function(tableName, cols, vals, cb){
         		var queryString = "insert into " + table;


    			queryString += " (";
    			queryString += cols.toString();
    			queryString += ") ";
    			queryString += "VALUES (";
    			queryString += printQuestionMarks(vals.length);
    			queryString += ") ";
    			console.log(queryString);
    			
    			connection.query(queryString, vals, function(err, result) {
      				if (err) {
        			throw err;
      				}
      			cb(result);
    			});
         }

         updateOne: function(table, objColVals, condition, cb) {
    		var queryString = "UPDATE " + table;
    
    			queryString += " SET ";
    			queryString += objToSql(objColVals);
    			queryString += " WHERE ";
    			queryString += condition;
    			console.log(queryString);
    
    				connection.query(queryString, function(err, result) {
      					if (err) {
        				throw err;
      					}
      cb(result);
    });
  },
}
module.exports = orm;
