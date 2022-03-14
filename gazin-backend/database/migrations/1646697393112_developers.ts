import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Developers extends BaseSchema {
  protected tableName = 'developers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 500).notNullable()
      table.integer('level_id').primary().references('id').inTable('levels')
      table.string('sex', 1).notNullable()
      table.string('hobby', 100).notNullable()
      table.boolean('active').notNullable().defaultTo(false)
      table.timestamp('birth_date', { useTz: true }).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
