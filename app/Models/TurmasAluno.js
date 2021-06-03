'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TurmasAluno extends Model {
    static getCamposTurmasAluno() {
        return ['turmas_id', 'alunos_id']
    }
}

module.exports = TurmasAluno
