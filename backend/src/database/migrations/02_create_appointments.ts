import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('appointments', table => {
        table.increments('id').primary();        
        table.dateTime("scheduling_at").notNullable();

        table.integer('patient_id')
        .notNullable()
        .references('id')
        .inTable('patients');

        table.integer('doctor_id')
        .notNullable()
        .references('id')
        .inTable('doctors');
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('appointments');
}