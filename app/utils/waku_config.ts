import type { Middleware } from 'waku/config'

export const wakuConfig: Parameters<Middleware>[0] = {
  cmd: 'dev',
  config: {
    srcDir: 'app/views',
  },
}
