import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CommonsController {

   async dashboard({ctx:HttpContextContract, view, request}){
        
        var configs = {
          title : 'Dashboard - Gerenciamento de Contas',
          titulo_logo: 'JML',
          route: request?.ctx.route?.pattern
        }
        return view.render('dashboard', configs)
      }
    async login ({ctx:HttpContextContract , view }){
        var configs = {
          title : 'Login - Gerenciamento de Contas MercadoLivre',
          titulo_logo: 'JML'
        }
        return view.render('login', configs)
      }
    async register ({ctx:HttpContextContract, view }) {
        var configs = {
          title : 'Registrar-se - Gerenciamento de Contas MercadoLivre',
          titulo_logo: 'JML'
        }
        return view.render('register', configs)
      };
    async forgot ({ ctx:HttpContextContract, view }) {
      var configs = {
        title : 'Esqueci minha senha',
        titulo_logo: 'JML'
      }
      return view.render('forgot', configs)
    }
    async logout ({auth, ctx:HttpContextContract, response}){
        await auth.use('web').logout()
        response.redirect('/');
    }
}
