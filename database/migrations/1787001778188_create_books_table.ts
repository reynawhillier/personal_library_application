import { ReadStatus } from '#enums/read_status'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('author').notNullable()
      table.string('genre')
      table.integer('isbn', 13)
      table.integer('page_count')
      table.integer('read_status').defaultTo(ReadStatus.NOT_READ).notNullable()
      table.integer('type')
      table.string('img_address')
      table.integer('owner_id').unsigned().references('id').inTable('users').notNullable()
      table.integer('borrowed_by').unsigned().references('id').inTable('borrowers')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
