'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Aluno extends Model {
    static getCamposAluno() {
        return [
            'nome',
            'matricula',
            'telefone',
            'cpf',
            'data_nascimento',
            'email',
            'cep',
            'logradouro',
            'complemento',
            'bairro',
            'uf',
            'municipio'
        ]
    }

    turmas() {
        return this.belongsToMany('App/models/Turma').pivotTable('turmas_aluno')
    }
}

module.exports = Aluno
