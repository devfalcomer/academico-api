'use strict'

const Semestre = use('App/models/Semestre')

class SemestreController {

    async index({ request }) {
        return Semestre.query().fetch();
    }

    async store({ request }) {
        const campos = Semestre.getCamposSemestre()
        const semestres = request.only(campos)

        return await Semestre.create(semestres)
    }

    async show({ params, request, response, view }) {
        return await Semestre.query()
            .with('turmas')
            .where('id', params.id)
            .first()
    }

    async update({ params, request, response }) {
        const semestre = await Semestre.findOrFail(params.id);

        const campos = Semestre.getCamposSala()
        const dados = request.only(campos)

        semestre.merge(dados)
        await semestre.save()

        return semestre
    }

    async destroy({ params, request, response }) {
        const semestre = await Semestre.findOrFail(params.id);
        return await semestre.delete();
    }
}

module.exports = SemestreController
