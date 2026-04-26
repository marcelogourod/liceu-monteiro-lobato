'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockEventos } from '@/lib/mockData'
import { Calendar, Plus, Edit, Trash2, Clock } from 'lucide-react'
import { useState } from 'react'

export default function CalendarioAdminPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <PortalLayout role="admin">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Gestão de Calendário</h1>
            <p className="text-gray-600">Gerencie eventos, provas e reuniões</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Novo Evento
          </button>
        </div>

        {/* Formulário */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4">Criar Novo Evento</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Título do Evento</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ex: Reunião de Pais"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Data</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Horário</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="evento">Evento</option>
                    <option value="prova">Prova</option>
                    <option value="reuniao">Reunião</option>
                    <option value="feriado">Feriado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Descrição (opcional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Detalhes sobre o evento..."
                />
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1">
                  Criar Evento
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

        {/* Lista de Eventos */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="text-primary mr-2" size={28} />
            Eventos do Calendário
          </h2>

          <div className="space-y-3">
            {mockEventos.map((evento) => (
              <div key={evento.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        evento.tipo === 'prova' ? 'bg-red-100 text-red-700' :
                        evento.tipo === 'reuniao' ? 'bg-blue-100 text-blue-700' :
                        evento.tipo === 'feriado' ? 'bg-gray-100 text-gray-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {evento.tipo === 'prova' ? 'Avaliação' : 
                         evento.tipo === 'reuniao' ? 'Reunião' :
                         evento.tipo === 'feriado' ? 'Feriado' : 'Evento'}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {evento.horario}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{evento.titulo}</h3>
                    <p className="text-sm text-gray-600 mb-2">{evento.data}</p>
                    {evento.descricao && (
                      <p className="text-sm text-gray-600">{evento.descricao}</p>
                    )}
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
