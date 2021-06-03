'use strict'

/*
|--------------------------------------------------------------------------
| SemestreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const now = new Date
const Semestre = use('App/models/Semestre')

class SemestreSeeder {
  async run () {
    await Semestre.createMany([
      {nome:'1º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  },

      {nome:'2º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  },

      {nome:'3º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  },

      {nome:'4º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  },

      {nome:'5º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  },

      {nome:'6º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  },

      {nome:'7º Semestre', data_inicio: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear() , 
      data_fim: now.getDate() + " do " + now.getMonth() + " de " + now.getFullYear()  }
    ])
  }
}

module.exports = SemestreSeeder
