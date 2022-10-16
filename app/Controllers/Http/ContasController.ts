// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContasController {
    
    index({ctx:HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render('contas_ml', configs);
    }
    
    criar({ctx:HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render('contas_ml/criar', configs);
    }
}
