import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('specialties_doctors', table => {
        table.increments('id').primary();

        table.integer('specialty_id')
        .notNullable()
        .references('id')
        .inTable('specialties');

        table.integer('doctor_id')
        .notNullable()
        .references('id')
        .inTable('doctors');
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('specialties_doctors');
}