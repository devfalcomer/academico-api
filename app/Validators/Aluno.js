'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Aluno extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:40|min:2',
      cpf: 'biginteger|max:14|min:2',
      data_nascimento: 'date|max:10|min:8',
      matricula: 'required|max:10|min',
      email: 'max:100|min:50|email',
      telefone: 'required|max:15|min:14',
      cep: 'max:8|min:8',
      logradouro: 'max:100',
      complemento: 'max:100',
      bairro: 'max:100',
      uf: 'max:2|min:2',
      municipio: 'integer|max:15'
    }
  }
}

module.exports = Aluno
