'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses, mockActivities } from '@/lib/mockData'
import { Users, ClipboardList, BookOpen, Calendar, CheckCircle, Smile } from 'lucide-react'

export default function ProfessorDashboard() {
  const totalTurmas = mockClasses.length
  const totalAlunos = mockClasses.reduce((acc, turma) => acc + turma.students, 0)
  const atividadesCriadas = mockActivities.length
  const aulasHoje = 3

  return (
    <PortalLayout role="professor">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Olá, Profa. Maria!</h1>
          <Smile className="text-secondary" size={32} />
        </div>
        <p className="text-gray-600 mb-8">Bem-vinda ao seu portal do professor</p>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card hover={false} className="bg-gradient-to-br from-primary to-secondary text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Minhas Turmas</p>
                <p className="text-3xl font-bold">{totalTurmas}</p>
              </div>
              <Users size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Total de Alunos</p>
                <p className="text-3xl font-bold">{totalAlunos}</p>
              </div>
              <Users size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm mb-1">Aulas Hoje</p>
                <p className="text-3xl font-bold">{aulasHoje}</p>
              </div>
              <Calendar size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-1">Atividades Criadas</p>
                <p className="text-3xl font-bold">{atividadesCriadas}</p>
              </div>
              <ClipboardList size={40} className="opacity-80" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Minhas Turmas */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Users className="text-primary mr-2" size={24} />
                Minhas Turmas
              </h2>
              <a href="/portal/professor/turmas" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver todas →
              </a>
            </div>
            
            <div className="space-y-3">
              {mockClasses.map((turma) => (
                <div key={turma.id} className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{turma.name}</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {turma.students} alunos
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{turma.grade} • Ano letivo {turma.year}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Aulas de Hoje */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Calendar className="text-primary mr-2" size={24} />
                Aulas de Hoje
              </h2>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-primary bg-neutral-50 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Matemática - 9º A</h4>
                  <span className="text-sm text-gray-600">7h30 - 8h20</span>
                </div>
                <p className="text-sm text-gray-600">Conteúdo: Funções quadráticas</p>
              </div>

              <div className="p-4 border-l-4 border-primary bg-neutral-50 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Matemática - 9º B</h4>
                  <span className="text-sm text-gray-600">9h30 - 10h20</span>
                </div>
                <p className="text-sm text-gray-600">Conteúdo: Equações de 2º grau</p>
              </div>

              <div className="p-4 border-l-4 border-primary bg-neutral-50 rounded-r-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Matemática - 8º A</h4>
                  <span className="text-sm text-gray-600">13h00 - 13h50</span>
                </div>
                <p className="text-sm text-gray-600">Conteúdo: Sistemas de equações</p>
              </div>
            </div>
          </Card>

          {/* Atividades Pendentes de Correção */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <ClipboardList className="text-primary mr-2" size={24} />
                Pendentes de Correção
              </h2>
              <a href="/portal/professor/atividades" className="text-primary text-sm font-semibold hover:text-secondary">
                Ver todas →
              </a>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Lista de Exercícios</h4>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    15 entregas
                  </span>
                </div>
                <p className="text-sm text-gray-600">9º A - Matemática</p>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Trabalho em Grupo</h4>
                  <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    8 entregas
                  </span>
                </div>
                <p className="text-sm text-gray-600">9º B - Matemática</p>
              </div>
            </div>
          </Card>

          {/* Ações Rápidas */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Ações Rápidas</h2>
            
            <div className="space-y-3">
              <button className="w-full btn-primary text-left flex items-center justify-between">
                <span>Lançar Presença</span>
                <CheckCircle size={20} />
              </button>
              
              <button className="w-full btn-primary text-left flex items-center justify-between">
                <span>Lançar Notas</span>
                <ClipboardList size={20} />
              </button>
              
              <button className="w-full btn-primary text-left flex items-center justify-between">
                <span>Publicar Material</span>
                <BookOpen size={20} />
              </button>
              
              <button className="w-full btn-primary text-left flex items-center justify-between">
                <span>Criar Atividade</span>
                <ClipboardList size={20} />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </PortalLayout>
  )
}
