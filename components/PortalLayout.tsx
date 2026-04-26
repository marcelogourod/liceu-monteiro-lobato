'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import { getUserFromSession, clearUserSession } from '@/lib/auth'
import { User as UserType } from '@/types'
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  FileText,
  Users,
  BarChart,
  ClipboardList
} from 'lucide-react'
import NotificationCenter from './NotificationCenter'

interface PortalLayoutProps {
  children: ReactNode
  role: 'aluno' | 'responsavel' | 'professor' | 'admin'
}

const menuItems = {
  aluno: [
    { icon: Home, label: 'Dashboard', href: '/portal/aluno' },
    { icon: BookOpen, label: 'Materiais', href: '/portal/aluno/materiais' },
    { icon: ClipboardList, label: 'Atividades', href: '/portal/aluno/atividades' },
    { icon: FileText, label: 'Notas', href: '/portal/aluno/notas' },
    { icon: Calendar, label: 'Agenda', href: '/portal/aluno/agenda' },
  ],
  responsavel: [
    { icon: Home, label: 'Dashboard', href: '/portal/pais' },
    { icon: FileText, label: 'Boletim', href: '/portal/pais/boletim' },
    { icon: BarChart, label: 'Frequência', href: '/portal/pais/frequencia' },
    { icon: Calendar, label: 'Agenda', href: '/portal/pais/agenda' },
    { icon: Bell, label: 'Comunicados', href: '/portal/pais/comunicados' },
  ],
  professor: [
    { icon: Home, label: 'Dashboard', href: '/portal/professor' },
    { icon: Users, label: 'Turmas', href: '/portal/professor/turmas' },
    { icon: ClipboardList, label: 'Presença', href: '/portal/professor/presenca' },
    { icon: FileText, label: 'Notas', href: '/portal/professor/notas' },
    { icon: BookOpen, label: 'Materiais', href: '/portal/professor/materiais' },
    { icon: ClipboardList, label: 'Atividades', href: '/portal/professor/atividades' },
  ],
  admin: [
    { icon: Home, label: 'Dashboard', href: '/portal/admin' },
    { icon: Users, label: 'Alunos', href: '/portal/admin/alunos' },
    { icon: Users, label: 'Professores', href: '/portal/admin/professores' },
    { icon: Users, label: 'Turmas', href: '/portal/admin/turmas' },
    { icon: FileText, label: 'Boletins', href: '/portal/admin/boletins' },
    { icon: Bell, label: 'Comunicados', href: '/portal/admin/comunicados' },
    { icon: Calendar, label: 'Calendário', href: '/portal/admin/calendario' },
  ]
}

export default function PortalLayout({ children, role }: PortalLayoutProps) {
  const router = useRouter()
  const [user, setUser] = useState<UserType | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const currentUser = getUserFromSession()
    if (!currentUser) {
      router.push('/portal/login')
    } else if (currentUser.role !== role && currentUser.role !== 'admin') {
      // Admin pode acessar tudo
      router.push('/portal/login')
    } else {
      setUser(currentUser)
    }
  }, [router, role])

  const handleLogout = () => {
    clearUserSession()
    router.push('/portal/login')
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-primary"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="inline-flex items-center bg-primary px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
              <Image
                src="/logo.png"
                alt="Liceu Monteiro Lobato"
                width={200}
                height={67}
                className="h-12 sm:h-14 w-auto"
                style={{ filter: 'brightness(1.1) contrast(1.2) saturate(1.1)' }}
                priority
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <NotificationCenter />
            
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <div className="font-semibold text-sm">{user.nome}</div>
                <div className="text-xs text-gray-500 capitalize">{user.role}</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {user.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 sm:w-72 bg-white shadow-xl lg:shadow-lg transform transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          top-0 lg:top-auto h-full overflow-y-auto
        `}>
          <div className="lg:hidden sticky top-0 bg-white p-4 border-b border-gray-200 z-10">
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-primary">Menu</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-gray-600 hover:text-primary">
                <X size={24} />
              </button>
            </div>
          </div>
          <nav className="p-4 space-y-2 mt-2 lg:mt-0">
            {menuItems[role].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-50 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Link
                href="/portal/configuracoes"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-neutral-50 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                <Settings size={20} />
                <span>Configurações</span>
              </Link>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full min-w-0">
          <div className="max-w-full overflow-x-hidden">
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
