import { Suspense } from 'react'
import { GtmDebugClient } from './gtm-debug-client'

/**
 * Debug component to show GTM status on the page
 * This can be temporarily added to the layout to see if GTM is loading
 */
export function GtmDebug() {
  return (
    <Suspense fallback={null}>
      <GtmDebugClient />
    </Suspense>
  )
}

export default GtmDebug
