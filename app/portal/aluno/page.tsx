'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockGrades, mockActivities, mockEvents, mockMaterials } from '@/lib/mockData'
import { BookOpen, ClipboardList, Calendar, TrendingUp, AlertTriangle, CheckCircle, Smile, FileText, Presentation, Video, File } from 'lucide-react'

export default function AlunoDashboard() {
  const mediaGeral = mockGrades.reduce((acc, nota) => acc + nota.value, 0) / mockGrades.length
  const atividadesPendentes = mockActivities.filter(a => a.status === 'pendente')
  const proximasProvas = mockEvents.filter(e => e.tipo === 'prova').slice(0, 3)
  const materiaisRecentes = mockMaterials.slice(0, 3)

  return (
    <PortalLayout role="aluno">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Olá, João Pedro!</h1>
          <Smile className="text-secondary" size={32} />
        </div>
        <p className="text-gray-600 mb-8">Bem-vindo ao seu portal do aluno</p>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card hover={false} className="bg-gradient-to-br from-primary to-secondary text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Sua Média</p>
                <p className="text-3xl font-bold">{mediaGeral.toFixed(1)}</p>
              </div>
              <TrendingUp size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm mb-1">Atividades Pendentes</p>
                <p className="text-3xl font-bold">{atividadesPendentes.length}</p>
              </div>
              <AlertTriangle size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Atividades Concluídas</p>
                <p className="text-3xl font-bold">
                  {mockActivities.filter(a => a.status === 'entregue' || a.status === 'corrigida').length}
                </p>
              </div>
              <CheckCircle size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Próximas Provas</p>
                <p className="text-3xl font-bold">{proximasProvas.length}</p>
              </div>
              <Calendar size={40} className="opacity-80" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Atividades Pendentes */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <ClipboardList className="text-primary mr-2" size={24} />
                Atividades Pendentes
              </h2>
              <a href="/portal/aluno/atividades" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver todas →
              </a>
            </div>
            
            {atividadesPendentes.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-500 mx-auto mb-3" size={48} />
                <p className="text-gray-600">Parabéns! Você não tem atividades pendentes.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {atividadesPendentes.map((atividade) => {
                  const hoje = new Date()
                  const dataEntrega = new Date(atividade.dataEntrega)
                  const diasRestantes = Math.ceil((dataEntrega.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24))
                  
                  return (
                    <div key={atividade.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{atividade.titulo}</h4>
                          <p className="text-sm text-gray-600 mb-2">{atividade.descricao}</p>
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            {atividade.disciplina}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                        <span className="text-sm text-gray-600">
                          Entrega: {atividade.dataEntrega}
                        </span>
                        <span className={`text-xs font-bold ${
                          diasRestantes <= 1 ? 'text-red-600' : diasRestantes <= 3 ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {diasRestantes > 0 ? `${diasRestantes} dias` : 'Hoje!'}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </Card>

          {/* Materiais Recentes */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <BookOpen className="text-primary mr-2" size={24} />
                Materiais Recentes
              </h2>
              <a href="/portal/aluno/materiais" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver todos →
              </a>
            </div>
            
            <div className="space-y-3">
              {materiaisRecentes.map((material) => (
                <div key={material.id} className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-3 ${
                      material.tipo === 'pdf' ? 'bg-red-100' :
                      material.tipo === 'video' ? 'bg-purple-100' :
                      material.tipo === 'apresentacao' ? 'bg-orange-100' :
                      'bg-blue-100'
                    }`}>
                      {material.tipo === 'pdf' ? <FileText size={20} className="text-red-600" /> :
                       material.tipo === 'video' ? <Video size={20} className="text-purple-600" /> :
                       material.tipo === 'apresentacao' ? <Presentation size={20} className="text-orange-600" /> :
                       <File size={20} className="text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{material.titulo}</h4>
                      <p className="text-xs text-gray-600 mb-1">{material.disciplina} • {material.professor}</p>
                      <span className="text-xs text-gray-500">{material.dataPublicacao}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Próximas Provas */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Calendar className="text-primary mr-2" size={24} />
                Próximas Provas
              </h2>
              <a href="/portal/aluno/agenda" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver agenda →
              </a>
            </div>
            
            <div className="space-y-3">
              {proximasProvas.map((prova) => (
                <div key={prova.id} className="p-4 border-l-4 border-primary bg-neutral-50 rounded-r-lg">
                  <h4 className="font-semibold mb-1">{prova.titulo}</h4>
                  <div className="text-sm text-gray-600">
                    {prova.data} • {prova.horario}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Minhas Notas */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <TrendingUp className="text-primary mr-2" size={24} />
                Notas Recentes
              </h2>
              <a href="/portal/aluno/notas" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver boletim →
              </a>
            </div>
            
            <div className="space-y-3">
              {mockGrades.slice(0, 5).map((nota) => (
                <div key={nota.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="font-semibold text-sm">{nota.discipline}</div>
                    <div className="text-xs text-gray-500">{nota.type}</div>
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
        </div>
      </div>
    </PortalLayout>
  )
}
