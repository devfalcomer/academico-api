'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {
    static getCamposProfessor() {
        return [
            'nome',
            'cpf',
            'matricula',
            'salario',
            'email',
            'telefone']
    }

    turmas() {
        return this.hasMany('App/models/Turma')
    }

}

module.exports = Professor
