import vine from '@vinejs/vine'

export const createBookValidator = vine.create({
  title: vine.string().minLength(1).maxLength(255),
  author: vine.string().maxLength(255),
  genre: vine.string().maxLength(255),
  isbn: vine.number().min(9000000000000).max(9999999999999),
  pageCount: vine.number().positive(),
})
