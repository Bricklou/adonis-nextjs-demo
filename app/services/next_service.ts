import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import next from 'next'
import nextBuild from 'next/dist/build/index.js'
import { type NextServer } from 'next/dist/server/next.js'

export class NextService {
  private readonly nextApp: NextServer

  constructor() {
    this.nextApp = next({
      dev: process.env.NODE_ENV !== 'production',
      customServer: true,
      dir: this.resolveAppDir(),
    })
  }

  private resolveAppDir(): string {
    return app.makePath('app/frontend')
  }

  async init() {
    await this.nextApp.prepare()
    if (process.env.NEXT_BUILD) {
      await nextBuild(app.makePath('app/frontend'))
    }
  }

  async requestHandler({ response, request }: HttpContext) {
    const requestHandler = this.nextApp.getRequestHandler()
    return requestHandler(request.request, response.response)
  }
}
