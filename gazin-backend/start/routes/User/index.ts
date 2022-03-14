import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/session', 'UsersController.session')
}).prefix('/api/v1/users')
