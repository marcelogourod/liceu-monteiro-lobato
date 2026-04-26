import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { GraduationCap, Target, Trophy, TrendingUp } from 'lucide-react'

export default function EnsinoMedioPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container">
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl">🎓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Ensino Médio</h1>
            <p className="text-xl text-center opacity-95">Preparação completa para o ENEM, vestibulares e para a vida</p>
          </div>
        </section>

        {/* Proposta Pedagógica */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Preparação para o Futuro</h2>
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
              Nosso Ensino Médio oferece preparação completa para o ENEM e vestibulares, com foco no 
              desenvolvimento do pensamento crítico e na construção do projeto de vida de cada aluno.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <Target className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Preparação Intensiva</h3>
                <p className="text-gray-600">
                  Metodologia focada em ENEM e principais vestibulares, com resolução de questões 
                  e simulados periódicos.
                </p>
              </Card>

              <Card>
                <Trophy className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Resultados Comprovados</h3>
                <p className="text-gray-600">
                  Alto índice de aprovação nas melhores universidades públicas e privadas do país.
                </p>
              </Card>

              <Card>
                <GraduationCap className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Orientação Vocacional</h3>
                <p className="text-gray-600">
                  Apoio na escolha da carreira através de testes, palestras com profissionais e 
                  visitas a universidades.
                </p>
              </Card>

              <Card>
                <TrendingUp className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Projeto de Vida</h3>
                <p className="text-gray-600">
                  Desenvolvimento de competências socioemocionais e planejamento do futuro pessoal 
                  e profissional.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <h2 className="section-title text-center">Diferenciais do Ensino Médio</h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">📝</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Simulados Semanais</h4>
                  <p className="text-gray-600">
                    Provas no formato ENEM toda semana para familiarização com o estilo das questões 
                    e gestão do tempo
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">✍️</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Redação Intensiva</h4>
                  <p className="text-gray-600">
                    Aulas específicas de redação com correção individualizada e técnicas para obter 
                    nota 1000 no ENEM
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">🔬</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Aulas Práticas em Laboratório</h4>
                  <p className="text-gray-600">
                    Experimentos de Física, Química e Biologia que consolidam o aprendizado teórico
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">📱</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Plataforma Digital</h4>
                  <p className="text-gray-600">
                    Acesso a videoaulas, materiais complementares e banco de questões online
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">👥</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Plantão de Dúvidas</h4>
                  <p className="text-gray-600">
                    Horários específicos para atendimento individual com professores de todas as disciplinas
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">🏆</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Olimpíadas Científicas</h4>
                  <p className="text-gray-600">
                    Participação em olimpíadas de Matemática, Física, Química, Biologia e outras áreas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="section-container">
          <h2 className="section-title text-center">Nossos Resultados</h2>
          <p className="section-subtitle text-center">
            Aprovações que comprovam nossa excelência
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
              <p className="font-semibold text-lg">Taxa de Aprovação</p>
              <p className="text-sm text-gray-600 mt-2">em universidades públicas e privadas</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-5xl font-bold text-blue-600 mb-2">850+</div>
              <p className="font-semibold text-lg">Média no ENEM</p>
              <p className="text-sm text-gray-600 mt-2">acima da média nacional</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-5xl font-bold text-purple-600 mb-2">45%</div>
              <p className="font-semibold text-lg">Universidades Públicas</p>
              <p className="text-sm text-gray-600 mt-2">USP, UNICAMP, UNESP e outras</p>
            </Card>
          </div>
        </section>

        {/* Áreas de Conhecimento */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <h2 className="section-title text-center">Áreas de Conhecimento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-primary">📚 Linguagens e Códigos</h4>
                <p className="text-gray-600 text-sm">Português, Literatura, Inglês, Artes, Ed. Física</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-primary">🔢 Matemática</h4>
                <p className="text-gray-600 text-sm">Álgebra, Geometria, Estatística, Probabilidade</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-primary">🔬 Ciências da Natureza</h4>
                <p className="text-gray-600 text-sm">Física, Química, Biologia</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-lg mb-3 text-primary">🌍 Ciências Humanas</h4>
                <p className="text-gray-600 text-sm">História, Geografia, Filosofia, Sociologia</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">Prepare-se para o sucesso no Ensino Médio</h2>
            <p className="text-lg mb-8 opacity-95">
              Aprovação nas melhores universidades começa aqui
            </p>
            <Link href="/matriculas" className="btn-primary bg-white text-primary hover:bg-neutral-50 inline-block">
              Fazer matrícula
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
