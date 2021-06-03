'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {
    static getCamposDisciplina() {
        return ['nome', 'horas', 'curso_id']
    }

    curso() {
        return this.belongsTo('App/models/Curso').select(['id', 'nome', 'horas', 'curso_id'])
    }

    turmas() {
        return this.hasMany('App/models/Turma')
    }
}

module.exports = Disciplina
