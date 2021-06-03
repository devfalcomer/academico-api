'use strict'

/*
|--------------------------------------------------------------------------
| TurmaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Turma = use('App/models/Turma')

class TurmaSeeder {
  async run () {
    await Turma.createMany([
      {codigo:'001', 
      turno:'Matutino', 
      professors_id: 1, 
      disciplinas_id: 2, 
      salas_id: 3, 
      semestres_id: 4},

      {codigo:'002', 
      turno:'Vespertino', 
      professors_id: 2, 
      disciplinas_id: 3, 
      salas_id: 1, 
      semestres_id: 5},

      {codigo:'003', 
      turno:'Matutino', 
      professors_id: 3, 
      disciplinas_id: 4, 
      salas_id: 2, 
      semestres_id: 2},

      {codigo:'004', 
      turno:'Noturno', 
      professors_id: 4, 
      disciplinas_id: 3, 
      salas_id: 1, 
      semestres_id: 6}
    ])
  }
}

module.exports = TurmaSeeder
