# 🚀 Quick Start - Liceu Monteiro Lobato Platform

## ⚡ Início Rápido (5 minutos)

### 1️⃣ Pré-requisitos

Instale o **Node.js 18+**:
- Windows: https://nodejs.org
- Baixe e instale a versão LTS

### 2️⃣ Opção Fácil (Windows)

**Clique duplo no arquivo:**
```
START.bat
```

O script vai:
- ✅ Verificar Node.js
- ✅ Instalar dependências automaticamente
- ✅ Iniciar o servidor
- ✅ Abrir no navegador

### 3️⃣ Opção Manual

**Abra o PowerShell nesta pasta e execute:**

```powershell
# Instalar dependências
npm install

# Iniciar servidor
npm run dev
```

### 4️⃣ Acessar a Aplicação

Abra o navegador em: **http://localhost:3000**

---

## 🔐 Credenciais de Teste

### Portal dos Pais
```
Email: pai@exemplo.com
Senha: senha123
```

### Portal do Aluno
```
Email: aluno@liceu.edu.br
Senha: senha123
```

### Portal do Professor
```
Email: professor@liceu.edu.br
Senha: senha123
```

### Portal Administrativo
```
Email: admin@liceu.edu.br
Senha: senha123
```

---

## 🗺️ Navegação Rápida

### Site Institucional
- **Home**: http://localhost:3000
- **A Escola**: http://localhost:3000/escola
- **Ensino**: http://localhost:3000/ensino
- **Notícias**: http://localhost:3000/noticias
- **Calendário**: http://localhost:3000/calendario
- **Matrículas**: http://localhost:3000/matriculas

### Portais (após login)
- **Login**: http://localhost:3000/portal/login
- **Pais**: http://localhost:3000/portal/pais
- **Aluno**: http://localhost:3000/portal/aluno
- **Professor**: http://localhost:3000/portal/professor
- **Admin**: http://localhost:3000/portal/admin

---

## ❓ Problemas Comuns

### "Comando não encontrado"
➡️ **Solução**: Instale o Node.js em https://nodejs.org

### "Porta 3000 em uso"
➡️ **Solução**: 
```powershell
$env:PORT=3001
npm run dev
```

### "Logo não aparece"
➡️ **Solução**: Verifique se `public/logo.png` existe

### "Erro ao instalar dependências"
➡️ **Solução**: 
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 📚 Documentação Completa

Para informações detalhadas, consulte:

- **README.md** - Visão geral do projeto
- **INSTALL.md** - Guia completo de instalação
- **DEMO.md** - Roteiro de demonstração
- **FEATURES.md** - Lista de funcionalidades
- **ARCHITECTURE.md** - Documentação técnica
- **DEPLOYMENT.md** - Como fazer deploy
- **TECH_STACK.md** - Tecnologias utilizadas

---

## 🎯 Roteiro de Teste Rápido (10 minutos)

1. **Abra a home** - veja o design premium
2. **Navegue no menu** - explore as páginas institucionais
3. **Faça login como Pai** - veja boletim e frequência
4. **Faça login como Aluno** - veja materiais e atividades
5. **Faça login como Professor** - registre presença e notas
6. **Faça login como Admin** - gerencie alunos e turmas
7. **Teste em mobile** - redimensione o navegador

---

## 💡 Dicas

- Use **Ctrl+Shift+I** para abrir DevTools
- Teste em **modo anônimo** para ver sem cache
- Use **Ctrl+Click** nos links para abrir em nova aba
- Redimensione a janela para ver responsividade

---

## ✅ Tudo Funcionando?

Se você conseguiu:
- ✅ Instalar as dependências
- ✅ Iniciar o servidor
- ✅ Acessar http://localhost:3000
- ✅ Fazer login em algum portal

**Parabéns! A plataforma está funcionando perfeitamente!** 🎉

---

## 📞 Precisa de Ajuda?

**MGR Solutions - Suporte Técnico**
- 📧 Email: suporte@mgrsolutions.com.br
- 📱 WhatsApp: (11) 98765-4321

Respondemos em até 2 horas (horário comercial)

---

**Desenvolvido por MGR Solutions com ❤️**  
**Março 2026**
