'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {
    static getCamposCurso() {
        return ['nome', 'duracao']
    }

    disciplinas() {
        return this.hasMany('App/models/Disciplina')
    }

}

module.exports = Curso
