import { ReactElement, Suspense } from 'react'
import { State } from './state'

export default function Index(): ReactElement {
  return (
    <div>
      <p className="text-2xl font-semibold">Hello</p>
      <Suspense fallback={<div>Loading...</div>}>
        <State />
      </Suspense>
    </div>
  )
}
