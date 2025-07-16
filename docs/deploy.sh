#!/bin/bash

# 🚀 Script de Deploy Automatizado - Prevent Health
# Uso: ./deploy.sh

set -e  # Para o script se houver erro

echo "🚀 Iniciando deploy da Prevent Health..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configurações
VPS_IP="31.97.85.30"
VPS_USER="root"
PROJECT_NAME="prevent-health-onepage-design"

echo -e "${BLUE}📋 Configurações:${NC}"
echo "   VPS: $VPS_USER@$VPS_IP"
echo "   Projeto: $PROJECT_NAME"

# 1. Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: package.json não encontrado. Execute este script na raiz do projeto.${NC}"
    exit 1
fi

# 2. Ativar Node.js
echo -e "${YELLOW}📦 Ativando Node.js...${NC}"
source ~/.nvm/nvm.sh
nvm use default

# 3. Instalar dependências (se necessário)
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Instalando dependências...${NC}"
    npm install
fi

# 4. Build da aplicação
echo -e "${YELLOW}🔨 Fazendo build da aplicação...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Erro: Build falhou. Pasta dist não encontrada.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build concluído!${NC}"

# 5. Compactar arquivos
echo -e "${YELLOW}📦 Compactando arquivos...${NC}"
rm -f dist.tar.gz
tar -czf dist.tar.gz dist/

echo -e "${GREEN}✅ Arquivos compactados!${NC}"

# 6. Enviar para VPS
echo -e "${YELLOW}📤 Enviando arquivos para VPS...${NC}"
scp dist.tar.gz $VPS_USER@$VPS_IP:/root/

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro: Falha ao enviar arquivos para VPS.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Arquivos enviados!${NC}"

# 7. Deploy na VPS
echo -e "${YELLOW}🐳 Fazendo deploy na VPS...${NC}"
ssh $VPS_USER@$VPS_IP << 'EOF'
    echo "📁 Extraindo arquivos..."
    cd /root
    rm -rf dist
    tar -xzf dist.tar.gz
    
    echo "🔨 Reconstruindo imagem Docker..."
    docker build -t prevent-health:latest .
    
    echo "🔄 Atualizando serviço..."
    docker service update --image prevent-health:latest prevent-health_prevent-health
    
    echo "✅ Deploy concluído!"
EOF

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro: Falha no deploy na VPS.${NC}"
    exit 1
fi

# 8. Verificação final
echo -e "${YELLOW}🔍 Verificando status do serviço...${NC}"
ssh $VPS_USER@$VPS_IP "docker service ps prevent-health_prevent-health --format 'table {{.ID}}\t{{.Name}}\t{{.Image}}\t{{.Node}}\t{{.DesiredState}}\t{{.CurrentState}}'"

echo -e "${GREEN}🎉 Deploy concluído com sucesso!${NC}"
echo -e "${BLUE}🌐 Site: https://preventhealth.com.br${NC}"
echo -e "${YELLOW}💡 Dica: Pressione Ctrl+F5 para forçar refresh sem cache${NC}"

# 9. Limpeza local
echo -e "${YELLOW}🧹 Limpando arquivos temporários...${NC}"
rm -f dist.tar.gz

echo -e "${GREEN}✨ Processo finalizado!${NC}" 