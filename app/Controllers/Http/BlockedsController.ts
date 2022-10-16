import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BlockedsController {
    index({ctx:HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render("blocked", configs);
    }
    inserir({ctx:HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render("blocked/inserir", configs);
    }
}
