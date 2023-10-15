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
    table.integer("streak").notNullable().defaultTo(0);
    table.string("avatar").notNullable();
    table.date("last_login");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
