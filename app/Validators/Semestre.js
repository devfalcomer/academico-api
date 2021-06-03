'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Semestre extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:100|min:1',
      data_inicio: 'required|max10|min8',
      data_fim: 'required|max10|min8'
    }
  }
}

module.exports = Semestre
