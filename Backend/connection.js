import mysql, { createConnection } from "mysql";
 const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Khan@1144",
    database:"book_store"
 });
export default db;

