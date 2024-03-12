import fs from 'node:fs/promises'

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function readHostname(): Promise<string> {
  const file = await fs.readFile('/etc/hostname', 'utf-8')

  await sleep(1000)
  return file.trim()
}
