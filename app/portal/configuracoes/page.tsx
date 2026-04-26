'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { getUserFromSession } from '@/lib/auth'
import { User, Lock, Bell, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import { User as UserType } from '@/types'

export default function ConfiguracoesPage() {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const currentUser = getUserFromSession()
    setUser(currentUser)
  }, [])

  if (!user) return null

  const role = user.role === 'responsavel' ? 'responsavel' : 
               user.role === 'aluno' ? 'aluno' : 
               user.role === 'professor' ? 'professor' : 'admin'

  return (
    <PortalLayout role={role}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Gerencie suas preferências e informações</p>
        </div>

        {/* Perfil */}
        <Card className="mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <User className="text-primary mr-2" size={24} />
            Informações do Perfil
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nome Completo</label>
              <input
                type="text"
                defaultValue={user.nome}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {user.turma && (
              <div>
                <label className="block text-sm font-semibold mb-2">Turma</label>
                <input
                  type="text"
                  defaultValue={user.turma}
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            )}

            <button className="btn-primary">
              Salvar Alterações
            </button>
          </div>
        </Card>

        {/* Segurança */}
        <Card className="mb-6">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Lock className="text-primary mr-2" size={24} />
            Segurança
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Senha Atual</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Nova Senha</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Confirmar Nova Senha</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <button className="btn-primary">
              Alterar Senha
            </button>
          </div>
        </Card>

        {/* Notificações */}
        <Card>
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Bell className="text-primary mr-2" size={24} />
            Preferências de Notificações
          </h2>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg cursor-pointer">
              <div>
                <div className="font-semibold mb-1">Notificações por Email</div>
                <div className="text-sm text-gray-600">Receber avisos e comunicados por email</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg cursor-pointer">
              <div>
                <div className="font-semibold mb-1">Novas Notas</div>
                <div className="text-sm text-gray-600">Notificar quando novas notas forem lançadas</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg cursor-pointer">
              <div>
                <div className="font-semibold mb-1">Comunicados</div>
                <div className="text-sm text-gray-600">Receber comunicados da escola</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>

            <label className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg cursor-pointer">
              <div>
                <div className="font-semibold mb-1">Eventos e Calendário</div>
                <div className="text-sm text-gray-600">Lembrete de provas e eventos</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>

            <button className="btn-primary">
              Salvar Preferências
            </button>
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
