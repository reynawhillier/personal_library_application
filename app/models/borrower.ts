import { BorrowerSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Book from './book.ts'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from './user.ts'

export default class Borrower extends BorrowerSchema {
  @hasMany(() => Book)
  declare borrowedBooks: HasMany<typeof Book>

  @belongsTo(() => User)
  declare librarian: BelongsTo<typeof User>
}
