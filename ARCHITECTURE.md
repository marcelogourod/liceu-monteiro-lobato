# Arquitetura da Plataforma - Liceu Monteiro Lobato

## 🏗️ Visão Geral

A plataforma é construída usando a stack moderna de desenvolvimento web:

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Gerenciamento de Estado**: React Hooks (useState, useEffect)

## 📁 Estrutura de Pastas

```
liceu-monteiro-lobato-platform/
│
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout raiz
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Estilos globais
│   │
│   ├── escola/                  # Páginas institucionais
│   ├── ensino/                  # Segmentos educacionais
│   │   ├── page.tsx
│   │   ├── infantil/
│   │   ├── fundamental/
│   │   └── medio/
│   ├── noticias/                # Blog
│   ├── calendario/              # Calendário público
│   ├── matriculas/              # Sistema de matrículas
│   │
│   ├── portal/                  # Área autenticada
│   │   ├── login/               # Autenticação
│   │   ├── pais/                # Portal dos Pais
│   │   │   ├── page.tsx         # Dashboard
│   │   │   ├── boletim/
│   │   │   ├── frequencia/
│   │   │   ├── agenda/
│   │   │   └── comunicados/
│   │   │
│   │   ├── aluno/               # Portal do Aluno
│   │   │   ├── page.tsx
│   │   │   ├── materiais/
│   │   │   ├── atividades/
│   │   │   ├── notas/
│   │   │   └── agenda/
│   │   │
│   │   ├── professor/           # Portal do Professor
│   │   │   ├── page.tsx
│   │   │   ├── turmas/
│   │   │   ├── presenca/
│   │   │   ├── notas/
│   │   │   ├── materiais/
│   │   │   └── atividades/
│   │   │
│   │   ├── admin/               # Portal Administrativo
│   │   │   ├── page.tsx
│   │   │   ├── alunos/
│   │   │   ├── professores/
│   │   │   ├── turmas/
│   │   │   ├── boletins/
│   │   │   ├── comunicados/
│   │   │   └── calendario/
│   │   │
│   │   └── configuracoes/       # Configurações do usuário
│   │
│   └── api/                     # API Routes
│       └── auth/                # Endpoints de autenticação
│
├── components/                  # Componentes React
│   ├── Header.tsx              # Cabeçalho site institucional
│   ├── Footer.tsx              # Rodapé
│   ├── Card.tsx                # Card genérico
│   ├── PortalLayout.tsx        # Layout dos portais
│   ├── NotificationCenter.tsx  # Centro de notificações
│   ├── DashboardCard.tsx       # Card para dashboards
│   └── StatCard.tsx            # Card de estatísticas
│
├── lib/                        # Bibliotecas e utilitários
│   ├── auth.ts                 # Sistema de autenticação
│   └── mockData.ts             # Dados de demonstração
│
├── types/                      # Definições TypeScript
│   └── index.ts                # Tipos globais
│
├── public/                     # Arquivos estáticos
│   └── logo.png                # Logo da escola
│
└── Config Files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── next.config.js
    ├── postcss.config.js
    └── middleware.ts
```

## 🎨 Sistema de Design

### Paleta de Cores

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#3F3F99',  // Azul institucional
    light: '#5C6BC0',    // Azul secundário
    dark: '#2E2E73',
  },
  neutral: {
    50: '#F4F6FA',       // Cinza claro
    900: '#2B2B2B',      // Cinza escuro
  },
}
```

### Componentes de UI

#### Botões
- `.btn-primary`: Botão principal (fundo azul)
- `.btn-secondary`: Botão secundário (borda azul)

#### Cards
- `.card`: Card padrão com sombra
- Suporta `hover` prop para efeito de escala

#### Layout
- `.section-container`: Container de seção com padding responsivo
- `.section-title`: Título de seção
- `.section-subtitle`: Subtítulo de seção

## 🔐 Sistema de Autenticação

### Fluxo de Autenticação

1. Usuário acessa `/portal/login`
2. Insere credenciais (email/senha)
3. Sistema valida via `validateLogin()` em `lib/auth.ts`
4. Se válido, salva usuário no localStorage
5. Redireciona para portal apropriado baseado no `role`

### Perfis de Usuário

```typescript
type UserRole = 'aluno' | 'responsavel' | 'professor' | 'admin' | 'secretaria'
```

### Proteção de Rotas

- `PortalLayout` verifica sessão em cada render
- Redireciona para login se não autenticado
- Verifica se role tem permissão para acessar a rota

## 📊 Modelo de Dados

### Entidades Principais

- **User**: usuário do sistema
- **Aluno**: estudante matriculado
- **Professor**: membro do corpo docente
- **Turma**: agrupamento de alunos
- **Nota**: avaliação do aluno
- **Falta**: registro de ausência
- **Atividade**: tarefa/trabalho
- **Material**: conteúdo educacional
- **Comunicado**: avisos da escola
- **Evento**: item do calendário

Ver tipos completos em `types/index.ts`

## 🔄 Fluxo de Dados (MVP)

### Estado Atual
- Dados mock em `lib/mockData.ts`
- Armazenamento em localStorage (sessão)
- Sem persistência em banco de dados

### Produção (Próxima Fase)
```
Frontend (Next.js)
    ↓
API Routes (/api/*)
    ↓
Backend (NestJS/Spring Boot)
    ↓
Database (PostgreSQL)
```

## 🚀 Performance

### Otimizações Implementadas
- Server-side rendering (SSR) do Next.js
- Lazy loading de imagens com `next/image`
- CSS otimizado com Tailwind (tree-shaking)
- Componentes client-side apenas quando necessário (`'use client'`)

### Recomendações para Produção
- Implementar ISR (Incremental Static Regeneration) para páginas estáticas
- Cache de API com React Query ou SWR
- Otimização de imagens com next/image
- CDN para assets estáticos
- Service Workers para PWA

## 🔒 Segurança

### Implementado no MVP
- Validação de formulários
- Sanitização de inputs
- Proteção de rotas via middleware
- Separação por perfil de usuário

### Necessário para Produção
- ✅ JWT para autenticação stateless
- ✅ Bcrypt para hash de senhas
- ✅ HTTPS obrigatório
- ✅ CSRF protection
- ✅ Rate limiting em APIs
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ Logs de auditoria
- ✅ 2FA (autenticação de dois fatores)

## 📱 Responsividade

A aplicação é **mobile-first** e totalmente responsiva:

- **Mobile** (< 768px): Menu hambúrguer, layout em coluna
- **Tablet** (768px - 1024px): Grid adaptativo
- **Desktop** (> 1024px): Layout completo com sidebar

## 🧪 Testing (Fase 2)

Recomendações para testes:

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

Ferramentas sugeridas:
- Jest para unit tests
- React Testing Library
- Cypress ou Playwright para E2E

## 📈 Escalabilidade

### Backend Sugerido

**Opção 1: NestJS (Node.js)**
```
- TypeScript nativo
- Arquitetura modular
- Integração fácil com Next.js
- ORM: Prisma ou TypeORM
```

**Opção 2: Spring Boot (Java)**
```
- Robusto para grandes volumes
- Excelente para sistemas legados
- ORM: Hibernate
- Maior curva de aprendizado
```

### Banco de Dados

**PostgreSQL** (recomendado)
- Relacional
- ACID compliant
- Excelente para dados estruturados (notas, alunos, etc)

**Schema sugerido:**
- usuarios (id, nome, email, senha_hash, role)
- alunos (id, usuario_id, matricula, turma_id)
- professores (id, usuario_id, disciplina)
- turmas (id, nome, serie, ano)
- notas (id, aluno_id, disciplina_id, valor, data)
- faltas (id, aluno_id, data, disciplina_id)
- materiais (id, professor_id, titulo, tipo, url)
- atividades (id, professor_id, turma_id, titulo, data_entrega)
- comunicados (id, autor_id, titulo, mensagem, data)

## 🌐 Deploy

### Vercel (Recomendado para Next.js)
```bash
npm install -g vercel
vercel
```

### Alternativas
- AWS (EC2 + RDS + S3)
- Google Cloud Platform
- Azure
- DigitalOcean

## 📞 Integrações Futuras

- **Pagamentos**: Stripe, PagSeguro, Mercado Pago
- **Email**: SendGrid, AWS SES
- **SMS**: Twilio
- **Storage**: AWS S3, Google Cloud Storage
- **Analytics**: Google Analytics, Mixpanel
- **Monitoramento**: Sentry, DataDog

---

**Desenvolvido por MGR Solutions**  
Versão MVP 1.0 - Março 2026
