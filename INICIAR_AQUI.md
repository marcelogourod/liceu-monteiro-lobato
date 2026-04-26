# 🚀 Bem-vindo ao Liceu Monteiro Lobato - Plataforma Digital

## ⚡ Início Rápido (Para quem tem pressa!)

### Opção 1: Um clique! (Windows)
1. Dê duplo clique no arquivo `START.bat`
2. Aguarde a instalação (primeira vez pode demorar ~3 minutos)
3. Acesse: http://localhost:3000

### Opção 2: Terminal
```bash
npm install
npm run dev
```

**Pronto!** A plataforma estará rodando em http://localhost:3000

---

## 👤 Usuários de Teste

Faça login em: http://localhost:3000/portal/login

### 👨‍👩‍👧 Pais/Responsáveis
- **Email:** `pai@escola.com`
- **Senha:** `123456`

### 🎓 Alunos
- **Email:** `aluno@escola.com`
- **Senha:** `123456`

### 👨‍🏫 Professores
- **Email:** `professor@escola.com`
- **Senha:** `123456`

### 🔧 Administrador
- **Email:** `admin@escola.com`
- **Senha:** `123456`

---

## 📍 Navegação Rápida

### 🏠 Site Institucional
- **Home:** http://localhost:3000
- **A Escola:** http://localhost:3000/escola
- **Ensino:** http://localhost:3000/ensino
  - Educação Infantil: `/ensino/infantil`
  - Ensino Fundamental: `/ensino/fundamental`
  - Ensino Médio: `/ensino/medio`
- **Notícias:** http://localhost:3000/noticias
- **Calendário:** http://localhost:3000/calendario
- **Matrículas:** http://localhost:3000/matriculas

### 🎯 Portais (requer login)
- **Portal dos Pais:** http://localhost:3000/portal/pais
- **Portal do Aluno:** http://localhost:3000/portal/aluno
- **Portal do Professor:** http://localhost:3000/portal/professor
- **Portal Administrativo:** http://localhost:3000/portal/admin

---

## 🎨 Recursos Implementados

### ✅ Site Institucional
- [x] Design moderno e responsivo
- [x] Hero section impactante
- [x] Páginas de apresentação da escola
- [x] Sistema de notícias/blog
- [x] Calendário escolar
- [x] Formulário de matrícula online

### ✅ Portal dos Pais
- [x] Dashboard com visão geral
- [x] Boletim escolar completo
- [x] Registro de frequência
- [x] Agenda de eventos e avaliações
- [x] Sistema de comunicados

### ✅ Portal do Aluno
- [x] Dashboard personalizado
- [x] Acesso a materiais de aula
- [x] Gestão de atividades e tarefas
- [x] Visualização de notas
- [x] Agenda acadêmica

### ✅ Portal do Professor
- [x] Dashboard com turmas do dia
- [x] Gestão de turmas e alunos
- [x] Registro de presença por aula
- [x] Lançamento de notas e avaliações
- [x] Publicação de materiais didáticos
- [x] Criação de atividades e trabalhos

### ✅ Portal Administrativo
- [x] Gestão completa de alunos
- [x] Gestão de professores e disciplinas
- [x] Controle de turmas e anos letivos
- [x] Relatórios de boletins e frequência
- [x] Sistema de comunicados
- [x] Gerenciamento de calendário

---

## 🎯 Próximos Passos Sugeridos

### Fase 2 - Backend Real
1. Implementar API com NestJS ou Spring Boot
2. Integrar banco de dados PostgreSQL
3. Sistema de autenticação JWT
4. Upload real de arquivos (Cloud Storage/S3)

### Fase 2 - Módulo Financeiro
1. Gestão de mensalidades
2. Geração de boletos
3. Integração com pagamento PIX
4. Histórico financeiro

### Melhorias de UX/UI
1. Animações mais elaboradas
2. Gráficos interativos (Chart.js/Recharts)
3. Relatórios em PDF
4. Sistema de chat em tempo real
5. Notificações push

---

## 📱 Responsividade

A plataforma foi desenvolvida com **Mobile First**:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)

---

## 🎨 Identidade Visual

### Cores Principais
- **Primary (Azul Institucional):** `#0047AB`
- **Secondary (Azul Claro):** `#4A90E2`
- **Accent (Amarelo Dourado):** `#FFB800`

### Tipografia
- **Títulos:** Poppins (Bold/SemiBold)
- **Corpo:** Open Sans (Regular/Medium)

---

## 📚 Documentação Adicional

- **[README.md](./README.md)** - Visão geral do projeto
- **[DADOS_DEMO.md](./DADOS_DEMO.md)** ⭐ - **102 registros mockados completos!**
- **[INSTALL.md](./INSTALL.md)** - Guia detalhado de instalação
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitetura técnica
- **[FEATURES.md](./FEATURES.md)** - Lista completa de funcionalidades
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Instruções de deploy em produção
- **[DEMO.md](./DEMO.md)** - Guia de demonstração

---

## 🆘 Problemas Comuns

### Porta 3000 já está em uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill
```

### Erros de dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de TypeScript
```bash
# Verificar tipos
npm run build
```

---

## 💡 Dicas

1. **Explore todos os portais** - Cada perfil tem funcionalidades específicas
2. **Teste em dispositivos móveis** - A plataforma é 100% responsiva
3. **Veja os dados mockados** - Em `lib/mockData.ts` para entender a estrutura
4. **Personalize as cores** - Em `tailwind.config.ts`
5. **Adicione suas imagens** - Na pasta `public/`

---

## 🎉 Aproveite sua plataforma educacional premium!

Desenvolvido com ❤️ e tecnologia de ponta.

**Tecnologias:** Next.js 14 + React 18 + TypeScript + Tailwind CSS
