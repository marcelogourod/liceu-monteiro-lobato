'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockMaterials } from '@/lib/mockData'
import { BookOpen, Plus, Upload, Trash2, Edit, FileText, Video, Presentation, File } from 'lucide-react'
import { useState } from 'react'

export default function MateriaisProfessorPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <PortalLayout role="professor">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Materiais de Aula</h1>
            <p className="text-gray-600">Publique e gerencie materiais para seus alunos</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Novo Material
          </button>
        </div>

        {/* Formulário de Novo Material */}
        {showForm && (
          <Card className="mb-8 border-2 border-primary">
            <h3 className="text-xl font-bold mb-4">Publicar Novo Material</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Título</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ex: Apostila de Funções"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Disciplina</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Matemática</option>
                    <option>Português</option>
                    <option>História</option>
                    <option>Geografia</option>
                    <option>Ciências</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Turma</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>9º A</option>
                    <option>9º B</option>
                    <option>8º A</option>
                    <option>Todas as turmas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>PDF</option>
                    <option>Vídeo</option>
                    <option>Apresentação</option>
                    <option>Link</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Arquivo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="mx-auto text-gray-400 mb-3" size={40} />
                  <p className="text-gray-600">Clique para fazer upload ou arraste o arquivo aqui</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button type="button" className="btn-primary flex-1">
                  Publicar Material
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

        {/* Materiais Publicados */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="text-primary mr-2" size={28} />
            Materiais Publicados
          </h2>

          <div className="space-y-4">
            {mockMaterials.map((material) => (
              <div key={material.id} className="p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 text-2xl ${
                      material.tipo === 'pdf' ? 'bg-red-100' :
                      material.tipo === 'video' ? 'bg-purple-100' :
                      material.tipo === 'apresentacao' ? 'bg-orange-100' :
                      'bg-blue-100'
                    }`}>
                      {material.tipo === 'pdf' ? <FileText size={24} className="text-red-600" /> :
                       material.tipo === 'video' ? <Video size={24} className="text-purple-600" /> :
                       material.tipo === 'apresentacao' ? <Presentation size={24} className="text-orange-600" /> :
                       <File size={24} className="text-blue-600" />}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{material.titulo}</h3>
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {material.disciplina}
                        </span>
                        <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full uppercase">
                          {material.tipo}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Publicado em {material.dataPublicacao}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors" title="Editar">
                      <Edit className="text-primary" size={20} />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                      <Trash2 className="text-red-600" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
