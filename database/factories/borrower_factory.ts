import factory from '@adonisjs/lucid/factories'
import Borrower from '#models/borrower'
import { UserFactory } from './user_factory.ts'

export const BorrowerFactory = factory
  .define(Borrower, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      address: faker.location.streetAddress(),
    }
  })
  .relation('librarian', () => UserFactory)
  .build()
