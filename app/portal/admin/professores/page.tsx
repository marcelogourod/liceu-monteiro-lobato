'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { GraduationCap, Plus, Search, Edit, Trash2, Eye, Mail } from 'lucide-react'
import { useState } from 'react'

const professores = [
  { id: '1', nome: 'Carlos Silva', disciplina: 'Matemática', turmas: ['9º A', '9º B', '8º A'], email: 'carlos@liceu.edu.br' },
  { id: '2', nome: 'Maria Santos', disciplina: 'Português', turmas: ['9º A', '8º A'], email: 'maria@liceu.edu.br' },
  { id: '3', nome: 'Ana Costa', disciplina: 'História', turmas: ['9º A', '9º B'], email: 'ana@liceu.edu.br' },
  { id: '4', nome: 'Roberto Lima', disciplina: 'Geografia', turmas: ['8º A'], email: 'roberto@liceu.edu.br' },
  { id: '5', nome: 'Paula Oliveira', disciplina: 'Ciências', turmas: ['9º A', '9º B', '8º A'], email: 'paula@liceu.edu.br' },
]

export default function ProfessoresAdminPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)

  const professoresFiltrados = professores.filter(prof =>
    prof.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.disciplina.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <PortalLayout role="admin">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Gestão de Professores</h1>
            <p className="text-gray-600">Cadastro e gerenciamento do corpo docente</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Novo Professor
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
              placeholder="Buscar por nome ou disciplina..."
              className="flex-1 outline-none text-lg"
            />
          </div>
        </Card>

        {/* Formulário */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4">Cadastrar Novo Professor</h3>
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
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Disciplina Principal</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Matemática</option>
                    <option>Português</option>
                    <option>História</option>
                    <option>Geografia</option>
                    <option>Ciências</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1">
                  Cadastrar Professor
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

        {/* Lista de Professores */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="text-primary mr-2" size={28} />
            Corpo Docente ({professoresFiltrados.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professoresFiltrados.map((professor) => (
              <div key={professor.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      {professor.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{professor.nome}</h3>
                      <p className="text-sm text-primary font-semibold mb-1">{professor.disciplina}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Mail size={14} className="mr-1" />
                        {professor.email}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-600 mb-1">Turmas:</p>
                  <div className="flex flex-wrap gap-2">
                    {professor.turmas.map((turma, idx) => (
                      <span key={idx} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">
                        {turma}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t border-gray-200">
                  <button className="flex-1 btn-primary text-sm py-2 flex items-center justify-center">
                    <Eye size={16} className="mr-1" />
                    Ver Detalhes
                  </button>
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                    <Edit className="text-primary" size={18} />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="text-red-600" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
