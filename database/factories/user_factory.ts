import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { Roles } from '#enums/roles'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    return {
      fullName: faker.person.fullName({ firstName: firstName, lastName: lastName }),
      email: faker.internet.email({ firstName: firstName, lastName: lastName }),
      password: 'password123',
      roleId: Roles.OWNER,
    }
  })
  .build()
