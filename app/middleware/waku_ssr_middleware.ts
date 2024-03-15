import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import ssr from 'waku/middleware/ssr'

const rcsHandler = ssr({
  cmd: 'dev',
  config: {
    srcDir: 'app/views',
  },
})
export default class WakuSsrMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    await rcsHandler(request.wakuCtx, async () => {
      await next()
    })
  }
}
