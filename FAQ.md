# ❓ FAQ - Perguntas Frequentes

## 🚀 Instalação e Configuração

### Como iniciar o projeto pela primeira vez?

**Opção 1 (Mais Fácil - Windows):**
- Dê duplo clique no arquivo `START.bat`
- Aguarde a instalação automática
- A aplicação abrirá automaticamente

**Opção 2 (Terminal):**
```bash
npm install
npm run dev
```

### Qual versão do Node.js preciso?

- **Mínimo:** Node.js 18.x
- **Recomendado:** Node.js 20.x (LTS)
- **Download:** https://nodejs.org

### A porta 3000 já está em uso, o que fazer?

**Windows:**
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Linux/Mac:**
```bash
lsof -ti:3000 | xargs kill
```

Ou configure outra porta no arquivo `package.json`:
```json
"dev": "next dev -p 3001"
```

### Como limpar o cache e reinstalar?

```bash
# Remover dependências e cache
rm -rf node_modules package-lock.json .next

# Reinstalar
npm install
```

---

## 🔐 Autenticação e Login

### Quais são os usuários de teste?

| Perfil | Email | Senha |
|--------|-------|-------|
| Pais | `pai@escola.com` | `123456` |
| Aluno | `aluno@escola.com` | `123456` |
| Professor | `professor@escola.com` | `123456` |
| Admin | `admin@escola.com` | `123456` |

> Ver mais detalhes em: [USUARIOS_TESTE.md](./USUARIOS_TESTE.md)

### Como fazer logout?

Clique no botão **"Sair"** no canto superior direito do portal.

### Por que não consigo acessar o portal?

Certifique-se de:
1. Estar logado (acesse `/portal/login`)
2. Usar as credenciais corretas
3. Estar tentando acessar um portal correspondente ao seu perfil

### Como trocar de perfil?

1. Faça logout
2. Retorne para `/portal/login`
3. Faça login com outro email

---

## 📱 Funcionalidades

### Onde encontro o boletim do meu filho?

**Portal dos Pais** → Menu lateral → **Boletim Escolar**

Ou acesse diretamente: http://localhost:3000/portal/pais/boletim

### Como o professor lança notas?

**Portal do Professor** → **Lançamento de Notas**

1. Selecione a turma
2. Escolha a disciplina
3. Selecione o tipo de avaliação (Prova, Trabalho, Exercício)
4. Insira as notas dos alunos
5. Clique em "Salvar Notas"

### Como criar uma nova atividade?

**Portal do Professor** → **Atividades**

1. Clique em "Nova Atividade"
2. Preencha título e descrição
3. Defina data de entrega
4. Selecione a turma
5. Anexe arquivos (opcional)
6. Clique em "Publicar"

### Como acompanhar a frequência do aluno?

**Portal dos Pais:** Menu → Frequência  
**Portal Admin:** Gestão → Relatórios de Frequência

### Onde estão os materiais de aula?

**Portal do Aluno:** Menu → Materiais de Aula

Os materiais são organizados por disciplina e incluem PDFs, vídeos, links e apresentações.

---

## 🎨 Personalização

### Como trocar as cores da plataforma?

Edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0047AB',     // Cor principal
  secondary: '#4A90E2',   // Cor secundária
  accent: '#FFB800',      // Cor de destaque
}
```

### Como substituir o logo?

Substitua o arquivo em:
- `public/logo.png`

Mantenha proporções similares (recomendado: 200x60px).

### Como editar o conteúdo das páginas?

Os conteúdos estão nas páginas dentro de `app/`:
- **Home:** `app/page.tsx`
- **A Escola:** `app/escola/page.tsx`
- **Notícias:** `app/noticias/page.tsx`
- **Etc.**

---

## 🔧 Desenvolvimento

### Os dados são reais?

**Não.** Atualmente todos os dados são **mockados** (simulados) para demonstração.

Os dados estão em: `lib/mockData.ts`

Na **Fase 2**, serão conectados a um banco de dados real.

### As funcionalidades são funcionais?

**Sim!** Toda a UI/UX está funcional:
- ✅ Navegação entre páginas
- ✅ Autenticação e controle de acesso
- ✅ Visualização de dados
- ✅ Formulários interativos

**Mas:** Dados não persistem (são mockados).

### Como adicionar novos usuários?

**Atualmente:** Edite `lib/mockData.ts` → array `users`

**Fase 2:** Será feito via Portal Administrativo com persistência em banco.

### Posso usar em produção agora?

**Não recomendado.** Este é um MVP focado em frontend.

Para produção, é necessário:
- Backend real (API)
- Banco de dados
- Autenticação JWT
- Upload de arquivos
- Sistema de email
- HTTPS

---

## 🐛 Problemas Comuns

### Erro: "Module not found"

**Solução:**
```bash
npm install
```

### Erro: "Port already in use"

**Solução:**
- Feche outros processos na porta 3000
- Ou mude a porta: `npm run dev -- -p 3001`

### Página em branco após build

**Solução:**
```bash
rm -rf .next
npm run build
```

### Erro de TypeScript

**Solução:**
```bash
npm run build
# Veja os erros e corrija-os
```

### Imagens não aparecem

**Verifique:**
- Arquivos estão em `public/`
- Paths estão corretos (ex: `/logo.png`)
- Servidor está rodando

---

## 📱 Responsividade

### Em quais dispositivos funciona?

✅ **Smartphones** (320px+)
✅ **Tablets** (768px+)
✅ **Laptops** (1024px+)
✅ **Desktops** (1440px+)
✅ **Large Screens** (1920px+)

### Como testar em mobile?

**Opção 1:** DevTools do navegador (F12 → Toggle Device Toolbar)

**Opção 2:** Acesse do seu smartphone na mesma rede:
```
http://[SEU-IP]:3000
```

Encontre seu IP:
- **Windows:** `ipconfig`
- **Linux/Mac:** `ifconfig`

---

## 🎯 Dados e Conteúdo

### Como editar os dados mockados?

Edite: `lib/mockData.ts`

Estruturas disponíveis:
- `users` - Usuários de teste
- `grades` - Notas
- `absences` - Faltas
- `activities` - Atividades
- `materials` - Materiais
- `news` - Notícias
- `events` - Eventos
- `students` - Alunos
- `professors` - Professores
- `classes` - Turmas

### Como adicionar uma nova notícia?

Edite `lib/mockData.ts` → array `news`:

```typescript
{
  id: 4,
  title: 'Título da Notícia',
  excerpt: 'Resumo breve...',
  content: 'Conteúdo completo...',
  category: 'Evento',
  date: '2024-03-10',
  image: '/path/to/image.jpg'
}
```

---

## 🚀 Deploy e Produção

### Como fazer deploy?

**Recomendado:** Vercel (gratuito para projetos pessoais)

1. Crie conta em https://vercel.com
2. Conecte seu repositório
3. Deploy automático!

> 🚀 **Guia completo:** [DEPLOYMENT.md](./DEPLOYMENT.md)

### Preciso de backend?

**Para MVP/Demonstração:** Não, funciona apenas frontend.

**Para Produção Real:** Sim, é essencial para:
- Persistência de dados
- Segurança adequada
- Upload de arquivos
- Emails automatizados
- Relatórios dinâmicos

---

## 🎓 Dúvidas sobre Funcionalidades

### O que cada portal faz?

**Portal dos Pais:**
- Acompanhar desempenho do filho
- Ver boletim e frequência
- Receber comunicados
- Consultar agenda escolar

**Portal do Aluno:**
- Acessar materiais de aula
- Ver e enviar atividades
- Consultar notas
- Acompanhar agenda

**Portal do Professor:**
- Gerenciar turmas
- Lançar presença e notas
- Publicar materiais
- Criar atividades

**Portal Administrativo:**
- Gerenciar toda a escola
- Cadastrar alunos e professores
- Controlar turmas
- Enviar comunicados
- Gerar relatórios

> 📋 **Detalhes completos:** [FEATURES.md](./FEATURES.md)

---

## 💡 Dicas e Truques

### Atalhos Úteis

- **Ctrl + K** - Busca rápida (futuro)
- **Recarregar dados** - Recarregue a página (F5)
- **DevTools** - F12 para inspecionar

### Melhor Experiência

- Use navegadores modernos (Chrome, Edge, Firefox)
- Mantenha o navegador atualizado
- Habilite JavaScript
- Tela mínima: 320px de largura

### Performance

- O carregamento inicial pode demorar ~2s (primeira vez)
- Navegações subsequentes são instantâneas
- Em produção, será ainda mais rápido

---

## 📞 Precisa de Ajuda?

1. **Consulte a documentação:**
   - [INICIAR_AQUI.md](./INICIAR_AQUI.md) - Início rápido
   - [INSTALL.md](./INSTALL.md) - Instalação detalhada
   - [DEMO.md](./DEMO.md) - Guia de demonstração

2. **Problemas técnicos:**
   - Verifique os [Problemas Comuns](#-problemas-comuns) acima
   - Consulte logs no console do navegador (F12)
   - Veja logs do terminal

3. **Entre em contato:**
   - Email: suporte@liceu.edu.br
   - Telefone: (11) 1234-5678

---

## 🎉 Divirta-se Explorando!

A plataforma foi desenvolvida com atenção a cada detalhe. Explore todas as funcionalidades, teste em diferentes dispositivos e descubra tudo que ela oferece!

**Dica:** Comece fazendo login com cada perfil diferente para ver todas as perspectivas! 👥

---

<div align="center">

**Liceu Monteiro Lobato - Educação de Excelência** 🎓✨

</div>
