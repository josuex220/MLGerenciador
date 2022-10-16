import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Users from 'App/Models/Users';

export default class UsersController {
    userSettings({ctx: HttpContextContract, view, request}){
        var configs = {
            title : 'Dashboard - Gerenciamento de Contas',
            titulo_logo: 'JML',
            route: request.ctx.route?.pattern
          }
        return view.render('user_settings', configs);
    }

    async store({response, request}:HttpContextContract){
        /**
        * Schema definition
        */

        const newPostSchema = schema.create({
            username: schema.string(),
            email: schema.string({}, [rules.email()]),
            password: schema.string([
                rules.minLength(4)
              ]),
            terms: schema.string()
        })

        const form = await request.validate({ schema: newPostSchema })
        // console.log(payload);
        let UserExist = await Users.findBy('email', form.email);
        if(!UserExist){
            Users.create({
                    first_name : form.username,
                    email :form.email,
                    password:form.password
                });
                response.redirect().toRoute('/');

        }
    }

    async login({auth, response, request}:HttpContextContract){
         const newPostSchema = schema.create({
            email: schema.string({}, [rules.email()]),
            password: schema.string([
                rules.minLength(4)
              ])
        })

        const form = await request.validate({ schema: newPostSchema })
        try {
            let remember_me = false;
            if(request.input('remember_me')){
                remember_me = true;
            }
            await auth.use('web').attempt(form.email, form.password, remember_me)
            response.redirect('/dashboard')
          } catch {
            response.redirect('/')
          }
        
    }
}
