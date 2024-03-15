import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import rsc from 'waku/middleware/rsc'
import { wakuConfig } from '../utils/waku_config.js'

const rcsHandler = rsc(wakuConfig)

export default class WakuRscMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    await rcsHandler(request.wakuCtx, async () => {
      await next()
    })
  }
}
