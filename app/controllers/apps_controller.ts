import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AppsController {
  constructor() {}

  async index(context: HttpContext) {
    return 'Hello'
  }
}
