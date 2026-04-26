'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockActivities, mockClasses } from '@/lib/mockData'
import { ClipboardList, Plus, Calendar, Upload } from 'lucide-react'
import { useState } from 'react'

export default function AtividadesProfessorPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <PortalLayout role="professor">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Atividades</h1>
            <p className="text-gray-600">Crie e gerencie tarefas para seus alunos</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Nova Atividade
          </button>
        </div>

        {/* Formulário de Nova Atividade */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4">Criar Nova Atividade</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Título da Atividade</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ex: Lista de Exercícios - Cap. 5"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Disciplina</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Matemática</option>
                    <option>Português</option>
                    <option>História</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Turma</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    {mockClasses.map(turma => (
                      <option key={turma.id}>{turma.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Data de Entrega</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Descrição</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Descreva a atividade e orientações para os alunos..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Anexos (opcional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-sm text-gray-600">Clique para adicionar arquivos</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1">
                  Publicar Atividade
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  className="btn-secondary"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </Card>
        )}

        {/* Atividades Criadas */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ClipboardList className="text-primary mr-2" size={28} />
            Atividades Criadas
          </h2>

          <div className="space-y-4">
            {mockActivities.map((atividade) => (
              <div key={atividade.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {atividade.disciplina}
                      </span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        atividade.status === 'pendente' ? 'bg-orange-100 text-orange-700' :
                        atividade.status === 'entregue' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {atividade.status === 'pendente' ? 'Em andamento' :
                         atividade.status === 'entregue' ? 'Para corrigir' :
                         'Corrigida'}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{atividade.titulo}</h3>
                    <p className="text-gray-600 text-sm mb-2">{atividade.descricao}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      Data de entrega: {atividade.dataEntrega}
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Editar">
                      <Edit className="text-primary" size={20} />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                      <Trash2 className="text-red-600" size={20} />
                    </button>
                  </div>
                </div>

                {/* Estatísticas */}
                {atividade.status !== 'pendente' && (
                  <div className="flex gap-4 pt-3 border-t border-gray-200">
                    <div className="text-sm">
                      <span className="text-gray-600">Entregas: </span>
                      <span className="font-bold text-primary">15/28</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Corrigidas: </span>
                      <span className="font-bold text-green-600">8/15</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Média da turma: </span>
                      <span className="font-bold text-primary">8.2</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
