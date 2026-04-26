'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { validateLogin, saveUserSession } from '@/lib/auth'
import { LogIn, AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simula delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 500))

    const user = validateLogin(email, password)
    
    if (user) {
      saveUserSession(user)
      
      // Redireciona baseado no perfil
      switch (user.role) {
        case 'aluno':
          router.push('/portal/aluno')
          break
        case 'responsavel':
          router.push('/portal/pais')
          break
        case 'professor':
          router.push('/portal/professor')
          break
        case 'admin':
        case 'secretaria':
          router.push('/portal/admin')
          break
        default:
          router.push('/portal')
      }
    } else {
      setError('Email ou senha incorretos')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block bg-primary p-6 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all hover:scale-105">
              <Image
                src="/logo.png"
                alt="Liceu Monteiro Lobato"
                width={280}
                height={112}
                className="mx-auto"
                style={{ filter: 'brightness(1.2) contrast(1.3) drop-shadow(0 4px 12px rgba(255,255,255,0.3))' }}
                priority
              />
            </Link>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2 mt-6">Portal Escolar</h1>
            <p className="text-gray-600">Acesse sua área restrita</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2 text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">Lembrar-me</span>
              </label>
              <a href="#" className="text-primary hover:text-secondary font-medium">
                Esqueci minha senha
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 flex items-center justify-center disabled:opacity-50"
            >
              {loading ? (
                'Entrando...'
              ) : (
                <>
                  <LogIn size={20} className="mr-2" />
                  Entrar
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Credenciais de demonstração:</p>
            <div className="space-y-2 text-xs text-gray-600">
              <p><strong>Aluno:</strong> aluno@liceu.edu.br / senha123</p>
              <p><strong>Responsável:</strong> pai@exemplo.com / senha123</p>
              <p><strong>Professor:</strong> professor@liceu.edu.br / senha123</p>
              <p><strong>Admin:</strong> admin@liceu.edu.br / senha123</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
              ← Voltar ao site institucional
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
