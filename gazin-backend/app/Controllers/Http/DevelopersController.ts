import Database from '@ioc:Adonis/Lucid/Database'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DeveloperCreateValidator from 'App/Validators/DeveloperCreateValidator'
import DeveloperDeleteValidator from 'App/Validators/DeveloperDeleteValidator'
import DeveloperUpdateValidator from 'App/Validators/DeveloperUpdateValidator'
import Developer from 'App/Models/Developer'

export default class DevelopersController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const search = request.input('search', '')
    console.log('page, search', page, search)

    const result = await Database.from('developers')
      .leftJoin('levels', 'levels.id', '=', 'developers.level_id')
      .select(
        'developers.id',
        'developers.name',
        'developers.sex',
        'developers.hobby',
        'developers.active',
        'developers.birth_date',
        'developers.created_at',
        'developers.updated_at',
        'levels.id as level_id',
        'levels.description as level_description'
      )
      .orWhere('developers.sex', 'ILIKE', `%${search}%`)
      .orWhere('developers.hobby', 'ILIKE', `%${search}%`)
      .orderBy('developers.name', 'asc')
      .paginate(page, limit)

    if (result) {
      return result
    } else {
      return response.badRequest()
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const data = <Developer>await request.validate(DeveloperUpdateValidator)

    const exist = await Developer.findBy('id', data.id)
    if (!exist) return response.badRequest('Developer not exist')

    exist.name = data.name
    exist.sex = data.sex
    exist.hobby = data.hobby
    exist.active = data.active
    exist.birth_date = data.birth_date
    exist.level_id = data.level_id

    await exist.save()

    if (exist.$isPersisted) {
      return exist
    } else {
      return response.badRequest()
    }
  }

  public async create({ request, response }: HttpContextContract) {
    const data = <Developer>await request.validate(DeveloperCreateValidator)

    const query = await Developer.create(data)

    if (query.$isPersisted) {
      return query
    } else {
      return response.badRequest()
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    const data = <Developer>await request.validate(DeveloperDeleteValidator)

    const exist = await Developer.findBy('id', data.id)
    if (!exist) return response.badRequest('Developer not exist')

    const query = await Developer.findBy('id', data.id)

    if (query) {
      await query.delete()
      return response.status(204)
    } else {
      return response.badRequest()
    }
  }
}
