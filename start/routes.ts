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

Route.get('/', async ({auth, view }:HttpContextContract) => {
  await auth.use('web').check()
  if(auth.use('web').isLoggedIn){
    // view.redirect().toRoute('dashboard');
  }
  var configs = {
    title : 'Login - Gerenciamento de Contas MercadoLivre',
    titulo_logo: 'JML'
  }
  return view.render('login', configs)
});
Route.get('/login', async ({ auth, view }:HttpContextContract) => {
  await auth.use('web').check()
  if(auth.use('web').isLoggedIn){
    // view.redirect().toRoute('dashboard');
  }
  var configs = {
    title : 'Login - Gerenciamento de Contas MercadoLivre',
    titulo_logo: 'JML'
  }
  return view.render('login', configs)
});
Route.get('/register', async ({ view }) => {
  var configs = {
    title : 'Registrar-se - Gerenciamento de Contas MercadoLivre',
    titulo_logo: 'JML'
  }
  return view.render('register', configs)
});

Route.get('/forgot', async ({ view }) => {
  var configs = {
    title : 'Esqueci minha senha',
    titulo_logo: 'JML'
  }
  return view.render('forgot', configs)
});


Route.get('/dashboard', async ({ auth,  view, request }) => {
  await auth.use('web').authenticate()
  
  var configs = {
    title : 'Dashboard - Gerenciamento de Contas',
    titulo_logo: 'JML',
    route: request?.ctx.route?.pattern
  }
  return view.render('dashboard', configs)
});

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
}).prefix('/logged')
Route.post('/register', 'UsersController.store');
Route.post('/login', 'UsersController.login');
Route.get('*', async ({view}) => {
  return view.render('404');
});