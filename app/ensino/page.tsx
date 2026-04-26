import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { BookOpen, Users, Target, Award, TrendingUp, Star, CheckCircle } from 'lucide-react'

export default function EnsinoPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Segmentos de Ensino</h1>
            <p className="text-xl opacity-95">Educação completa da infância ao ensino médio</p>
          </div>
        </section>

        {/* Educação Infantil */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <span className="text-5xl">🎨</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Educação Infantil</h2>
              <p className="text-gray-600 text-lg mb-6">
                Nossa Educação Infantil é pautada no desenvolvimento integral da criança, respeitando 
                suas individualidades e estimulando a curiosidade natural e o prazer pela descoberta.
              </p>
              <Link href="/ensino/infantil" className="btn-primary inline-block">
                Saiba mais sobre a Educação Infantil
              </Link>
            </div>
            
            <div>
              <Card>
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <BookOpen className="text-primary mr-2" size={24} />
                  Proposta Pedagógica
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Aprendizagem através do lúdico</li>
                  <li>• Desenvolvimento da coordenação motora</li>
                  <li>• Estímulo à socialização</li>
                  <li>• Contato com diferentes linguagens</li>
                  <li>• Alfabetização natural e respeitosa</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Ensino Fundamental */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card>
                  <h3 className="font-bold text-xl mb-4 flex items-center">
                    <Target className="text-primary mr-2" size={24} />
                    Metodologia
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Aprendizagem significativa e contextualizada</li>
                    <li>• Desenvolvimento do raciocínio lógico</li>
                    <li>• Projetos interdisciplinares</li>
                    <li>• Incentivo à pesquisa e autonomia</li>
                    <li>• Uso de tecnologia educacional</li>
                    <li>• Preparação para o Ensino Médio</li>
                  </ul>
                </Card>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <span className="text-5xl">📚</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Ensino Fundamental</h2>
                <p className="text-gray-600 text-lg mb-6">
                  No Ensino Fundamental, proporcionamos uma base sólida de conhecimentos, desenvolvendo 
                  habilidades essenciais para a formação acadêmica e pessoal de nossos alunos.
                </p>
                <Link href="/ensino/fundamental" className="btn-primary inline-block">
                  Saiba mais sobre o Ensino Fundamental
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ensino Médio */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <span className="text-5xl">🎓</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Ensino Médio</h2>
              <p className="text-gray-600 text-lg mb-6">
                Nosso Ensino Médio oferece preparação completa para o ENEM, vestibulares e para a vida, 
                com foco no desenvolvimento do pensamento crítico e na construção do projeto de vida de cada aluno.
              </p>
              <Link href="/ensino/medio" className="btn-primary inline-block">
                Saiba mais sobre o Ensino Médio
              </Link>
            </div>
            
            <div>
              <Card>
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <Users className="text-primary mr-2" size={24} />
                  Atividades
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Preparação intensiva para ENEM e vestibulares</li>
                  <li>• Simulados periódicos</li>
                  <li>• Orientação vocacional</li>
                  <li>• Projetos de pesquisa científica</li>
                  <li>• Olimpíadas acadêmicas</li>
                  <li>• Aulas de redação e atualidades</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-primary text-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o Liceu?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <Award className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Aprovação em Universidades</h4>
                <p className="text-sm opacity-90">Alto índice de aprovação nas melhores universidades do país</p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <Users className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Turmas Reduzidas</h4>
                <p className="text-sm opacity-90">Máximo de 25 alunos por turma para melhor acompanhamento</p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <BookOpen className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Material Didático</h4>
                <p className="text-sm opacity-90">Material pedagógico atualizado e de qualidade</p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <Target className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Acompanhamento Individual</h4>
                <p className="text-sm opacity-90">Monitoramento contínuo do desenvolvimento de cada aluno</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
