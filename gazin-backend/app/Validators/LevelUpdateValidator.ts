import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LevelUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id: schema.number(),
    description: schema.string({}, [
      rules.required(),
      rules.minLength(2),
      rules.regex(/^[A-Z a-z]+$/),
    ]),
  })

  public messages = {
    required: '{{field}} is required',
    minLength: '{{field}} is required',
    regex: '{{field}} just string',
  }
}
