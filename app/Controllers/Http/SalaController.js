'use strict'

const Sala = use('App/models/Sala')

class SalaController {

    async index({ request }) {
        return Sala.query().fetch();
    }

    async store({ request }) {
        const campos = Sala.getCamposSala()
        const salas = request.only(campos)

        return await Sala.create(salas)
    }

    async show({ params, request, response, view }) {
        return await Sala.query()
            .with('turmas')
            .where('id', params.id)
            .first()
    }

    async update({ params, request, response }) {
        const sala = await Sala.findOrFail(params.id);

        const campos = Curso.getCamposSala()
        const dados = request.only(campos)

        sala.merge(dados)
        await sala.save()

        return sala
    }

    async destroy({ params, request, response }) {
        const sala = await Sala.findOrFail(params.id);
        return await sala.delete();
    }
}

module.exports = SalaController
