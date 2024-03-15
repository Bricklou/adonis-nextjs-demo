import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import devServer from 'waku/middleware/dev-server'
import { wakuConfig } from '../utils/waku_config.js'

const devServerInstance = devServer(wakuConfig)

export default class WakuDevServerMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    await devServerInstance(request.wakuCtx, async () => {
      console.log('dev server middleware', request.wakuCtx)
      await next()
    })
  }
}
