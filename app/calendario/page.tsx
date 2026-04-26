import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

const eventos = [
  { data: '20/03/2026', titulo: 'Reunião de Pais - Ensino Fundamental', horario: '19h00', tipo: 'reuniao' },
  { data: '25/03/2026', titulo: 'Avaliação Bimestral - Todas as turmas', horario: 'Durante o período', tipo: 'prova' },
  { data: '05/04/2026', titulo: 'Feira de Ciências - Ensino Médio', horario: 'Durante todo o dia', tipo: 'evento' },
  { data: '12/04/2026', titulo: 'Dia da Família', horario: '14h00 às 18h00', tipo: 'evento' },
  { data: '18/04/2026', titulo: 'Conselho de Classe', horario: '13h00', tipo: 'reuniao' },
  { data: '21/04/2026', titulo: 'Feriado - Tiradentes', horario: '-', tipo: 'feriado' },
  { data: '01/05/2026', titulo: 'Feriado - Dia do Trabalho', horario: '-', tipo: 'feriado' },
  { data: '08/05/2026', titulo: 'Apresentação Cultural', horario: '19h00', tipo: 'evento' },
  { data: '15/05/2026', titulo: 'Reunião de Pais - Ensino Médio', horario: '19h00', tipo: 'reuniao' },
  { data: '20/05/2026', titulo: 'Simulado ENEM - 3º ano', horario: '8h00 às 17h00', tipo: 'prova' },
  { data: '25/05/2026', titulo: 'Festa Junina', horario: '14h00 às 20h00', tipo: 'evento' },
  { data: '01/06/2026', titulo: 'Início do 2º Semestre', horario: '-', tipo: 'institucional' }
]

const tipoColors: Record<string, { bg: string; text: string; label: string }> = {
  reuniao: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Reunião' },
  prova: { bg: 'bg-red-100', text: 'text-red-700', label: 'Avaliação' },
  evento: { bg: 'bg-green-100', text: 'text-green-700', label: 'Evento' },
  feriado: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Feriado' },
  institucional: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Institucional' }
}

export default function CalendarioPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Calendário Escolar 2026</h1>
            <p className="text-xl opacity-95">Acompanhe as datas importantes do ano letivo</p>
          </div>
        </section>

        {/* Legenda */}
        <section className="section-container">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {Object.entries(tipoColors).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded ${value.bg}`}></div>
                <span className="text-sm font-medium">{value.label}</span>
              </div>
            ))}
          </div>

          {/* Eventos */}
          <div className="max-w-4xl mx-auto space-y-4">
            {eventos.map((evento, index) => (
              <Card key={index} hover={false} className="!p-0 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary text-white p-6 md:w-32 flex flex-col items-center justify-center">
                    <Calendar size={24} className="mb-2" />
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        {evento.data.split('/')[0]}
                      </div>
                      <div className="text-sm">
                        {evento.data.split('/')[1]}/{evento.data.split('/')[2]}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tipoColors[evento.tipo].bg} ${tipoColors[evento.tipo].text}`}>
                            {tipoColors[evento.tipo].label}
                          </span>
                          {evento.horario !== '-' && (
                            <div className="flex items-center text-gray-500 text-sm">
                              <Clock size={14} className="mr-1" />
                              {evento.horario}
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900">
                          {evento.titulo}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-50">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">Fique conectado</h2>
            <p className="text-gray-600 mb-6">
              Acesse o portal para ver o calendário personalizado da sua turma
            </p>
            <Link href="/portal/login" className="btn-primary">
              Acessar Portal
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
