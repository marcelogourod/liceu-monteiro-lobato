'use client'

import PortalLayout from '@/components/PortalLayout'
import Card from '@/components/Card'
import { mockClasses, mockStudents, mockActivities } from '@/lib/mockData'
import { Users, GraduationCap, BookOpen, BarChart, TrendingUp, AlertCircle } from 'lucide-react'

export default function AdminDashboard() {
  const totalAlunos = 450
  const totalProfessores = 35
  const totalTurmas = 18
  const mediaGeralEscola = 7.8

  return (
    <PortalLayout role="admin">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Painel Administrativo</h1>
          <p className="text-gray-600">Gestão completa da instituição</p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card hover={false} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm mb-1">Total de Alunos</p>
                <p className="text-3xl font-bold">{totalAlunos}</p>
              </div>
              <Users size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm mb-1">Professores</p>
                <p className="text-3xl font-bold">{totalProfessores}</p>
              </div>
              <GraduationCap size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm mb-1">Turmas Ativas</p>
                <p className="text-3xl font-bold">{totalTurmas}</p>
              </div>
              <BookOpen size={40} className="opacity-80" />
            </div>
          </Card>

          <Card hover={false} className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm mb-1">Média Geral</p>
                <p className="text-3xl font-bold">{mediaGeralEscola}</p>
              </div>
              <TrendingUp size={40} className="opacity-80" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estatísticas por Segmento */}
          <Card>
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <BarChart className="text-primary mr-2" size={24} />
              Alunos por Segmento
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Educação Infantil</span>
                  <span className="font-bold text-primary">120 alunos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary rounded-full h-3" style={{ width: '27%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Ensino Fundamental</span>
                  <span className="font-bold text-primary">230 alunos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary rounded-full h-3" style={{ width: '51%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Ensino Médio</span>
                  <span className="font-bold text-primary">100 alunos</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary rounded-full h-3" style={{ width: '22%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Alertas e Pendências */}
          <Card>
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <AlertCircle className="text-orange-600 mr-2" size={24} />
              Alertas e Pendências
            </h2>
            
            <div className="space-y-3">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">Alunos com excesso de faltas</h4>
                    <p className="text-sm text-red-700">12 alunos ultrapassaram 20% de faltas</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-1">Notas pendentes de lançamento</h4>
                    <p className="text-sm text-orange-700">5 professores não lançaram notas</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-1">Documentação pendente</h4>
                    <p className="text-sm text-yellow-700">8 alunos com documentação incompleta</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Ações Rápidas */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Ações Rápidas</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-neutral-50 rounded-lg hover:bg-primary hover:text-white transition-all text-left">
                <Users className="mb-2" size={24} />
                <div className="font-semibold">Cadastrar Aluno</div>
              </button>
              
              <button className="p-4 bg-neutral-50 rounded-lg hover:bg-primary hover:text-white transition-all text-left">
                <GraduationCap className="mb-2" size={24} />
                <div className="font-semibold">Cadastrar Professor</div>
              </button>
              
              <button className="p-4 bg-neutral-50 rounded-lg hover:bg-primary hover:text-white transition-all text-left">
                <BookOpen className="mb-2" size={24} />
                <div className="font-semibold">Criar Turma</div>
              </button>
              
              <button className="p-4 bg-neutral-50 rounded-lg hover:bg-primary hover:text-white transition-all text-left">
                <BarChart className="mb-2" size={24} />
                <div className="font-semibold">Relatórios</div>
              </button>
            </div>
          </Card>

          {/* Últimas Matrículas */}
          <Card>
            <h2 className="text-xl font-bold mb-6">Últimas Matrículas</h2>
            
            <div className="space-y-3">
              {[
                { nome: 'Lucas Fernandes', serie: '6º Ano', data: '15/03/2026' },
                { nome: 'Beatriz Souza', serie: '1º Ano EM', data: '14/03/2026' },
                { nome: 'Gabriel Costa', serie: 'Infantil II', data: '13/03/2026' },
              ].map((matricula, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mr-3">
                      {matricula.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{matricula.nome}</div>
                      <div className="text-xs text-gray-600">{matricula.serie}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{matricula.data}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Desempenho por Turma */}
        <Card className="mt-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <BarChart className="text-primary mr-2" size={28} />
            Desempenho por Turma - 1º Bimestre
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
                </tr>
              </thead>
              <tbody>
                {mockClasses.map((turma) => (
                  <tr key={turma.id} className="border-b border-gray-200 hover:bg-neutral-50">
                    <td className="p-4 font-semibold">{turma.nome}</td>
                    <td className="text-center p-4">{turma.students}</td>
                    <td className="text-center p-4">
                      <span className="font-bold text-lg text-green-600">8.2</span>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-green-600 font-semibold">85%</span>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-orange-600 font-semibold">12%</span>
                    </td>
                    <td className="text-center p-4">
                      <span className="text-red-600 font-semibold">3%</span>
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

