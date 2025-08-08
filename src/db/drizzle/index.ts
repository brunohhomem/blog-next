import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";
import Database from "better-sqlite3";
import { resolve } from "path";

const dbPath = resolve(process.cwd(), "db.sqlite3");
const sqliteDb = new Database(dbPath);

export const drizzleDb = drizzle(sqliteDb, {
  schema: {
    posts: postsTable,
  },
  logger: true,
});
