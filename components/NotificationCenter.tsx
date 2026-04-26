'use client'

import { useState } from 'react'
import { mockCommunications } from '@/lib/mockData'
import { Bell, X, Check } from 'lucide-react'

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false)
  const [notificacoes, setNotificacoes] = useState(mockCommunications)
  
  const naoLidas = notificacoes.filter(n => !n.lido).length

  const marcarComoLida = (id: string) => {
    setNotificacoes(prev => 
      prev.map(n => n.id === id ? { ...n, lido: true } : n)
    )
  }

  const marcarTodasComoLidas = () => {
    setNotificacoes(prev => prev.map(n => ({ ...n, lido: true })))
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-gray-600 hover:text-primary transition-colors"
      >
        <Bell size={22} />
        {naoLidas > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {naoLidas}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Painel de Notificações */}
          <div className="absolute right-0 top-12 w-96 max-h-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <h3 className="font-bold text-lg">Notificações</h3>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Ações */}
            {naoLidas > 0 && (
              <div className="p-3 bg-neutral-50 border-b border-gray-200">
                <button
                  onClick={marcarTodasComoLidas}
                  className="text-sm text-primary hover:text-secondary font-semibold flex items-center"
                >
                  <Check size={16} className="mr-1" />
                  Marcar todas como lidas
                </button>
              </div>
            )}

            {/* Lista de Notificações */}
            <div className="overflow-y-auto max-h-[480px]">
              {notificacoes.length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="text-gray-300 mx-auto mb-3" size={48} />
                  <p className="text-gray-500">Nenhuma notificação</p>
                </div>
              ) : (
                notificacoes.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 border-b border-gray-200 hover:bg-neutral-50 cursor-pointer transition-colors ${
                      !notif.lido ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => marcarComoLida(notif.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm flex-1">{notif.titulo}</h4>
                      {!notif.lido && (
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1 ml-2"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{notif.mensagem}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{notif.autor}</span>
                      <span className="text-gray-500">{notif.data}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
