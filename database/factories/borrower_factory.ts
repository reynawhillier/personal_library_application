import factory from '@adonisjs/lucid/factories'
import Borrower from '#models/borrower'

export const BorrowerFactory = factory
  .define(Borrower, async ({ faker }) => {
    return {}
  })
  .build()