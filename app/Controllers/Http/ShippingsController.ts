 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ShippingsController {
    async index({auth, view, request}:HttpContextContract){
        
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request?.ctx.route?.pattern
          }
        return view.render("shipping", configs);
    }
      
}
