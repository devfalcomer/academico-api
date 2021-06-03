'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Semestre extends Model {
    static getCamposSemestre() {
        return ['nome', 'data_inicio', 'data_fim']
    }

    turmas() {
        return this.hasMany('App/models/Turma')
    }
}

module.exports = Semestre
