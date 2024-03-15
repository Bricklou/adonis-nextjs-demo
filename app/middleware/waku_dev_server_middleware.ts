import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import type { NextFn } from '@adonisjs/core/types/http'
import { Readable } from 'node:stream'
import { ReadableStream } from 'node:stream/web'
import devServer from 'waku/middleware/dev-server'

const devServerInstance = devServer({
  cmd: 'dev',
  config: {
    srcDir: app.makePath('app/views'),
    mainJs: 'client/index.tsx',
    entriesJs: 'server/index.tsx',
  },
})

const createEmptyReadableStream = () =>
  new ReadableStream({
    start(controller) {
      controller.close()
    },
  })

export default class WakuDevServerMiddleware {
  async handle({ request }: HttpContext, next: NextFn) {
    request.wakuCtx = {
      req: {
        body: (Readable.toWeb(request.request) || createEmptyReadableStream()) as any,
        url: new URL(request.completeUrl()),
        method: request.method(),
        headers: {},
      },
      res: {},
      context: {},
    }

    await devServerInstance(request.wakuCtx, async () => {
      await next()
    })
  }
}
