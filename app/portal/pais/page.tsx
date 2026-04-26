'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockGrades, mockAbsences, mockEvents, mockCommunications } from '@/lib/mockData'
import { TrendingUp, AlertCircle, Calendar, Bell, FileText, CheckCircle } from 'lucide-react'

export default function PaisDashboard() {
  // Calcula média geral
  const mediaGeral = mockGrades.reduce((acc, nota) => acc + nota.value, 0) / mockGrades.length
  const totalFaltas = mockAbsences.length
  const proximosEventos = mockEvents.slice(0, 3)
  const comunicadosNaoLidos = mockCommunications.filter(c => !c.read)

  return (
    <PortalLayout role="responsavel">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Portal dos Pais</h1>
          <p className="text-gray-600">Acompanhe o desenvolvimento do seu filho</p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card hover={false} className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Média Geral</p>
                <p className="text-3xl font-bold">{mediaGeral.toFixed(1)}</p>
              </div>
              <TrendingUp size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm mb-1">Total de Faltas</p>
                <p className="text-3xl font-bold">{totalFaltas}</p>
              </div>
              <AlertCircle size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Próximos Eventos</p>
                <p className="text-3xl font-bold">{proximosEventos.length}</p>
              </div>
              <Calendar size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm mb-1">Comunicados Novos</p>
                <p className="text-3xl font-bold">{comunicadosNaoLidos.length}</p>
              </div>
              <Bell size={40} className="opacity-80" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notas Recentes */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <FileText className="text-primary mr-2" size={24} />
                Notas Recentes
              </h2>
              <a href="/portal/pais/boletim" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver todas →
              </a>
            </div>
            
            <div className="space-y-3">
              {mockGrades.slice(0, 5).map((nota) => (
                <div key={nota.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-semibold">{nota.discipline}</div>
                    <div className="text-sm text-gray-500">{nota.type} - {nota.date}</div>
                  </div>
                  <div className={`text-2xl font-bold ${
                    nota.value >= 7 ? 'text-green-600' : nota.value >= 5 ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {nota.value.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Frequência */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <CheckCircle className="text-primary mr-2" size={24} />
                Frequência
              </h2>
              <a href="/portal/pais/frequencia" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver detalhes →
              </a>
            </div>
            
            {/* Percentual de Presença */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">Presença no bimestre</span>
                <span className="text-sm font-bold text-primary">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-primary rounded-full h-3" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-gray-700">Faltas Recentes:</h3>
              {mockAbsences.map((falta) => (
                <div key={falta.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-sm">{falta.discipline}</div>
                    <div className="text-xs text-gray-500">{falta.date}</div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    falta.justified 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {falta.justified ? 'Justificada' : 'Não justificada'}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Próximos Eventos */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Calendar className="text-primary mr-2" size={24} />
                Próximos Eventos
              </h2>
              <a href="/portal/pais/agenda" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver agenda →
              </a>
            </div>
            
            <div className="space-y-3">
              {proximosEventos.map((evento) => (
                <div key={evento.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{evento.title}</div>
                      <div className="text-sm text-gray-600">{evento.date} - {evento.time}</div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      evento.type === 'prova' ? 'bg-red-100 text-red-700' :
                      evento.type === 'reuniao' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {evento.type === 'prova' ? 'Prova' : evento.type === 'reuniao' ? 'Reunião' : 'Evento'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Comunicados */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Bell className="text-primary mr-2" size={24} />
                Comunicados
              </h2>
              <a href="/portal/pais/comunicados" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver todos →
              </a>
            </div>
            
            <div className="space-y-3">
              {mockCommunications.map((comunicado) => (
                <div 
                  key={comunicado.id} 
                  className={`p-4 border rounded-lg ${
                    comunicado.read ? 'border-gray-200 bg-white' : 'border-primary bg-blue-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm flex-1">{comunicado.title}</h4>
                    {!comunicado.read && (
                      <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{comunicado.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{comunicado.author}</span>
                    <span className="text-xs text-gray-500">{comunicado.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PortalLayout>
  )
}
