'use strict'

/*
|--------------------------------------------------------------------------
| ProfessorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Professor = use('App/models/Professor')

class ProfessorSeeder {
  async run () {
    await Professor.createMany([
      {nome:'Orion Teles', 
      cpf:'553.507.745-23', 
      matricula:'4329856', 
      salario:'12.000', 
      email:'orionteles@gmail.com', 
      telefone:'61985630987'},

      {nome:'Carlos Bon', 
      cpf:'453.567.765-34', 
      matricula:'2131234', 
      salario:'25.000', 
      email:'carlosbon@gmail.com', 
      telefone:'61992308432'},

      {nome:'José Reginaldo', 
      cpf:'324.432.453-32', 
      matricula:'1235347', 
      salario:'20.000', 
      email:'josereginaldo@gmail.com', 
      telefone:'61956908645'},

      {nome:'Roger', 
      cpf:'645.685.345-89', 
      matricula:'3244489', 
      salario:'20.000', 
      email:'roger@gmail.com', 
      telefone:'61989745323'},

      {nome:'Falcomer', 
      cpf:'456.756.234-78', 
      matricula:'2348979', 
      salario:'20.000', 
      email:'falcomerart@gmail.com', 
      telefone:'61932479083'}
    ])
  }
}

module.exports = ProfessorSeeder
