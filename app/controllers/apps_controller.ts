import { NextService } from '#services/next_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AppsController {
  constructor(private nextService: NextService) {}

  async index(context: HttpContext) {
    return this.nextService.requestHandler(context)
  }
}
