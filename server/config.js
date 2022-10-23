import dotenv from "dotenv";

dotenv.config();

const variable = process.env;

export const MONGODB_URI = variable.MONGODB_URI || "mongodb://localhost/testdb";
export const PORT = variable.PORT || 4000;
export const ERROR_GET_POSTS = variable.ERROR_GET_POSTS;
export const ERROR_CREATE_POST = variable.ERROR_CREATE_POST;
export const ERROR_UPDATE_POST = variable.ERROR_UPDATE_POST;
export const ERROR_DELETE_POST = variable.ERROR_DELETE_POST;
export const ERROR_GET_POST = variable.ERROR_GET_POST;
