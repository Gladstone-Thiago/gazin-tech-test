import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/:page/:limit', 'LevelsController.index')
  Route.put('/', 'LevelsController.update')
  Route.post('/', 'LevelsController.create')
  Route.delete('/', 'LevelsController.delete')
}).prefix('/api/v1/levels')
