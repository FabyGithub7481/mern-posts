import dotenv from "dotenv";

dotenv.config();

const variable = process.env;

export const MONGODB_URI = variable.MONGODB_URI || "mongodb://localhost/testdb";
export const PORT = variable.PORT || 4000;
