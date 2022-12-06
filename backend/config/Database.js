import { Sequelize } from "sequelize";

const db = new Sequelize("crud-image", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
