import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { BookOpen, Target, Users, Lightbulb } from 'lucide-react'

export default function EnsinoFundamentalPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container">
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl">📚</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Ensino Fundamental</h1>
            <p className="text-xl text-center opacity-95">Formação sólida com foco no desenvolvimento integral</p>
          </div>
        </section>

        {/* Proposta Pedagógica */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Nossa Metodologia</h2>
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
              No Ensino Fundamental, proporcionamos uma base sólida de conhecimentos, desenvolvendo 
              habilidades essenciais para a formação acadêmica e pessoal de nossos alunos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <BookOpen className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Aprendizagem Significativa</h3>
                <p className="text-gray-600">
                  Conteúdos contextualizados com a realidade dos alunos, tornando o aprendizado 
                  mais relevante e duradouro.
                </p>
              </Card>

              <Card>
                <Target className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Desenvolvimento de Competências</h3>
                <p className="text-gray-600">
                  Foco no desenvolvimento de habilidades cognitivas, socioemocionais e práticas 
                  essenciais para o século XXI.
                </p>
              </Card>

              <Card>
                <Lightbulb className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Projetos Interdisciplinares</h3>
                <p className="text-gray-600">
                  Integração entre disciplinas através de projetos que estimulam o pensamento 
                  crítico e a criatividade.
                </p>
              </Card>

              <Card>
                <Users className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Trabalho Colaborativo</h3>
                <p className="text-gray-600">
                  Atividades em grupo que desenvolvem cooperação, comunicação e habilidades sociais.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Anos Iniciais e Finais */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-primary">Anos Iniciais (1º ao 5º ano)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Alfabetização e letramento respeitoso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Desenvolvimento do raciocínio lógico-matemático</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Iniciação científica através de experimentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Expressão artística e cultural</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Educação física e desenvolvimento motor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Inglês desde o 1º ano</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="text-2xl font-bold mb-4 text-primary">Anos Finais (6º ao 9º ano)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Aprofundamento nas disciplinas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Desenvolvimento do pensamento crítico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Projetos de pesquisa e investigação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Uso de tecnologia educacional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Preparação para o Ensino Médio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Orientação de estudos e organização</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Disciplinas */}
        <section className="section-container">
          <h2 className="section-title text-center">Disciplinas</h2>
          <p className="section-subtitle text-center">
            Currículo completo e atualizado
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { nome: 'Português', emoji: '📖' },
              { nome: 'Matemática', emoji: '🔢' },
              { nome: 'Ciências', emoji: '🔬' },
              { nome: 'História', emoji: '🏛️' },
              { nome: 'Geografia', emoji: '🌍' },
              { nome: 'Inglês', emoji: '🇬🇧' },
              { nome: 'Ed. Física', emoji: '⚽' },
              { nome: 'Artes', emoji: '🎨' },
              { nome: 'Música', emoji: '🎵' },
              { nome: 'Informática', emoji: '💻' }
            ].map((disciplina) => (
              <div key={disciplina.nome} className="bg-white p-4 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{disciplina.emoji}</div>
                <div className="font-semibold text-sm">{disciplina.nome}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">Garanta a vaga no Ensino Fundamental</h2>
            <p className="text-lg mb-8 opacity-95">
              Base sólida para o futuro acadêmico do seu filho
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
