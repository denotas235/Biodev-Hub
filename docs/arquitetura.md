# 🏗 Arquitetura do BioDev Hub

> **Como o Sistema Funciona**
> *Visão técnica da estrutura, fluxos e integrações do BioDev Hub.*

---

## 📌 Visão Geral

O **BioDev Hub** é um **sistema modular** que integra **programação, gestão de ideias, IAs e GitHub** em um único ambiente. Sua arquitetura é projetada para ser **escalável, flexível e adaptável**, seguindo os princípios da **Biorelativologia**.

---

## 🧩 Arquitetura de Pastas

```
BioDev-Hub/
├── README.md              # Cérebro do projeto
├── CHANGELOG.md           # Memória temporal
├── LICENSE                # Licença MIT
├── .gitignore             # Arquivos ignorados
│
├── docs/                  # Documentação
│   ├── manifesto.md       # Princípios biorelativológicos
│   ├── arquitetura.md     # Este arquivo
│   ├── metodo-biorelativo.md # Método detalhado
│   ├── habilidades.md     # Habilidades do sistema
│   ├── APIs-integradas.md  # Integrações com IAs
│   └── guia-rapido.md     # Guia de uso
│
├── src/                   # Código-fonte
│   ├── core/              # Núcleo biorelativológico
│   │   ├── observation.js  # Módulo de observação
│   │   ├── hipoterelacao.js # Módulo de hipóteses
│   │   ├── analise-1.js    # 1ª analítica
│   │   ├── analise-2.js    # 2ª analítica
│   │   ├── ponto-nulo.js   # Equilíbrio
│   │   └── cadeia-denorium.js # Problemas em cadeia
│   │
│   ├── modules/           # Módulos principais
│   │   ├── gestor-problemas.js    # Gestor de problemas
│   │   ├── gestor-ideias.js        # Gestor de ideias
│   │   ├── ai-unificada.js         # IA unificada
│   │   ├── github-integrado.js     # GitHub integrado
│   │   ├── organizacao-inteligente.js # Organização
│   │   ├── assistente-codigo.js    # Assistente de código
│   │   ├── diario-biorelativo.js   # Diário biorelativo
│   │   └── equilibrio.js           # Sistema de equilíbrio
│   │
│   ├── ai/                # Integrações com IAs
│   │   ├── perplexity.js   # Perplexity API
│   │   ├── copilot.js      # GitHub Copilot
│   │   ├── lechat.js       # Le Chat
│   │   ├── claude.js       # Anthropic Claude
│   │   ├── chatgpt.js      # OpenAI ChatGPT
│   │   ├── codeium.js      # Codeium
│   │   ├── audio-ai.js     # IA de áudio
│   │   └── shader-ai.js    # IA de shader
│   │
│   ├── github/            # Integração GitHub
│   │   ├── commits-inteligentes.js # Commits automáticos
│   │   ├── branches-biorelativos.js # Branches do método
│   │   ├── pr-inteligente.js       # PR inteligente
│   │   └── issues-auto.js          # Issues automáticas
│   │
│   └── ui/                # Interface (Bolt.new)
│       ├── dashboard.js    # Dashboard principal
│       ├── painel-problema.js # Painel de problemas
│       ├── painel-ideias.js  # Painel de ideias
│       ├── painel-ai.js      # Painel de IAs
│       └── painel-equilibrio.js # Painel de equilíbrio
│
├── design/                # Design (Bolt.new)
│   ├── mockups/           # Mockups visuais
│   ├── theme/             # Tema (cores, fontes)
│   └── assets/            # Ícones, imagens
│
├── android/               # Código Android (APK)
│   ├── app/               # Código-fonte Android
│   └── build.gradle       # Configuração do Gradle
│
├── tests/                 # Testes
│   ├── unit/              # Testes unitários
│   ├── integration/       # Testes de integração
│   └── e2e/               # Testes end-to-end
│
├── scripts/               # Scripts auxiliares
│   ├── setup.sh           # Setup inicial
│   ├── deploy.sh          # Deploy automático
│   └── backup.sh          # Backup automático
│
├── .github/               # Configurações GitHub
│   ├── workflows/         # GitHub Actions
│   │   ├── ci.yml         # CI/CD
│   │   └── deploy.yml     # Deploy automático
│   ├── ISSUE_TEMPLATE/    # Templates de issues
│   └── PULL_REQUEST_TEMPLATE.md # Template de PR
│
└── output/                # Outputs gerados
    ├── relatorios/        # Relatórios
    ├── builds/            # Builds do APK
    └── docs-generated/    # Docs geradas
```

---

## 🔄 Fluxo de Dados

### **1. Fluxo Principal**
```
Usuário → UI (Dashboard) → Módulos (Gestor de Problemas/Ideias) → Core (Biorelativologia) → IAs/GitHub → Output (Soluções/Commits)
```

### **2. Fluxo de Resolução de Problemas**
```
Problema → Observação → Hipoterelação → 1ª Analítica → 1ª Conclusão → 2ª Analítica → 2ª Conclusão → Ponto Nulo → Solução
```

### **3. Fluxo de Integração com IAs**
```
Usuário → AI Unificada → Roteamento (Perplexity/Copilot/Le Chat) → Resposta → Módulos → Output
```

### **4. Fluxo de GitHub**
```
Mudanças → Commits Inteligentes → Branches Biorelativos → PR Inteligente → Issues Automáticas → GitHub
```

---

## 🧠 Núcleo Biorelativológico (`src/core/`)

### **Módulos e Funções**

| Módulo | Função | Entrada | Saída |
|--------|--------|---------|-------|
| **observation.js** | Coleta dados de todos os ângulos | Problema/Ideia | Dados estruturados |
| **hipoterelacao.js** | Gera hipóteses afirmativas/negativas | Dados | Hipóteses |
| **analise-1.js** | 1ª analítica (predição) | Hipóteses | Predição inicial |
| **analise-2.js** | 2ª analítica (exame) | Predição | Validação |
| **ponto-nulo.js** | Equilíbrio (-1+1=0) | Solução | Equilíbrio |
| **cadeia-denorium.js** | Quebra problemas em cadeia | Problema complexo | Soluções simples |

---

## 🤖 Módulos Principais (`src/modules/`)

### **1. Gestor de Problemas (`gestor-problemas.js`)**
- **Função**: Resolve problemas usando o método biorelativológico.
- **Integrações**:
  - `core/observation.js` → Coleta dados.
  - `core/hipoterelacao.js` → Gera hipóteses.
  - `core/analise-1.js` e `core/analise-2.js` → Analisa.
  - `github-integrado.js` → Cria issues no GitHub.

### **2. Gestor de Ideias (`gestor-ideias.js`)**
- **Função**: Captura e desenvolve ideias criativas.
- **Integrações**:
  - `ai-unificada.js` → Usa IAs para expandir ideias.
  - `github-integrado.js` → Salva ideias como *draft PRs*.

### **3. IA Unificada (`ai-unificada.js`)**
- **Função**: Centraliza todas as IAs em um único ponto de acesso.
- **Integrações**:
  - `ai/perplexity.js` → Pesquisa web.
  - `ai/copilot.js` → Autocomplete de código.
  - `ai/lechat.js` → Código principal.
  - `ai/claude.js` → Explicações e brainstorm.

### **4. GitHub Integrado (`github-integrado.js`)**
- **Função**: Versionamento inteligente e automação.
- **Integrações**:
  - `github/commits-inteligentes.js` → Commits automáticos.
  - `github/branches-biorelativos.js` → Branches do método.
  - `github/pr-inteligente.js` → PRs automáticas.
  - `github/issues-auto.js` → Issues automáticas.

### **5. Organização Inteligente (`organizacao-inteligente.js`)**
- **Função**: Auto-organização de arquivos, pastas e tarefas.
- **Integrações**:
  - `ui/dashboard.js` → Exibe status de organização.
  - `github-integrado.js` → Sincroniza com o GitHub.

### **6. Assistente de Código (`assistente-codigo.js`)**
- **Função**: Gera código para mods, shaders, Java, Fabric, etc.
- **Integrações**:
  - `ai-unificada.js` → Usa IAs para gerar código.
  - `github-integrado.js` → Salva snippets no GitHub.

### **7. Diário Biorelativo (`diario-biorelativo.js`)**
- **Função**: Registro de todas as atividades usando o método.
- **Integrações**:
  - `core/observation.js` → Registra observações.
  - `core/hipoterelacao.js` → Registra hipóteses.

### **8. Sistema de Equilíbrio (`equilibrio.js`)**
- **Função**: Monitora o **Ponto Nulo** (-1+1=0).
- **Integrações**:
  - `core/ponto-nulo.js` → Calcula equilíbrio.
  - `ui/painel-equilibrio.js` → Exibe status.

---

## 🤖 Integrações com IAs (`src/ai/`)

| IA | Arquivo | Função | API/SDK |
|----|---------|--------|---------|
| **Perplexity** | `perplexity.js` | Pesquisa web, docs, fatos | [Perplexity API](https://www.perplexity.ai/) |
| **GitHub Copilot** | `copilot.js` | Autocomplete de código | [GitHub Copilot API](https://github.com/features/copilot) |
| **Le Chat** | `lechat.js` | Código principal | [Mistral AI API](https://mistral.ai/) |
| **Claude** | `claude.js` | Explicações, brainstorm | [Anthropic API](https://www.anthropic.com/) |
| **ChatGPT** | `chatgpt.js` | Alternativa ao Claude | [OpenAI API](https://openai.com/) |
| **Codeium** | `codeium.js` | Alternativa ao Copilot | [Codeium API](https://codeium.com/) |
| **IA de Áudio** | `audio-ai.js` | Efeitos sonoros, música | [Stable Audio API](https://stableaudio.com/) |
| **IA de Shader** | `shader-ai.js` | Otimização GLSL/Vulkan | [NVIDIA Kaolin](https://github.com/NVIDIA/kaolin) |

---

## 🧰 Integração com GitHub (`src/github/`)

### **1. Commits Inteligentes (`commits-inteligentes.js`)**
- **Função**: Gera *commits* automáticos com mensagens baseadas no método biorelativológico.
- **Exemplo de commit**:
  ```
  ✅ Adicionado [módulo] - Resolve problema X usando 2ª analítica
  ```

### **2. Branches Biorelativos (`branches-biorelativos.js`)**
- **Função**: Cria *branches* baseadas no método:
  - `main` → Certidão de óbito (quase-final).
  - `explore-hipoteafirmação` → Hipótese afirmativa.
  - `explore-hiponegacao` → Hipótese negativa.
  - `balance-ponto-nulo` → Busca de equilíbrio.

### **3. PR Inteligente (`pr-inteligente.js`)**
- **Função**: Cria *Pull Requests* automáticas com:
  - Título claro.
  - Descrição detalhada (contexto + solução).
  - *Reviewers* sugeridos.
  - *Labels* baseadas no tipo de mudança.

### **4. Issues Automáticas (`issues-auto.js`)**
- **Função**: Cria *issues* automáticas para:
  - Bugs.
  - Novas funcionalidades.
  - Melhorias.
  - Dúvidas.
- **Template**:
  ```markdown
  ## 🐛 Bug: [Título]
  **Descrição**: [Problema]
  **Hipóteses**: [Hipoteafirmação/Hiponegação]
  **Passos para reproduzir**: [1, 2, 3]
  **Prioridade**: [Alta/Média/Baixa]
  ```

---

## 🎨 Interface (`src/ui/`)

### **1. Dashboard (`dashboard.js`)**
- **Função**: Painel principal com:
  - Resumo de problemas em andamento.
  - Ideias recentes.
  - Status das IAs.
  - Equilíbrio do sistema (Ponto Nulo).

### **2. Painel de Problemas (`painel-problema.js`)**
- **Função**: Exibe e gerencia problemas usando o método biorelativológico.
- **Recursos**:
  - Lista de problemas.
  - Detalhes (observação, hipóteses, análises).
  - Integração com `gestor-problemas.js`.

### **3. Painel de Ideias (`painel-ideias.js`)**
- **Função**: Exibe e gerencia ideias criativas.
- **Recursos**:
  - Lista de ideias.
  - Expansão com IAs.
  - Integração com `gestor-ideias.js`.

### **4. Painel de IAs (`painel-ai.js`)**
- **Função**: Central de controle das IAs.
- **Recursos**:
  - Status de cada IA.
  - Configuração de APIs.
  - Histórico de uso.

### **5. Painel de Equilíbrio (`painel-equilibrio.js`)**
- **Função**: Monitora o **Ponto Nulo** do sistema.
- **Recursos**:
  - Gráfico de equilíbrio.
  - Alertas para desequilíbrios.
  - Integração com `equilibrio.js`.

---

## 📱 Android (`android/`)

### **Estrutura**
```
android/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/   # Código Java/Kotlin
│   │   │   └── res/    # Recursos (layouts, strings, etc.)
│   └── build.gradle   # Configuração do módulo
└── build.gradle       # Configuração do projeto
```

### **Integrações**
- **Node.js**: Usa o mesmo *core* do BioDev Hub via [React Native](https://reactnative.dev/) ou [Capacitor](https://capacitorjs.com/).
- **GitHub**: Sincroniza com o repositório principal.
- **IAs**: Usa as mesmas APIs das IAs.

---

## 🧪 Testes (`tests/`)

### **1. Testes Unitários (`unit/`)**
- **Ferramenta**: [Jest](https://jestjs.io/) ou [Mocha](https://mochajs.org/).
- **Exemplo**:
  ```javascript
  // tests/unit/core/observation.test.js
  const { observe } = require('../../../src/core/observation');
  
  test('Deve observar um problema corretamente', () => {
    const result = observe({ problem: 'Bug no módulo X' });
    expect(result).toHaveProperty('data');
  });
  ```

### **2. Testes de Integração (`integration/`)**
- **Ferramenta**: [Supertest](https://github.com/visionmedia/supertest) ou [Cypress](https://www.cypress.io/).
- **Exemplo**:
  ```javascript
  // tests/integration/modules/gestor-problemas.test.js
  const { resolveProblem } = require('../../../src/modules/gestor-problemas');
  
  test('Deve resolver um problema usando o método biorelativológico', async () => {
    const result = await resolveProblem({ input: 'Bug no módulo X' });
    expect(result).toHaveProperty('solution');
  });
  ```

### **3. Testes End-to-End (`e2e/`)**
- **Ferramenta**: [Cypress](https://www.cypress.io/) ou [Playwright](https://playwright.dev/).
- **Exemplo**:
  ```javascript
  // tests/e2e/ui/dashboard.test.js
  describe('Dashboard', () => {
    it('Deve exibir o painel de problemas', () => {
      cy.visit('/');
      cy.contains('Painel de Problemas').should('be.visible');
    });
  });
  ```

---

## ⚙ GitHub Actions (`.github/workflows/`)

### **1. CI (`ci.yml`)**
- **Função**: Executa testes em *push* e *pull request*.
- **Exemplo**:
  ```yaml
  name: CI
  on: [push, pull_request]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm install
        - run: npm test
  ```

### **2. Deploy (`deploy.yml`)**
- **Função**: Faz *deploy* automático para o GitHub Pages ou servidor.
- **Exemplo**:
  ```yaml
  name: Deploy
  on:
    push:
      branches: [main]
  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm install
        - run: npm run build
        - uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./dist
  ```

---

## 📌 Tecnologias Utilizadas

| Área | Tecnologia | Finalidade |
|------|------------|------------|
| **Frontend** | React.js / Vue.js | Interface do usuário |
| **Backend** | Node.js | Lógica do sistema |
| **Mobile** | React Native / Capacitor | App Android |
| **Banco de Dados** | SQLite / Firebase | Armazenamento local |
| **IAs** | Perplexity, Copilot, Le Chat, etc. | Integrações |
| **GitHub** | GitHub API | Versionamento |
| **Testes** | Jest, Mocha, Cypress | Qualidade de código |
| **CI/CD** | GitHub Actions | Automação |

---

## 🚀 Como Contribuir

1. **Fork** o repositório.
2. **Clone** o seu fork:
   ```bash
   git clone https://github.com/seu-usuario/Biodev-Hub.git
   ```
3. **Crie uma branch** baseada no método:
   ```bash
   git checkout -b explore-hipoteafirmação
   ```
4. **Faça suas mudanças** e documente no `CHANGELOG.md`.
5. **Crie um Pull Request** com:
   - Título claro.
   - Descrição detalhada.
   - *Labels* apropriadas.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](../LICENSE) para detalhes.
