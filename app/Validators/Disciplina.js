'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Disciplina extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:25|min:2',
      horas: 'integer|max:2',
      curso_id: 'interger|max:2'
    }
  }
}

module.exports = Disciplina
