'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockStudents } from '@/lib/mockData'
import { Users, Plus, Search, Edit, Trash2, Eye } from 'lucide-react'
import { useState } from 'react'

export default function AlunosAdminPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)

  const alunosFiltrados = mockStudents.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aluno.matricula.includes(searchTerm)
  )

  return (
    <PortalLayout role="admin">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Gestão de Alunos</h1>
            <p className="text-gray-600">Cadastro e gerenciamento de alunos</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Novo Aluno
          </button>
        </div>

        {/* Busca */}
        <Card className="mb-8">
          <div className="flex items-center">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome ou matrícula..."
              className="flex-1 outline-none text-lg"
            />
          </div>
        </Card>

        {/* Formulário de Novo Aluno */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4">Cadastrar Novo Aluno</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Data de Nascimento</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Matrícula</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Série</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>9º Ano</option>
                    <option>8º Ano</option>
                    <option>7º Ano</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Turma</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>9º A</option>
                    <option>9º B</option>
                    <option>8º A</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Nome do Responsável</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1">
                  Cadastrar Aluno
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

        {/* Lista de Alunos */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Users className="text-primary mr-2" size={28} />
            Lista de Alunos ({alunosFiltrados.length})
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b-2 border-primary">
                <tr>
                  <th className="text-left p-4 font-bold">Nome</th>
                  <th className="text-left p-4 font-bold">Matrícula</th>
                  <th className="text-left p-4 font-bold">Turma</th>
                  <th className="text-left p-4 font-bold">Responsável</th>
                  <th className="text-center p-4 font-bold">Ações</th>
                </tr>
              </thead>
              <tbody>
                {alunosFiltrados.map((aluno) => (
                  <tr key={aluno.id} className="border-b border-gray-200 hover:bg-neutral-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mr-3">
                          {aluno.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <span className="font-semibold">{aluno.nome}</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm">{aluno.matricula}</td>
                    <td className="p-4">{aluno.turma}</td>
                    <td className="p-4 text-gray-600">{aluno.responsavel}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Ver detalhes">
                          <Eye className="text-blue-600" size={18} />
                        </button>
                        <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Editar">
                          <Edit className="text-primary" size={18} />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                          <Trash2 className="text-red-600" size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
