/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const { v4: uuidv4 } = require("uuid");
// Migration for User Accounts
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table
      .increments("id")
      .primary()
      .defaultTo(knex.raw("uuid_to_bin(?, 1)", [uuidv4()]));
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

// // Migration for Authentication Tokens
// exports.up = function (knex) {
//   return knex.schema.createTable("auth_tokens", function (table) {
//     table.increments("id").primary();
//     table.integer("user_id").unsigned().notNullable();
//     table.string("token").notNullable().unique();
//     table.timestamp("expires_at").notNullable();
//   });
// };
// exports.down = function (knex) {
//   return knex.schema.dropTable("auth_tokens");
// };
