import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import rsc from 'waku/middleware/rsc'

const rcsHandler = rsc({
  cmd: 'dev',
  config: {
    srcDir: 'app/views',
  },
})

export default class WakuRscMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    console.log(request.wakuCtx)
    await rcsHandler(request.wakuCtx, async () => {
      console.log(request.wakuCtx)
      await next()
    })
  }
}
