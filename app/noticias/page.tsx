import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const noticias = [
  {
    id: '1',
    titulo: 'Feira Literária 2026',
    descricao: 'Confira os momentos especiais da nossa Feira Literária anual, com apresentações dos alunos e homenagem a grandes autores brasileiros.',
    data: '15 de Março, 2026',
    emoji: '📖',
    categoria: 'Eventos'
  },
  {
    id: '2',
    titulo: 'Olimpíada de Matemática',
    descricao: 'Alunos conquistam medalhas na Olimpíada Brasileira de Matemática das Escolas Públicas, demonstrando excelência acadêmica.',
    data: '10 de Março, 2026',
    emoji: '🏆',
    categoria: 'Conquistas'
  },
  {
    id: '3',
    titulo: 'Projeto Sustentabilidade',
    descricao: 'Iniciativa de educação ambiental envolve toda a comunidade escolar em ações práticas de preservação do meio ambiente.',
    data: '5 de Março, 2026',
    emoji: '🌱',
    categoria: 'Projetos'
  },
  {
    id: '4',
    titulo: 'Semana da Arte e Cultura',
    descricao: 'Alunos apresentam trabalhos artísticos e culturais em exposição aberta à comunidade. Evento contou com música, teatro e artes visuais.',
    data: '1 de Março, 2026',
    emoji: '🎭',
    categoria: 'Eventos'
  },
  {
    id: '5',
    titulo: 'Parceria com Universidades',
    descricao: 'Novo convênio estabelecido com universidades para palestras, visitas técnicas e preparação universitária dos alunos do Ensino Médio.',
    data: '25 de Fevereiro, 2026',
    emoji: '🤝',
    categoria: 'Institucional'
  },
  {
    id: '6',
    titulo: 'Torneio Interclasses',
    descricao: 'Competições esportivas promovem integração entre as turmas e incentivam a prática de atividades físicas e trabalho em equipe.',
    data: '20 de Fevereiro, 2026',
    emoji: '⚽',
    categoria: 'Esportes'
  },
  {
    id: '7',
    titulo: 'Workshop de Tecnologia',
    descricao: 'Alunos participam de workshop sobre robótica e programação, desenvolvendo habilidades para o futuro digital.',
    data: '15 de Fevereiro, 2026',
    emoji: '🤖',
    categoria: 'Tecnologia'
  },
  {
    id: '8',
    titulo: 'Formatura 3º Ano - 2025',
    descricao: 'Emocionante cerimônia marca a conclusão do Ensino Médio da turma 2025, com 98% de aprovação em universidades.',
    data: '10 de Fevereiro, 2026',
    emoji: '🎓',
    categoria: 'Eventos'
  }
]

export default function NoticiasPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notícias e Eventos</h1>
            <p className="text-xl opacity-95">Fique por dentro de tudo que acontece no Liceu</p>
          </div>
        </section>

        {/* Notícias Grid */}
        <section className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <Card key={noticia.id}>
                <div className="h-48 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center text-white text-6xl">
                  {noticia.emoji}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {noticia.categoria}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {noticia.data}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
                <p className="text-gray-600 mb-4">
                  {noticia.descricao}
                </p>
                <Link 
                  href={`/noticias/${noticia.id}`} 
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
                >
                  Leia mais <ArrowRight size={16} className="ml-1" />
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
