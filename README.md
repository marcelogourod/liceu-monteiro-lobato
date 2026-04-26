# 🎓 Liceu Monteiro Lobato - Plataforma Digital Premium

<div align="center">

**Educação + Tradição + Tecnologia**

*Plataforma educacional completa que une tradição escolar com tecnologia de ponta*

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

</div>

---

## 🎯 Sobre o Projeto

Sistema completo de gestão escolar desenvolvido com as mais modernas tecnologias web, proporcionando uma experiência premium para toda a comunidade escolar.

### 🌟 Principais Módulos

- **🏫 Site Institucional** - Presença digital moderna e profissional
- **👨‍👩‍👧 Portal dos Pais** - Acompanhamento acadêmico em tempo real
- **🎓 Portal do Aluno** - Acesso a materiais e atividades
- **👨‍🏫 Portal do Professor** - Gestão completa de turmas e avaliações
- **⚙️ Portal Administrativo** - Controle total da gestão escolar

---

## ⚡ Início Rápido

### 🚀 Opção 1: Clique Duplo (Windows)
```
Dê duplo clique em: START.bat
```

### 💻 Opção 2: Terminal
```bash
npm install
npm run dev
```

**Acesse:** http://localhost:3000

> 📖 **Primeira vez?** Leia: [INICIAR_AQUI.md](./INICIAR_AQUI.md)  
> 🗺️ **Toda documentação:** [INDEX.md](./INDEX.md) | [INDICE_DOCUMENTACAO.md](./INDICE_DOCUMENTACAO.md)  
> 📊 **Dados de demo:** [DADOS_DEMO.md](./DADOS_DEMO.md) - 102 registros mockados!  
> 🎨 **Design premium:** [MELHORIAS_PREMIUM.md](./MELHORIAS_PREMIUM.md) - Estilos e animações premium!  
> 📸 **Imagens e ícones:** [IMAGENS_E_ICONES.md](./IMAGENS_E_ICONES.md) - Visual profissional!  
> 🎬 **Animações:** [ANIMACOES_PREMIUM.md](./ANIMACOES_PREMIUM.md) - 25+ efeitos visuais animados!  
> 🌟 **Efeitos Hero:** [EFEITOS_HERO.md](./EFEITOS_HERO.md) - 11 efeitos premium para o hero!

---

## 🔐 Usuários de Teste

Faça login em: http://localhost:3000/portal/login

| Perfil | Email | Senha |
|--------|-------|-------|
| 👨‍👩‍👧 Pais | `pai@escola.com` | `123456` |
| 🎓 Aluno | `aluno@escola.com` | `123456` |
| 👨‍🏫 Professor | `professor@escola.com` | `123456` |
| 🔧 Admin | `admin@escola.com` | `123456` |

> 📋 **Detalhes completos:** [USUARIOS_TESTE.md](./USUARIOS_TESTE.md)

---

## 🚀 Tecnologias de Ponta

### Core
- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca UI com Server Components
- **TypeScript 5** - Tipagem estática e segurança
- **Tailwind CSS 3** - Estilização utilitária moderna

### Bibliotecas
- **Lucide React** - Ícones modernos e consistentes
- **Google Fonts** - Poppins e Open Sans

### Ferramentas de Desenvolvimento
- **ESLint** - Qualidade de código
- **PostCSS** - Processamento CSS
- **Git** - Controle de versão

> 📖 **Stack completo:** [TECH_STACK.md](./TECH_STACK.md)

---

## 🎨 Identidade Visual

### Paleta de Cores
- **Primary (Azul Institucional):** `#0047AB` - Transmite confiança e tradição
- **Secondary (Azul Claro):** `#4A90E2` - Modernidade e inovação
- **Accent (Amarelo Dourado):** `#FFB800` - Energia e excelência
- **Neutros:** Escala de cinzas para UI

### Tipografia
- **Títulos:** Poppins (Bold, SemiBold) - Impacto e autoridade
- **Corpo:** Open Sans (Regular, Medium) - Legibilidade e profissionalismo

### Características Visuais
- ✨ Layout limpo com amplo white space
- 🎯 Cards com sombras suaves
- 📱 Design 100% responsivo
- 🎨 Gradientes suaves e modernos
- ⚡ Animações e transições fluidas

---

## 📱 Funcionalidades Implementadas

### Site Institucional
- ✅ Home com apresentação da escola
- ✅ Página A Escola (história, missão, visão, valores)
- ✅ Páginas de Ensino (Infantil, Fundamental, Médio)
- ✅ Blog de Notícias e Eventos
- ✅ Calendário Escolar interativo
- ✅ Formulário de Matrículas online

### Portal dos Pais
- ✅ Dashboard com resumo acadêmico
- ✅ Boletim escolar completo
- ✅ Controle de frequência e faltas
- ✅ Agenda de eventos e avaliações
- ✅ Central de comunicados

### Portal do Aluno
- ✅ Dashboard personalizado
- ✅ Materiais de aula (PDFs, vídeos, links)
- ✅ Gestão de atividades e tarefas
- ✅ Visualização de notas por disciplina
- ✅ Agenda acadêmica

### Portal do Professor
- ✅ Dashboard com turmas do dia
- ✅ Gerenciamento de turmas e alunos
- ✅ Registro de presença por aula
- ✅ Lançamento de notas e avaliações
- ✅ Publicação de materiais didáticos
- ✅ Criação de atividades e trabalhos

### Portal Administrativo
- ✅ Dashboard com estatísticas gerais
- ✅ Gestão completa de alunos
- ✅ Gestão de professores e disciplinas
- ✅ Controle de turmas e anos letivos
- ✅ Gerenciamento de boletins
- ✅ Sistema de comunicados em massa
- ✅ Administração de calendário escolar

> 📱 **36 telas implementadas!** Veja detalhes em: [TELAS_IMPLEMENTADAS.md](./TELAS_IMPLEMENTADAS.md)

---

## 🏗️ Estrutura do Projeto

```
liceu-monteiro-lobato/
├── app/                      # Páginas Next.js (App Router)
│   ├── api/                 # API Routes
│   │   └── auth/           # Autenticação
│   ├── escola/             # Página institucional
│   ├── ensino/             # Segmentos de ensino
│   ├── noticias/           # Blog de notícias
│   ├── calendario/         # Calendário público
│   ├── matriculas/         # Formulário de matrícula
│   └── portal/             # Área restrita
│       ├── login/          # Login unificado
│       ├── pais/           # Portal dos Pais (5 páginas)
│       ├── aluno/          # Portal do Aluno (5 páginas)
│       ├── professor/      # Portal do Professor (6 páginas)
│       ├── admin/          # Portal Admin (7 páginas)
│       └── configuracoes/  # Configurações de usuário
├── components/             # Componentes React reutilizáveis
│   ├── Header.tsx         # Cabeçalho institucional
│   ├── Footer.tsx         # Rodapé
│   ├── Card.tsx           # Card genérico
│   ├── PortalLayout.tsx   # Layout dos portais
│   ├── NotificationCenter.tsx  # Centro de notificações
│   ├── DashboardCard.tsx  # Card de dashboard
│   └── StatCard.tsx       # Card de estatísticas
├── lib/                    # Utilitários
│   ├── auth.ts            # Sistema de autenticação
│   └── mockData.ts        # Dados de demonstração
├── types/                  # Tipos TypeScript
│   └── index.ts           # Interfaces centralizadas
├── public/                 # Arquivos estáticos
│   └── logo.png           # Logo da escola
├── middleware.ts           # Proteção de rotas
└── [DOCS]/                # 14 arquivos de documentação
```

---

## 📚 Documentação Completa

| Documento | Descrição |
|-----------|-----------|
| **[📍 INICIAR_AQUI.md](./INICIAR_AQUI.md)** | 🌟 **COMECE AQUI!** Guia de início rápido |
| **[👥 USUARIOS_TESTE.md](./USUARIOS_TESTE.md)** | Credenciais e perfis de teste |
| **[📱 TELAS_IMPLEMENTADAS.md](./TELAS_IMPLEMENTADAS.md)** | Inventário completo das 36 telas |
| **[✅ CHECKLIST_QUALIDADE.md](./CHECKLIST_QUALIDADE.md)** | Checklist de qualidade do MVP |
| **[🏗️ ARCHITECTURE.md](./ARCHITECTURE.md)** | Arquitetura técnica detalhada |
| **[⚡ FEATURES.md](./FEATURES.md)** | Lista completa de funcionalidades |
| **[🚀 DEPLOYMENT.md](./DEPLOYMENT.md)** | Deploy em produção (Vercel) |
| **[🎬 DEMO.md](./DEMO.md)** | Roteiro de demonstração |
| **[💻 TECH_STACK.md](./TECH_STACK.md)** | Stack tecnológico completo |
| **[⚡ QUICKSTART.md](./QUICKSTART.md)** | Comandos e dicas rápidas |
| **[📊 APRESENTACAO.md](./APRESENTACAO.md)** | Material para apresentação |
| **[📝 CHANGELOG.md](./CHANGELOG.md)** | Histórico de versões |

---

## 🎯 Status do MVP

### ✅ Implementado (100%)
- ✨ 36 telas funcionais
- 👥 4 perfis de usuário distintos
- 🔐 Sistema de autenticação completo
- 🎨 Design premium e responsivo
- 📚 Documentação extensiva
- ♿ Interface acessível e intuitiva
- 📱 Mobile-first e totalmente responsivo

### 🔨 Fase 2 (Planejado)
- 🗄️ Backend real (NestJS/Spring Boot)
- 💾 Banco de dados PostgreSQL
- 💳 Sistema financeiro (mensalidades, boletos, PIX)
- 💬 Chat em tempo real
- 🎥 Videoconferências para aulas online
- 📱 App mobile (React Native)
- 📚 Biblioteca digital
- 📊 Relatórios avançados e analytics
- 🔔 Notificações push
- 📧 Sistema de email automatizado

---

## 🏆 Diferenciais Técnicos

- ⚡ **Performance:** Server-side rendering com Next.js
- 📱 **Responsivo:** Mobile-first design
- 🎨 **Design System:** Componentes reutilizáveis e consistentes
- 🔒 **Seguro:** Rotas protegidas e controle de acesso por perfil
- ♿ **Acessível:** Semântica HTML adequada e navegação por teclado
- 🚀 **Escalável:** Arquitetura modular preparada para crescimento
- 📝 **Documentado:** Código limpo e autodocumentado
- 🎯 **TypeScript:** Tipagem estática para maior confiabilidade
- 🌐 **SEO Ready:** Meta tags e estrutura otimizada para busca

---

## 🔒 Segurança

### Implementado (MVP)
- ✅ Rotas protegidas via middleware
- ✅ Controle de acesso por perfil (RBAC)
- ✅ Validação de sessão
- ✅ Redirecionamento automático

### Para Produção (Fase 2)
- ⏳ HTTPS obrigatório
- ⏳ Autenticação JWT
- ⏳ Criptografia de senhas (bcrypt)
- ⏳ Logs de auditoria
- ⏳ Proteção contra CSRF e XSS
- ⏳ Rate limiting
- ⏳ 2FA (Two-Factor Authentication)

---

## 📦 Instalação Detalhada

### Pré-requisitos
- Node.js 18+ ([Download](https://nodejs.org))
- npm ou yarn
- Git (opcional)

### Passo a Passo

1. **Clone ou extraia o projeto**
```bash
cd "C:\Users\mrodrigues7\Downloads\Liceu Monteiro Lobato"
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a plataforma**
```
http://localhost:3000
```

> 💡 **Dica:** No Windows, basta dar duplo clique em `START.bat`!

> 📖 **Mais detalhes:** [INSTALL.md](./INSTALL.md)

---

## 🎬 Como Usar

### 1. Site Institucional (Público)
Acesse http://localhost:3000 e explore:
- **Home** - Apresentação da escola
- **A Escola** - História e valores
- **Ensino** - Segmentos educacionais
- **Notícias** - Blog institucional
- **Calendário** - Eventos escolares
- **Matrículas** - Formulário online

### 2. Portais (Requer Login)
Acesse http://localhost:3000/portal/login

**Use as credenciais de teste:** [USUARIOS_TESTE.md](./USUARIOS_TESTE.md)

- **Portal dos Pais:** Boletim, frequência, agenda, comunicados
- **Portal do Aluno:** Materiais, atividades, notas, agenda
- **Portal do Professor:** Turmas, presença, notas, materiais, atividades
- **Portal Admin:** Gestão completa de alunos, professores, turmas

> 🎬 **Guia de demonstração:** [DEMO.md](./DEMO.md)

---

## 🚀 Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor em modo desenvolvimento

# Produção
npm run build        # Cria build otimizado
npm start            # Inicia servidor em modo produção

# Qualidade
npm run lint         # Verifica código com ESLint
```

> ⚡ **Mais comandos:** [QUICKSTART.md](./QUICKSTART.md)

---

## 🏗️ Arquitetura

```
Next.js 14 (App Router)
    ↓
├─ Site Institucional (Páginas Públicas)
│  └─ Header + Footer + Conteúdo
│
└─ Portais (Área Autenticada)
   ├─ Middleware (Proteção de rotas)
   ├─ PortalLayout (Sidebar + Topbar)
   └─ Páginas por Perfil
      ├─ Pais (5 páginas)
      ├─ Aluno (5 páginas)
      ├─ Professor (6 páginas)
      └─ Admin (7 páginas)
```

> 🏗️ **Arquitetura detalhada:** [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 📊 Resumo de Implementação

- **36 telas** funcionais e responsivas
- **4 perfis** de usuário com permissões específicas
- **7 componentes** reutilizáveis
- **14 documentos** de suporte
- **100% TypeScript** com tipagem estrita
- **Mobile-first** design responsivo

> 📱 **Lista completa de telas:** [TELAS_IMPLEMENTADAS.md](./TELAS_IMPLEMENTADAS.md)

---

## ✅ Checklist de Qualidade

- ✅ Design premium e moderno
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Identidade visual consistente
- ✅ Navegação intuitiva
- ✅ Performance otimizada
- ✅ Código limpo e documentado
- ✅ TypeScript sem erros
- ✅ SEO otimizado
- ✅ Acessibilidade básica

> ✅ **Checklist completo:** [CHECKLIST_QUALIDADE.md](./CHECKLIST_QUALIDADE.md)

---

## 🎯 Próximos Passos

### Fase 2 - Backend e Integrações
1. **API Backend** - NestJS ou Spring Boot
2. **Banco de Dados** - PostgreSQL com migrações
3. **Autenticação Real** - JWT + bcrypt
4. **Upload de Arquivos** - AWS S3 ou Google Cloud Storage
5. **Email Service** - Notificações automatizadas

### Fase 2 - Funcionalidades Avançadas
1. **Módulo Financeiro** - Mensalidades, boletos, PIX
2. **Chat em Tempo Real** - WebSocket ou Socket.io
3. **Videoconferências** - Integração com Zoom/Meet
4. **App Mobile** - React Native para iOS e Android
5. **Analytics Dashboard** - Métricas e relatórios avançados

> ⚡ **Todas as features:** [FEATURES.md](./FEATURES.md)

---

## 🚀 Deploy em Produção

### Opção 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opção 2: Docker
```bash
docker build -t liceu-platform .
docker run -p 3000:3000 liceu-platform
```

> 🚀 **Guia completo de deploy:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🤝 Contribuindo

Este é um MVP proprietário desenvolvido para o Liceu Monteiro Lobato.

Para sugestões ou melhorias:
1. Documente a proposta
2. Descreva o benefício esperado
3. Entre em contato com a equipe técnica

---

## 📞 Suporte

- **Email:** suporte@liceu.edu.br
- **Telefone:** (11) 1234-5678
- **Endereço:** Rua Exemplo, 123 - São Paulo/SP
- **Site:** www.liceumonteiro.edu.br

---

## 📄 Licença

© 2026 Liceu Monteiro Lobato. Todos os direitos reservados.

---

## 👨‍💻 Desenvolvido por

**MGR Solutions**  
*Transformando educação através da tecnologia*

Desenvolvido com ❤️, Next.js, React, TypeScript e Tailwind CSS

---

<div align="center">

**Liceu Monteiro Lobato**  
*Educação que forma futuros*

🎓 **Tradição + Inovação = Excelência** 🎓

</div>
