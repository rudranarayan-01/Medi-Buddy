import { pgTable, text, timestamp, uuid, integer,varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer(),
});

export const SessionChatTable = pgTable("session_chat", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  sessionId: uuid("session_id").defaultRandom().notNull(),
  createdBy: varchar("created_by", { length: 255 }).notNull(), // ideally, FK to users.email
  notes: varchar("notes", { length: 1000 }).notNull(),
  selectedDoctor: varchar("selected_doctor", { length: 255 }).notNull(),
  createdOn: timestamp("created_on", { withTimezone: true }).defaultNow().notNull(),
});