'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockCommunications } from '@/lib/mockData'
import { Bell, AlertCircle, Info } from 'lucide-react'

export default function ComunicadosPage() {
  return (
    <PortalLayout role="responsavel">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Comunicados</h1>
          <p className="text-gray-600">Avisos e mensagens da escola</p>
        </div>

        <div className="space-y-4">
          {mockCommunications.map((comunicado) => (
            <Card 
              key={comunicado.id}
              hover={false}
              className={!comunicado.read ? 'border-2 border-primary' : ''}
            >
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ${
                  comunicado.priority === 'alta' ? 'bg-red-100' :
                  comunicado.priority === 'media' ? 'bg-blue-100' :
                  'bg-gray-100'
                }`}>
                  {comunicado.priority === 'alta' ? (
                    <AlertCircle className="text-red-600" size={24} />
                  ) : comunicado.priority === 'media' ? (
                    <Bell className="text-blue-600" size={24} />
                  ) : (
                    <Info className="text-gray-600" size={24} />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{comunicado.title}</h3>
                    {!comunicado.read && (
                      <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                        NOVO
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {comunicado.message}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      <strong>De:</strong> {comunicado.author}
                    </span>
                    <span className="text-gray-500">{comunicado.date}</span>
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
