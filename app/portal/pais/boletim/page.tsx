'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockGrades } from '@/lib/mockData'
import { FileText, Download, TrendingUp } from 'lucide-react'

export default function BoletimPage() {
  // Agrupa notas por disciplina
  const notasPorDisciplina = mockGrades.reduce((acc, nota) => {
    if (!acc[nota.discipline]) {
      acc[nota.discipline] = []
    }
    acc[nota.discipline].push(nota)
    return acc
  }, {} as Record<string, typeof mockGrades>)

  // Calcula média por disciplina
  const mediasPorDisciplina = Object.entries(notasPorDisciplina).map(([disciplina, notas]) => {
    const media = notas.reduce((sum, nota) => sum + nota.value, 0) / notas.length
    return { disciplina, media, notas }
  })

  const mediaGeral = mockGrades.reduce((acc, nota) => acc + nota.value, 0) / mockGrades.length

  return (
    <PortalLayout role="responsavel">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Boletim Escolar</h1>
          <p className="text-gray-600">Acompanhamento detalhado das notas e desempenho</p>
        </div>

        {/* Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Média Geral</p>
                <p className="text-4xl font-bold">{mediaGeral.toFixed(2)}</p>
                <p className="text-blue-100 text-sm mt-2">1º Bimestre 2026</p>
              </div>
              <TrendingUp size={48} className="opacity-80" />
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Status</p>
              <p className="text-2xl font-bold text-green-600 mb-2">Aprovado</p>
              <p className="text-sm text-gray-500">Média mínima: 6.0</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Disciplinas</p>
              <p className="text-2xl font-bold text-primary mb-2">{Object.keys(notasPorDisciplina).length}</p>
              <p className="text-sm text-gray-500">Total de matérias</p>
            </div>
          </Card>
        </div>

        {/* Boletim Detalhado */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <FileText className="text-primary mr-2" size={28} />
              Notas por Disciplina
            </h2>
            <button className="btn-primary flex items-center">
              <Download size={18} className="mr-2" />
              Exportar PDF
            </button>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-neutral-50 border-b-2 border-primary">
                <tr>
                  <th className="text-left p-4 font-bold">Disciplina</th>
                  <th className="text-center p-4 font-bold">Prova 1</th>
                  <th className="text-center p-4 font-bold">Trabalho</th>
                  <th className="text-center p-4 font-bold">Prova 2</th>
                  <th className="text-center p-4 font-bold">Média</th>
                  <th className="text-center p-4 font-bold">Situação</th>
                </tr>
              </thead>
              <tbody>
                {mediasPorDisciplina.map(({ disciplina, media, notas }) => (
                  <tr key={disciplina} className="border-b border-gray-200 hover:bg-neutral-50">
                    <td className="p-4 font-semibold">{disciplina}</td>
                    <td className="text-center p-4">{notas[0]?.value.toFixed(1) || '-'}</td>
                    <td className="text-center p-4">{notas[1]?.value.toFixed(1) || '-'}</td>
                    <td className="text-center p-4">{notas[2]?.value.toFixed(1) || '-'}</td>
                    <td className="text-center p-4">
                      <span className={`font-bold text-lg ${
                        media >= 7 ? 'text-green-600' : media >= 5 ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {media.toFixed(2)}
                      </span>
                    </td>
                    <td className="text-center p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        media >= 6 
                          ? 'bg-green-100 text-green-700' 
                          : media >= 4 
                          ? 'bg-orange-100 text-orange-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {media >= 6 ? 'Aprovado' : media >= 4 ? 'Recuperação' : 'Reprovado'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-neutral-50 border-t-2 border-primary">
                <tr>
                  <td colSpan={4} className="p-4 font-bold text-right">MÉDIA GERAL:</td>
                  <td className="text-center p-4">
                    <span className="font-bold text-xl text-primary">{mediaGeral.toFixed(2)}</span>
                  </td>
                  <td className="text-center p-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Aprovado
                    </span>
                  </td>
                </tr>
              </tfoot>
                </table>
              </div>
            </div>
          </div>
        </Card>

        {/* Gráfico de Desempenho */}
        <Card className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Desempenho por Disciplina</h2>
          <div className="space-y-4">
            {mediasPorDisciplina.map(({ disciplina, media }) => (
              <div key={disciplina}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-sm">{disciplina}</span>
                  <span className="font-bold text-sm">{media.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`rounded-full h-3 ${
                      media >= 7 ? 'bg-green-500' : media >= 5 ? 'bg-orange-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(media / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
