import Database from '@ioc:Adonis/Lucid/Database'
import { v4 as uuidv4 } from 'uuid'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LevelCreateValidator from 'App/Validators/LevelCreateValidator'
import LevelDeleteValidator from 'App/Validators/LevelDeleteValidator'
import LevelUpdateValidator from 'App/Validators/LevelUpdateValidator'
import Level from 'App/Models/Level'

export default class LevelsController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const params = request.input('params', '')

    const query = await Database.from('levels').paginate(page, limit)

    const result = await Database.from('levels')
      .select('*')
      .orWhere('levels.description', 'ILIKE', `%${params}%`)
      .orderBy('levels.description', 'asc')
      .paginate(page, limit)

    if (result) {
      return result
    } else {
      return response.badRequest()
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const data = <Level>await request.validate(LevelUpdateValidator)

    const exist = await Level.findBy('id', data.id)
    if (!exist) return response.badRequest('Level not exist')

    exist.description = data.description
    await exist.save()

    if (exist.$isPersisted) {
      return exist
    } else {
      return response.badRequest()
    }
  }

  public async create({ request, response }: HttpContextContract) {
    const data = <Level>await request.validate(LevelCreateValidator)

    const exist = await Level.findBy('description', data.description)
    if (exist) return response.badRequest('Level already exist')

    const query = await Level.create(data)

    if (query.$isPersisted) {
      return query
    } else {
      return response.badRequest()
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    const data = <Level>await request.validate(LevelDeleteValidator)

    const exist = await Level.findBy('id', data.id)
    if (!exist) return response.badRequest('Level not exist')

    const query = await Level.findBy('id', data.id)

    if (query) {
      await query.delete()
      return response.status(204)
    } else {
      return response.badRequest()
    }
  }
}
