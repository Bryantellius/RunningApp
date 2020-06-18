import * as mysql from "mysql";
import config from "../config";
import * as Contacts from "./queries/contacts";

const Connection = mysql.createPool(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default { Contacts };
