'use strict'

/*
|--------------------------------------------------------------------------
| DisciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Disciplina = use('App/models/Disciplina')

class DisciplinaSeeder {
  async run () {
    await Disciplina.createMany([
      {nome:'Backend', horas: 20, curso_id: 2},
      {nome:'Frontend', horas: 90, curso_id: 2},
      {nome:'Mobile', horas: 80, curso_id: 2},
      {nome:'Direito Penal', horas: 60, curso_id: 2},
      {nome:'Direito Civil', horas: 55, curso_id: 2},
      {nome:'Direito Trabalhista', horas: 50, curso_id: 2},
      {nome:'TCPIP', horas: 40, curso_id: 2}
    ])
  }
}

module.exports = DisciplinaSeeder
