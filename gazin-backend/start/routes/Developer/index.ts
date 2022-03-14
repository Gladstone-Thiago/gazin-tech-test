import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/:page/:limit/:search', 'DevelopersController.index')
  Route.put('/', 'DevelopersController.update')
  Route.post('/', 'DevelopersController.create')
  Route.delete('/', 'DevelopersController.delete')
}).prefix('/api/v1/developers')
