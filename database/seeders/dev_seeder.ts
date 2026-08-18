import { BookFactory } from '#database/factories/book_factory'
import { BorrowerFactory } from '#database/factories/borrower_factory'
import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment: string[] = ['development']

  async run() {
    const users = await UserFactory.createMany(10)
    const userIds = users.map((user) => user.id)
    const borrowers = await BorrowerFactory.tap((librarians, { faker }) => {
      librarians.librarianId = faker.helpers.arrayElement(userIds)
    }).createMany(5)
    const borrowerIds = borrowers.map((borrower) => borrower.id)

    await BookFactory.tap((books, { faker }) => {
      books.ownerId = faker.helpers.arrayElement(userIds)
    })
      // should hopefully make it a 10% chance that the book has been borrowed by one of the borrowers
      // so maybe 5/50 books should have a borrower
      .tap((borrowed, { faker }) => {
        faker.helpers.maybe(
          () => {
            borrowed.borrowedBy = faker.helpers.arrayElement(borrowerIds)
          },
          { probability: 0.1 }
        )
      })
      .createMany(50)
  }
}
