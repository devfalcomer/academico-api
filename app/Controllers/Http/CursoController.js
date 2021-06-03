'use strict'

const { first } = require("../../Models/Curso");

const Curso = use('App/models/Curso')

class CursoController {

    /**
     * @swagger
     * /cursos:
     *   get:
     *     tags:
     *       - Curso
     *     summary: Listagem completa de Curso
     *     responses:
     *       200:
     *         description: Lista paginada dos Cursos
     */
    async index({ request }) {
        return Curso.query().with('disciplinas').paginate();
    }

    async store({ request }) {
        const campos = Curso.getCamposCurso()
        const cursos = request.only(campos)

        return await Curso.create(cursos)
    }

    async show({ params, request, response, view }) {
        return await Curso.query().with('disciplinas').where('id', params.id).first()
    }

    async update({ params, request, response }) {
        const curso = await Curso.findOrFail(params.id);

        const campos = Curso.getCamposCurso()
        const dados = request.only(campos)

        curso.merge(dados)
        await curso.save()

        return curso
    }

    async destroy({ params, request, response }) {
        const curso = await Curso.findOrFail(params.id);
        return await curso.delete();
    }

}

module.exports = CursoController
