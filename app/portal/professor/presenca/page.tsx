'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses, mockStudents } from '@/lib/mockData'
import { CheckCircle, XCircle, Calendar, Save } from 'lucide-react'
import { useState } from 'react'

export default function PresencaPage() {
  const [turmaSelecionada, setTurmaSelecionada] = useState(mockClasses[0].id)
  const [presencas, setPresencas] = useState<Record<string, boolean>>(
    mockAlunos.reduce((acc, aluno) => ({ ...acc, [aluno.id]: true }), {})
  )
  const [saved, setSaved] = useState(false)

  const handleTogglePresenca = (alunoId: string) => {
    setPresencas(prev => ({
      ...prev,
      [alunoId]: !prev[alunoId]
    }))
    setSaved(false)
  }

  const handleSave = () => {
    // Aqui seria a chamada para o backend
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const turma = mockClasses.find(t => t.id === turmaSelecionada)
  const totalPresentes = Object.values(presencas).filter(p => p).length
  const totalFaltas = mockAlunos.length - totalPresentes

  return (
    <PortalLayout role="professor">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Registro de Presença</h1>
          <p className="text-gray-600">Faça a chamada das suas turmas</p>
        </div>

        {/* Seletor de Turmas */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {mockClasses.map((t) => (
            <button
              key={t.id}
              onClick={() => setTurmaSelecionada(t.id)}
              className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all ${
                turmaSelecionada === t.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-neutral-50'
              }`}
            >
              {t.nome}
            </button>
          ))}
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card hover={false} className="text-center">
            <p className="text-sm text-gray-600 mb-1">Total de Alunos</p>
            <p className="text-3xl font-bold text-primary">{mockAlunos.length}</p>
          </Card>
          
          <Card hover={false} className="text-center bg-green-50 border-2 border-green-300">
            <p className="text-sm text-gray-600 mb-1">Presentes</p>
            <p className="text-3xl font-bold text-green-600">{totalPresentes}</p>
          </Card>
          
          <Card hover={false} className="text-center bg-red-50 border-2 border-red-300">
            <p className="text-sm text-gray-600 mb-1">Faltas</p>
            <p className="text-3xl font-bold text-red-600">{totalFaltas}</p>
          </Card>
        </div>

        {/* Data da Aula */}
        <Card className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="text-primary mr-3" size={24} />
              <div>
                <p className="text-sm text-gray-600">Data da aula</p>
                <p className="font-bold text-lg">{new Date().toLocaleDateString('pt-BR')}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Horário</p>
              <p className="font-bold text-lg">7h30 - 8h20</p>
            </div>
          </div>
        </Card>

        {/* Lista de Presença */}
        <Card>
          <h2 className="text-2xl font-bold mb-6">Chamada - {turma?.nome}</h2>
          
          <div className="space-y-2">
            {mockAlunos.map((aluno, index) => (
              <div 
                key={aluno.id} 
                className={`p-4 rounded-lg transition-all ${
                  presencas[aluno.id] 
                    ? 'bg-green-50 border-2 border-green-300' 
                    : 'bg-red-50 border-2 border-red-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <span className="font-bold text-gray-600 mr-4 w-8">{index + 1}</span>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mr-3">
                      {aluno.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold">{aluno.nome}</div>
                      <div className="text-sm text-gray-600">{aluno.matricula}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleTogglePresenca(aluno.id)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                        presencas[aluno.id]
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      <CheckCircle size={20} className="inline mr-2" />
                      Presente
                    </button>
                    
                    <button
                      onClick={() => handleTogglePresenca(aluno.id)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                        !presencas[aluno.id]
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      <XCircle size={20} className="inline mr-2" />
                      Falta
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div>
              {saved && (
                <span className="text-green-600 font-semibold flex items-center">
                  <CheckCircle size={20} className="mr-2" />
                  Presença salva com sucesso!
                </span>
              )}
            </div>
            <button onClick={handleSave} className="btn-primary flex items-center">
              <Save size={20} className="mr-2" />
              Salvar Presença
            </button>
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
