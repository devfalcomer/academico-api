'use strict'

/*
|--------------------------------------------------------------------------
| TurmaAlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const TurmasAluno = use('App/models/TurmasAluno')

class TurmasAlunoSeeder {
  async run () {
    await TurmasAluno.createMany([
      {turmas_id: 1, alunos_id: 2},
      {turmas_id: 3, alunos_id:2},
      {turmas_id: 2, alunos_id: 3}
    ])
  }
}

module.exports = TurmasAlunoSeeder
