'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Sala extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:100|min:25',
      capacidade: 'integer|max:30|min:15',
      tipo: 'integer|max:1'
    }
  }
}

module.exports = Sala
