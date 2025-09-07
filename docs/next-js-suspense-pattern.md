# Next.js Suspense Pattern for Client Components

## Overview

This document explains the pattern used in this project for handling hooks like `useSearchParams()` in Next.js App Router, which require a Suspense boundary.

## The Problem

In Next.js App Router, certain hooks (like `useSearchParams()`, `usePathname()`, and others) need to be wrapped in a Suspense boundary when used. This is because these hooks rely on data that might not be immediately available during server-side rendering or static generation.

Error message example:
```
useSearchParams() should be wrapped in a suspense boundary at page "/me"
```

## The Solution Pattern

We've implemented a split component pattern to handle this requirement:

### 1. Server Component (Wrapper)

```tsx
// Component without 'use client'
import { Suspense } from 'react'
import ClientComponent from './client-component'

export default function ServerWrapper({ props }) {
  return (
    <Suspense fallback={null}>
      <ClientComponent {...props} />
    </Suspense>
  )
}
```

### 2. Client Component (Implementation)

```tsx
'use client'

import { useSearchParams } from 'next/navigation'

export default function ClientComponent({ props }) {
  const searchParams = useSearchParams()
  
  // Component implementation using searchParams
  return (...)
}
```

## Implementation Examples

In our project, this pattern is used for:

1. **Google Tag Manager**:
   - `gtm.tsx`: Server component with Suspense wrapper
   - `gtm-client.tsx`: Client component with actual implementation

2. **GTM Debug Tool**:
   - `gtm-debug.tsx`: Server component with Suspense wrapper
   - `gtm-debug-client.tsx`: Client component with actual implementation

## Best Practices

1. Always split components that use navigation hooks into client and server parts
2. Use Suspense boundaries to wrap the client components
3. Keep server components as lightweight as possible, delegating logic to client components
4. Consider using a fallback UI in the Suspense for better UX during loading

## References

- [Next.js Documentation on useSearchParams()](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
- [React Suspense Documentation](https://react.dev/reference/react/Suspense)
