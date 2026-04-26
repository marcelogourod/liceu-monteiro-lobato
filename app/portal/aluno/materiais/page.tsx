'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockMaterials } from '@/lib/mockData'
import { BookOpen, Download, ExternalLink, FileText, Video, Presentation } from 'lucide-react'

export default function MateriaisPage() {
  return (
    <PortalLayout role="aluno">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Materiais de Aula</h1>
          <p className="text-gray-600">Acesse apostilas, vídeos e apresentações</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockMaterials.map((material) => (
            <Card key={material.id}>
              <div className="flex items-start">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 ${
                  material.type === 'pdf' ? 'bg-red-100' :
                  material.type === 'video' ? 'bg-purple-100' :
                  material.type === 'apresentacao' ? 'bg-orange-100' :
                  'bg-blue-100'
                }`}>
                  {material.type === 'pdf' && <FileText className="text-red-600" size={28} />}
                  {material.type === 'video' && <Video className="text-purple-600" size={28} />}
                  {material.type === 'apresentacao' && <Presentation className="text-orange-600" size={28} />}
                  {material.type === 'link' && <ExternalLink className="text-blue-600" size={28} />}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{material.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {material.discipline}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full uppercase">
                      {material.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Publicado por {material.professor} em {material.datePublished}
                  </p>
                  <button className="btn-primary text-sm py-2 px-4 flex items-center">
                    <Download size={16} className="mr-2" />
                    {material.type === 'video' ? 'Assistir' : 
                     material.type === 'link' ? 'Acessar' : 'Baixar'}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Organizados por Disciplina */}
        <Card className="mt-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BookOpen className="text-primary mr-2" size={28} />
            Materiais por Disciplina
          </h2>
          
          <div className="space-y-4">
            {['Matemática', 'Português', 'História', 'Geografia', 'Ciências'].map((disciplina) => {
              const materiaisDisciplina = mockMaterials.filter(m => m.discipline === disciplina)
              return (
                <div key={disciplina} className="border-b border-gray-200 pb-4 last:border-0">
                  <button className="w-full flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                    <span className="font-semibold">{disciplina}</span>
                    <span className="text-sm text-gray-600">{materiaisDisciplina.length} materiais</span>
                  </button>
                </div>
              )
            })}
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
