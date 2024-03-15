import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import devServer from 'waku/middleware/dev-server'

const devServerInstance = devServer({
  cmd: 'dev',
  config: {
    srcDir: 'app/views',
  },
})

export default class WakuDevServerMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    await devServerInstance(request.wakuCtx, async () => {
      await next()
    })
  }
}
