import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeveloperCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.required(), rules.minLength(2), rules.regex(/^[A-Z a-z]+$/)]),
    sex: schema.string({}, [
      rules.required(),
      rules.minLength(1),
      rules.maxLength(1),
      rules.regex(/^[A-Z a-z]+$/),
    ]),
    hobby: schema.string({}, [rules.required(), rules.minLength(2), rules.regex(/^[A-Z a-z]+$/)]),
    active: schema.boolean(),
    birth_date: schema.date({}, [rules.required()]),
    level_id: schema.number(),
  })

  public messages = {
    required: '{{field}} is required',
    minLength: '{{field}} is required',
    regex: '{{field}} just string',
  }
}
