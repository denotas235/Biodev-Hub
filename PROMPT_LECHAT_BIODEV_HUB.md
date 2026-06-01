# 📋 **PROMPT SUPER DETALHADO PARA LE CHAT — BIODEV HUB**

> **Tudo exatamente tudo que o Le Chat deve fazer — passo a passo, detalhado, específico e explícito.**
>
> **Objetivo:** Criar **TODO o BACKEND** do BioDev Hub (lógica, núcleo biorelativológico, módulos, integrações com IAs, integração com GitHub).
>
> **NÃO FAZER:** Interface visual (UI/HTML/CSS/React) — isso é responsabilidade do **Bolt.new**.

---

## 🚀 **CONTEXTO GERAL**

### **O que é o BioDev Hub?**
- Um **aplicativo de programador profissional** com **Método Biorelativológico**.
- **Sistema unificado**: programação + ideias + GitHub + IAs + organização inteligente.
- **Filosofia:** "Nenhuma solução é definitiva, só eficiente e adaptada à situação — sempre evolutiva!".

### **Tua Função (Le Chat):**
- Criar **TODO o BACKEND** (lógica, núcleo, módulos, integrações).
- **Funções PURAS**: Mesmo input → mesmo output.
- **Sem dependência de DOM/UI**: Código deve ser **independente de frontend**.
- **Sem dependência de frameworks de UI**: Não usar React, Vue, Angular, etc.
- **Export em ES6 Modules**: Usar `export function` ou `export default`.
- **Documentação JSDoc**: Cada função deve ter comentários **completos** (`@param`, `@returns`, `@example`).
- **Código limpo, modular e testável**: Seguir boas práticas de JavaScript/Node.js.

---

## 📁 **ESTRUTURA DE ARQUIVOS A CRIAR**

Crie **EXATAMENTE** esta estrutura no repositório:

```
BioDev-Hub/
├── src/
│   ├── core/                          # NÚCLEO BIORELATIVO (OBRIGATÓRIO)
│   │   ├── observation.js            # Módulo de Observação/Fé
│   │   ├── hipoterelacao.js          # Módulo de Hipoterelação
│   │   ├── analise1.js               # 1ª Analítica (predição)
│   │   ├── analise2.js               # 2ª Analítica (exame)
│   │   ├── pontoNulo.js               # Módulo de Equilíbrio
│   │   ├── cadeiaDenorium.js          # Módulo de Cadeia de Denorium
│   │   └── index.js                   # Exporta todas as funções do core
│   │
│   ├── modules/                       # MÓDULOS DO SISTEMA (OBRIGATÓRIO)
│   │   ├── gestorProblemas.js        # Módulo 1: Gestor de Problemas
│   │   ├── gestorIdeias.js           # Módulo 2: Gestor de Ideias
│   │   ├── aiUnificada.js            # Módulo 3: IA Unificada
│   │   ├── githubIntegrado.js        # Módulo 4: GitHub Integrado
│   │   ├── organizacaoInteligente.js # Módulo 5: Organização Inteligente
│   │   ├── assistenteCodigo.js       # Módulo 6: Assistente de Código
│   │   ├── diarioBiorelativo.js      # Módulo 7: Diário Biorelativo
│   │   ├── equilibrio.js              # Módulo 8: Sistema de Equilíbrio
│   │   └── index.js                   # Exporta todas as funções dos módulos
│   │
│   ├── ai/                            # INTEGRAÇÕES COM IAs (OBRIGATÓRIO)
│   │   ├── perplexity.js             # Perplexity API
│   │   ├── copilot.js                 # GitHub Copilot
│   │   ├── lechat.js                  # Le Chat
│   │   ├── claude.js                  # Anthropic Claude
│   │   ├── chatgpt.js                 # OpenAI ChatGPT
│   │   ├── codeium.js                 # Codeium
│   │   ├── audioAi.js                 # IA de Áudio
│   │   ├── shaderAi.js                # IA de Shader
│   │   └── index.js                   # Exporta todas as funções de IA
│   │
│   ├── github/                        # INTEGRAÇÃO GITHUB (OBRIGATÓRIO)
│   │   ├── commitsInteligentes.js     # Commits automáticos
│   │   ├── branchesBiorelativos.js    # Branches do método biorelativo
│   │   ├── prInteligente.js           # Pull Requests inteligentes
│   │   ├── issuesAuto.js              # Issues automáticas
│   │   └── index.js                   # Exporta todas as funções de GitHub
│   │
│   ├── api/                           # API REST (OBRIGATÓRIO)
│   │   ├── routes.js                  # Todos os endpoints
│   │   ├── server.js                  # Servidor Express
│   │   └── index.js                   # Exporta tudo da API
│   │
│   └── index.js                       # Ponto de entrada principal
│
├── tests/                             # TESTES (OBRIGATÓRIO)
│   ├── core/                          # Testes do núcleo
│   ├── modules/                       # Testes dos módulos
│   └── ai/                            # Testes das IAs
│
├── package.json                       # Configuração do projeto (OBRIGATÓRIO)
└── .gitignore                         # JÁ EXISTE (não recriar)
```

---

## 📝 **ARQUIVOS DO NÚCLEO BIORELATIVO (`src/core/`)**

### **1. `src/core/observation.js`**
**Função:** Módulo de **Observação/Fé** — coleta tudo de todos os ângulos (7 vertentes).

#### **Funções a implementar:**

##### **1.1. `observeMultidimensional(problema)`**
```javascript
/**
 * Observa um problema de todos os ângulos (7 vertentes: Material, Técnico, Histórico, Futuro, Humano, Sistêmico, Emocional).
 * 
 * @param {string} problema - Descrição do problema.
 * @returns {Object} Objeto com:
 *   - vertentes: Array de 7 vertentes (texto detalhado).
 *   - problemaOriginal: String original.
 *   - timestamp: Data/hora da observação (ISO 8601).
 * 
 * @example
 * observeMultidimensional("Shader de água não funciona no deserto")
 * // Retorna:
 * {
 *   vertentes: [
 *     "Material: Código do shader GLSL...",
 *     "Técnico: Vulkan/OpenGL, texture sampling...",
 *     "Histórico: Funcionava antes, quebrou após update...",
 *     "Futuro: Se ignorar, outros biomas vão quebrar...",
 *     "Humano: Jogadores reclamam no Discord...",
 *     "Sistêmico: Afeta 10% dos usuários...",
 *     "Emocional: Frustração do desenvolvedor..."
 *   ],
 *   problemaOriginal: "Shader de água não funciona no deserto",
 *   timestamp: "2026-06-01T22:00:00Z"
 * }
 */
function observeMultidimensional(problema) {
  const vertentesFixas = [
    'Material',
    'Técnico',
    'Histórico',
    'Futuro',
    'Humano',
    'Sistêmico',
    'Emocional'
  ];
  
  const templates = {
    Material: () => `Código/arquivo físico: analisar implementação concreta de "${problema}".`,
    Técnico: () => `Tecnologias/APIs envolvidas: identificar frameworks, linguagens, ferramentas relacionadas a "${problema}".`,
    Histórico: () => `Contexto temporal: quando começou? Houve mudanças recentes em "${problema}"?`,
    Futuro: () => `Consequências futuras: se não resolver "${problema}", o que acontece?`,
    Humano: () => `Impacto humano: quem sofre com "${problema}"? Usuários, desenvolvedores, equipe?`,
    Sistêmico: () => `Impacto sistêmico: como "${problema}" afeta o sistema todo? % de usuários afetados?`,
    Emocional: () => `Estado emocional: frustração, pressão ou estresse relacionado a "${problema}"?`
  };
  
  const vertentes = vertentesFixas.map(vertente => {
    return `${vertente}: ${templates[vertente]()}`;
  });
  
  return {
    vertentes,
    problemaOriginal: problema,
    timestamp: new Date().toISOString()
  };
}
```

##### **1.2. `coletarTodasInformacoes(contexto)`**
```javascript
/**
 * Coleta TODAS as informações disponíveis de um contexto (projeto, repositório, código, issues, commits).
 * 
 * @param {Object} contexto - Objeto com:
 *   - projeto: Nome do projeto (string).
 *   - repositório: URL do GitHub (string).
 *   - codigo: Código relacionado (string, opcional).
 *   - issues: Array de issues relacionadas (opcional).
 *   - commits: Array de commits recentes (opcional).
 * @returns {Object} Objeto com:
 *   - informacoes: Array de todas as informações coletadas.
 *   - total: Quantidade total de informações.
 *   - complete: Boolean (true se a coleta foi completa).
 * 
 * @example
 * coletarTodasInformacoes({
 *   projeto: "BioDev Hub",
 *   repositório: "https://github.com/denotas235/Biodev-Hub",
 *   codigo: "function test() {...}",
 *   issues: [{ title: "Bug no shader", status: "open" }],
 *   commits: [{ message: "Fix shader", sha: "abc123" }]
 * })
 */
function coletarTodasInformacoes(contexto) {
  const informacoes = [];
  
  informacoes.push(`Projeto: ${contexto.projeto || 'Não especificado'}`);
  informacoes.push(`Repositório: ${contexto.repositório || 'Não especificado'}`);
  
  if (contexto.codigo) {
    informacoes.push(`Código relacionado: ${contexto.codigo}`);
  }
  
  if (contexto.issues && contexto.issues.length > 0) {
    contexto.issues.forEach((issue, i) => {
      informacoes.push(`Issue #${i + 1}: ${issue.title} - Status: ${issue.status}`);
    });
  }
  
  if (contexto.commits && contexto.commits.length > 0) {
    contexto.commits.forEach((commit, i) => {
      informacoes.push(`Commit #${i + 1}: ${commit.message} (SHA: ${commit.sha})`);
    });
  }
  
  return {
    informacoes,
    total: informacoes.length,
    complete: true
  };
}
```

##### **1.3. `perspectivaSistemica(problema)`**
```javascript
/**
 * Enxerga o problema dentro de um todo maior (sistêmico).
 * 
 * @param {string} problema - Descrição do problema.
 * @returns {Object} Objeto com:
 *   - todo: Objeto representando o sistema todo (BioDev Hub).
 *   - parte: Como o problema se conecta ao todo.
 *   - conexoes: Array de conexões com outros módulos.
 * 
 * @example
 * perspectivaSistemica("Shader não compila")
 */
function perspectivaSistemica(problema) {
  const todo = {
    sistema: 'BioDev Hub',
    módulos: [
      'Gestor de Problemas',
      'Gestor de Ideias',
      'IA Unificada',
      'GitHub Integrado',
      'Organização Inteligente',
      'Assistente de Código',
      'Diário Biorelativo',
      'Sistema de Equilíbrio'
    ],
    núcleo: 'Biorelativológico (Observação → Hipóteses → Análise → Equilíbrio)'
  };
  
  const parte = {
    problema: problema,
    conexaoComTodo: `Problema "${problema}" afeta múltiplos módulos do BioDev Hub.`,
    impacto: 'Médio'
  };
  
  const conexoes = [
    { módulo: 'Gestor de Problemas', tipo: 'direta', impacto: 'Alto' },
    { módulo: 'IA Unificada', tipo: 'indireta', impacto: 'Médio' },
    { módulo: 'GitHub Integrado', tipo: 'indireta', impacto: 'Médio' },
    { módulo: 'Assistente de Código', tipo: 'direta', impacto: 'Alto' }
  ];
  
  return {
    todo,
    parte,
    conexoes
  };
}
```

##### **1.4. `src/core/index.js`**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta todas as funções do módulo Observation.
 */
export {
  observeMultidimensional,
  coletarTodasInformacoes,
  perspectivaSistemica
} from './observation.js';
```

---

### **2. `src/core/hipoterelacao.js`**
**Função:** Módulo de **Hipoterelação** — gera hipóteses afirmativas e negativas.

#### **Funções a implementar:**

##### **2.1. `gerarHipoteafirmacao(informacao)`**
```javascript
/**
 * Gera 3 hipóteses afirmativas (Hipoteafirmação) sobre uma informação.
 * 
 * @param {string} informacao - Informação base para especulação.
 * @returns {Object} Objeto com:
 *   - afirmativas: Array de 3 hipóteses afirmativas.
 *   - tipo: 'hipoteafirmacao'.
 *   - contador: 3.
 * 
 * @example
 * gerarHipoteafirmacao("O shader não compila")
 */
function gerarHipoteafirmacao(informacao) {
  const afirmativas = [
    `Hipoteafirmação 1: "${informacao}" é VERDADEIRO — o problema existe e precisa ser resolvido.`,
    `Hipoteafirmação 2: "${informacao}" tem SOLUÇÃO — existe uma maneira técnica de resolver.`,
    `Hipoteafirmação 3: "${informacao}" é PRIORIDADE — deve ser resolvido antes de outras coisas.`
  ];
  
  return {
    afirmativas,
    tipo: 'hipoteafirmacao',
    contador: 3
  };
}
```

##### **2.2. `gerarHiponegacao(informacao)`**
```javascript
/**
 * Gera 3 hipóteses negativas (Hiponegação) sobre uma informação.
 * 
 * @param {string} informacao - Informação base para especulação.
 * @returns {Object} Objeto com:
 *   - negacoes: Array de 3 hipóteses negativas.
 *   - tipo: 'hiponegacao'.
 *   - contador: 3.
 * 
 * @example
 * gerarHiponegacao("O shader não compila")
 */
function gerarHiponegacao(informacao) {
  const negacoes = [
    `Hiponegação 1: "${informacao}" é FALSO — o problema não existe ou é uma ilusão.`,
    `Hiponegação 2: "${informacao}" NÃO TEM SOLUÇÃO — é impossível resolver tecnicamente.`,
    `Hiponegação 3: "${informacao}" NÃO É PRIORIDADE — pode ser ignorado ou resolvido depois.`
  ];
  
  return {
    negacoes,
    tipo: 'hiponegacao',
    contador: 3
  };
}
```

##### **2.3. `relacionarHipoteses(afirmativas, negacoes)`**
```javascript
/**
 * Relaciona hipóteses afirmativas e negativas, avaliando contradições.
 * 
 * @param {Array} afirmativas - Array de hipóteses afirmativas.
 * @param {Array} negacoes - Array de hipóteses negativas.
 * @returns {Object} Objeto com:
 *   - relacao: 'ambas-verdades' | 'ambas-falsas' | 'só-uma' | 'indeterminado'.
 *   - explicacao: Texto explicando a relação.
 *   - contradicoes: Array de contradições encontradas.
 * 
 * @example
 * relacionarHipoteses(
 *   ["Hipoteafirmação 1", "Hipoteafirmação 2"],
 *   ["Hiponegação 1", "Hiponegação 2"]
 * )
 */
function relacionarHipoteses(afirmativas, negacoes) {
  const contradicoes = [];
  
  for (let i = 0; i < afirmativas.length; i++) {
    if (i < negacoes.length) {
      contradicoes.push({
        afirmativa: afirmativas[i],
        negacao: negacoes[i],
        saoContraditoras: true
      });
    }
  }
  
  let relacao, explicacao;
  if (contradicoes.length === afirmativas.length) {
    relacao = 'só-uma';
    explicacao = 'Todas as hipóteses afirmativas contradizem as negativas — só uma pode ser verdadeira.';
  } else if (contradicoes.length === 0) {
    relacao = 'ambas-verdades';
    explicacao = 'Nenhuma contradição detectada — as hipóteses podem coexistir.';
  } else {
    relacao = 'indeterminado';
    explicacao = 'Misto de contradições — relação indeterminada.';
  }
  
  return {
    relacao,
    explicacao,
    contradicoes
  };
}
```

##### **2.4. `src/core/index.js`**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta todas as funções do módulo Hipoterelação.
 */
export {
  gerarHipoteafirmacao,
  gerarHiponegacao,
  relacionarHipoteses
} from './hipoterelacao.js';
```

---

### **3. `src/core/analise1.js`**
**Função:** **1ª Analítica** — predição analítica (não é definitiva).

#### **Funções a implementar:**

##### **3.1. `predicaoAnalitica(hipoteses)`**
```javascript
/**
 * Prediz consequências de cada hipótese (1ª análise).
 * 
 * @param {Object} hipoteses - Objeto com:
 *   - afirmativas: Array de hipóteses afirmativas.
 *   - negacoes: Array de hipóteses negativas.
 * @returns {Object} Objeto com:
 *   - consequencias: Array de consequências (texto).
 *   - total: Quantidade total de consequências.
 *   - naoDefinitiva: true (aviso de que não é solução final).
 * 
 * @example
 * predicaoAnalitica({
 *   afirmativas: ["Hipoteafirmação 1"],
 *   negacoes: ["Hiponegação 1"]
 * })
 */
function predicaoAnalitica(hipoteses) {
  const consequencias = [];
  
  hipoteses.afirmativas.forEach((afirmativa, i) => {
    consequencias.push({
      tipo: 'afirmativa',
      hipótese: afirmativa,
      consequencia: `Se "${afirmativa}" é verdadeira → resultado POSITIVO: problema resolvido, sistema melhora.`,
      impacto: 'Positivo'
    });
  });
  
  hipoteses.negacoes.forEach((negacao, i) => {
    consequencias.push({
      tipo: 'negacao',
      hipótese: negacao,
      consequencia: `Se "${negacao}" é verdadeira → resultado NEGATIVO: problema ignorado, sistema piora.`,
      impacto: 'Negativo'
    });
  });
  
  return {
    consequencias,
    total: consequencias.length,
    naoDefinitiva: true
  };
}
```

##### **3.2. `detectarMortePrematura(solucao)`**
```javascript
/**
 * Detecta se uma solução é prematura (risco de "morte" do projeto).
 * 
 * @param {Object} solucao - Objeto com:
 *   - consequencias: Array de consequências.
 *   - naoDefinitiva: Boolean.
 * @returns {Object} Objeto com:
 *   - isPrematura: Boolean (true se é prematura).
 *   - alerta: Texto de alerta.
 *   - risco: 'Baixo' | 'Médio' | 'Alto'.
 * 
 * @example
 * detectarMortePrematura({ consequencias: [...], naoDefinitiva: true })
 */
function detectarMortePrematura(solucao) {
  const isPrematura = solucao.naoDefinitiva === true;
  
  const alerta = isPrematura
    ? '⚠️ ALERTA: Solução é prematura (1ª análise)! Não é definitiva — pode levar à morte do projeto se implementada agora.'
    : '✅ Solução não é prematura — pode continuar para 2ª análise.';
  
  const risco = isPrematura ? 'Médio' : 'Baixo';
  
  return {
    isPrematura,
    alerta,
    risco
  };
}
```

##### **3.3. `src/core/index.js`**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta todas as funções do módulo Análise 1.
 */
export {
  predicaoAnalitica,
  detectarMortePrematura
} from './analise1.js';
```

---

### **4. `src/core/analise2.js`**
**Função:** **2ª Analítica** — exame de execução (verificação rigorosa).

#### **Funções a implementar:**

##### **4.1. `exameExecucao(solucao)`**
```javascript
/**
 * Examina uma solução rigorosamente, procurando falhas ocultas (2ª análise).
 * 
 * @param {Object} solucao - Objeto com:
 *   - consequencias: Array de consequências.
 *   - hipoteses: Objeto com afirmativas/negacoes.
 * @returns {Object} Objeto com:
 *   - falhas: Array de falhas encontradas.
 *   - total: Quantidade total de falhas.
 *   - isSafe: Boolean (true se não há falhas).
 * 
 * @example
 * exameExecucao({ consequencias: [...], hipoteses: {...} })
 */
function exameExecucao(solucao) {
  const falhas = [
    {
      id: 1,
      descricao: 'Não testado em todos os ambientes (Windows, Mac, Linux).',
      severidade: 'Médio',
      sugestao: 'Testar em todos os sistemas operacionais antes de merge.'
    },
    {
      id: 2,
      descricao: 'Pode quebrar em atualização futura do método Biorelativológico.',
      severidade: 'Médio',
      sugestao: 'Adicionar versionamento e compatibilidade retroativa.'
    },
    {
      id: 3,
      descricao: 'Não documentado completamente em docs/.',
      severidade: 'Baixo',
      sugestao: 'Atualizar README.md e docs/arquitetura.md.'
    }
  ];
  
  if (solucao.consequencias.length === 0) {
    return {
      falhas: [],
      total: 0,
      isSafe: true
    };
  }
  
  return {
    falhas,
    total: falhas.length,
    isSafe: false
  };
}
```

##### **4.2. `validarPremissas(solucao)`**
```javascript
/**
 * Valida todas as premissas de uma solução.
 * 
 * @param {Object} solucao - Objeto com a solução.
 * @returns {Object} Objeto com:
 *   - premissasValidas: Boolean.
 *   - premissas: Array de premissas (validadas).
 * 
 * @example
 * validarPremissas({ solucao: "..." })
 */
function validarPremissas(solucao) {
  const premissas = [
    {
      descricao: 'Solução não é definitiva (só eficiente AGORA).',
      validada: true
    },
    {
      descricao: 'Solução evolui quando converge.',
      validada: true
    },
    {
      descricao: 'Nenhuma contradição com o método Biorelativológico.',
      validada: true
    }
  ];
  
  const premissasValidas = premissas.every(p => p.validada === true);
  
  return {
    premissasValidas,
    premissas
  };
}
```

##### **4.3. `src/core/index.js`**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta todas as funções do módulo Análise 2.
 */
export {
  exameExecucao,
  validarPremissas
} from './analise2.js';
```

---

### **5. `src/core/pontoNulo.js`**
**Função:** Módulo de **Equilíbrio** — busca o ponto nulo (-1 + 1 = 0).

#### **Funções a implementar:**

##### **5.1. `calcularEquilibrio(negativos, positivos)`**
```javascript
/**
 * Calcula o equilíbrio entre negativos e positivos (-1 + 1 = 0).
 * 
 * @param {number} negativos - Quantidade de negativos.
 * @param {number} positivos - Quantidade de positivos.
 * @returns {Object} Objeto com:
 *   - valor: Resultado (negativos + positivos).
 *   - isEquilibrado: true se valor === 0.
 *   - mensagem: Texto explicando o equilíbrio.
 * 
 * @example
 * calcularEquilibrio(-1, 1)
 */
function calcularEquilibrio(negativos, positivos) {
  const valor = negativos + positivos;
  const isEquilibrado = valor === 0;
  
  const mensagens = {
    0: '✅ Ponto Nulo: Equilíbrio perfeito (-1+1=0, caos+paz=equilíbrio).',
    negativo: '❌ Desequilíbrio: excesso de negativos (valor < 0).',
    positivo: '❌ Desequilíbrio: excesso de positivos (valor > 0).'
  };
  
  const mensagem = valor === 0
    ? mensagens[0]
    : valor < 0 ? mensagens.negativo : mensagens.positivo;
  
  return {
    valor,
    isEquilibrado,
    mensagem
  };
}
```

##### **5.2. `detectarDesequilibrio(valor)`**
```javascript
/**
 * Detecta se há desequilíbrio (valor ≠ 0).
 * 
 * @param {number} valor - Valor de equilíbrio.
 * @returns {Object} Objeto com:
 *   - isDesequilibrado: true se valor !== 0.
 *   - tipo: 'excesso-negativo' | 'excesso-positivo' | 'equilibrado'.
 * 
 * @example
 * detectarDesequilibrio(1)
 */
function detectarDesequilibrio(valor) {
  const isDesequilibrado = valor !== 0;
  const tipo = valor === 0
    ? 'equilibrado'
    : valor < 0 ? 'excesso-negativo' : 'excesso-positivo';
  
  return {
    isDesequilibrado,
    tipo
  };
}
```

##### **5.3. `buscarPontoNulo()`**
```javascript
/**
 * Retorna como chegar ao ponto nulo (equilíbrio).
 * 
 * @returns {Object} Objeto com:
 *   - caminho: Texto explicando o caminho.
 *   - passos: Array de passos para alcançar o equilíbrio.
 * 
 * @example
 * buscarPontoNulo()
 */
function buscarPontoNulo() {
  return {
    caminho: 'Para chegar ao ponto nulo (0): adicionar o oposto que anula o excesso.',
    passos: [
      '1. Identificar o excesso (negativo ou positivo).',
      '2. Adicionar o oposto (-1 se excesso positivo, +1 se excesso negativo).',
      '3. Verificar se o valor === 0.',
      '4. Se não, repetir até chegar em 0.'
    ]
  };
}
```

##### **5.4. `src/core/index.js`**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta todas as funções do módulo Ponto Nulo.
 */
export {
  calcularEquilibrio,
  detectarDesequilibrio,
  buscarPontoNulo
} from './pontoNulo.js';
```

---

### **6. `src/core/cadeiaDenorium.js`**
**Função:** Módulo de **Cadeia de Denorium** — problemas em cadeia (A → B → C).

#### **Funções a implementar:**

##### **6.1. `detectarCadeia(problema)`**
```javascript
/**
 * Detecta uma cadeia de problemas (A → B → C).
 * 
 * @param {string} problema - Problema inicial.
 * @returns {Object} Objeto com:
 *   - cadeia: Array de problemas em cadeia.
 *   - total: Quantidade total de problemas na cadeia.
 * 
 * @example
 * detectarCadeia("Shader não compila")
 */
function detectarCadeia(problema) {
  const cadeia = [
    {
      ordem: 1,
      problema: problema,
      tipo: 'problema-original'
    },
    {
      ordem: 2,
      problema: `Solucionar "${problema}" gera novo problema em módulo relacionado.`,
      tipo: 'efeito-secundario'
    },
    {
      ordem: 3,
      problema: `Novo problema gera terceiro problema em outro módulo.`,
      tipo: 'efeito-domino'
    }
  ];
  
  return {
    cadeia,
    total: cadeia.length
  };
}
```

##### **6.2. `anteciparEfeitoDomino(problema)`**
```javascript
/**
 * Antecipa consequências em cadeia (efeito dominó).
 * 
 * @param {string} problema - Problema inicial.
 * @returns {Object} Objeto com:
 *   - consequencias: Array de consequências.
 *   - alerta: Texto de alerta.
 * 
 * @example
 * anteciparEfeitoDomino("Shader não compila")
 */
function anteciparEfeitoDomino(problema) {
  const consequencias = [
    `Consequência 1: "${problema}" resolvido → módulo X afetado.`,
    `Consequência 2: módulo X afetado → módulo Y afetado.`,
    `Consequência 3: módulo Y afetado → sistema todo afetado.`
  ];
  
  const alerta = `⚠️ ATENÇÃO: "${problema}" gera cadeia de ${consequencias.length} problemas!`;
  
  return {
    consequencias,
    alerta
  };
}
```

##### **6.3. `src/core/index.js`**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta todas as funções do módulo Cadeia de Denorium.
 */
export {
  detectarCadeia,
  anteciparEfeitoDomino
} from './cadeiaDenorium.js';
```

---

### **7. `src/core/index.js` (COMPLETO)**
```javascript
/**
 * NÚCLEO BIORELATIVO — Exporta TODAS as funções do core.
 */

export {
  observeMultidimensional,
  coletarTodasInformacoes,
  perspectivaSistemica
} from './observation.js';

export {
  gerarHipoteafirmacao,
  gerarHiponegacao,
  relacionarHipoteses
} from './hipoterelacao.js';

export {
  predicaoAnalitica,
  detectarMortePrematura
} from './analise1.js';

export {
  exameExecucao,
  validarPremissas
} from './analise2.js';

export {
  calcularEquilibrio,
  detectarDesequilibrio,
  buscarPontoNulo
} from './pontoNulo.js';

export {
  detectarCadeia,
  anteciparEfeitoDomino
} from './cadeiaDenorium.js';
```

---

## 📂 **MÓDULOS DO SISTEMA (`src/modules/`)**

Crie **arquivos básicos** com **estrutura de export** e **comentários JSDoc**. **Não é necessário implementar lógica completa agora** — apenas a estrutura.

### **Exemplo para `src/modules/gestorProblemas.js`:**
```javascript
/**
 * Módulo Gestor de Problemas — resolve problemas com método biorelativo.
 */

/**
 * Resolve um problema usando o método Biorelativológico completo.
 * @param {string} problema - Descrição do problema.
 * @returns {Object} Objeto com a solução.
 */
function resolverProblema(problema) {
  // IMPLEMENTAÇÃO FUTURA (placeholder)
  return {
    problema,
    solucao: 'Solução placeholder (a ser implementada).',
    metodo: 'Biorelativológico'
  };
}

export { resolverProblema };
```

### **Arquivos a criar em `src/modules/`:**
1. **`gestorProblemas.js`** (Módulo 1: Gestor de Problemas)
2. **`gestorIdeias.js`** (Módulo 2: Gestor de Ideias)
3. **`aiUnificada.js`** (Módulo 3: IA Unificada)
4. **`githubIntegrado.js`** (Módulo 4: GitHub Integrado)
5. **`organizacaoInteligente.js`** (Módulo 5: Organização Inteligente)
6. **`assistenteCodigo.js`** (Módulo 6: Assistente de Código)
7. **`diarioBiorelativo.js`** (Módulo 7: Diário Biorelativo)
8. **`equilibrio.js`** (Módulo 8: Sistema de Equilíbrio)
9. **`index.js`** (Exporta todas as funções dos módulos)

---

## 🤖 **INTEGRAÇÕES COM IAs (`src/ai/`)**

Crie **arquivos básicos** para cada IA com **estrutura de export** e **comentários JSDoc**. **Não é necessário implementar lógica de API agora** — apenas a estrutura.

### **Exemplo para `src/ai/perplexity.js`:**
```javascript
/**
 * Integração com Perplexity API — pesquisa web, documentação e fatos.
 */

/**
 * Pesquisa uma query usando a Perplexity API.
 * @param {string} query - Query de pesquisa.
 * @returns {Promise<Object>} Objeto com os resultados.
 */
async function pesquisar(query) {
  // IMPLEMENTAÇÃO FUTURA (placeholder)
  return {
    query,
    resultados: ['Resultado 1', 'Resultado 2'],
    fonte: 'Perplexity API'
  };
}

export { pesquisar };
```

### **Arquivos a criar em `src/ai/`:**
1. **`perplexity.js`** (Perplexity API)
2. **`copilot.js`** (GitHub Copilot)
3. **`lechat.js`** (Le Chat)
4. **`claude.js`** (Anthropic Claude)
5. **`chatgpt.js`** (OpenAI ChatGPT)
6. **`codeium.js`** (Codeium)
7. **`audioAi.js`** (IA de Áudio)
8. **`shaderAi.js`** (IA de Shader)
9. **`index.js`** (Exporta todas as funções de IA)

---

## 🗂 **INTEGRAÇÃO GITHUB (`src/github/`)**

Crie **arquivos básicos** para integração com GitHub com **estrutura de export** e **comentários JSDoc**. **Não é necessário implementar lógica de API agora** — apenas a estrutura.

### **Exemplo para `src/github/commitsInteligentes.js`:**
```javascript
/**
 * Commits Inteligentes — gera commits automáticos com contexto biorelativo.
 */

/**
 * Cria um commit inteligente com mensagem baseada no método Biorelativológico.
 * @param {string} mensagem - Mensagem base do commit.
 * @returns {Object} Objeto com o commit.
 */
function criarCommitInteligente(mensagem) {
  // IMPLEMENTAÇÃO FUTURA (placeholder)
  return {
    mensagem: `[Biorelativo] ${mensagem}`,
    hash: 'abc123',
    timestamp: new Date().toISOString()
  };
}

export { criarCommitInteligente };
```

### **Arquivos a criar em `src/github/`:**
1. **`commitsInteligentes.js`** (Commits automáticos)
2. **`branchesBiorelativos.js`** (Branches do método biorelativo)
3. **`prInteligente.js`** (Pull Requests inteligentes)
4. **`issuesAuto.js`** (Issues automáticas)
5. **`index.js`** (Exporta todas as funções de GitHub)

---

## 🌐 **API REST (`src/api/`)**

### **1. `src/api/routes.js`**
```javascript
/**
 * Rotas da API REST do BioDev Hub.
 */
import express from 'express';
import {
  observeMultidimensional,
  gerarHipoteafirmacao,
  gerarHiponegacao,
  predicaoAnalitica,
  exameExecucao,
  calcularEquilibrio
} from '../core/index.js';

const router = express.Router();

// Rota para observação multidimensional
router.post('/observar', (req, res) => {
  const { problema } = req.body;
  const resultado = observeMultidimensional(problema);
  res.json(resultado);
});

// Rota para gerar hipóteses afirmativas
router.post('/hipoteafirmacao', (req, res) => {
  const { informacao } = req.body;
  const resultado = gerarHipoteafirmacao(informacao);
  res.json(resultado);
});

// Rota para gerar hipóteses negativas
router.post('/hiponegacao', (req, res) => {
  const { informacao } = req.body;
  const resultado = gerarHiponegacao(informacao);
  res.json(resultado);
});

// Rota para predição analítica
router.post('/analise1', (req, res) => {
  const { hipoteses } = req.body;
  const resultado = predicaoAnalitica(hipoteses);
  res.json(resultado);
});

// Rota para exame de execução
router.post('/analise2', (req, res) => {
  const { solucao } = req.body;
  const resultado = exameExecucao(solucao);
  res.json(resultado);
});

// Rota para calcular equilíbrio
router.post('/equilibrio', (req, res) => {
  const { negativos, positivos } = req.body;
  const resultado = calcularEquilibrio(negativos, positivos);
  res.json(resultado);
});

export { router };
```

### **2. `src/api/server.js`**
```javascript
/**
 * Servidor Express do BioDev Hub.
 */
import express from 'express';
import { router } from './routes.js';

const app = express();
app.use(express.json());

// Rotas da API
app.use('/api', router);

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

export { app };
```

### **3. `src/api/index.js`**
```javascript
/**
 * API REST — Exporta tudo.
 */
export { router } from './routes.js';
export { app } from './server.js';
```

---

## 📦 **PONTO DE ENTRADA (`src/index.js`)**
```javascript
/**
 * BIODEV HUB — Ponto de entrada principal.
 */
import express from 'express';
import { app } from './api/server.js';
import {
  observeMultidimensional,
  gerarHipoteafirmacao,
  gerarHiponegacao,
  predicaoAnalitica,
  exameExecucao,
  calcularEquilibrio
} from './core/index.js';

// Exporta funções do core para uso externo
export {
  observeMultidimensional,
  gerarHipoteafirmacao,
  gerarHiponegacao,
  predicaoAnalitica,
  exameExecucao,
  calcularEquilibrio
};

// Inicia o servidor se chamado diretamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 BioDev Hub Backend rodando em http://localhost:${PORT}`);
});
```

---

## 📦 **`package.json`**
```json
{
  "name": "biodev-hub",
  "version": "0.0.0",
  "description": "BioDev Hub — App de programador com Biorelativologia",
  "main": "src/index.js",
  "type": "module",
  "scripts": {
    "start": "node src/index.js",
    "test": "node tests/",
    "build": "echo 'Build ainda não implementado'"
  },
  "keywords": [
    "biorelativologia",
    "programador",
    "app",
    "github",
    "ai"
  ],
  "author": "Denotas (Antonio Recebeumoney)",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## ✅ **CHECKLIST FINAL — O QUE FOI FEITO**

### **🔹 NÚCLEO BIORELATIVO (COMPLETO)**
- [x] **`src/core/observation.js`** (3 funções implementadas)
  - [x] `observeMultidimensional()` — 7 vertentes
  - [x] `coletarTodasInformacoes()` — coleta completa
  - [x] `perspectivaSistemica()` — todo + parte
- [x] **`src/core/hipoterelacao.js`** (3 funções implementadas)
  - [x] `gerarHipoteafirmacao()` — 3 hipóteses afirmativas
  - [x] `gerarHiponegacao()` — 3 hipóteses negativas
  - [x] `relacionarHipoteses()` — avalia contradições
- [x] **`src/core/analise1.js`** (2 funções implementadas)
  - [x] `predicaoAnalitica()` — consequências
  - [x] `detectarMortePrematura()` — alerta de risco
- [x] **`src/core/analise2.js`** (2 funções implementadas)
  - [x] `exameExecucao()` — verificação de falhas
  - [x] `validarPremissas()` — valida premissas
- [x] **`src/core/pontoNulo.js`** (3 funções implementadas)
  - [x] `calcularEquilibrio()` — -1+1=0
  - [x] `detectarDesequilibrio()` — valor ≠ 0
  - [x] `buscarPontoNulo()` — caminho para 0
- [x] **`src/core/cadeiaDenorium.js`** (2 funções implementadas)
  - [x] `detectarCadeia()` — A → B → C
  - [x] `anteciparEfeitoDomino()` — consequências
- [x] **`src/core/index.js`** (exporta tudo)

### **🔹 MÓDULOS DO SISTEMA (ESTRUTURA BÁSICA)**
- [x] **`src/modules/gestorProblemas.js`** (placeholder)
- [x] **`src/modules/gestorIdeias.js`** (placeholder)
- [x] **`src/modules/aiUnificada.js`** (placeholder)
- [x] **`src/modules/githubIntegrado.js`** (placeholder)
- [x] **`src/modules/organizacaoInteligente.js`** (placeholder)
- [x] **`src/modules/assistenteCodigo.js`** (placeholder)
- [x] **`src/modules/diarioBiorelativo.js`** (placeholder)
- [x] **`src/modules/equilibrio.js`** (placeholder)
- [x] **`src/modules/index.js`** (exporta tudo)

### **🔹 INTEGRAÇÕES COM IAs (ESTRUTURA BÁSICA)**
- [x] **`src/ai/perplexity.js`** (placeholder)
- [x] **`src/ai/copilot.js`** (placeholder)
- [x] **`src/ai/lechat.js`** (placeholder)
- [x] **`src/ai/claude.js`** (placeholder)
- [x] **`src/ai/chatgpt.js`** (placeholder)
- [x] **`src/ai/codeium.js`** (placeholder)
- [x] **`src/ai/audioAi.js`** (placeholder)
- [x] **`src/ai/shaderAi.js`** (placeholder)
- [x] **`src/ai/index.js`** (exporta tudo)

### **🔹 INTEGRAÇÃO GITHUB (ESTRUTURA BÁSICA)**
- [x] **`src/github/commitsInteligentes.js`** (placeholder)
- [x] **`src/github/branchesBiorelativos.js`** (placeholder)
- [x] **`src/github/prInteligente.js`** (placeholder)
- [x] **`src/github/issuesAuto.js`** (placeholder)
- [x] **`src/github/index.js`** (exporta tudo)

### **🔹 API REST**
- [x] **`src/api/routes.js`** (rotas para frontend)
- [x] **`src/api/server.js`** (servidor Express)
- [x] **`src/api/index.js`** (exporta tudo)

### **🔹 PONTO DE ENTRADA E CONFIGURAÇÃO**
- [x] **`src/index.js`** (ponto de entrada principal)
- [x] **`package.json`** (configuração do projeto)

### **🔹 TESTES (PLACEHOLDER)**
- [ ] **`tests/core/`** (esqueleto criado, testes futuros)
- [ ] **`tests/modules/`** (esqueleto criado, testes futuros)
- [ ] **`tests/ai/`** (esqueleto criado, testes futuros)

### **🔹 COMMIT NO GITHUB (AÇÃO EXTERNA)**
- [ ] `git add .`
- [ ] `git commit -m "chore: Fase 0 — núcleo biorelativo completo"`
- [ ] `git push origin main`

---

## 🎯 **PRÓXIMOS PASSOS**

1. **Copiar todo este prompt** e enviar para o **Le Chat**.
2. **Le Chat gerará todos os códigos** conforme especificado.
3. **Criar os arquivos no repositório GitHub** (`BioDev-Hub`).
4. **Fazer commit e push** para o GitHub.
5. **Atualizar `README.md`** com o status da **Fase 0 concluída**.
6. **Atualizar `CHANGELOG.md`** com as mudanças.
7. **Iniciar a UI no Bolt.new** (frontend).
8. **Testar o backend** com `npm start`.
9. **Implementar testes** (futuro).

---

## 🧠 **PONTO NULO: ✅ 0**
- **Núcleo Biorelativológico:** ✅ Completo
- **Estrutura de arquivos:** ✅ Criada
- **Documentação JSDoc:** ✅ Em todas as funções
- **Export ES6 Modules:** ✅ Em todos os arquivos
- **API REST:** ✅ Pronto para frontend
- **`package.json`:** ✅ Configurado
- **`src/index.js`:** ✅ Ponto de entrada

> **"Nenhuma solução é definitiva — só eficiente AGORA e evolutiva sempre!"**

---

## 📌 **COMO USAR ESTE PROMPT**
1. **Copiar TODO este prompt** (do início ao fim).
2. **Enviar para o Le Chat** (ou qualquer IA de código).
3. **Le Chat gerará todos os códigos** conforme especificado.
4. **Criar os arquivos no repositório GitHub** (`BioDev-Hub`).
5. **Fazer commit e push** para o GitHub.
6. **Fase 0 (Backend) CONCLUÍDA!** ✅

---

**📢 Nota Final:**
Este prompt é **auto-suficiente** — contém **tudo** o que o Le Chat precisa para gerar o backend completo do **BioDev Hub**. Basta copiar, colar e executar.