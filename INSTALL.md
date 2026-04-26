# Guia de Instalação - Liceu Monteiro Lobato Platform

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git** (opcional, para clonar o repositório)

## 🚀 Instalação Passo a Passo

### 1. Navegar até o diretório do projeto

```bash
cd "C:\Users\mrodrigues7\Downloads\Liceu Monteiro Lobato"
```

### 2. Instalar as dependências

```bash
npm install
```

Aguarde a instalação de todas as dependências. Isso pode levar alguns minutos.

### 3. Verificar se a logo está no lugar correto

A logo deve estar no diretório `public/`:
- `public/logo.png`

### 4. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acessar a aplicação

Abra seu navegador e acesse:

```
http://localhost:3000
```

## 🔐 Acessando os Portais

### Portal de Login

Acesse: `http://localhost:3000/portal/login`

### Credenciais de Teste

**Portal do Aluno:**
- Email: `aluno@liceu.edu.br`
- Senha: `senha123`

**Portal dos Pais:**
- Email: `pai@exemplo.com`
- Senha: `senha123`

**Portal do Professor:**
- Email: `professor@liceu.edu.br`
- Senha: `senha123`

**Portal Administrativo:**
- Email: `admin@liceu.edu.br`
- Senha: `senha123`

## 📱 Páginas Disponíveis

### Site Institucional
- `/` - Home
- `/escola` - A Escola
- `/ensino` - Segmentos de Ensino
- `/ensino/infantil` - Educação Infantil
- `/ensino/fundamental` - Ensino Fundamental
- `/ensino/medio` - Ensino Médio
- `/noticias` - Blog de Notícias
- `/calendario` - Calendário Escolar
- `/matriculas` - Formulário de Matrículas

### Portais (requer login)
- `/portal/login` - Login
- `/portal/pais` - Dashboard dos Pais
- `/portal/aluno` - Dashboard do Aluno
- `/portal/professor` - Dashboard do Professor
- `/portal/admin` - Dashboard Administrativo

## 🏗️ Build para Produção

```bash
# Criar build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

## 🛠️ Comandos Úteis

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start

# Linting
npm run lint
```

## ⚠️ Problemas Comuns

### Erro de porta em uso

Se a porta 3000 estiver em uso:

```bash
# Windows PowerShell
$env:PORT=3001
npm run dev

# Ou especifique diretamente
npm run dev -- -p 3001
```

### Erro de módulos não encontrados

```bash
# Limpar cache e reinstalar
rm -rf node_modules
rm package-lock.json
npm install
```

### Erro de imagem não carregando

Certifique-se de que a logo está em `public/logo.png`

## 📞 Suporte

Para suporte técnico, entre em contato com:

**MGR Solutions**
- Email: suporte@mgrsolutions.com.br
- Telefone: (11) 1234-5678

---

Desenvolvido com ❤️ pela MGR Solutions
