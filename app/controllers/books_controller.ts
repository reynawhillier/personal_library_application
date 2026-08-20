import Book from '#models/book'
import { createBookValidator } from '#validators/book'
import type { HttpContext } from '@adonisjs/core/http'

export default class BooksController {
  /**
   * Display a list of resource
   */
  async index({ view, auth }: HttpContext) {
    const books = await Book.query()
      .where('owner_id', auth.user!.id)
      .orderBy('author')
      .orderBy('title')

    return view.render('pages/collection/index', { books })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/collection/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, auth, response }: HttpContext) {
    const payload = await request.validateUsing(createBookValidator)

    await Book.create({
      ...payload,
      ownerId: auth.user!.id,
    })

    return response.redirect().toRoute('books.index')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const book = await Book.query().where('id', params.id).firstOrFail()

    return view.render('pages/collection/show', { book })
  }

  // /**
  //  * Edit individual record
  //  */
  // async edit({ params }: HttpContext) {}

  // /**
  //  * Handle form submission for the edit action
  //  */
  // async update({ params, request }: HttpContext) {}

  // /**
  //  * Delete record
  //  */
  // async destroy({ params }: HttpContext) {}
}
