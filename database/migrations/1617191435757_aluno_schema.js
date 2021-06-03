'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.string('matricula', 10).notNullable()
      table.string('telefone', 15).notNullable()
      table.bigInteger('cpf')
      table.date('data_nascimento')
      table.string('email', 100)
      table.string('cep', 8)
      table.string('logradouro', 100)
      table.string('complemento', 100)
      table.string('bairro', 100)
      table.string('uf', 2)
      table.integer('municipio')
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
