import {
    pgTable,
    serial,
    varchar,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
export const carListTable = pgTable("carlist", {
    id: serial("id").primaryKey(),
    carname: varchar("carname", { length: 255 }).notNull(),
    company: varchar("company", { length: 255 }).notNull(),
    price: varchar("price", { length: 255 }).notNull(),
});

export type carlist = InferModel<typeof carListTable>;
export type Newcarlist = InferModel<typeof carListTable, "insert">; // insert type

export const db = drizzle(sql);
