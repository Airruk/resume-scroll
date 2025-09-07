// GTM component that splits client and server components to handle useSearchParams properly

import { Suspense } from 'react'
import GoogleTagManagerClient from './gtm-client'

export default function GoogleTagManager({ gtmId }: { gtmId: string }) {
  if (!gtmId) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <GoogleTagManagerClient gtmId={gtmId} />
    </Suspense>
  )
}
