'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockEvents } from '@/lib/mockData'
import { Calendar, Clock } from 'lucide-react'

export default function AgendaAlunoPage() {
  return (
    <PortalLayout role="aluno">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Minha Agenda</h1>
          <p className="text-gray-600">Provas, atividades e eventos</p>
        </div>

        <div className="space-y-4">
          {mockEvents.map((evento) => (
            <Card key={evento.id} hover={false} className="!p-0 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className={`p-6 md:w-32 flex flex-col items-center justify-center ${
                  evento.type === 'prova' ? 'bg-red-500' :
                  evento.type === 'reuniao' ? 'bg-blue-500' :
                  'bg-green-500'
                } text-white`}>
                  <Calendar size={24} className="mb-2" />
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {evento.date.split('-')[2]}
                    </div>
                    <div className="text-sm">
                      {evento.date.split('-')[1]}/{evento.date.split('-')[0]}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          evento.type === 'prova' ? 'bg-red-100 text-red-700' :
                          evento.type === 'reuniao' ? 'bg-blue-100 text-blue-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {evento.type === 'prova' ? 'Avaliação' : 
                           evento.type === 'reuniao' ? 'Reunião' : 'Evento'}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          {evento.time}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">
                        {evento.title}
                      </h3>
                      {evento.description && (
                        <p className="text-gray-600 text-sm">{evento.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PortalLayout>
  )
}
