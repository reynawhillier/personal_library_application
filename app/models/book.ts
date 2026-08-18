import { BookSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Borrower from './borrower.ts'

export default class Book extends BookSchema {
  @belongsTo(() => User, {
    foreignKey: 'ownerId',
    localKey: 'id',
  })
  declare owner: BelongsTo<typeof User>

  @belongsTo(() => Borrower, {
    foreignKey: 'borrowedBy',
    localKey: 'id',
  })
  declare borrower: BelongsTo<typeof Borrower>
}
