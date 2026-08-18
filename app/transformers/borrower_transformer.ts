import { BaseTransformer } from '@adonisjs/core/transformers'
import Borrower from '#models/borrower'

export default class BorrowerTransformer extends BaseTransformer<Borrower> {
  toObject() {
    return this.pick(this.resource, ['id'])
  }
}