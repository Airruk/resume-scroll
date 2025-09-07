# Netlify Deployment Guide

## Environment Variables

This project requires the following environment variables to be set in your Netlify deployment settings:

- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager container ID
- `NEXT_PUBLIC_XANO_API_URL`: URL for Xano API
- `SENDGRID_API_KEY`: SendGrid API key for email functionality

## Secrets Scanning Configuration

Netlify's secrets scanning feature detects sensitive information in your build output. Since we're using Google Tag Manager, the GTM ID is expected to appear in the client-side code and build output.

### Solution

We've configured Netlify to ignore the GTM ID in secrets scanning using the `netlify.toml` configuration:

```toml
[build.environment]
  SECRETS_SCAN_OMIT_KEYS = "NEXT_PUBLIC_GTM_ID"
```

This is necessary because:
1. GTM IDs are meant to be public and included in client-side code
2. Values with the `NEXT_PUBLIC_` prefix are intended to be exposed to the browser
3. The ID itself is not sensitive and doesn't provide access to any protected resources

## Other Deployment Notes

- The site is configured to use the Next.js plugin for Netlify
- Cache headers are set for optimal performance of static assets
- The build command is `npm run build`
- The publish directory is `.next`

## Troubleshooting

If you encounter build failures related to secrets scanning:

1. Check if any new environment variables are being flagged
2. Update the `SECRETS_SCAN_OMIT_KEYS` in `netlify.toml` if needed
3. Ensure no actual sensitive data is included in public variables

For more information, refer to [Netlify's documentation on secrets scanning](https://ntl.fyi/configure-secrets-scanning).
