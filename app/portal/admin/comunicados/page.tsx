'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockCommunications } from '@/lib/mockData'
import { Bell, Plus, Send, Edit, Trash2 } from 'lucide-react'
import { useState } from 'react'

export default function ComunicadosAdminPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <PortalLayout role="admin">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Comunicados</h1>
            <p className="text-gray-600">Envie avisos para alunos, pais e professores</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Novo Comunicado
          </button>
        </div>

        {/* Formulário */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Send className="text-primary mr-2" size={24} />
              Enviar Novo Comunicado
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Título</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ex: Reunião de Pais - 20/03"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensagem</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite a mensagem do comunicado..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Destinatários</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Toda a escola</option>
                    <option>Apenas pais/responsáveis</option>
                    <option>Apenas alunos</option>
                    <option>Apenas professores</option>
                    <option>Turmas específicas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Prioridade</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1 flex items-center justify-center">
                  <Send size={18} className="mr-2" />
                  Enviar Comunicado
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

        {/* Comunicados Enviados */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Bell className="text-primary mr-2" size={28} />
            Comunicados Enviados
          </h2>

          <div className="space-y-4">
            {mockCommunications.map((comunicado) => (
              <div key={comunicado.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        comunicado.prioridade === 'alta' ? 'bg-red-100 text-red-700' :
                        comunicado.prioridade === 'media' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        Prioridade {comunicado.prioridade}
                      </span>
                      <span className="text-xs text-gray-500">{comunicado.data}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{comunicado.titulo}</h3>
                    <p className="text-gray-600 mb-3">{comunicado.mensagem}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600">
                        <strong>De:</strong> {comunicado.autor}
                      </span>
                      <span className="text-primary font-semibold">
                        ✓ Entregue para 450 destinatários
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Editar">
                      <Edit className="text-primary" size={18} />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                      <Trash2 className="text-red-600" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
