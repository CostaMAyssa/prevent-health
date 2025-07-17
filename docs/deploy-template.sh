#!/bin/bash

# 🚀 Script de Deploy Automatizado - Template Universal
# Uso: ./docs/deploy.sh
# 
# INSTRUÇÕES:
# 1. Copie este arquivo para seu projeto como docs/deploy.sh
# 2. Edite as configurações abaixo (seção CONFIGURAÇÕES)
# 3. Torne executável: chmod +x docs/deploy.sh
# 4. Execute: ./docs/deploy.sh

set -e  # Para o script se houver erro

echo "🚀 Iniciando deploy..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ======================================
# CONFIGURAÇÕES - EDITE AQUI
# ======================================
VPS_IP="SEU_IP_VPS"                    # Ex: "31.97.85.30"
VPS_USER="root"                        # Usuário SSH
PROJECT_NAME="seu-projeto"             # Nome do projeto (sem espaços)
BUILD_COMMAND="npm run build"          # Comando de build
BUILD_DIR="dist"                       # Pasta de build (dist, build, out)
DOMAIN="seudominio.com"                # Domínio do site
# ======================================

echo -e "${BLUE}📋 Configurações:${NC}"
echo "   VPS: $VPS_USER@$VPS_IP"
echo "   Projeto: $PROJECT_NAME"
echo "   Build: $BUILD_COMMAND"
echo "   Pasta: $BUILD_DIR"

# Verificar se as configurações foram editadas
if [ "$VPS_IP" = "SEU_IP_VPS" ]; then
    echo -e "${RED}❌ Erro: Configure as variáveis no topo do script antes de usar!${NC}"
    echo -e "${YELLOW}💡 Edite as configurações na seção 'CONFIGURAÇÕES - EDITE AQUI'${NC}"
    exit 1
fi

# 1. Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erro: package.json não encontrado. Execute este script na raiz do projeto.${NC}"
    exit 1
fi

# 2. Ativar Node.js (se usando nvm)
if command -v nvm &> /dev/null; then
    echo -e "${YELLOW}📦 Ativando Node.js...${NC}"
    source ~/.nvm/nvm.sh
    nvm use default
fi

# 3. Instalar dependências (se necessário)
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Instalando dependências...${NC}"
    npm install
fi

# 4. Build da aplicação
echo -e "${YELLOW}🔨 Fazendo build da aplicação...${NC}"
$BUILD_COMMAND

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}❌ Erro: Build falhou. Pasta $BUILD_DIR não encontrada.${NC}"
    echo -e "${YELLOW}💡 Verifique se BUILD_DIR está correto para seu framework:${NC}"
    echo "   - React (Vite): dist"
    echo "   - React (CRA): build"
    echo "   - Vue: dist"
    echo "   - Angular: dist/nome-projeto"
    echo "   - Next.js: out"
    exit 1
fi

echo -e "${GREEN}✅ Build concluído!${NC}"

# 5. Compactar arquivos
echo -e "${YELLOW}📦 Compactando arquivos...${NC}"
rm -f $BUILD_DIR.tar.gz
tar -czf $BUILD_DIR.tar.gz $BUILD_DIR/

echo -e "${GREEN}✅ Arquivos compactados ($(du -h $BUILD_DIR.tar.gz | cut -f1))!${NC}"

# 6. Enviar para VPS
echo -e "${YELLOW}📤 Enviando arquivos para VPS...${NC}"
scp $BUILD_DIR.tar.gz $VPS_USER@$VPS_IP:/root/

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro: Falha ao enviar arquivos para VPS.${NC}"
    echo -e "${YELLOW}💡 Verifique:${NC}"
    echo "   - Conexão SSH: ssh $VPS_USER@$VPS_IP"
    echo "   - IP correto: $VPS_IP"
    echo "   - Usuário correto: $VPS_USER"
    exit 1
fi

echo -e "${GREEN}✅ Arquivos enviados!${NC}"

# 7. Deploy na VPS
echo -e "${YELLOW}🐳 Fazendo deploy na VPS...${NC}"
ssh $VPS_USER@$VPS_IP << EOF
    echo "📁 Extraindo arquivos..."
    cd /root
    rm -rf $BUILD_DIR
    tar -xzf $BUILD_DIR.tar.gz
    
    echo "🔨 Reconstruindo imagem Docker..."
    docker build -t $PROJECT_NAME:latest .
    
    echo "🔄 Atualizando serviço..."
    docker service update --image $PROJECT_NAME:latest ${PROJECT_NAME}_${PROJECT_NAME}
    
    echo "✅ Deploy concluído!"
EOF

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro: Falha no deploy na VPS.${NC}"
    echo -e "${YELLOW}💡 Possíveis soluções:${NC}"
    echo "   - Verificar se Docker está rodando na VPS"
    echo "   - Verificar se o serviço ${PROJECT_NAME}_${PROJECT_NAME} existe"
    echo "   - Verificar se Dockerfile e nginx.conf estão na VPS (/root/)"
    exit 1
fi

# 8. Verificação final
echo -e "${YELLOW}🔍 Verificando status do serviço...${NC}"
ssh $VPS_USER@$VPS_IP "docker service ps ${PROJECT_NAME}_${PROJECT_NAME} --format 'table {{.ID}}\t{{.Name}}\t{{.Image}}\t{{.Node}}\t{{.DesiredState}}\t{{.CurrentState}}'"

echo -e "${GREEN}🎉 Deploy concluído com sucesso!${NC}"
echo -e "${BLUE}🌐 Site: https://$DOMAIN${NC}"
echo -e "${YELLOW}💡 Dica: Pressione Ctrl+F5 para forçar refresh sem cache${NC}"

# 9. Limpeza local
echo -e "${YELLOW}🧹 Limpando arquivos temporários...${NC}"
rm -f $BUILD_DIR.tar.gz

echo -e "${GREEN}✨ Processo finalizado!${NC}"

# 10. Comandos úteis
echo -e "${BLUE}📋 Comandos úteis:${NC}"
echo "   Status: ssh $VPS_USER@$VPS_IP 'docker service ps ${PROJECT_NAME}_${PROJECT_NAME}'"
echo "   Logs: ssh $VPS_USER@$VPS_IP 'docker service logs ${PROJECT_NAME}_${PROJECT_NAME} --tail 20'"
echo "   Force update: ssh $VPS_USER@$VPS_IP 'docker service update --force ${PROJECT_NAME}_${PROJECT_NAME}'" 