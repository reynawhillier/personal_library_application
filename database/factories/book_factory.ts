import factory from '@adonisjs/lucid/factories'
import Book from '#models/book'
import { UserFactory } from './user_factory.ts'
import { BorrowerFactory } from './borrower_factory.ts'

export const BookFactory = factory
  .define(Book, async ({ faker }) => {
    //   'author', 'borrowedBy','createdAt', 'genre', 'id', 'imgAddress', 'isbn', 'ownerId', 'pageCount', 'readStatus', 'title', 'type', 'updatedAt',
    return {
      title: faker.book.title(),
      author: faker.book.author(),
      genre: faker.book.genre(),
      isbn: faker.number.int({ min: 9000000000000, max: 9999999999999 }),
      pageCount: faker.number.int({ min: 50, max: 1600 }),
      readStatus: faker.number.int({ min: 1, max: 3 }),
      type: faker.number.int({ min: 1, max: 4 }),
      imgAddress: faker.image.url(),
    }
  })
  .relation('owner', () => UserFactory)
  .relation('borrower', () => BorrowerFactory)
  .build()
