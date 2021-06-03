'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Turma extends Model {
    static getCamposTurma() {
        return [
            'codigo',
            'turno',
            'professors_id',
            'disciplinas_id',
            'salas_id',
            'semestres_id']
    }

    disciplina() {
        return this.belongsTo('App/models/Disciplina')
    }
    professor() {
        return this.belongsTo('App/models/Professor')
    }
    sala() {
        return this.belongsTo('App/models/Sala')
    }
    semestre() {
        return this.belongsTo('App/models/Semestre')
    }
    alunos() {
        return this.belongsToMany('App/models/Aluno').pivotTable('turmas_aluno')
    }
}

module.exports = Turma
