/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'CommonsController.login').middleware('noAuth');
Route.get('/login', 'CommonsController.login').middleware('noAuth');
Route.get('/register', 'CommonsController.register').middleware('noAuth');
Route.get('/forgot','CommonsController.forgot').middleware('noAuth');

Route.get('/dashboard', 'CommonsController.dashboard').middleware('auth');

Route.get('logout', 'CommonsController.logout').middleware('auth');
Route.group(() => {
  Route.get('/user', 'UsersController.userSettings')
  Route.group(() => {
    Route.get('/', 'ContasController.index');
    Route.get('/criar', 'ContasController.criar');
    Route.get('*', 'ContasController.index');
  }).prefix('/contas');

  Route.group(() =>{
    Route.get('/', 'EmailsController.index');
    Route.get('/criar', 'EmailsController.criar')
  }).prefix('/emails');

  Route.group(() =>{
    Route.get('/', 'BlockedsController.index');
    Route.get('/inserir', 'BlockedsController.inserir')
  }).prefix('/blocked');
  
  Route.get('/reviews', 'ReviewsController.index');
  Route.get('/frete', 'ShippingsController.index');
}).prefix('/logged').middleware('auth')

Route.post('/register', 'UsersController.store');
Route.post('/login', 'UsersController.login');
Route.get('*', async ({view}) => {
  return view.render('404');
});