'use strict'

/*
|--------------------------------------------------------------------------
| AlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Aluno = use('App/models/Aluno')

class AlunoSeeder {
  async run () {
    await Aluno.createMany([
      {nome:'Arthur Falcomer', 
      cpf:'234.485.324-98', 
      data_nascimento:'22/12/1999', 
      matricula:'324982374982', 
      email:'falcomerart@gmail.com', 
      telefone:'6187932433', 
      cep:'72235-612',
      logradouro:'Ceilândia',
      complemento:'Setor Psul',
      bairro:'Psul',
      uf:'DF',
      municipio:'DF'},

      {nome:'Marcos Antonio',
      cpf:'435.564.123-34', 
      data_nascimento:'12/01/1998', 
      matricula:'323478020912', 
      email:'marcosant@gmail.com', 
      telefone:'6132487900', 
      cep:'72235-612',
      logradouro:'Ceilândia',
      complemento:'Setor PNorte',
      bairro:'PNorte',
      uf:'DF',
      municipio:'DF'},

      {nome:'Gustavo Silva',
      cpf:'567.768.435-56', 
      data_nascimento:'01/04/1939', 
      matricula:'334578978402', 
      email:'gustsil@gmail.com', 
      telefone:'6134298322', 
      cep:'72235-612',
      logradouro:'Ceilândia',
      complemento:'Setor PNorte',
      bairro:'PNorte',
      uf:'DF',
      municipio:'DF'},

      {nome:'Natan Farias',
      cpf:'236.546.126-47', 
      data_nascimento:'04/08/1989', 
      matricula:'323489489002', 
      email:'natfarias@gmail.com', 
      telefone:'6154698300', 
      cep:'72235-612',
      logradouro:'Ceilândia',
      complemento:'Setor Psul',
      bairro:'Psul',
      uf:'DF',
      municipio:'DF'},

      {nome:'Victor Jóse',
      cpf:'453.434.234-68', 
      data_nascimento:'10/11/1990', 
      matricula:'324578965712', 
      email:'vitindoido@gmail.com', 
      telefone:'6134589000', 
      cep:'72235-612',
      logradouro:'Guariroba',
      complemento:'Setor PNorte',
      bairro:'Psul',
      uf:'DF',
      municipio:'DF'}
    ])
  }
}

module.exports = AlunoSeeder
