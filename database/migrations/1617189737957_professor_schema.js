'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorSchema extends Schema {
  up () {
    this.create('professors', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.bigInteger('cpf').notNullable()
      table.string('matricula', 20).notNullable()
      table.decimal('salario')
      table.string('email', 100)
      table.string('telefone', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('professors')
  }
}

module.exports = ProfessorSchema
