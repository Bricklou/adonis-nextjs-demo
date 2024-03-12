import { NextService } from '#services/next_service'
import type { ApplicationService } from '@adonisjs/core/types'

export default class NextProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    this.app.container.singleton(NextService, async () => {
      const service = new NextService()
      return service
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {
    console.log('Booting Next.js...')
    const service: NextService = await this.app.container.make(NextService)
    console.log('Initializing Next.js...')
    await service.init()
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
