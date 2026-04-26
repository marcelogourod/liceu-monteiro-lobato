'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses, mockStudents } from '@/lib/mockData'
import { FileText, Save, Plus } from 'lucide-react'
import { useState } from 'react'

export default function NotasProfessorPage() {
  const [turmaSelecionada, setTurmaSelecionada] = useState(mockClasses[0].id)
  const [tipoAvaliacao, setTipoAvaliacao] = useState('Prova')
  const [notas, setNotas] = useState<Record<string, string>>(
    mockAlunos.reduce((acc, aluno) => ({ ...acc, [aluno.id]: '' }), {})
  )

  const handleSave = () => {
    alert('Notas lançadas com sucesso!')
  }

  const turma = mockClasses.find(t => t.id === turmaSelecionada)

  return (
    <PortalLayout role="professor">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Lançamento de Notas</h1>
          <p className="text-gray-600">Registre as avaliações dos alunos</p>
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

        {/* Configuração da Avaliação */}
        <Card className="mb-8">
          <h3 className="font-bold text-lg mb-4">Configuração da Avaliação</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Tipo de Avaliação</label>
              <select
                value={tipoAvaliacao}
                onChange={(e) => setTipoAvaliacao(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Prova</option>
                <option>Trabalho</option>
                <option>Exercício</option>
                <option>Seminário</option>
                <option>Participação</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Bimestre</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>1º Bimestre</option>
                <option>2º Bimestre</option>
                <option>3º Bimestre</option>
                <option>4º Bimestre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Data</label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </Card>

        {/* Lançamento de Notas */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="text-primary mr-2" size={28} />
            Lançar Notas - {turma?.nome}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b-2 border-primary">
                <tr>
                  <th className="text-left p-4 font-bold">Nº</th>
                  <th className="text-left p-4 font-bold">Aluno</th>
                  <th className="text-center p-4 font-bold">Nota (0-10)</th>
                  <th className="text-center p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockAlunos.map((aluno, index) => {
                  const nota = parseFloat(notas[aluno.id])
                  return (
                    <tr key={aluno.id} className="border-b border-gray-200 hover:bg-neutral-50">
                      <td className="p-4 font-semibold">{index + 1}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mr-3">
                            {aluno.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <span className="font-semibold">{aluno.nome}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          min="0"
                          max="10"
                          step="0.1"
                          value={notas[aluno.id]}
                          onChange={(e) => setNotas(prev => ({ ...prev, [aluno.id]: e.target.value }))}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-center font-bold text-lg focus:outline-none focus:ring-2 focus:ring-primary mx-auto block"
                          placeholder="0.0"
                        />
                      </td>
                      <td className="p-4 text-center">
                        {notas[aluno.id] && !isNaN(nota) ? (
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            nota >= 7 ? 'bg-green-100 text-green-700' :
                            nota >= 5 ? 'bg-orange-100 text-orange-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {nota >= 7 ? 'Aprovado' : nota >= 5 ? 'Recuperação' : 'Reprovado'}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-sm text-gray-600">Presentes: </span>
                <span className="font-bold text-green-600">{totalPresentes}</span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Faltas: </span>
                <span className="font-bold text-red-600">{totalFaltas}</span>
              </div>
            </div>
            <button onClick={handleSave} className="btn-primary flex items-center">
              <Save size={20} className="mr-2" />
              Salvar Notas
            </button>
          </div>
        </Card>

        {/* Ações Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-left">
            <FileText className="text-primary mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Importar Notas</h3>
            <p className="text-sm text-gray-600">Faça upload de planilha com notas</p>
          </button>

          <button className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-left">
            <FileText className="text-primary mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Histórico de Notas</h3>
            <p className="text-sm text-gray-600">Visualize notas anteriores</p>
          </button>
        </div>
      </div>
    </PortalLayout>
  )
}
