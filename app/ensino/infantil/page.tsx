import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { Heart, Users, Palette, Music } from 'lucide-react'

export default function EducacaoInfantilPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container">
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Educação Infantil</h1>
            <p className="text-xl text-center opacity-95">Desenvolvimento integral através do lúdico e da criatividade</p>
          </div>
        </section>

        {/* Proposta Pedagógica */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Proposta Pedagógica</h2>
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
              Nossa Educação Infantil é pautada no desenvolvimento integral da criança, respeitando 
              suas individualidades e estimulando a curiosidade natural e o prazer pela descoberta.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <Heart className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Acolhimento e Afeto</h3>
                <p className="text-gray-600">
                  Ambiente acolhedor e seguro onde cada criança é respeitada em sua individualidade 
                  e ritmo de desenvolvimento.
                </p>
              </Card>

              <Card>
                <Palette className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Aprendizagem Lúdica</h3>
                <p className="text-gray-600">
                  Brincadeiras e jogos como ferramentas principais de aprendizagem, estimulando 
                  criatividade e imaginação.
                </p>
              </Card>

              <Card>
                <Users className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Socialização</h3>
                <p className="text-gray-600">
                  Desenvolvimento de habilidades sociais através da convivência, cooperação e 
                  respeito às diferenças.
                </p>
              </Card>

              <Card>
                <Music className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-3">Linguagens Diversas</h3>
                <p className="text-gray-600">
                  Exploração de múltiplas linguagens: corporal, musical, plástica, oral e escrita.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Atividades */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <h2 className="section-title text-center">Atividades e Rotina</h2>
            <p className="section-subtitle text-center">
              Um dia repleto de descobertas e aprendizados
            </p>

            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">🎭</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Rodas de Conversa</h4>
                  <p className="text-gray-600">Desenvolvimento da oralidade, escuta ativa e expressão de ideias</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">🎨</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ateliê de Artes</h4>
                  <p className="text-gray-600">Exploração de diferentes materiais, texturas e técnicas artísticas</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">🎵</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Música e Movimento</h4>
                  <p className="text-gray-600">Desenvolvimento da coordenação motora através de canções e danças</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">📚</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Contação de Histórias</h4>
                  <p className="text-gray-600">Estímulo à imaginação, ampliação de vocabulário e gosto pela leitura</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm flex items-start">
                <span className="text-4xl mr-4">🏃</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">Brincadeiras ao Ar Livre</h4>
                  <p className="text-gray-600">Atividades que promovem desenvolvimento motor e contato com a natureza</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faixas Etárias */}
        <section className="section-container">
          <h2 className="section-title text-center">Faixas Etárias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-2xl font-bold mb-3">Infantil I</h3>
              <p className="text-primary font-semibold mb-2">2 a 3 anos</p>
              <p className="text-gray-600 text-sm">
                Foco em adaptação escolar, desenvolvimento da autonomia e exploração sensorial
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">🧒</div>
              <h3 className="text-2xl font-bold mb-3">Infantil II</h3>
              <p className="text-primary font-semibold mb-2">4 anos</p>
              <p className="text-gray-600 text-sm">
                Ampliação de vocabulário, socialização e desenvolvimento da coordenação motora
              </p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl mb-4">👧</div>
              <h3 className="text-2xl font-bold mb-3">Infantil III</h3>
              <p className="text-primary font-semibold mb-2">5 anos</p>
              <p className="text-gray-600 text-sm">
                Preparação para alfabetização, desenvolvimento do raciocínio lógico
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">Matricule seu filho na Educação Infantil</h2>
            <p className="text-lg mb-8 opacity-95">
              Proporcione o melhor começo na vida escolar
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
