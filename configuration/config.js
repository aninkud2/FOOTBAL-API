import sequelize from "sequelize"
const db= new sequelize("football","root","root",
{host:"localhost",
dialect:"mysql"});
 
export default db