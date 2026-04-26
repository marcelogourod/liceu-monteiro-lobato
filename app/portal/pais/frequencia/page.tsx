'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockAbsences } from '@/lib/mockData'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function FrequenciaPage() {
  const totalAulas = 120
  const totalFaltas = mockAbsences.length
  const presencas = totalAulas - totalFaltas
  const percentualPresenca = ((presencas / totalAulas) * 100).toFixed(1)

  return (
    <PortalLayout role="responsavel">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Frequência</h1>
          <p className="text-gray-600">Acompanhamento de presença e faltas</p>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Presenças</p>
                <p className="text-4xl font-bold">{presencas}</p>
              </div>
              <CheckCircle size={48} className="opacity-80" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm mb-1">Faltas</p>
                <p className="text-4xl font-bold">{totalFaltas}</p>
              </div>
              <XCircle size={48} className="opacity-80" />
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Percentual</p>
                <p className="text-4xl font-bold">{percentualPresenca}%</p>
              </div>
              <AlertCircle size={48} className="opacity-80" />
            </div>
          </Card>
        </div>

        {/* Alerta */}
        {totalFaltas > 5 && (
          <Card className="bg-yellow-50 border-2 border-yellow-400 mb-8">
            <div className="flex items-start">
              <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-yellow-800 mb-1">Atenção!</h3>
                <p className="text-yellow-700 text-sm">
                  O aluno possui {totalFaltas} faltas. A legislação permite no máximo 25% de faltas (30 aulas). 
                  Acompanhe a frequência para evitar reprovação por falta.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Lista de Faltas */}
        <Card>
          <h2 className="text-2xl font-bold mb-6">Registro de Faltas</h2>
          
          <div className="space-y-3">
            {mockAbsences.length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <p className="text-gray-600 text-lg">Nenhuma falta registrada!</p>
              </div>
            ) : (
              mockAbsences.map((falta) => (
                <div 
                  key={falta.id} 
                  className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      falta.justified ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {falta.justified ? (
                        <CheckCircle className="text-green-600" size={24} />
                      ) : (
                        <XCircle className="text-red-600" size={24} />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold">{falta.discipline}</div>
                      <div className="text-sm text-gray-500">Data: {falta.date}</div>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    falta.justified 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {falta.justified ? 'Justificada' : 'Não justificada'}
                  </span>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Percentual por Mês */}
        <Card className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Frequência Mensal</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Fevereiro 2026</span>
                <span className="font-bold text-primary">97%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 rounded-full h-3" style={{ width: '97%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Março 2026</span>
                <span className="font-bold text-primary">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 rounded-full h-3" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
