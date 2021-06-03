'use strict'

const Turma = use('App/models/Turma')

class TurmaController {

    async index({ request }) {
        return Turma.query().fetch();
    }

    async store({ request }) {
        const campos = Turma.getCamposTurma()
        const turmas = request.only(campos)

        return await Turma.create(turmas)
    }

    async show({ params, request, response, view }) {
        return await Turma.query()
            .with('disciplina')
            .with('professor')
            .with('sala')
            .with('semestre')
            .with('alunos')
            .where('id', params.id)
            .first()
    }

    async update({ params, request, response }) {
        const turma = await Turma.findOrFail(params.id);

        const campos = Turma.getCamposAluno()
        const dados = request.only(campos)

        turma.merge(dados)
        await turma.save()

        return turma
    }

    async destroy({ params, request, response }) {
        const turma = await Turma.findOrFail(params.id);
        return await turma.delete();
    }
}

module.exports = TurmaController
