'use strict'

const Professor = use('App/models/Professor')

class ProfessorController {

    async index({ request }) {
        return Professor.query().fetch();
    }

    async store({ request }) {
        const campos = Professor.getCamposProfessor()
        const professores = request.only(campos)

        return await Professor.create(professores)
    }

    async show({ params, request, response, view }) {
        return await Professor.query()
            .with('turmas')
            .where('id', params.id)
            .first()
    }

    async update({ params, request, response }) {
        const professor = await Professor.findOrFail(params.id);

        const campos = Curso.getCamposProfessor()
        const dados = request.only(campos)

        professor.merge(dados)
        await professor.save()

        return professor
    }

    async destroy({ params, request, response }) {
        const professor = await Professor.findOrFail(params.id);
        return await professor.delete();
    }
}

module.exports = ProfessorController
