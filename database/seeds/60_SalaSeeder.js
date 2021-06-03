'use strict'

/*
|--------------------------------------------------------------------------
| SalaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Sala = use('App/models/Sala')

class SalaSeeder {
  async run () {
    await Sala.createMany([
      {nome:'9º A',
      capacidade:'20',
      tipo:'Matutino'
      },

      {nome:'9º B',
      capacidade:'15',
      tipo:'Vespertino'
      },

      {nome:'8º C',
      capacidade:'30',
      tipo:'Norturno'
      },

      {nome:'9º D',
      capacidade:'25',
      tipo:'Vespertino'
      }
    ])
  }
}

module.exports = SalaSeeder
