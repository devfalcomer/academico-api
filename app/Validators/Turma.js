'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Turma extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      codigo: 'required|max:10',
      turno: 'required|max:1',
      professors_id: 'required|max:1',
      disciplinas_id: 'required|max:1',
      salas_id: 'required|max:1',
      semestres_id: 'required|max:1'
    }
  }
}

module.exports = Turma
