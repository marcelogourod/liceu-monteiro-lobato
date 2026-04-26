import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { Calendar, ArrowLeft, Share2 } from 'lucide-react'

const noticiasData: Record<string, any> = {
  '1': {
    titulo: 'Feira Literária 2026',
    data: '15 de Março, 2026',
    emoji: '📖',
    categoria: 'Eventos',
    conteudo: `
      <p>A Feira Literária 2026 do Liceu Monteiro Lobato foi um sucesso absoluto! Durante três dias, nossos alunos apresentaram trabalhos inspirados em grandes autores da literatura brasileira e mundial.</p>
      
      <p>O evento contou com apresentações teatrais, saraus de poesia, exposições de trabalhos artísticos e debates literários. Cada turma escolheu um autor para homenagear, resultando em apresentações criativas e emocionantes.</p>
      
      <p>Destacamos a participação especial do escritor João Santos, que realizou uma palestra sobre o processo criativo da escrita e autografou livros para os alunos.</p>
      
      <p>A coordenação pedagógica agradece a participação de todos os estudantes, professores e famílias que tornaram este evento memorável!</p>
    `
  },
  '2': {
    titulo: 'Olimpíada de Matemática',
    data: '10 de Março, 2026',
    emoji: '🏆',
    categoria: 'Conquistas',
    conteudo: `
      <p>É com imenso orgulho que anunciamos os resultados de nossos alunos na Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP)!</p>
      
      <p>Conquistamos 3 medalhas de ouro, 5 de prata e 8 de bronze, além de 15 menções honrosas. Este resultado coloca o Liceu Monteiro Lobato entre as escolas com melhor desempenho da região.</p>
      
      <p>Parabéns a todos os estudantes participantes e aos professores de matemática que dedicaram tempo extra para preparar nossos alunos!</p>
    `
  },
  '3': {
    titulo: 'Projeto Sustentabilidade',
    data: '5 de Março, 2026',
    emoji: '🌱',
    categoria: 'Projetos',
    conteudo: `
      <p>O Liceu Monteiro Lobato deu início ao Projeto Sustentabilidade, uma iniciativa que envolve toda a comunidade escolar em ações práticas de preservação do meio ambiente.</p>
      
      <p>Entre as ações implementadas estão: coleta seletiva de lixo, horta escolar orgânica, economia de água e energia, e oficinas de reciclagem e reutilização de materiais.</p>
      
      <p>Os alunos estão sendo protagonistas do projeto, desenvolvendo campanhas de conscientização e propondo soluções criativas para desafios ambientais.</p>
      
      <p>A expectativa é que o projeto seja permanente e inspire outras escolas da região!</p>
    `
  }
}

export default function NoticiaDetalhe({ params }: { params: { id: string } }) {
  const noticia = noticiasData[params.id]

  if (!noticia) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Notícia não encontrada</h1>
            <Link href="/noticias" className="text-primary font-semibold hover:text-secondary">
              ← Voltar para notícias
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container">
            <div className="flex items-center justify-center mb-6">
              <span className="text-8xl">{noticia.emoji}</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
                {noticia.categoria}
              </span>
              <div className="flex items-center text-sm">
                <Calendar size={14} className="mr-1" />
                {noticia.data}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center">{noticia.titulo}</h1>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <Link href="/noticias" className="text-primary font-semibold hover:text-secondary flex items-center">
                <ArrowLeft size={20} className="mr-2" />
                Voltar para notícias
              </Link>
              <button className="text-primary hover:text-secondary flex items-center">
                <Share2 size={20} className="mr-2" />
                Compartilhar
              </button>
            </div>

            <Card>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
                style={{ 
                  lineHeight: '1.8',
                  fontSize: '1.125rem'
                }}
              />
            </Card>

            {/* Notícias Relacionadas */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Outras Notícias</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(noticiasData)
                  .filter(([id]) => id !== params.id)
                  .slice(0, 2)
                  .map(([id, noticia]) => (
                    <Link key={id} href={`/noticias/${id}`}>
                      <Card className="h-full">
                        <div className="text-4xl mb-3">{noticia.emoji}</div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {noticia.categoria}
                        </span>
                        <h4 className="font-bold text-lg mt-3 mb-2">{noticia.titulo}</h4>
                        <p className="text-sm text-gray-500">{noticia.data}</p>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
