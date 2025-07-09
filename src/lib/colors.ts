// Cores personalizadas do projeto
export const cores = {
  fundo: 'var(--cor-fundo)',
  principal: 'var(--cor-principal)',
  destaque: 'var(--cor-destaque)',
  texto: 'var(--cor-texto)',
  botaoHover: 'var(--cor-botao-hover)',
} as const;

// Hex values para referência
export const coresHex = {
  fundo: '#FAF6EC',
  principal: '#38867E',
  destaque: '#D1B078',
  texto: '#2B2B2B',
  botaoHover: '#2f6d68',
} as const;

// Exemplo de uso em componentes:
// style={{ backgroundColor: cores.fundo }}
// className="bg-cor-principal text-white"
// className="text-cor-texto bg-cor-fundo" 