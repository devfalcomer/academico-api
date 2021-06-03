'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.get('/', () => {
//  return { greeting: 'Hello world in JSON' }
//})
/*
Route.get('/cursos', 'CursoController.index')
Route.get('/disciplinas', 'DisciplinaController.index')
Route.get('/professors', 'ProfessorController.index')
Route.get('/salas', 'SalaController.index')
Route.get('/semestres', 'SemestreController.index')
Route.get('/turmas', 'TurmaController.index')
Route.get('/turmasAlunos', 'TurmaAlunoController.index')
*/

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(() => {
  Route.resource('/Alunos', 'AlunoController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Curso']
    ]))
  Route.resource('/cursos', 'CursoController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Aluno']
    ]))
  Route.resource('/disciplinas', 'DisciplinaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Disciplina']
    ]))
  Route.resource('/professors', 'ProfessorController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Professor']
    ]))
  Route.resource('/salas', 'SalaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Sala']
    ]))
  Route.resource('/semestres', 'SemestreController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Semestre']
    ]))
  Route.resource('/turmas', 'TurmaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Turma']
    ]))
  Route.resource('/turmasAlunos', 'TurmasAlunoController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'TurmasAluno']
    ]))
}).middleware('auth')

