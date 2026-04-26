'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses } from '@/lib/mockData'
import { FileText, Download, BarChart, TrendingUp } from 'lucide-react'

export default function BoletinsAdminPage() {
  return (
    <PortalLayout role="admin">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Boletins e Relatórios</h1>
          <p className="text-gray-600">Controle de notas, médias e desempenho</p>
        </div>

        {/* Estatísticas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <TrendingUp className="text-primary mx-auto mb-2" size={32} />
            <p className="text-gray-600 text-sm mb-1">Média Geral da Escola</p>
            <p className="text-4xl font-bold text-primary">7.8</p>
          </Card>

          <Card className="text-center">
            <div className="text-3xl mb-2">🟢</div>
            <p className="text-gray-600 text-sm mb-1">Aprovados</p>
            <p className="text-4xl font-bold text-green-600">87%</p>
          </Card>

          <Card className="text-center">
            <div className="text-3xl mb-2">🟡</div>
            <p className="text-gray-600 text-sm mb-1">Em Recuperação</p>
            <p className="text-4xl font-bold text-orange-600">10%</p>
          </Card>

          <Card className="text-center">
            <div className="text-3xl mb-2">🔴</div>
            <p className="text-gray-600 text-sm mb-1">Reprovados</p>
            <p className="text-4xl font-bold text-red-600">3%</p>
          </Card>
        </div>

        {/* Desempenho por Turma */}
        <Card className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BarChart className="text-primary mr-2" size={28} />
            Desempenho por Turma
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b-2 border-primary">
                <tr>
                  <th className="text-left p-4 font-bold">Turma</th>
                  <th className="text-center p-4 font-bold">Alunos</th>
                  <th className="text-center p-4 font-bold">Média</th>
                  <th className="text-center p-4 font-bold">Aprovados</th>
                  <th className="text-center p-4 font-bold">Recuperação</th>
                  <th className="text-center p-4 font-bold">Reprovados</th>
                  <th className="text-center p-4 font-bold">Ações</th>
                </tr>
              </thead>
              <tbody>
                {mockClasses.map((turma) => {
                  const media = 7.8 + (Math.random() * 2 - 1)
                  const aprovados = Math.floor(85 + Math.random() * 10)
                  const recuperacao = Math.floor(10 + Math.random() * 5)
                  const reprovados = 100 - aprovados - recuperacao

                  return (
                    <tr key={turma.id} className="border-b border-gray-200 hover:bg-neutral-50">
                      <td className="p-4 font-semibold">{turma.nome}</td>
                      <td className="text-center p-4">{turma.alunos}</td>
                      <td className="text-center p-4">
                        <span className="font-bold text-lg text-primary">{media.toFixed(1)}</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-green-600 font-semibold">{aprovados}%</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-orange-600 font-semibold">{recuperacao}%</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="text-red-600 font-semibold">{reprovados}%</span>
                      </td>
                      <td className="text-center p-4">
                        <button className="btn-primary text-sm py-1 px-3">
                          Ver Boletim
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Relatórios Disponíveis */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FileText className="text-primary mr-2" size={28} />
            Relatórios Disponíveis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-neutral-50 transition-all text-left">
              <Download className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-1">Boletim Geral</h3>
              <p className="text-sm text-gray-600">Notas de todos os alunos</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-neutral-50 transition-all text-left">
              <Download className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-1">Relatório de Frequência</h3>
              <p className="text-sm text-gray-600">Faltas por aluno e turma</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-neutral-50 transition-all text-left">
              <Download className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-1">Desempenho por Disciplina</h3>
              <p className="text-sm text-gray-600">Análise por matéria</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-neutral-50 transition-all text-left">
              <Download className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-1">Alunos em Recuperação</h3>
              <p className="text-sm text-gray-600">Lista de alunos abaixo da média</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-neutral-50 transition-all text-left">
              <Download className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-1">Histórico Escolar</h3>
              <p className="text-sm text-gray-600">Dados completos do aluno</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-neutral-50 transition-all text-left">
              <Download className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-1">Estatísticas Gerais</h3>
              <p className="text-sm text-gray-600">Visão geral da escola</p>
            </button>
          </div>
        </Card>
      </div>
    </PortalLayout>
  )
}
