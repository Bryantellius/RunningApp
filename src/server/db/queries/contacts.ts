import { Query } from "../index";

export const getAll = async () => {
  return Query("SELECT * from contacts");
};

export const getOne = async (id: number) => {
  return Query("SELECT * from contacts WHERE id = ?", [id]);
};

export const create = async (body: any) => {
  return Query("INSERT INTO contacts SET ?", [body]);
};

export const update = async (body: any, id: number) => {
  return Query("UPDATE contacts SET ? WHERE id = ?", [body, id]);
};

export const remove = async (id: number) => {
  return Query("DELETE FROM contacts WHERE id = ?", [id]);
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
