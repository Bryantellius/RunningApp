import * as dotenv from "dotenv";

const foundEnv = dotenv.config();

if (!foundEnv) {
  throw new Error("Houston we have a PROBLEM ENV style!");
}

export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT, 10),
};
