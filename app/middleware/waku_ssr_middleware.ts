import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import ssr from 'waku/middleware/ssr'
import { wakuConfig } from '../utils/waku_config.js'

const rcsHandler = ssr(wakuConfig)

export default class WakuSsrMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    await rcsHandler(request.wakuCtx, async () => {
      await next()
    })
  }
}
