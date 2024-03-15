import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { Readable } from 'node:stream'
import { ReadableStream } from 'node:stream/web'

const createEmptyReadableStream = () =>
  new ReadableStream({
    start(controller) {
      controller.close()
    },
  })

export default class WakuInitMiddleware {
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

    await next()
  }
}
