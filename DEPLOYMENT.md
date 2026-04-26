# Guia de Deploy - Liceu Monteiro Lobato Platform

## 🚀 Deploy na Vercel (Recomendado)

A Vercel é a plataforma ideal para aplicações Next.js, oferecendo deploy automático e otimizado.

### Passo a Passo

1. **Criar conta na Vercel**
   - Acesse: https://vercel.com
   - Faça login com GitHub, GitLab ou email

2. **Instalar Vercel CLI (opcional)**
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**
   ```bash
   cd "C:\Users\mrodrigues7\Downloads\Liceu Monteiro Lobato"
   vercel
   ```

4. **Deploy via Dashboard**
   - Acesse dashboard.vercel.com
   - Clique em "New Project"
   - Importe o repositório
   - Configure e deploy

### Variáveis de Ambiente

Criar arquivo `.env.local` (não commitar!):

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/liceu_db

# JWT
JWT_SECRET=sua_chave_secreta_super_segura

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu_email@gmail.com
SMTP_PASS=sua_senha

# Storage
AWS_ACCESS_KEY_ID=sua_key
AWS_SECRET_ACCESS_KEY=seu_secret
AWS_BUCKET_NAME=liceu-files

# Application
NEXT_PUBLIC_APP_URL=https://liceumonteiro.com.br
```

## 🐳 Deploy com Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/liceu
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: liceu
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Comandos Docker

```bash
# Build
docker build -t liceu-platform .

# Run
docker run -p 3000:3000 liceu-platform

# Com compose
docker-compose up -d
```

## ☁️ Deploy na AWS

### Serviços Necessários

1. **EC2** - Servidor da aplicação
2. **RDS** - Banco PostgreSQL
3. **S3** - Storage de arquivos
4. **CloudFront** - CDN
5. **Route 53** - DNS
6. **Certificate Manager** - SSL/TLS

### Arquitetura AWS

```
Usuário
  ↓
CloudFront (CDN)
  ↓
Application Load Balancer
  ↓
EC2 Instances (Auto Scaling)
  ↓
RDS PostgreSQL (Multi-AZ)
  ↓
S3 (Arquivos)
```

## 🌐 Configuração de Domínio

### DNS Records

```
A     @           -> IP_DO_SERVIDOR
A     www         -> IP_DO_SERVIDOR
CNAME portal      -> app.liceumonteiro.com.br
CNAME api         -> api.liceumonteiro.com.br
```

### SSL/TLS

**Opção 1: Let's Encrypt (Gratuito)**
```bash
sudo apt-get install certbot
sudo certbot --nginx -d liceumonteiro.com.br -d www.liceumonteiro.com.br
```

**Opção 2: CloudFlare (Gratuito + CDN)**
- Apontar DNS para CloudFlare
- SSL automático
- CDN global incluído

## 🔧 Configuração do Servidor

### Nginx

```nginx
server {
    listen 80;
    server_name liceumonteiro.com.br www.liceumonteiro.com.br;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### PM2 (Process Manager)

```bash
# Instalar PM2
npm install -g pm2

# Iniciar aplicação
pm2 start npm --name "liceu-platform" -- start

# Configurar inicialização automática
pm2 startup
pm2 save

# Monitorar
pm2 status
pm2 logs liceu-platform
```

## 📊 Monitoramento

### Ferramentas Recomendadas

1. **Vercel Analytics** (se usar Vercel)
2. **Google Analytics** para métricas de uso
3. **Sentry** para tracking de erros
4. **DataDog** ou **New Relic** para APM
5. **UptimeRobot** para monitoramento de disponibilidade

## 🔐 Segurança em Produção

### Checklist de Segurança

- [ ] HTTPS obrigatório
- [ ] Senhas com hash bcrypt (salt rounds >= 10)
- [ ] JWT com expiração curta (15min)
- [ ] Refresh tokens
- [ ] Rate limiting (express-rate-limit)
- [ ] Helmet.js para headers de segurança
- [ ] CORS configurado corretamente
- [ ] Validação de inputs (Zod, Yup)
- [ ] SQL injection prevention (use ORM)
- [ ] XSS protection
- [ ] CSRF tokens
- [ ] Logs de auditoria
- [ ] Backup automático do banco
- [ ] Firewall configurado
- [ ] Updates de dependências regulares

## 💾 Backup

### Estratégia de Backup

**Banco de Dados:**
```bash
# Backup diário
pg_dump liceu_db > backup_$(date +%Y%m%d).sql

# Backup automático (cron)
0 2 * * * /usr/bin/pg_dump liceu_db > /backups/db_$(date +\%Y\%m\%d).sql
```

**Arquivos (S3):**
- Versionamento habilitado
- Lifecycle policies para arquivamento

## 📈 Scaling

### Vertical Scaling
- Aumentar recursos do servidor (CPU, RAM)
- Upgrade do plano de banco de dados

### Horizontal Scaling
- Múltiplas instâncias EC2 com Load Balancer
- Database read replicas
- Cache com Redis
- CDN para assets estáticos

## 🔄 CI/CD

### GitHub Actions

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## 📞 Suporte

Para questões sobre deployment:

**MGR Solutions**
- Email: devops@mgrsolutions.com.br
- WhatsApp: (11) 98765-4321

---

© 2026 MGR Solutions - Todos os direitos reservados
