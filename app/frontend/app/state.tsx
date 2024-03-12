'use server'
import { ReactElement } from 'react'
import { readHostname } from './os_data'

export async function State(): Promise<ReactElement> {
  const hostname = await readHostname()
  return (
    <p>
      <span className="font-semibold">Server hostname: </span>
      {hostname}
    </p>
  )
}
