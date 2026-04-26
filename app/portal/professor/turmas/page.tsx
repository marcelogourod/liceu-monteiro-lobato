'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses, mockStudents } from '@/lib/mockData'
import { Users, Mail, Phone, UserCircle } from 'lucide-react'
import { useState } from 'react'

export default function TurmasPage() {
  const [turmaSelecionada, setTurmaSelecionada] = useState(mockClasses[0].id)
  const turma = mockClasses.find(t => t.id === turmaSelecionada)

  return (
    <PortalLayout role="professor">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Minhas Turmas</h1>
          <p className="text-gray-600">Gerencie suas turmas e alunos</p>
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
              {t.name}
            </button>
          ))}
        </div>

        {/* Informações da Turma */}
        {turma && (
          <>
            <Card className="mb-8 bg-gradient-to-br from-primary to-secondary text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{turma.name}</h2>
                  <p className="text-blue-100 text-lg">{turma.grade} • Ano letivo {turma.year}</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold">{turma.students}</div>
                  <div className="text-blue-100">alunos</div>
                </div>
              </div>
            </Card>

            {/* Lista de Alunos */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <Users className="text-primary mr-2" size={28} />
                  Lista de Alunos
                </h2>
                <button className="btn-primary text-sm">
                  Exportar Lista
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b-2 border-primary">
                    <tr>
                      <th className="text-left p-4 font-bold">Nº</th>
                      <th className="text-left p-4 font-bold">Nome</th>
                      <th className="text-left p-4 font-bold">Matrícula</th>
                      <th className="text-left p-4 font-bold">Responsável</th>
                      <th className="text-center p-4 font-bold">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockAlunos.map((aluno, index) => (
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
                        <td className="p-4 text-gray-600">{aluno.matricula}</td>
                        <td className="p-4 text-gray-600">{aluno.responsavel}</td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Ver perfil">
                              <UserCircle className="text-primary" size={20} />
                            </button>
                            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Enviar email">
                              <Mail className="text-primary" size={20} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}
      </div>
    </PortalLayout>
  )
}
