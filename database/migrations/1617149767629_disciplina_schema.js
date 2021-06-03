'use strict'

const CursoSchema = require('./1617145030131_curso_schema')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DisciplinaSchema extends Schema {
  up () {
    this.create('disciplinas', (table) => {
      table.increments()
      table.string('nome', 25).notNullable()
      table.integer('horas')
      table.integer('curso_id').references('id').inTable('cursos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('disciplinas')
  }
}

module.exports = DisciplinaSchema
