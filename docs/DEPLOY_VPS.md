# 🚀 Guia Completo de Deploy na VPS - Prevent Health

## 📋 Resumo do Processo

Este documento mapeia todo o processo de atualização da aplicação Prevent Health na VPS, incluindo arquivos, pastas e comandos utilizados.

## 🏗️ Estrutura do Projeto

### Pastas Principais
```
prevent-health-onepage-design/
├── src/                          # Código fonte React/TypeScript
│   ├── components/               # Componentes React
│   ├── pages/                   # Páginas da aplicação
│   ├── pdf/                     # Arquivos PDF (download)
│   └── ...
├── public/                      # Arquivos estáticos
│   ├── videos/                  # Vídeos da aplicação
│   ├── fotos/                   # Imagens
│   ├── textures/                # Texturas
│   └── ...
├── dist/                        # Build de produção (gerado)
└── docs/                        # Documentação
```

### Arquivos de Configuração
- `package.json` - Dependências e scripts
- `vite.config.ts` - Configuração do Vite
- `tailwind.config.ts` - Configuração do Tailwind CSS
- `tsconfig.json` - Configuração TypeScript

## 🎯 Componentes Principais Modificados

### 1. HeroSection.tsx
**Localização:** `src/components/HeroSection.tsx`
**Função:** Seção principal com vídeo de fundo
**Vídeo usado:** `public/videos/WhatsApp Video 2025-07-14 at 19.49.53.mp4`
**Modificações:**
- Padding de 20px acima do texto principal
- Padding de 80px para evitar sobreposição com navbar

### 2. EmotionalFloatingBalloon.tsx
**Localização:** `src/components/EmotionalFloatingBalloon.tsx`
**Função:** Balão flutuante com mensagens emocionais
**Modificações:**
- Correção do AudioContext (só toca após interação do usuário)
- Sistema de sessionStorage para marcar interação

### 3. ProcessSteps.tsx
**Localização:** `src/components/ProcessSteps.tsx`
**Função:** Seção de passos do atendimento
**Modificações:**
- Botão de download do PDF configurado
- PDF: `public/Como_funciona_o_atendimento_Prevent_Health.pdf`

### 4. Footer.tsx & LocationMap.tsx
**Localização:** `src/components/Footer.tsx` e `src/components/LocationMap.tsx`
**Modificações:**
- Email atualizado: `contato@danielafiorim.com.br` → `preventhealth7@gmail.com`

### 5. ClinicVideoSection.tsx
**Localização:** `src/components/ClinicVideoSection.tsx`
**Função:** Seção de vídeo da clínica
**Modificações:**
- Configurado para iframe do YouTube
- Placeholder: `VIDEO_ID` (aguardando ID do vídeo)

## 📁 Arquivos de Mídia

### Vídeos (public/videos/)
- ✅ **Mantido:** `WhatsApp Video 2025-07-14 at 19.49.53.mp4` (9.4MB)
- ❌ **Removidos:** 
  - `8313516-hd_1920_1080_30fps.mp4`
  - `5793441-uhd_3840_2160_25fps.mp4`
  - `4520173-hd_1920_1080_30fps.mp4`

### PDFs (public/)
- ✅ `Como_funciona_o_atendimento_Prevent_Health.pdf` (1.2MB)

### Imagens (public/fotos/)
- ✅ `IMG_dr.PNG` (foto da Dra. Daniela)

### Texturas (public/textures/)
- ✅ `sand.svg` (textura de areia)

## 🐳 Configuração Docker

### Dockerfile
**Localização:** `/root/Dockerfile` (no servidor)
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### nginx.conf
**Localização:** `/root/nginx.conf` (no servidor)
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html index.htm;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Portainer Stack
**Localização:** `/root/portainer-stack.yml` (no servidor)
```yaml
version: '3.8'
services:
  prevent-health:
    image: prevent-health:latest
    networks:
      - jnunesfiorimnet
    deploy:
      labels:
        - "traefik.enable=true"
        - "traefik.http.routers.prevent-health.rule=Host(`preventhealth.com.br`) || Host(`www.preventhealth.com.br`)"
        - "traefik.http.routers.prevent-health.entrypoints=websecure"
        - "traefik.http.routers.prevent-health.tls.certresolver=letsencryptresolver"
        - "traefik.http.services.prevent-health.loadbalancer.server.port=80"
networks:
  jnunesfiorimnet:
    external: true
```

## 🚀 Processo de Deploy

### 1. Build Local
```bash
# Ativar Node.js
source ~/.nvm/nvm.sh && nvm use default

# Build da aplicação
npm run build
```

### 2. Preparar Arquivos
```bash
# Compactar build
tar -czf dist.tar.gz dist/

# Enviar para VPS
scp dist.tar.gz root@31.97.85.30:/root/
```

### 3. Deploy na VPS
```bash
# Conectar na VPS
ssh root@31.97.85.30

# Extrair arquivos
cd /root
rm -rf dist
tar -xzf dist.tar.gz

# Reconstruir imagem Docker
docker build -t prevent-health:latest .

# Atualizar serviço
docker service update --image prevent-health:latest prevent-health_prevent-health

# Forçar atualização (se necessário)
docker service update --force prevent-health_prevent-health
```

## 🔧 Comandos de Verificação

### Verificar Status do Serviço
```bash
docker service ps prevent-health_prevent-health
```

### Verificar Arquivos no Container
```bash
docker exec $(docker ps -q --filter 'name=prevent-health') ls -la /usr/share/nginx/html/
```

### Verificar Logs
```bash
docker service logs prevent-health_prevent-health --tail 20
```

### Verificar Vídeo
```bash
docker exec $(docker ps -q --filter 'name=prevent-health') ls -la /usr/share/nginx/html/videos/
```

## 🌐 Informações da VPS

### Servidor
- **IP:** 31.97.85.30
- **Usuário:** root
- **Porta SSH:** 22

### Domínio
- **Principal:** preventhealth.com.br
- **WWW:** www.preventhealth.com.br

### Stack Portainer
- **Nome:** prevent-health
- **Rede:** jnunesfiorimnet (overlay)
- **Porta interna:** 80
- **Proxy:** Traefik com SSL automático

## 📝 Mudanças Implementadas

### ✅ Concluídas
1. **Padding no Hero:** 20px + 80px para evitar sobreposição com navbar
2. **Email atualizado:** preventhealth7@gmail.com
3. **AudioContext corrigido:** Só toca após interação do usuário
4. **Vídeos limpos:** Apenas WhatsApp Video mantido
5. **PDF configurado:** Download funcionando
6. **YouTube iframe:** Configurado (aguardando ID)

### 🔄 Pendentes
1. **ID do vídeo YouTube:** Substituir `VIDEO_ID` no ClinicVideoSection
2. **Testes finais:** Verificar todas as funcionalidades

## 🛠️ Troubleshooting

### Cache do Navegador
- Pressionar `Ctrl+F5` (Windows/Linux) ou `Cmd+Shift+R` (Mac)
- Abrir em aba anônima/privada
- Limpar cache do navegador

### Container não atualiza
```bash
docker service update --force prevent-health_prevent-health
```

### Verificar se arquivos estão corretos
```bash
docker exec $(docker ps -q --filter 'name=prevent-health') stat /usr/share/nginx/html/index.html
```

## 📞 Contatos

### Desenvolvimento
- **Email:** preventhealth7@gmail.com
- **WhatsApp:** (62) 99822-1110

### Servidor
- **IP:** 31.97.85.30
- **Portainer:** painel.preventhealth.com.br

---

**Última atualização:** 16/07/2025 21:30
**Versão:** 1.0.0 