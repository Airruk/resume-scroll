'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Debug component to show GTM status on the page
 * This can be temporarily added to the layout to see if GTM is loading
 */
export function GtmDebug() {
  const [gtmStatus, setGtmStatus] = useState<string>('Checking...')
  const pathname = usePathname()

  useEffect(() => {
    // Check if dataLayer exists and GTM script is present
    const hasDataLayer = typeof window !== 'undefined' && 'dataLayer' in window
    const hasGtmScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]')
    const hasGtmScriptInHead = document.head.querySelector('script[id="gtm-script"]')
    const hasGtmNoscript = document.body.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]')
    
    setGtmStatus(
      `Status: ${hasDataLayer ? '✅' : '❌'} dataLayer | ` +
      `${hasGtmScript ? '✅' : '❌'} GTM script | ` +
      `${hasGtmScriptInHead ? '✅' : '❌'} GTM in head | ` +
      `${hasGtmNoscript ? '✅' : '❌'} GTM noscript`
    )
  }, [pathname])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        padding: '10px',
        background: '#333',
        color: '#fff',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 9999
      }}
    >
      <strong>GTM Debug:</strong> {gtmStatus}
      <br />
      <strong>Path:</strong> {pathname}
      <br />
      <strong>GTM ID:</strong> {process.env.NEXT_PUBLIC_GTM_ID || 'Not found'}
    </div>
  )
}

export default GtmDebug
