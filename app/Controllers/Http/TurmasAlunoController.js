'use strict'

const TurmasAluno = use('App/models/TurmasAluno')

class TurmasAlunoController {

    async index({ request }) {
        return TurmasAluno.query().fetch();
    }

    async store({ request }) {
        const campos = TurmasAluno.getCamposTurmasAluno()
        const turmasaluno = request.only(campos)

        return await TurmasAluno.create(turmasaluno)
    }

    async show({ params, request, response, view }) {
        return await TurmasAluno.findOrFail(params.id);
    }

    async update({ params, request, response }) {
        const turmaaluno = await TurmasAluno.findOrFail(params.id);

        const campos = TurmasAluno.getCamposTurmasAluno()
        const dados = request.only(campos)

        turmaaluno.merge(dados)
        await turmaaluno.save()

        return turmaaluno
    }

    async destroy({ params, request, response }) {
        const turmasalunos = await TurmasAluno.findOrFail(params.id);
        return await turmasalunos.delete();
    }
}

module.exports = TurmasAlunoController
