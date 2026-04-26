import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Middleware para proteção de rotas do portal
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = [
    '/',
    '/escola',
    '/ensino',
    '/noticias',
    '/calendario',
    '/matriculas',
    '/portal/login'
  ]

  // Verifica se é uma rota pública ou arquivo estático
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  )

  if (isPublicRoute || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Para rotas do portal, verificar autenticação
  // Em produção, verificar JWT/cookie de sessão
  // Por enquanto, apenas continua (autenticação é feita no client-side)
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)',
  ],
}
