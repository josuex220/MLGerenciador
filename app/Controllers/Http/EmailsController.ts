import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EmailsController {
    index({ctx:HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render("emails", configs);
    }
    criar({ctx:HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render("emails/criar", configs);
    }
}
