'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Curso = use('App/models/Curso')

class CursoSeeder {
  async run () {
    await Curso.createMany([
      {nome:'Análise e Desenvolvimento de Sistemas', duracao: 5},
      {nome:'Direito', duracao: 6},
      {nome:'Engenharia de Software', duracao: 10},
      {nome:'Jogos Digitais', duracao: 9},
      {nome:'Pedagogia', duracao: 7},
      {nome:'Psicologia', duracao: 8}
    ])
  }
}

module.exports = CursoSeeder
