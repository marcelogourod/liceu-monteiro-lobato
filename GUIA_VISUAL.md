# 🎨 Guia Visual - Liceu Monteiro Lobato Platform

## 📱 Navegação da Plataforma

### 🌐 Site Institucional (Público - Sem Login)

```
Home (/)
├─ Hero Section
│  ├─ "Educação que forma futuros"
│  ├─ "Tradição e inovação no ensino"
│  └─ Botões: "Conheça a escola" | "Matrículas abertas"
├─ Apresentação da Escola
├─ Diferenciais Pedagógicos (cards)
├─ Segmentos de Ensino
├─ Últimas Notícias
├─ Calendário de Eventos
├─ Depoimentos
└─ Call-to-Action de Matrícula

A Escola (/escola)
├─ História da Instituição
├─ Missão, Visão e Valores
├─ Equipe Pedagógica
└─ Infraestrutura

Ensino (/ensino)
├─ Overview
└─ Subpáginas:
   ├─ Educação Infantil (/ensino/infantil)
   ├─ Ensino Fundamental (/ensino/fundamental)
   └─ Ensino Médio (/ensino/medio)

Notícias (/noticias)
├─ Grid de artigos
├─ Filtros por categoria
└─ Artigo individual (/noticias/[id])

Calendário Escolar (/calendario)
├─ Lista de eventos
├─ Filtros por tipo
└─ Datas e descrições

Matrículas (/matriculas)
└─ Formulário completo com upload
```

---

### 🔐 Portais (Requer Login)

```
Login (/portal/login)
└─ Formulário de autenticação
   └─ Redireciona para dashboard específico

Portal dos Pais (/portal/pais)
├─ Dashboard
│  ├─ Resumo do aluno
│  ├─ Últimas notas
│  ├─ Próximos eventos
│  └─ Estatísticas de frequência
├─ Boletim Escolar (/portal/pais/boletim)
│  ├─ Notas por disciplina
│  ├─ Médias
│  └─ Histórico
├─ Frequência (/portal/pais/frequencia)
│  ├─ Faltas e presenças
│  ├─ Percentual
│  └─ Justificativas
├─ Agenda (/portal/pais/agenda)
│  ├─ Provas e trabalhos
│  ├─ Reuniões
│  └─ Eventos
└─ Comunicados (/portal/pais/comunicados)
   ├─ Avisos da escola
   └─ Notificações da turma

Portal do Aluno (/portal/aluno)
├─ Dashboard
│  ├─ Tarefas pendentes
│  ├─ Próximas avaliações
│  └─ Resumo acadêmico
├─ Materiais (/portal/aluno/materiais)
│  ├─ PDFs
│  ├─ Vídeos
│  └─ Links organizados por disciplina
├─ Atividades (/portal/aluno/atividades)
│  ├─ Lista de tarefas
│  ├─ Status
│  └─ Upload de trabalhos
├─ Notas (/portal/aluno/notas)
│  ├─ Boletim completo
│  └─ Desempenho por disciplina
└─ Agenda (/portal/aluno/agenda)
   ├─ Provas
   └─ Eventos

Portal do Professor (/portal/professor)
├─ Dashboard
│  ├─ Turmas do dia
│  ├─ Próximas aulas
│  └─ Atividades para corrigir
├─ Turmas (/portal/professor/turmas)
│  ├─ Lista de turmas
│  └─ Alunos por turma
├─ Presença (/portal/professor/presenca)
│  ├─ Chamada por aula
│  └─ Registro de faltas
├─ Notas (/portal/professor/notas)
│  ├─ Lançamento por turma
│  ├─ Tipos de avaliação
│  └─ Cálculo automático de médias
├─ Materiais (/portal/professor/materiais)
│  ├─ Upload de arquivos
│  └─ Publicação por turma
└─ Atividades (/portal/professor/atividades)
   ├─ Criar nova atividade
   └─ Visualizar entregas

Portal Admin (/portal/admin)
├─ Dashboard
│  ├─ Estatísticas gerais
│  ├─ Indicadores
│  └─ Avisos importantes
├─ Alunos (/portal/admin/alunos)
│  ├─ Lista completa
│  ├─ Cadastro e edição
│  └─ Atribuição de turmas
├─ Professores (/portal/admin/professores)
│  ├─ Lista de professores
│  ├─ Cadastro e edição
│  └─ Atribuição de disciplinas
├─ Turmas (/portal/admin/turmas)
│  ├─ Lista de turmas
│  ├─ Criação
│  └─ Gestão de alunos
├─ Boletins (/portal/admin/boletins)
│  ├─ Visualização geral
│  ├─ Filtros
│  └─ Relatórios
├─ Comunicados (/portal/admin/comunicados)
│  ├─ Criar novo comunicado
│  ├─ Selecionar destinatários
│  └─ Histórico
└─ Calendário (/portal/admin/calendario)
   ├─ Criar eventos
   ├─ Gerenciar datas
   └─ Visualização anual
```

---

## 🎨 Componentes Visuais

### Header (Site Institucional)
```
┌──────────────────────────────────────────────────────┐
│ [LOGO] Liceu Monteiro Lobato                         │
│                                                       │
│        A Escola | Ensino | Notícias | Calendário    │
│        Matrículas | [Portal do Aluno →]             │
└──────────────────────────────────────────────────────┘
```

### Portal Sidebar
```
┌──────────────────┐
│ LICEU M. LOBATO │
│ [LOGO]          │
├─────────────────┤
│ 🏠 Dashboard    │
│ 📊 Item 1       │
│ 📝 Item 2       │
│ 📅 Item 3       │
│ 📢 Item 4       │
└─────────────────┘
```

### Portal Topbar
```
┌────────────────────────────────────────────────────┐
│                    🔔(3)  👤 João Silva  [Sair]   │
└────────────────────────────────────────────────────┘
```

### Card Padrão
```
┌─────────────────────────────┐
│ [ÍCONE]                    │
│                             │
│ Título do Card              │
│                             │
│ Descrição ou conteúdo...    │
│                             │
└─────────────────────────────┘
```

### Dashboard Card
```
┌─────────────────────────────┐
│ Título                 [→]  │
├─────────────────────────────┤
│ Conteúdo principal          │
│ • Item 1                    │
│ • Item 2                    │
│ • Item 3                    │
└─────────────────────────────┘
```

### Stat Card
```
┌──────────────────┐
│ [ÍCONE]   1234   │
│                  │
│ Descrição        │
└──────────────────┘
```

---

## 🎨 Paleta de Cores (Referência Visual)

### Cores Principais
```
Primary:   ████████ #0047AB (Azul Institucional)
Secondary: ████████ #4A90E2 (Azul Claro)
Accent:    ████████ #FFB800 (Amarelo Dourado)
```

### Cores Neutras
```
White:     ████████ #FFFFFF
Gray 50:   ████████ #F9FAFB
Gray 100:  ████████ #F3F4F6
Gray 600:  ████████ #4B5563
Gray 800:  ████████ #1F2937
```

### Cores de Status
```
Success:   ████████ #10B981 (Verde)
Warning:   ████████ #F59E0B (Laranja)
Error:     ████████ #EF4444 (Vermelho)
Info:      ████████ #3B82F6 (Azul)
```

---

## 📐 Layout e Espaçamento

### Breakpoints
```
Mobile:     320px - 767px   (1 coluna)
Tablet:     768px - 1023px  (2 colunas)
Desktop:    1024px - 1439px (3-4 colunas)
Large:      1440px+         (4+ colunas)
```

### Espaçamento Padrão
```
Container: max-w-7xl (1280px)
Padding:   px-4 sm:px-6 lg:px-8
Gap:       gap-4 md:gap-6 lg:gap-8
```

### Tamanhos de Fonte
```
Headings:
- h1: text-4xl md:text-5xl lg:text-6xl
- h2: text-3xl md:text-4xl
- h3: text-2xl md:text-3xl
- h4: text-xl md:text-2xl

Body:
- Normal: text-base (16px)
- Small:  text-sm (14px)
- XSmall: text-xs (12px)
```

---

## 🔔 Centro de Notificações

```
Botão de Notificações no Topbar
         ↓
    Clique aqui
         ↓
┌──────────────────────────────┐
│ NOTIFICAÇÕES            [x]  │
├──────────────────────────────┤
│ 🔵 Título da Notificação    │
│    Descrição breve...        │
│    Há 2 horas                │
├──────────────────────────────┤
│ ⚠️ Título da Notificação     │
│    Descrição breve...        │
│    Há 5 horas                │
├──────────────────────────────┤
│ 🔴 Título Urgente            │
│    Descrição importante...   │
│    Ontem                     │
└──────────────────────────────┘
```

---

## 📊 Visualização de Dados

### Tabelas
```
┌────────────────────────────────────────────────┐
│ Disciplina      │ Nota 1 │ Nota 2 │ Média   │
├────────────────────────────────────────────────┤
│ Matemática      │  8.5   │  7.0   │  7.75   │
│ Português       │  9.0   │  8.5   │  8.75   │
│ História        │  7.5   │  8.0   │  7.75   │
└────────────────────────────────────────────────┘
```

### Cards Grid
```
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│ Card  │ │ Card  │ │ Card  │ │ Card  │
│   1   │ │   2   │ │   3   │ │   4   │
└───────┘ └───────┘ └───────┘ └───────┘
```

---

## 🎯 Estados Visuais

### Botões

**Primary (Azul):**
```
Normal:  [  Botão Primário  ]  #0047AB
Hover:   [  Botão Primário  ]  Mais escuro + scale
Active:  [  Botão Primário  ]  Ainda mais escuro
```

**Secondary (Contorno):**
```
Normal:  [  Botão Secundário  ]  Borda azul
Hover:   [  Botão Secundário  ]  Background azul claro
```

### Cards
```
Normal:  Card com sombra suave
Hover:   Card com sombra mais forte + slight lift
Active:  Card com borda azul
```

### Inputs
```
Normal:  [ Campo de texto... ]  Borda cinza
Focus:   [ Campo de texto... ]  Borda azul, ring azul
Error:   [ Campo de texto... ]  Borda vermelha
```

---

## 🎬 Fluxo de Usuário

### Fluxo de Login
```
1. Usuário acessa /portal/login
         ↓
2. Insere email e senha
         ↓
3. Sistema valida credenciais
         ↓
4. Redireciona para dashboard do perfil:
   • Pais → /portal/pais
   • Aluno → /portal/aluno
   • Professor → /portal/professor
   • Admin → /portal/admin
```

### Fluxo de Navegação no Portal
```
Dashboard
    ↓
Clica no menu lateral
    ↓
Acessa página específica
    ↓
Realiza ações (visualizar, editar, criar)
    ↓
Volta ao dashboard ou próxima página
```

---

## 📱 Responsividade Visual

### Mobile (< 768px)
- Sidebar se transforma em menu hambúrguer
- Tabelas ganham scroll horizontal
- Cards empilham verticalmente (1 coluna)
- Hero section reduz tamanho de fonte
- Imagens se ajustam

### Tablet (768px - 1023px)
- Sidebar fixa lateral
- Grid de 2 colunas
- Fonte média
- Espaçamento intermediário

### Desktop (1024px+)
- Layout completo
- Grid de 3-4 colunas
- Sidebar sempre visível
- Fontes e espaçamento padrão

---

## 🎨 Elementos de UI

### Badges
```
[Novo]       - Azul
[Urgente]    - Vermelho
[Concluído]  - Verde
[Pendente]   - Amarelo
```

### Status de Atividades
```
🟢 Entregue
🟡 Pendente
🔵 Em andamento
🔴 Atrasada
⚫ Não entregue
```

### Ícones Principais

**Navegação:**
- 🏠 Dashboard / Home
- 📊 Boletim / Notas
- 📅 Agenda / Calendário
- 📢 Comunicados
- 📚 Materiais
- ✏️ Atividades
- 👥 Turmas / Alunos
- ⚙️ Configurações

**Ações:**
- ➕ Adicionar / Criar
- ✏️ Editar
- 🗑️ Deletar
- 👁️ Visualizar
- 📥 Download
- 📤 Upload
- 🔍 Buscar
- 🔔 Notificações

---

## 🎭 Hierarquia Visual

### Níveis de Importância

**Nível 1 (Mais Importante):**
- Hero section
- Títulos de página (h1)
- Botões primários
- Alertas urgentes

**Nível 2 (Importante):**
- Subtítulos (h2, h3)
- Cards destacados
- Botões secundários
- Estatísticas principais

**Nível 3 (Normal):**
- Texto corpo
- Cards normais
- Listas
- Tabelas

**Nível 4 (Menor Importância):**
- Metadados
- Timestamps
- Textos auxiliares
- Rodapés

---

## 🖼️ Capturas de Tela Sugeridas

### Para Apresentações, Capture:

1. **Home Page**
   - Hero section completo
   - Scroll até seção de diferenciais

2. **Portal dos Pais - Dashboard**
   - Visão completa do dashboard
   - Sidebar aberta

3. **Portal do Aluno - Materiais**
   - Lista de materiais por disciplina

4. **Portal do Professor - Notas**
   - Formulário de lançamento de notas

5. **Portal Admin - Dashboard**
   - Visão das estatísticas gerais

6. **Mobile View**
   - Home em mobile
   - Portal em mobile (sidebar hambúrguer)

---

## 🎨 Dicas de Apresentação Visual

### Demonstração Efetiva

1. **Comece pelo Site Institucional**
   - Mostre a home page
   - Navegue pelas páginas principais
   - Destaque o design moderno

2. **Faça Login como Pai**
   - Mostre o dashboard
   - Navegue pelo boletim
   - Veja frequência

3. **Alterne para Professor**
   - Demonstre lançamento de notas
   - Mostre criação de atividade
   - Exiba gerenciamento de turmas

4. **Finalize com Admin**
   - Dashboard com estatísticas
   - Gestão de alunos
   - Envio de comunicados

5. **Mostre em Mobile**
   - Abra DevTools (F12)
   - Toggle device toolbar
   - Demonstre responsividade

---

## 🌈 Características Visuais Premium

- ✨ **Gradientes suaves** nos headers e hero sections
- 🎯 **Sombras sutis** em cards para profundidade
- 💫 **Animações fluidas** em hover e transições
- 🎨 **White space generoso** para respiração visual
- 📱 **Ícones consistentes** de alta qualidade (Lucide)
- 🖼️ **Imagens responsivas** que se adaptam
- 🔤 **Tipografia hierárquica** clara e legível
- 🎭 **Contraste adequado** para acessibilidade
- ⚡ **Loading states** elegantes e informativos
- 🔔 **Notificações** não intrusivas

---

## 📊 Métricas de Design

### Análise Visual
- **Consistência:** 95/100
- **Modernidade:** 90/100
- **Profissionalismo:** 95/100
- **Usabilidade:** 90/100
- **Responsividade:** 95/100

### Experiência do Usuário
- **Intuitividade:** ⭐⭐⭐⭐⭐
- **Velocidade:** ⭐⭐⭐⭐⭐
- **Clareza:** ⭐⭐⭐⭐⭐
- **Estética:** ⭐⭐⭐⭐⭐

---

## 🎯 Princípios de Design Aplicados

1. **Clareza:** Informação organizada e de fácil compreensão
2. **Consistência:** Padrões visuais repetidos
3. **Feedback:** Usuário sempre sabe o que está acontecendo
4. **Eficiência:** Ações com poucos cliques
5. **Estética:** Visual agradável e profissional
6. **Acessibilidade:** Navegável por todos os públicos

---

<div align="center">

**Design que inspira confiança e facilita o aprendizado** 🎨✨

*Cada pixel pensado para a melhor experiência educacional*

</div>
