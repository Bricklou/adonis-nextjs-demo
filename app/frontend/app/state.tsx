'use server'
import { ReactElement } from 'react'
import { readHostname } from './os_data'
import app from '@adonisjs/core/services/app'
import { DemoService } from '../../services/demo_service'

export async function State(): Promise<ReactElement> {
  console.log('State', app)
  const hostname = await readHostname()
  const demoService = await app.container.make(DemoService)

  const { message } = await demoService.sayHello()
  return (
    <>
      <p>
        <span className="font-semibold">Server hostname: </span>
        {hostname}
      </p>
      <p>
        <span className="font-semibold">Server message: </span>
        {message}
      </p>
    </>
  )
}
