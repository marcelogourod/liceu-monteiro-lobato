# 👥 Usuários de Teste - Liceu Monteiro Lobato

Este documento lista todos os usuários de teste disponíveis na plataforma MVP.

---

## 🔐 Login

**URL de Login:** http://localhost:3000/portal/login

---

## 👤 Perfis Disponíveis

### 1️⃣ Administrador (Secretaria)

**Credenciais:**
- **Email:** `admin@escola.com`
- **Senha:** `123456`

**Permissões:**
- ✅ Gestão completa de alunos
- ✅ Gestão completa de professores
- ✅ Gestão de turmas e anos letivos
- ✅ Visualização de boletins
- ✅ Relatórios de frequência
- ✅ Envio de comunicados
- ✅ Gerenciamento de calendário
- ✅ Acesso total ao sistema

**Dashboard:** http://localhost:3000/portal/admin

---

### 2️⃣ Professor

**Credenciais:**
- **Email:** `professor@escola.com`
- **Senha:** `123456`

**Permissões:**
- ✅ Visualizar suas turmas
- ✅ Registrar presença dos alunos
- ✅ Lançar notas e avaliações
- ✅ Publicar materiais didáticos
- ✅ Criar atividades e trabalhos
- ✅ Visualizar lista de alunos

**Dashboard:** http://localhost:3000/portal/professor

**Dados do Professor (Mock):**
- **Nome:** Maria Santos
- **Disciplinas:** Matemática
- **Turmas:** 9º A, 1º B

---

### 3️⃣ Aluno

**Credenciais:**
- **Email:** `aluno@escola.com`
- **Senha:** `123456`

**Permissões:**
- ✅ Visualizar materiais de aula
- ✅ Acessar e enviar atividades
- ✅ Consultar notas e boletim
- ✅ Verificar agenda de eventos
- ✅ Ver comunicados da escola

**Dashboard:** http://localhost:3000/portal/aluno

**Dados do Aluno (Mock):**
- **Nome:** João Silva
- **Matrícula:** 2024001
- **Turma:** 9º Ano A
- **Ano Letivo:** 2024

---

### 4️⃣ Pais/Responsáveis

**Credenciais:**
- **Email:** `pai@escola.com`
- **Senha:** `123456`

**Permissões:**
- ✅ Visualizar boletim do filho
- ✅ Acompanhar frequência
- ✅ Consultar agenda escolar
- ✅ Receber comunicados
- ✅ Ver informações financeiras (Fase 2)

**Dashboard:** http://localhost:3000/portal/pais

**Dados do Responsável (Mock):**
- **Nome:** Carlos Silva (Pai de João Silva)
- **Filho:** João Silva - 9º Ano A
- **Matrícula:** 2024001

---

## 🔄 Alternando Entre Perfis

Para testar diferentes perfis:

1. Faça logout no canto superior direito
2. Retorne para http://localhost:3000/portal/login
3. Faça login com as credenciais do perfil desejado
4. Você será redirecionado para o dashboard apropriado

---

## 📊 Dados Mockados

Todos os dados mostrados na plataforma são **simulados** (mock data) para fins de demonstração:

- ✅ Notas e boletins
- ✅ Frequências e presenças
- ✅ Atividades e tarefas
- ✅ Materiais didáticos
- ✅ Notícias e eventos
- ✅ Comunicados
- ✅ Lista de alunos e professores
- ✅ Turmas e disciplinas

Os dados mockados estão definidos em: `lib/mockData.ts`

---

## 🎯 Fluxo de Teste Sugerido

### Para Gestores/Administradores:
1. Login como **admin@escola.com**
2. Explore: Gestão de Alunos → Gestão de Professores → Turmas
3. Veja relatórios de boletins e frequência
4. Teste envio de comunicados
5. Gerencie o calendário escolar

### Para Professores:
1. Login como **professor@escola.com**
2. Acesse "Minhas Turmas" e veja os alunos
3. Registre presença em uma aula
4. Lance notas de avaliações
5. Publique um novo material didático
6. Crie uma atividade para os alunos

### Para Alunos:
1. Login como **aluno@escola.com**
2. Visualize materiais disponíveis
3. Veja atividades pendentes
4. Consulte suas notas
5. Verifique eventos na agenda

### Para Pais:
1. Login como **pai@escola.com**
2. Consulte o boletim do filho
3. Verifique a frequência/presenças
4. Leia comunicados recentes
5. Veja próximos eventos na agenda

---

## 🔒 Segurança

### Implementações Atuais (MVP):
- ✅ Autenticação básica com sessão
- ✅ Controle de acesso por perfil
- ✅ Rotas protegidas via middleware
- ✅ Redirecionamento automático

### Para Produção (Fase 2):
- ⏳ JWT Tokens
- ⏳ Criptografia de senhas (bcrypt)
- ⏳ HTTPS obrigatório
- ⏳ Rate limiting
- ⏳ Logs de acesso
- ⏳ 2FA (autenticação de dois fatores)

---

## 📝 Notas Importantes

1. **Dados Temporários:** Ao recarregar a página, os dados retornam ao estado inicial (mock)
2. **Sessão:** A sessão é armazenada no sessionStorage do navegador
3. **Logout:** Sempre faça logout antes de trocar de perfil
4. **Desenvolvimento:** Este é um MVP focado em UX/UI frontend

---

## 🎨 Personalizações

### Cores
Edite: `tailwind.config.ts`

```typescript
colors: {
  primary: '#0047AB',     // Azul institucional
  secondary: '#4A90E2',   // Azul claro
  accent: '#FFB800',      // Amarelo dourado
}
```

### Logo
Substitua: `public/logo.png`

### Conteúdo
Edite as páginas em: `app/*/page.tsx`

---

## 📞 Suporte

Para mais informações, consulte:
- [README.md](./README.md) - Documentação completa
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Arquitetura técnica
- [FEATURES.md](./FEATURES.md) - Todas as funcionalidades

---

**Desenvolvido com Next.js 14, React 18, TypeScript e Tailwind CSS** ⚡

Aproveite sua plataforma educacional premium! 🎓✨
