'use strict'

const Aluno = use('App/models/Aluno')

class AlunoController {

    /**
     * @swagger
     * /alunos:
     *   get:
     *     tags:
     *       - Aluno
     *     summary: Listagem completa de Alunos
     *     responses:
     *       200:
     *         description: Lista paginada dos Alunos
     */
    async index({ request }) {
        return Aluno.query().fetch();
    }

    /**
     * @swagger
     * /cursos:
     *   post:
     *     tags:
     *       - Aluno
     *     summary: Adição de um novo Aluno
     *     responses:
     *       200:
     *         description: Adição de Aluno
     */

    async store({ request }) {
        const campos = Aluno.getCamposAluno()
        const alunos = request.only(campos)

        return await Aluno.create(alunos)
    }

    /**
     * @swagger
     * /cursos:
     *   get:
     *     tags:
     *       - Aluno
     *     summary: Mostra os alunos através de id
     *     responses:
     *       200:
     *         description: Alunos por id
     */

    async show({ params, request, response, view }) {
        return await Curso.query()
            .with('turmas')
            .where('id', params.id)
            .first()
    }

    /**
     * @swagger
     * /cursos:
     *   put:
     *     tags:
     *       - Aluno
     *     summary: Alterar dados de um aluno
     *     responses:
     *       200:
     *         description: Alterar Aluno
     */

    async update({ params, request, response }) {
        const alunos = await Aluno.findOrFail(params.id);

        const campos = Aluno.getCamposAluno()
        const dados = request.only(campos)

        alunos.merge(dados)
        await alunos.save()

        return alunos
    }

    /**
    * @swagger
    * /cursos:
    *   delete:
    *     tags:
    *       - Aluno
    *     summary: Remoção de um Aluno
    *     responses:
    *       200:
    *         description: Remover Aluno
    */

    async destroy({ params, request, response }) {
        const aluno = await Aluno.findOrFail(params.id);
        return await aluno.delete();
    }
}

module.exports = AlunoController
