'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TurmasSchema extends Schema {
  up () {
    this.create('turmas', (table) => {
      table.increments()
      table.string('codigo', 10)
      table.string('turno', 1)
      table.integer('professors_id').references('id').inTable('professors').unsigned().notNullable()
      table.integer('disciplinas_id').references('id').inTable('disciplinas').unsigned().notNullable()
      table.integer('salas_id').references('id').inTable('salas').unsigned().notNullable()
      table.integer('semestres_id').references('id').inTable('semestres').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('turmas')
  }
}

module.exports = TurmasSchema
