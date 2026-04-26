'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedCounter from '@/components/AnimatedCounter'
import RevealOnScroll from '@/components/RevealOnScroll'
import { BookOpen, Users, Trophy, Globe, Calendar, Bell, GraduationCap, Sparkles, ArrowRight, Target, Heart, Award, Newspaper, Medal, Leaf, Quote } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section Premium - Elegante & Educacional */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white overflow-hidden">
          {/* Efeito Aurora Premium */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="aurora-effect"></div>
          </div>
          
          {/* Blobs Morfando - Orgânico e Elegante */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 blob-animated blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 blob-animated blur-3xl" style={{ animationDelay: '10s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/3 blob-animated blur-3xl" style={{ animationDelay: '5s' }}></div>
          
          {/* Elementos decorativos sutis */}
          <div className="hidden md:block absolute top-32 right-20 float-rotate opacity-20">
            <GraduationCap size={64} className="text-secondary" />
          </div>
          <div className="hidden md:block absolute bottom-32 left-20 float-rotate opacity-20" style={{ animationDelay: '3s' }}>
            <BookOpen size={56} className="text-white" />
          </div>
          
          <div className="section-container py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Badge Superior Elegante */}
              <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up px-4">
                <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-premium hover:scale-105 transition-all duration-300">
                  <Award className="text-secondary flex-shrink-0" size={18} />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">Instituição Centenária de Excelência</span>
                </div>
              </div>
              
              {/* Título Principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-center animate-fade-in-up heading-premium px-4" style={{ animationDelay: '0.1s' }}>
                Educação que forma <br className="hidden sm:block"/>
                <span className="text-secondary">futuros</span>
              </h1>
              
              {/* Subtítulo */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-center opacity-95 max-w-3xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.2s' }}>
                Tradição e inovação no ensino desde 1920. Formando gerações de líderes, pensadores e cidadãos conscientes.
              </p>
              
              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-4" style={{ animationDelay: '0.3s' }}>
                <Link href="/escola" className="btn-premium bg-white text-primary hover:bg-neutral-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 shadow-premium text-sm sm:text-base">
                  <GraduationCap size={18} className="sm:w-5 sm:h-5" />
                  Conheça a escola
                </Link>
                <Link href="/matriculas" className="btn-premium bg-secondary text-white hover:bg-secondary/90 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 shadow-premium text-sm sm:text-base">
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  Matrículas abertas
                </Link>
              </div>
              
              {/* Estatísticas/Conquistas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
                <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift hover-shine">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 mb-2 sm:mb-3 icon-bounce-on-hover">
                    <Users className="text-secondary" size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    <AnimatedCounter end={1200} suffix="+" />
                  </div>
                  <div className="text-xs sm:text-sm opacity-80">Alunos</div>
                </div>
                
                <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift hover-shine">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 mb-2 sm:mb-3 icon-bounce-on-hover">
                    <Trophy className="text-secondary" size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-xs sm:text-sm opacity-80">Aprovação</div>
                </div>
                
                <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift hover-shine">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 mb-2 sm:mb-3 icon-bounce-on-hover">
                    <Award className="text-secondary" size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    <AnimatedCounter end={100} suffix="+" />
                  </div>
                  <div className="text-sm opacity-80">Anos</div>
                </div>
                
                <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift hover-shine">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-3 icon-bounce-on-hover">
                    <BookOpen className="text-secondary" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm opacity-80">Professores</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Onda decorativa no final */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Apresentação da Escola */}
        <section className="section-container">
          <RevealOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="section-title">Uma instituição de excelência</h2>
              <p className="section-subtitle">
                Comprometidos com o desenvolvimento integral de nossos alunos
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RevealOnScroll animation="fade-up" delay={100}>
              <Card className="hover-tilt hover-shine h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 icon-bounce-on-hover">
                    <BookOpen className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tradição Educacional</h3>
                  <p className="text-gray-600">
                    Mais de décadas de experiência formando gerações de cidadãos preparados para o mundo.
                  </p>
                </div>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={200}>
              <Card className="hover-tilt hover-shine h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 icon-bounce-on-hover">
                    <Sparkles className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Metodologia Inovadora</h3>
                  <p className="text-gray-600">
                    Abordagens pedagógicas modernas que estimulam o pensamento crítico e a criatividade.
                  </p>
                </div>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={300}>
              <Card className="hover-tilt hover-shine h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 icon-bounce-on-hover">
                    <Trophy className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Excelência Comprovada</h3>
                  <p className="text-gray-600">
                    Resultados consistentes em avaliações nacionais e aprovações nas melhores universidades.
                  </p>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* Diferenciais Pedagógicos */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">Nossos Diferenciais</h2>
              <p className="section-subtitle">
                O que nos torna únicos na formação de nossos alunos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Users className="text-primary mb-3" size={28} />
                <h4 className="font-semibold text-lg mb-2">Turmas Reduzidas</h4>
                <p className="text-gray-600 text-sm">Atendimento personalizado e próximo de cada aluno</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Globe className="text-primary mb-3" size={28} />
                <h4 className="font-semibold text-lg mb-2">Educação Bilíngue</h4>
                <p className="text-gray-600 text-sm">Preparação para um mundo globalizado</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <GraduationCap className="text-primary mb-3" size={28} />
                <h4 className="font-semibold text-lg mb-2">Professores Qualificados</h4>
                <p className="text-gray-600 text-sm">Equipe pedagógica altamente capacitada</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Sparkles className="text-primary mb-3" size={28} />
                <h4 className="font-semibold text-lg mb-2">Plataforma Digital</h4>
                <p className="text-gray-600 text-sm">Tecnologia integrada ao processo de aprendizagem</p>
              </div>
            </div>
          </div>
        </section>

        {/* Segmentos de Ensino com Imagens */}
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Segmentos de Ensino</h2>
            <p className="section-subtitle">
              Educação completa da infância ao ensino médio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-premium hover-lift group">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop"
                  alt="Educação Infantil"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Educação Infantil</h3>
              <p className="text-gray-600 mb-4">
                Desenvolvimento integral através do lúdico e da criatividade
              </p>
              <Link href="/ensino/infantil" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                Saiba mais 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>

            <Card className="card-premium hover-lift group">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop"
                  alt="Ensino Fundamental"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ensino Fundamental</h3>
              <p className="text-gray-600 mb-4">
                Formação sólida com foco no desenvolvimento cognitivo e social
              </p>
              <Link href="/ensino/fundamental" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                Saiba mais 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>

            <Card className="card-premium hover-lift group">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
                  alt="Ensino Médio"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Ensino Médio</h3>
              <p className="text-gray-600 mb-4">
                Preparação completa para ENEM, vestibulares e para a vida
              </p>
              <Link href="/ensino/medio" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                Saiba mais 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Card>
          </div>
        </section>

        {/* Notícias e Eventos */}
        <section className="bg-neutral-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">Notícias e Eventos</h2>
              <p className="section-subtitle">
                Fique por dentro do que acontece no Liceu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-premium hover-lift group overflow-hidden">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
                    alt="Feira Literária"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-premium">
                      <Newspaper className="text-primary" size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={14} />
                  <span>15 de Março, 2026</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Feira Literária 2026</h3>
                <p className="text-gray-600 mb-4">
                  Confira os momentos especiais da nossa Feira Literária anual, com apresentações dos alunos.
                </p>
                <Link href="/noticias/1" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                  Leia mais 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>

              <Card className="card-premium hover-lift group overflow-hidden">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop"
                    alt="Olimpíada de Matemática"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-premium">
                      <Trophy className="text-primary" size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={14} />
                  <span>10 de Março, 2026</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Olimpíada de Matemática</h3>
                <p className="text-gray-600 mb-4">
                  Alunos conquistam medalhas na Olimpíada Brasileira de Matemática das Escolas Públicas.
                </p>
                <Link href="/noticias/2" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                  Leia mais 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>

              <Card className="card-premium hover-lift group overflow-hidden">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"
                    alt="Projeto Sustentabilidade"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-premium">
                      <Leaf className="text-primary" size={20} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={14} />
                  <span>5 de Março, 2026</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Projeto Sustentabilidade</h3>
                <p className="text-gray-600 mb-4">
                  Iniciativa de educação ambiental envolve toda a comunidade escolar.
                </p>
                <Link href="/noticias/3" className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                  Leia mais 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/noticias" className="btn-primary">
                Ver todas as notícias
              </Link>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">O que dizem sobre nós</h2>
            <p className="section-subtitle">
              Depoimentos de pais e responsáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  MR
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Maria Rodrigues</div>
                  <div className="text-sm text-gray-500">Mãe do Pedro (5º ano)</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Excelente escola! Meu filho evoluiu muito tanto no conhecimento quanto no comportamento. A equipe é muito atenciosa."
              </p>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  JS
                </div>
                <div className="ml-3">
                  <div className="font-semibold">João Silva</div>
                  <div className="text-sm text-gray-500">Pai da Ana (2º ano EM)</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "A plataforma digital facilita muito o acompanhamento. Consigo ver as notas, frequência e comunicados em tempo real."
              </p>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  CS
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Carla Santos</div>
                  <div className="text-sm text-gray-500">Mãe da Julia (EI)</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Minha filha ama a escola! Os professores são muito carinhosos e a metodologia é incrível."
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Matrícula */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Matrículas Abertas 2026</h2>
            <p className="text-xl mb-8 opacity-95">
              Garanta a vaga do seu filho na melhor escola da região
            </p>
            <Link href="/matriculas" className="btn-primary bg-white text-primary hover:bg-neutral-50 inline-block">
              Fazer matrícula agora
            </Link>
          </div>
        </section>

        {/* Calendário em Destaque */}
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Próximos Eventos</h2>
            <p className="section-subtitle">
              Fique atento às datas importantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-2xl font-bold">20</div>
                  <div className="text-xs uppercase">Mar</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Reunião de Pais</h4>
                <p className="text-gray-600 text-sm">Ensino Fundamental - 19h00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-xs uppercase">Mar</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Avaliação Bimestral</h4>
                <p className="text-gray-600 text-sm">Todas as turmas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-2xl font-bold">05</div>
                  <div className="text-xs uppercase">Abr</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Feira de Ciências</h4>
                <p className="text-gray-600 text-sm">Ensino Médio - Durante todo o dia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <div className="bg-primary text-white rounded-lg p-3 text-center min-w-[60px]">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs uppercase">Abr</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Dia da Família</h4>
                <p className="text-gray-600 text-sm">Evento especial com toda a comunidade</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/calendario" className="text-primary font-semibold hover:text-secondary transition-colors text-lg">
              Ver calendário completo →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
