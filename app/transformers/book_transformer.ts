import { BaseTransformer } from '@adonisjs/core/transformers'
import Book from '#models/book'

export default class BookTransformer extends BaseTransformer<Book> {
  toObject() {
    return this.pick(this.resource, ['id'])
  }
}