import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Users extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public telephone: string
  
  @column()
  public endereco_billing: string
  
  @column()
  public state_billing: string
  
  @column()
  public zipcode_billing: string
  
  @column()
  public status: number
  
  @column()
  public plan: number
  
  @column()
  public date_end_plan: DateTime

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (User: Users) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
