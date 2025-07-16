# 📚 Documentação Prevent Health

Este diretório contém toda a documentação do projeto Prevent Health, incluindo guias de deploy, configurações e troubleshooting.

## 📁 Arquivos

- **[DEPLOY_VPS.md](./DEPLOY_VPS.md)** - Guia completo de deploy na VPS
- **[deploy.sh](./deploy.sh)** - Script automatizado de deploy
- **[README.md](./README.md)** - Este arquivo

## 🚀 Deploy Rápido

Para fazer deploy da aplicação, use o script automatizado:

```bash
# Na raiz do projeto
./docs/deploy.sh
```

## 📋 Resumo das Mudanças

### ✅ Implementadas
1. **Padding no Hero:** 20px + 80px para evitar sobreposição com navbar
2. **Email atualizado:** preventhealth7@gmail.com
3. **AudioContext corrigido:** Só toca após interação do usuário
4. **Vídeos limpos:** Apenas WhatsApp Video mantido
5. **PDF configurado:** Download funcionando
6. **YouTube iframe:** Configurado com vídeo correto (JzDbd-wOeJY)

### 🎉 Todas as mudanças foram implementadas com sucesso!

## 🛠️ Comandos Úteis

### Build Local
```bash
npm run build
```

### Deploy Manual
```bash
# 1. Build
npm run build

# 2. Compactar
tar -czf dist.tar.gz dist/

# 3. Enviar
scp dist.tar.gz root@31.97.85.30:/root/

# 4. Deploy
ssh root@31.97.85.30 "cd /root && rm -rf dist && tar -xzf dist.tar.gz && docker build -t prevent-health:latest . && docker service update --image prevent-health:latest prevent-health_prevent-health"
```

### Verificações
```bash
# Status do serviço
ssh root@31.97.85.30 "docker service ps prevent-health_prevent-health"

# Logs
ssh root@31.97.85.30 "docker service logs prevent-health_prevent-health --tail 20"

# Arquivos no container
ssh root@31.97.85.30 "docker exec \$(docker ps -q --filter 'name=prevent-health') ls -la /usr/share/nginx/html/"
```

## 🌐 Links

- **Site:** https://preventhealth.com.br
- **Portainer:** painel.preventhealth.com.br
- **VPS:** 31.97.85.30

## 📞 Contato

- **Email:** preventhealth7@gmail.com
- **WhatsApp:** (62) 99822-1110

---

**Última atualização:** 16/07/2025 21:45 