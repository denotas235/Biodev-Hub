# 🏗 Arquitetura do BioDev Hub

> **Como o sistema funciona: estrutura, fluxos e integrações**

---

## 📌 Visão Geral

O **BioDev Hub** é um sistema **modular e escalável**, projetado para integrar **programação, ideias, IAs e GitHub** em um único fluxo de trabalho. Esta documentação descreve a **arquitetura técnica** do projeto, incluindo:

- **Módulos principais** e suas responsabilidades.
- **Fluxos de dados** entre componentes.
- **Integrações com IAs** e GitHub.
- **Estrutura de pastas** e organização do código.

---

## 🧩 Arquitetura de Módulos

O sistema é dividido em **8 módulos principais**, cada um com uma função específica dentro do fluxo biorelativológico.

### **Diagrama de Módulos**
```
┌───────────────────────────────────────────────────────────────────────────────┐
│                              BioDev Hub                                      │
├───────────────────┬───────────────────┬───────────────────┬───────────────────┤
│   Core             │   Modules          │   AI               │   GitHub           │
│  (Núcleo)          │  (Funcionalidades) │  (Integrações)     │  (Versionamento)    │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│ - observation.js   │ - gestor-problemas │ - perplexity.js    │ - commits-         │
│ - hipoterelacao.js │ - gestor-ideias    │ - copilot.js       │   inteligentes.js  │
│ - analise-1.js     │ - ai-unificada     │ - lechat.js        │ - branches-        │
│ - analise-2.js     │ - github-integrado │ - claude.js        │   biorelativos.js  │
│ - ponto-nulo.js    │ - organizacao-    │ - chatgpt.js       │ - pr-inteligente.js│
│ - cadeia-denorium.js│   inteligente     │ - codeium.js       │ - issues-auto.js    │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┘
```

---

## 🔧 Módulos do Core (Núcleo Biorelativológico)

O **Core** é o coração do sistema, implementando o **método Biorelativológico** em código.

| Arquivo | Função | Dependências |
|---------|--------|---------------|
| `observation.js` | Captura e armazena observações sobre problemas/ideias. | - |
| `hipoterelacao.js` | Gera hipóteses afirmativas e negativas para análise. | `observation.js` |
| `analise-1.js` | Realiza a **1ª Analítica** (predição baseada em hipóteses). | `hipoterelacao.js` |
| `analise-2.js` | Realiza a **2ª Analítica** (exame de execução). | `analise-1.js` |
| `ponto-nulo.js` | Calcula o **Ponto Nulo** (equilíbrio entre forças). | `analise-2.js` |
| `cadeia-denorium.js` | Mapeia **problemas em cadeia** e suas dependências. | `ponto-nulo.js` |

### **Fluxo do Core**
```
Observação → Hipoterelação → 1ª Analítica → 1ª Conclusão → 2ª Analítica → 2ª Conclusão → Ponto Nulo → Cadeia de Denorium
```

---

## 📂 Módulos Funcionais

Os **Módulos Funcionais** são responsáveis pelas **funcionalidades principais** do app.

| Módulo | Arquivo | Função | Status |
|--------|---------|--------|--------|
| **1. Gestor de Problemas** | `gestor-problemas.js` | Resolve problemas usando o método biorelativo. | ☐ Pendente |
| **2. Gestor de Ideias** | `gestor-ideias.js` | Captura e desenvolve ideias criativas. | ☐ Pendente |
| **3. IA Unificada** | `ai-unificada.js` | Centraliza o acesso a todas as IAs. | ☐ Pendente |
| **4. GitHub Integrado** | `github-integrado.js` | Gerencia commits, branches e PRs de forma inteligente. | ☐ Pendente |
| **5. Organização Inteligente** | `organizacao-inteligente.js` | Auto-organiza arquivos e informações. | ☐ Pendente |
| **6. Assistente de Código** | `assistente-codigo.js` | Auxilia na escrita de código (Java, Kotlin, GLSL, etc.). | ☐ Pendente |
| **7. Diário Biorelativo** | `diario-biorelativo.js` | Registra todas as ações e decisões. | ☐ Pendente |
| **8. Sistema de Equilíbrio** | `equilibrio.js` | Monitora o **Ponto Nulo** do sistema. | ☐ Pendente |

---

## 🤖 Integrações com IAs

As **IAs** são integradas como **serviços externos**, cada uma com uma função específica.

| IA | Arquivo | Função | Status |
|----|---------|--------|--------|
| **Perplexity** | `perplexity.js` | Pesquisa web, documentação e fatos. | ✅ Ativa |
| **GitHub Copilot** | `copilot.js` | Autocomplete de código. | ✅ Ativa |
| **Le Chat** | `lechat.js` | Código principal e lógica. | ✅ Ativa |
| **Claude** | `claude.js` | Explicações detalhadas e brainstorm. | ☐ Pendente |
| **ChatGPT** | `chatgpt.js` | Alternativa ao Claude. | ☐ Pendente |
| **Codeium** | `codeium.js` | Alternativa ao Copilot. | ☐ Pendente |
| **IA de Áudio** | `audio-ai.js` | Gera efeitos sonoros e música. | ☐ Pendente |
| **IA de Shader** | `shader-ai.js` | Otimiza shaders (GLSL, Vulkan). | ☐ Pendente |

### **Fluxo de Integração com IAs**
```
Usuário → Módulo Funcional → IA Unificada → IA Específica → Resposta → Módulo Funcional → Usuário
```

---

## 🗂 Estrutura de Pastas

```
BioDev-Hub/
├── README.md              # Cérebro do projeto
├── CHANGELOG.md           # Memória temporal
├── LICENSE                # Licença MIT
├── .gitignore             # Arquivos ignorados
│
├── docs/                  # Documentação
│   ├── manifesto.md       # Filosofia do método
│   ├── arquitetura.md     # Esta documentação
│   ├── metodo-biorelativo.md # Detalhes do método
│   ├── habilidades.md     # Habilidades do sistema
│   ├── APIs-integradas.md # Detalhes das IAs
│   └── guia-rapido.md     # Guia de uso
│
├── src/                   # Código-fonte
│   ├── core/              # Núcleo biorelativológico
│   │   ├── observation.js
│   │   ├── hipoterelacao.js
│   │   ├── analise-1.js
│   │   ├── analise-2.js
│   │   ├── ponto-nulo.js
│   │   └── cadeia-denorium.js
│   │
│   ├── modules/           # Módulos funcionais
│   │   ├── gestor-problemas.js
│   │   ├── gestor-ideias.js
│   │   ├── ai-unificada.js
│   │   ├── github-integrado.js
│   │   ├── organizacao-inteligente.js
│   │   ├── assistente-codigo.js
│   │   ├── diario-biorelativo.js
│   │   └── equilibrio.js
│   │
│   ├── ai/                # Integrações com IAs
│   │   ├── perplexity.js
│   │   ├── copilot.js
│   │   ├── lechat.js
│   │   ├── claude.js
│   │   ├── chatgpt.js
│   │   ├── codeium.js
│   │   ├── audio-ai.js
│   │   └── shader-ai.js
│   │
│   ├── github/            # Integração GitHub
│   │   ├── commits-inteligentes.js
│   │   ├── branches-biorelativos.js
│   │   ├── pr-inteligente.js
│   │   └── issues-auto.js
│   │
│   └── ui/                # Interface (Bolt.new)
│       ├── dashboard.js
│       ├── painel-problema.js
│       ├── painel-ideias.js
│       ├── painel-ai.js
│       └── painel-equilibrio.js
│
├── design/                # Design (Bolt.new)
│   ├── mockups/
│   ├── theme/
│   └── assets/
│
├── android/               # Código Android (APK)
│   ├── app/
│   └── build.gradle
│
├── tests/                 # Testes
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── scripts/               # Scripts auxiliares
│   ├── setup.sh
│   ├── deploy.sh
│   └── backup.sh
│
├── .github/               # Configurações GitHub
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
└── output/                # Outputs gerados
    ├── relatorios/
    ├── builds/
    └── docs-generated/
```

---

## 🔄 Fluxos de Dados

### **1. Fluxo de Resolução de Problemas**
```
Usuário → Gestor de Problemas → Core (Observação → Hipoterelação → Análise) → IA Unificada → GitHub → Usuário
```

### **2. Fluxo de Captura de Ideias**
```
Usuário → Gestor de Ideias → Core (Hipoterelação → Análise) → Diário Biorelativo → GitHub → Usuário
```

### **3. Fluxo de Integração com IAs**
```
Usuário → Módulo Funcional → IA Unificada → IA Específica → Resposta → Módulo Funcional → Usuário
```

### **4. Fluxo de Versionamento (GitHub)**
```
Usuário → GitHub Integrado → Commits Inteligentes → Branches Biorelativos → PR Inteligente → GitHub → Usuário
```

---

## 🛠 Tecnologias Utilizadas

| Área | Tecnologia | Uso |
|------|-------------|-----|
| **Linguagem Principal** | JavaScript/Node.js | Backend e lógica |
| **Frontend** | HTML/CSS/JS (Bolt.new) | Interface |
| **Mobile** | Android (Kotlin/Java) | APK |
| **Versionamento** | Git + GitHub | Controle de versão |
| **CI/CD** | GitHub Actions | Integração contínua |
| **IAs** | Perplexity, Copilot, Le Chat, etc. | Integrações |

---

## 📌 Boas Práticas

1. **Modularidade**: Cada módulo deve ser **independente** e ter uma **responsabilidade única**.
2. **Documentação**: Todo módulo deve ter um **README.md** explicando sua função.
3. **Testes**: Todo código deve ter **testes unitários e de integração**.
4. **Versionamento**: Use **branches biorelativos** para desenvolvimento.
5. **Feedback**: Sempre **valide soluções** com o método biorelativológico.

---

## 🚀 Próximos Passos

- [ ] Implementar **Core** (método biorelativológico).
- [ ] Desenvolver **Módulo 1 (Gestor de Problemas)**.
- [ ] Integrar **Perplexity e Copilot**.
- [ ] Criar **UI no Bolt.new**.
- [ ] Configurar **GitHub Actions** para CI/CD.

---

## 📢 Conclusão

A arquitetura do **BioDev Hub** foi projetada para ser **flexível, escalável e evolutiva**, seguindo os princípios do **método Biorelativológico**. Cada componente tem um **papel claro** e se comunica de forma **orgânica** com os demais.

> **"A arquitetura é o esqueleto do sistema — o método biorelativológico é a alma."**