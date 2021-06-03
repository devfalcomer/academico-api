'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class TurmasAluno extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      turmas_id: 'required|max:1',
      alunos_id: 'required|max:1'
    }
  }
}

module.exports = TurmasAluno
