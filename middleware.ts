import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const CANONICAL_HOST = 'coldoutbound.com'
const WWW_HOST = 'www.coldoutbound.com'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const host = url.hostname.toLowerCase()

  // Enforce a single canonical host. This avoids duplicate-host indexing,
  // splits in link equity, and inconsistent canonicalization.
  if (host === WWW_HOST) {
    const redirectUrl = new URL(req.url)
    redirectUrl.hostname = CANONICAL_HOST
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next).*)'],
}

