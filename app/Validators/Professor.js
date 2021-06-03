'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Professor extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:100|min:25',
      cpf: 'required|bigInteger|max:14|min:11',
      matricula: 'required|max:20',
      salario: 'max:5|min:3',
      email: 'max:100|email',
      telefone: 'max:100|min:10'
    }
  }
}

module.exports = Professor
