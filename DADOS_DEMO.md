# 📊 Dados de Demonstração (Mock Data)

## 🎯 Visão Geral

A plataforma Liceu Monteiro Lobato **já possui dados mockados completos e realistas** em todas as 36 telas implementadas!

Todos os dados são simulados e servem para demonstração da funcionalidade da plataforma.

---

## 📁 Localização dos Dados

**Arquivo principal:** `lib/mockData.ts`

Este arquivo contém todos os dados simulados usados em toda a plataforma.

---

## 📊 Dados Disponíveis

### 👤 Usuários (4 perfis)
- **1 Pai** (Carlos Silva)
- **1 Aluno** (João Silva)
- **1 Professor** (Maria Santos)
- **1 Admin** (Ana Paula Rodrigues)

**Todos usam senha:** `123456`

---

### 📝 Notas (24 registros)
- Múltiplas disciplinas
- Diferentes tipos de avaliação
- Notas do 1º bimestre
- Pesos variados

**Disciplinas com notas:**
- Matemática (3 notas)
- Português (3 notas)
- História (3 notas)
- Geografia (3 notas)
- Ciências (3 notas)
- Inglês (3 notas)
- Ed. Física (2 notas)
- Arte (2 notas)
- Filosofia (2 notas)

---

### 📅 Faltas (6 registros)
- Faltas justificadas e não justificadas
- Diferentes disciplinas
- Datas variadas
- Motivos das justificativas

---

### ✏️ Atividades (8 registros)

**Status variados:**
- Pendentes (3)
- Entregues (1)
- Corrigidas (2)
- Em andamento (1)

**Disciplinas:**
- Matemática
- Português
- História
- Ciências
- Geografia
- Inglês
- Ed. Física
- Arte

**Detalhes inclusos:**
- Descrição completa
- Data de entrega
- Professor responsável
- Feedback (para corrigidas)
- Notas (para entregues)
- Anexos

---

### 📚 Materiais (15 registros)

**Tipos:**
- PDFs (7)
- Vídeos (4)
- Apresentações (2)
- Links (2)

**Informações:**
- Título descritivo
- Disciplina
- Professor
- Data de publicação
- Tamanho do arquivo
- Número de downloads/visualizações

---

### 📰 Notícias (6 artigos)

**Categorias:**
- Conquistas
- Eventos
- Tecnologia
- Responsabilidade Social
- Institucional

**Conteúdo:**
- Título
- Resumo
- Conteúdo completo em HTML
- Autor
- Data
- Imagem destacada
- Categoria

**Artigos em destaque:**
- Olimpíada de Matemática
- Feira de Ciências
- Matrículas 2027

---

### 📅 Eventos (10 registros)

**Tipos:**
- Reuniões (2)
- Provas (2)
- Eventos escolares (3)
- Palestras (1)
- Excursões (1)
- Simulados (1)

**Informações:**
- Título
- Data e horário
- Local
- Descrição
- Público-alvo

**Próximos eventos:**
- Reunião de Pais (20/03)
- Avaliação de Matemática (25/03)
- Feira de Ciências (05/04)
- Dia da Família (12/04)

---

### 🎓 Alunos (8 registros)

**Dados completos:**
- Nome
- Matrícula
- Turma e série
- Email e telefone
- Data de nascimento
- Dados do responsável
- Endereço
- Status

**Turmas representadas:**
- 9º A (5 alunos)
- 9º B (2 alunos)
- 8º A (1 aluno)

---

### 👨‍🏫 Professores (7 registros)

**Disciplinas representadas:**
- Matemática e Física
- Português e Literatura
- História e Filosofia
- Geografia e Ciências
- Inglês
- Educação Física
- Arte e Música

**Informações:**
- Nome e contato
- Disciplinas que leciona
- Turmas atribuídas
- Formação acadêmica
- Especialização
- Status

---

### 🏫 Turmas (6 registros)

**Anos:**
- 9º Ano (2 turmas)
- 8º Ano (2 turmas)
- 7º Ano (1 turma)
- 1º Ano EM (1 turma)

**Informações:**
- Nome da turma
- Série/ano
- Número de alunos
- Turno (Manhã/Tarde)
- Sala de aula
- Coordenador responsável

---

### 🔔 Notificações (5 registros)

**Tipos:**
- Info (2)
- Importante (2)
- Alerta (1)

**Conteúdo:**
- Título
- Mensagem
- Data e hora
- Status de leitura
- Link para ação

**Notificações ativas:**
- Nova nota lançada
- Reunião confirmada
- Atividade próxima do prazo
- Novo material
- Comunicado da escola

---

### 📢 Comunicados (3 registros)

**Prioridades:**
- Alta (1)
- Média (2)

**Conteúdo:**
- Título
- Mensagem completa
- Autor
- Data
- Público-alvo
- Anexos (quando aplicável)

---

## 🎬 Como os Dados São Usados

### 1. **Portal dos Pais**
- Visualiza notas do filho (mockGrades)
- Vê faltas (mockAbsences)
- Consulta eventos (mockEvents)
- Recebe comunicados (mockCommunications)

### 2. **Portal do Aluno**
- Acessa materiais (mockMaterials)
- Vê atividades (mockActivities)
- Consulta notas próprias (mockGrades)
- Verifica agenda (mockEvents)

### 3. **Portal do Professor**
- Gerencia turmas (mockClasses)
- Visualiza alunos (mockStudents)
- Publica materiais (mockMaterials)
- Cria atividades (mockActivities)

### 4. **Portal Admin**
- Gerencia alunos (mockStudents)
- Gerencia professores (mockProfessors)
- Gerencia turmas (mockClasses)
- Envia comunicados (mockCommunications)

### 5. **Site Institucional**
- Exibe notícias (mockNews)
- Mostra calendário (mockEvents)

---

## 🔧 Personalizando os Dados

### Adicionar Novas Notas

```typescript
// Em lib/mockData.ts
export const mockGrades: Grade[] = [
  // Dados existentes...
  {
    id: '25',
    studentId: '2',
    discipline: 'Química',
    value: 8.5,
    date: '2026-04-10',
    period: '2º Bimestre',
    type: 'Prova',
    weight: 4.0
  }
]
```

### Adicionar Nova Notícia

```typescript
export const mockNews: NewsArticle[] = [
  // Dados existentes...
  {
    id: '7',
    title: 'Seu Título',
    excerpt: 'Resumo breve...',
    content: '<p>Conteúdo completo...</p>',
    category: 'Eventos',
    date: '2026-03-20',
    author: 'Autor',
    image: '/news/imagem.jpg',
    featured: false
  }
]
```

### Adicionar Novo Aluno

```typescript
export const mockStudents: Student[] = [
  // Dados existentes...
  {
    id: '9',
    name: 'Novo Aluno',
    registration: '2024009',
    class: '9º A',
    grade: '9º Ano',
    email: 'novo.aluno@liceu.edu.br',
    // ... outros campos
  }
]
```

---

## 📊 Estatísticas dos Dados Mock

| Categoria | Quantidade | Status |
|-----------|-----------|--------|
| Usuários | 4 | ✅ Completo |
| Notas | 24 | ✅ Completo |
| Faltas | 6 | ✅ Completo |
| Atividades | 8 | ✅ Completo |
| Materiais | 15 | ✅ Completo |
| Notícias | 6 | ✅ Completo |
| Eventos | 10 | ✅ Completo |
| Alunos | 8 | ✅ Completo |
| Professores | 7 | ✅ Completo |
| Turmas | 6 | ✅ Completo |
| Notificações | 5 | ✅ Completo |
| Comunicados | 3 | ✅ Completo |

**TOTAL: 102 registros mockados** 🎉

---

## 🎯 Dados Realistas

Todos os dados foram criados para parecer o mais realista possível:

✅ **Nomes brasileiros comuns**  
✅ **Matrículas no padrão 2024XXX**  
✅ **Datas plausíveis (março-abril 2026)**  
✅ **Notas variadas (7.0 a 10.0)**  
✅ **Disciplinas do currículo brasileiro**  
✅ **Eventos típicos de escola**  
✅ **Comunicados formais**  
✅ **Atividades pedagógicas realistas**

---

## 🔄 Persistência dos Dados

⚠️ **IMPORTANTE:**
- Dados NÃO são persistentes
- Ao recarregar a página, voltam ao estado inicial
- Qualquer alteração é apenas visual/temporária
- Para persistência real, é necessário backend (Fase 2)

---

## 🚀 Fase 2: Dados Reais

Na Fase 2, os dados mockados serão substituídos por:

- 🗄️ **Banco de Dados PostgreSQL**
- 🔌 **API REST** para CRUD completo
- 💾 **Persistência real** de todas alterações
- 📤 **Upload real** de arquivos
- 📧 **Envio real** de emails
- 🔐 **Autenticação JWT**

---

## 🎨 Visualizando os Dados

### No Código
```typescript
// Importar dados
import { mockGrades, mockStudents } from '@/lib/mockData'

// Usar em componente
const grades = mockGrades.filter(g => g.studentId === '2')
```

### Na Plataforma
1. Faça login com qualquer perfil
2. Navegue pelas páginas
3. Veja os dados sendo exibidos
4. Experimente filtros e buscas

---

## 📝 Exemplo de Uso Prático

### Cenário: Professor lança nota

```typescript
// Portal do Professor > Lançamento de Notas

// 1. Professor seleciona turma
const turma = mockClasses.find(c => c.id === '1') // 9º A

// 2. Visualiza alunos
const alunos = mockStudents.filter(s => s.class === '9º A')

// 3. Lança nota (simulado)
const novaNota = {
  id: '999',
  studentId: alunos[0].id,
  discipline: 'Matemática',
  value: 8.5,
  date: new Date().toISOString(),
  period: '1º Bimestre',
  type: 'Prova'
}

// Na Fase 2, isso seria uma chamada de API:
// await api.post('/grades', novaNota)
```

---

## 💡 Dicas

1. **Explore os dados** abrindo `lib/mockData.ts`
2. **Personalize à vontade** para suas demos
3. **Adicione mais registros** seguindo os padrões
4. **Teste cenários variados** (aluno com muitas faltas, notas baixas, etc)
5. **Use dados realistas** para demonstrações com stakeholders

---

## 🆘 Problemas Comuns

### Dados não aparecem?
- Verifique se está importando de `@/lib/mockData`
- Confirme que está logado com o perfil correto

### Quer resetar os dados?
- Recarregue a página (F5)
- Os dados voltam ao estado inicial

### Quer adicionar mais dados?
- Edite `lib/mockData.ts`
- Siga o padrão dos dados existentes
- Reinicie o servidor: `npm run dev`

---

## 📚 Documentação Relacionada

- **[USUARIOS_TESTE.md](./USUARIOS_TESTE.md)** - Credenciais de acesso
- **[DEMO.md](./DEMO.md)** - Como demonstrar a plataforma
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Como os dados fluem no código

---

## ✅ Conclusão

**A plataforma JÁ ESTÁ 100% FUNCIONAL para demonstrações!**

Todos os dados mockados estão prontos e sendo usados em todas as telas. Basta fazer login e explorar! 🎉

---

<div align="center">

**Dados de Demonstração Premium** 📊

*102 registros realistas para uma demo impecável*

</div>
