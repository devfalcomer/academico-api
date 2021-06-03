'use strict'

const Disciplina = use('App/models/Disciplina')

class DisciplinaController {

    async index({ request }) {
        return Disciplina.query().fetch();
    }

    async store({ request }) {
        const campos = Disciplina.getCamposDisciplina()
        const disciplinas = request.only(campos)

        return await Disciplina.create(disciplinas)
    }

    async show({ params, request, response, view }) {
        return await Disciplina.query()
            .with('curso')
            .with('turmas')
            .where('id', params.id)
            .first()
    }

    async update({ params, request, response }) {
        const disciplina = await Disciplina.findOrFail(params.id);

        const campos = Disciplina.getCamposDisciplina()
        const dados = request.only(campos)

        disciplina.merge(dados)
        await disciplina.save()

        return curso
    }

    async destroy({ params, request, response }) {
        const disciplina = await Disciplina.findOrFail(params.id);
        return await disciplina.delete();
    }

}

module.exports = DisciplinaController
