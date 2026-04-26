'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockActivities } from '@/lib/mockData'
import { ClipboardList, Upload, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function AtividadesPage() {
  const pendentes = mockActivities.filter(a => a.status === 'pendente')
  const entregues = mockActivities.filter(a => a.status === 'entregue' || a.status === 'corrigida')

  return (
    <PortalLayout role="aluno">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Atividades</h1>
          <p className="text-gray-600">Gerencie suas tarefas e trabalhos</p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card hover={false} className="bg-orange-50 border-2 border-orange-300">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Pendentes</p>
              <p className="text-4xl font-bold text-orange-600">{pendentes.length}</p>
            </div>
          </Card>

          <Card hover={false} className="bg-green-50 border-2 border-green-300">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Entregues</p>
              <p className="text-4xl font-bold text-green-600">{entregues.length}</p>
            </div>
          </Card>

          <Card hover={false} className="bg-blue-50 border-2 border-blue-300">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Total</p>
              <p className="text-4xl font-bold text-primary">{mockActivities.length}</p>
            </div>
          </Card>
        </div>

        {/* Atividades Pendentes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Clock className="text-orange-600 mr-2" size={28} />
            Atividades Pendentes
          </h2>
          
          {pendentes.length === 0 ? (
            <Card>
              <div className="text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <p className="text-xl font-semibold text-gray-700 mb-2">Parabéns!</p>
                <p className="text-gray-600">Você não tem atividades pendentes no momento.</p>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {pendentes.map((atividade) => {
                const hoje = new Date()
                const dataEntrega = new Date(atividade.dueDate)
                const diasRestantes = Math.ceil((dataEntrega.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24))
                const atrasada = diasRestantes < 0
                
                return (
                  <Card key={atividade.id} hover={false} className={atrasada ? 'border-2 border-red-500' : ''}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {atividade.discipline}
                          </span>
                          {atrasada && (
                            <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                              ATRASADA
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{atividade.title}</h3>
                        <p className="text-gray-600 mb-4">{atividade.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm">
                        <Clock size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-600">
                          Entregar até: <strong>{atividade.dueDate}</strong>
                        </span>
                      </div>
                      <button className="btn-primary text-sm py-2 px-4 flex items-center">
                        <Upload size={16} className="mr-2" />
                        Enviar Trabalho
                      </button>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>

        {/* Atividades Entregues */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <CheckCircle className="text-green-600 mr-2" size={28} />
            Atividades Entregues
          </h2>
          
          <div className="space-y-4">
            {entregues.map((atividade) => (
              <Card key={atividade.id} hover={false}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {atividade.discipline}
                      </span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        atividade.status === 'corrigida' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {atividade.status === 'corrigida' ? 'Corrigida' : 'Em correção'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{atividade.title}</h3>
                    <p className="text-sm text-gray-600">Entregue em: {atividade.dueDate}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
