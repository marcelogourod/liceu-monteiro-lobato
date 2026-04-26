import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import { Target, Eye, Award, Heart, Users, BookOpen } from 'lucide-react'

export default function EscolaPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">A Escola</h1>
            <p className="text-xl opacity-95">Conheça nossa história e nossos valores</p>
          </div>
        </section>

        {/* História */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Nossa História</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                O <strong>Liceu Monteiro Lobato</strong> é uma instituição de ensino que há décadas se dedica 
                à formação integral de crianças e jovens, unindo tradição educacional e práticas pedagógicas 
                inovadoras.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Fundada com o propósito de oferecer educação de excelência, nossa escola sempre buscou não 
                apenas transmitir conhecimentos, mas formar cidadãos críticos, éticos e preparados para os 
                desafios do mundo contemporâneo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ao longo de nossa trajetória, conquistamos a confiança de milhares de famílias e nos tornamos 
                referência em educação de qualidade na região.
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Target className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Missão</h3>
                  <p className="text-gray-600">
                    Promover uma educação de excelência, desenvolvendo competências cognitivas, sociais e 
                    emocionais que preparem nossos alunos para serem protagonistas de suas vidas e agentes 
                    de transformação na sociedade.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Eye className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visão</h3>
                  <p className="text-gray-600">
                    Ser reconhecida como referência em educação inovadora e de qualidade, formando gerações 
                    preparadas para os desafios do século XXI, mantendo nossa essência de instituição que 
                    valoriza a tradição e o conhecimento.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Valores</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Excelência acadêmica</li>
                    <li>• Ética e respeito</li>
                    <li>• Inovação pedagógica</li>
                    <li>• Compromisso social</li>
                    <li>• Desenvolvimento integral</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Equipe Pedagógica */}
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Equipe Pedagógica</h2>
            <p className="section-subtitle">
              Profissionais dedicados e altamente qualificados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4">
                DM
              </div>
              <h4 className="font-bold text-lg mb-1">Dra. Maria Costa</h4>
              <p className="text-primary text-sm mb-2">Diretora Geral</p>
              <p className="text-gray-600 text-sm">Mestre em Educação - 25 anos de experiência</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4">
                PS
              </div>
              <h4 className="font-bold text-lg mb-1">Prof. Paulo Silva</h4>
              <p className="text-primary text-sm mb-2">Coordenador Pedagógico</p>
              <p className="text-gray-600 text-sm">Especialista em Metodologias Ativas</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4">
                AS
              </div>
              <h4 className="font-bold text-lg mb-1">Profa. Ana Santos</h4>
              <p className="text-primary text-sm mb-2">Coord. Ed. Infantil</p>
              <p className="text-gray-600 text-sm">Pedagoga - Especialista em primeira infância</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4">
                RL
              </div>
              <h4 className="font-bold text-lg mb-1">Prof. Roberto Lima</h4>
              <p className="text-primary text-sm mb-2">Coord. Ensino Médio</p>
              <p className="text-gray-600 text-sm">Doutor em Física - Ex-examinador ENEM</p>
            </Card>
          </div>
        </section>

        {/* Infraestrutura */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">Infraestrutura</h2>
              <p className="section-subtitle">
                Ambientes preparados para o melhor aprendizado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">🖥️</div>
                <h4 className="font-bold text-lg mb-2">Laboratórios de Informática</h4>
                <p className="text-gray-600 text-sm">Equipamentos modernos para aulas de tecnologia e programação</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">🔬</div>
                <h4 className="font-bold text-lg mb-2">Laboratórios de Ciências</h4>
                <p className="text-gray-600 text-sm">Espaços equipados para experimentos de Física, Química e Biologia</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-bold text-lg mb-2">Biblioteca</h4>
                <p className="text-gray-600 text-sm">Acervo com mais de 15 mil títulos e espaço de leitura aconchegante</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">⚽</div>
                <h4 className="font-bold text-lg mb-2">Quadra Poliesportiva</h4>
                <p className="text-gray-600 text-sm">Espaço coberto para práticas esportivas e eventos</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">🎨</div>
                <h4 className="font-bold text-lg mb-2">Ateliê de Artes</h4>
                <p className="text-gray-600 text-sm">Ambiente criativo para aulas de artes visuais e música</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">🍎</div>
                <h4 className="font-bold text-lg mb-2">Refeitório</h4>
                <p className="text-gray-600 text-sm">Alimentação balanceada com acompanhamento nutricional</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
