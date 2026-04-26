'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses } from '@/lib/mockData'
import { BookOpen, Plus, Users, Edit, Trash2, Eye } from 'lucide-react'
import { useState } from 'react'

export default function TurmasAdminPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <PortalLayout role="admin">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Gestão de Turmas</h1>
            <p className="text-gray-600">Cadastro e organização de turmas</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Nova Turma
          </button>
        </div>

        {/* Formulário */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4">Cadastrar Nova Turma</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome da Turma</label>
                  <input
                    type="text"
                    placeholder="Ex: 9º A"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Série</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>9º Ano</option>
                    <option>8º Ano</option>
                    <option>7º Ano</option>
                    <option>6º Ano</option>
                    <option>5º Ano</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Ano Letivo</label>
                  <input
                    type="number"
                    defaultValue="2026"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Professor Regente (Opcional)</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Selecione um professor</option>
                  <option>Prof. Carlos Silva</option>
                  <option>Profa. Maria Santos</option>
                  <option>Profa. Ana Costa</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1">
                  Cadastrar Turma
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

        {/* Lista de Turmas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClasses.map((turma) => (
            <Card key={turma.id}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold mr-3">
                    {turma.name}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{turma.name}</h3>
                    <p className="text-sm text-gray-600">{turma.grade}</p>
                  </div>
                </div>
              </div>

              <div className="mb-4 p-3 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="text-primary mr-2" size={20} />
                    <span className="font-semibold">{turma.students} alunos</span>
                  </div>
                  <span className="text-xs text-gray-500">Ano {turma.year}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 text-sm py-2 px-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors flex items-center justify-center">
                  <Eye size={16} className="mr-1" />
                  Ver Turma
                </button>
                <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                  <Edit className="text-primary" size={18} />
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="text-red-600" size={18} />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Estatísticas */}
        <Card className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Estatísticas Gerais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Total de Turmas</p>
              <p className="text-4xl font-bold text-primary">{mockClasses.length}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Total de Alunos</p>
              <p className="text-4xl font-bold text-primary">
                {mockClasses.reduce((acc, t) => acc + t.students, 0)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Média de Alunos</p>
              <p className="text-4xl font-bold text-primary">
                {(mockClasses.reduce((acc, t) => acc + t.students, 0) / mockClasses.length).toFixed(0)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-1">Professores</p>
              <p className="text-4xl font-bold text-primary">{professores.length}</p>
            </div>
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}

