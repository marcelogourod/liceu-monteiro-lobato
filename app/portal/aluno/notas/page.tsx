'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockGrades } from '@/lib/mockData'
import { FileText, TrendingUp, Trophy, ThumbsUp, BookOpen } from 'lucide-react'

export default function NotasPage() {
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
    <PortalLayout role="aluno">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Minhas Notas</h1>
          <p className="text-gray-600">Acompanhe seu desempenho acadêmico</p>
        </div>

        {/* Média Geral */}
        <Card className="bg-gradient-to-br from-primary to-secondary text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-lg mb-2">Média Geral - 1º Bimestre</p>
              <p className="text-5xl font-bold mb-2">{mediaGeral.toFixed(2)}</p>
              <div className="flex items-center gap-2 text-blue-100">
                {mediaGeral >= 7 ? (
                  <>
                    <Trophy size={20} />
                    <span>Excelente desempenho!</span>
                  </>
                ) : mediaGeral >= 5 ? (
                  <>
                    <ThumbsUp size={20} />
                    <span>Continue se esforçando!</span>
                  </>
                ) : (
                  <>
                    <BookOpen size={20} />
                    <span>Busque apoio dos professores</span>
                  </>
                )}
              </div>
            </div>
            <TrendingUp size={80} className="opacity-50" />
          </div>
        </Card>

        {/* Notas por Disciplina */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="text-primary mr-2" size={28} />
            Notas Detalhadas
          </h2>

          <div className="space-y-6">
            {mediasPorDisciplina.map(({ disciplina, media, notas }) => (
              <div key={disciplina} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{disciplina}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Média</div>
                    <div className={`text-2xl font-bold ${
                      media >= 7 ? 'text-green-600' : media >= 5 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {media.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {notas.map((nota) => (
                    <div key={nota.id} className="p-4 bg-neutral-50 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">{nota.date}</div>
                      <div className="font-semibold mb-1">{nota.type}</div>
                      <div className={`text-2xl font-bold ${
                        nota.value >= 7 ? 'text-green-600' : nota.value >= 5 ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {nota.value.toFixed(1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Gráfico de Desempenho */}
        <Card className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Seu Desempenho</h2>
          <div className="space-y-4">
            {mediasPorDisciplina.map(({ disciplina, media }) => (
              <div key={disciplina}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{disciplina}</span>
                  <span className="font-bold">{media.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className={`rounded-full h-4 transition-all ${
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
