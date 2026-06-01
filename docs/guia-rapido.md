# 📖 Guia Rápido do BioDev Hub

> **Como Usar o BioDev Hub em 10 Minutos**
> *Um guia prático para começar a usar o sistema.*

---

## 🚀 Introdução

O **BioDev Hub** é um **sistema unificado** para **programadores, criadores e organizadores** que combina:
- **Resolução de problemas** (método biorelativológico).
- **Gestão de ideias** (código, arte, música, shaders).
- **Integração com IAs** (Perplexity, Copilot, Le Chat, etc.).
- **Versionamento inteligente** (GitHub).
- **Organização automática** (arquivos, tarefas, projetos).

Este guia vai te ajudar a **configurar e usar** o BioDev Hub em **10 minutos**.

---

## 📥 Passo 1: Instalação

### **1. Clone o Repositório**
```bash
git clone https://github.com/denotas235/Biodev-Hub.git
cd Biodev-Hub
```

### **2. Instale as Dependências**
```bash
npm install
```

### **3. Configure as APIs**
Crie um arquivo `.env` na raiz do projeto com as suas chaves de API:

```env
# Perplexity
PERPLEXITY_API_KEY=your_perplexity_api_key

# GitHub Copilot
GITHUB_COPILOT_TOKEN=your_github_copilot_token

# Mistral AI (Le Chat)
MISTRAL_API_KEY=your_mistral_api_key

# Anthropic (Claude)
ANTHROPIC_API_KEY=your_anthropic_api_key

# OpenAI (ChatGPT)
OPENAI_API_KEY=your_openai_api_key

# GitHub Token
GITHUB_TOKEN=your_github_personal_access_token
```

> **⚠️ Importante**: Nunca compartilhe o arquivo `.env` publicamente.

---

## 🛠 Passo 2: Estrutura do Projeto

O BioDev Hub é organizado em **módulos** e **pastas**:

```
BioDev-Hub/
├── README.md              # Cérebro do projeto
├── CHANGELOG.md           # Memória temporal
├── docs/                  # Documentação
│   ├── manifesto.md       # Princípios biorelativológicos
│   ├── arquitetura.md     # Como o sistema funciona
│   ├── metodo-biorelativo.md # Método detalhado
│   ├── habilidades.md     # Habilidades do sistema
│   └── APIs-integradas.md  # Guia de APIs
│
├── src/                   # Código-fonte
│   ├── core/              # Núcleo biorelativo
│   ├── modules/           # Módulos principais
│   ├── ai/                # Integrações com IAs
│   ├── github/            # Integração GitHub
│   └── ui/                # Interface
│
├── design/                # Design (Bolt.new)
├── android/               # Código Android
├── tests/                 # Testes
└── .github/               # GitHub Actions
```

---

## 🧠 Passo 3: Método Biorelativológico

O **BioDev Hub** usa o **método biorelativológico** para resolver problemas e gerar ideias. Siga estas **8 etapas**:

### **1. Observação/Fé**
- **Colete dados** de todos os ângulos (logs, feedback, código).
- Exemplo: *"O módulo de autenticação falha no Android."*

### **2. Hipoterelação**
- **Crie hipóteses** afirmativas e negativas.
- Exemplo:
  - *Hipoteafirmação*: "O token está inválido."
  - *Hiponegação*: "O token está correto, mas a API está com timeout."

### **3. 1ª Analítica (Predição)**
- **Faça uma predição inicial** baseada nas hipóteses.
- Exemplo: *"A hipótese mais provável é que o token está inválido."*

### **4. 1ª Conclusão (Morte Prematura)**
- **Evite conclusões apressadas** — esta é apenas uma hipótese temporária.

### **5. 2ª Analítica (Exame)**
- **Valide a predição** com testes e evidências.
- Exemplo: *"Teste unitário confirma que o token está inválido."*

### **6. 2ª Conclusão (Certidão de Óbito)**
- **Chegue a uma conclusão quase final** baseada em evidências.
- Exemplo: *"O problema é o token inválido no Android."*

### **7. Ponto Nulo**
- **Garanta que a solução não introduza novos problemas**.
- Exemplo: *"Teste a solução no iOS para garantir que não quebre nada."*

### **8. Cadeia de Denorium**
- **Quebre problemas em cadeia** no ponto nulo.
- Exemplo: *"Corrigir o token resolve o problema de login e evita perda de dados."*

---

## 💡 Passo 4: Usando os Módulos

### **1. Gestor de Problemas**
**Objetivo**: Resolver problemas usando o método biorelativológico.

**Como usar**:
```javascript
const { resolveProblem } = require('./src/modules/gestor-problemas');

const problem = {
  description: 'O módulo de autenticação falha no Android.',
  logs: ['Error: Invalid token at auth.js:42'],
  feedback: ['Usuários relatam que não conseguem fazer login.'],
};

const solution = await resolveProblem(problem);
console.log(solution);
```

**Saída esperada**:
```javascript
{
  observation: 'Token inválido no Android.',
  hypotheses: [
    'O token está em formato inválido.',
    'A API está com timeout.',
  ],
  analysis: 'Teste unitário confirma que o token está inválido.',
  solution: 'Atualizar validateToken() para aceitar tokens do Android.',
}
```

---

### **2. Gestor de Ideias**
**Objetivo**: Capturar e desenvolver ideias criativas.

**Como usar**:
```javascript
const { addIdea, expandIdea } = require('./src/modules/gestor-ideias');

// Adicionar uma nova ideia
const newIdea = {
  title: 'Novo Shader de Iluminação',
  description: 'Criar um shader que simula iluminação dinâmica para Minecraft.',
  category: 'Shader',
  priority: 'Alta',
};

const ideaId = await addIdea(newIdea);

// Expandir a ideia com IA
const expandedIdea = await expandIdea(ideaId, 'Le Chat');
console.log(expandedIdea);
```

**Saída esperada**:
```javascript
{
  id: '123',
  title: 'Novo Shader de Iluminação',
  description: 'Criar um shader que simula iluminação dinâmica para Minecraft.',
  expandedDescription: 'Shader em GLSL para OpenGL ES 3.2, otimizado para Mali-G52...',
  category: 'Shader',
  priority: 'Alta',
}
```

---

### **3. IA Unificada**
**Objetivo**: Usar IAs para gerar código, explicações ou pesquisas.

**Como usar**:
```javascript
const { generateCode, searchWeb, explainConcept } = require('./src/ai/ai-unificada');

// Gerar código
const code = await generateCode('Crie uma função em JavaScript para validar tokens.');
console.log(code);

// Pesquisar na web
const research = await searchWeb('Como otimizar shaders para Mali-G52?');
console.log(research);

// Explicar um conceito
const explanation = await explainConcept('O que é um mixin no Fabric?');
console.log(explanation);
```

**Saída esperada**:
```javascript
// Código gerado
function validateToken(token) {
  return token.includes('.') && token.length > 10;
}

// Pesquisa
"Para otimizar shaders para Mali-G52, use Framebuffer Fetch e Pixel Local Storage..."

// Explicação
"Um mixin no Fabric é uma técnica para modificar classes existentes sem alterar o código original..."
```

---

### **4. GitHub Integrado**
**Objetivo**: Automatizar versionamento e colaboração no GitHub.

**Como usar**:
```javascript
const { createSmartCommit, createBranch, createPR } = require('./src/github/github-integrado');

// Criar um commit inteligente
await createSmartCommit({
  message: '✅ Corrigido token inválido no Android',
  changes: ['Atualizado validateToken() para aceitar tokens do Android.'],
});

// Criar uma branch biorelativa
await createBranch('explore-hipoteafirmação');

// Criar um Pull Request
await createPR({
  title: 'Correção de token no Android',
  description: 'Resolve o problema de token inválido no Android usando o método biorelativológico.',
  base: 'main',
  head: 'explore-hipoteafirmação',
});
```

---

### **5. Assistente de Código**
**Objetivo**: Gerar e otimizar código para mods, shaders, etc.

**Como usar**:
```javascript
const { generateShader, optimizeCode } = require('./src/modules/assistente-codigo');

// Gerar um shader
const shaderCode = await generateShader({
  type: 'fragment',
  effect: 'iluminação dinâmica',
  target: 'mali-g52',
});
console.log(shaderCode);

// Otimizar código
const optimizedCode = await optimizeCode(`
  function slowFunction() {
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
  }
`);
console.log(optimizedCode);
```

**Saída esperada**:
```glsl
// Shader gerado
#version 320 es
precision highp float;
uniform vec3 lightPos;
void main() {
  // Lógica de iluminação dinâmica
}
```

---

## 📊 Passo 5: Interface (UI)

O **BioDev Hub** inclui uma **interface visual** (Bolt.new) para facilitar o uso. Para executar a UI:

```bash
npm run dev
```

A interface será aberta em `http://localhost:3000` e incluirá:
- **Dashboard**: Resumo de problemas, ideias e status das IAs.
- **Painel de Problemas**: Gerencie problemas usando o método biorelativológico.
- **Painel de Ideias**: Adicione e expanda ideias.
- **Painel de IAs**: Controle e configure as IAs.
- **Painel de Equilíbrio**: Monitore o Ponto Nulo do sistema.

---

## 🧪 Passo 6: Testes

O BioDev Hub inclui **testes automatizados** para garantir a qualidade do código.

### **1. Testes Unitários**
```bash
npm test
```

### **2. Testes de Integração**
```bash
npm run test:integration
```

### **3. Testes End-to-End**
```bash
npm run test:e2e
```

---

## 📦 Passo 7: Build e Deploy

### **1. Build para Produção**
```bash
npm run build
```

### **2. Deploy para GitHub Pages**
```bash
npm run deploy
```

### **3. Build para Android (APK)**
```bash
cd android
./gradlew assembleDebug
```

---

## 📌 Dicas Rápidas

| Ação | Comando/Exemplo |
|------|-----------------|
| **Clonar repositório** | `git clone https://github.com/denotas235/Biodev-Hub.git` |
| **Instalar dependências** | `npm install` |
| **Executar UI** | `npm run dev` |
| **Executar testes** | `npm test` |
| **Criar commit** | `npm run commit` |
| **Fazer deploy** | `npm run deploy` |
| **Gerar código** | `await generateCode('Crie uma função em JS.')` |
| **Pesquisar na web** | `await searchWeb('Como usar Fabric API?')` |
| **Resolva um problema** | `await resolveProblem({ description: 'Bug no módulo X.' })` |

---

## 🚀 Passo 8: Contribuindo

Se você quiser **contribuir** para o BioDev Hub:

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
   - *Labels* apropriadas (ex: `feature`, `bug`, `doc`).

---

## 📜 Passo 9: Recursos Adicionais

- **Documentação Completa**: [README.md](../README.md)
- **Método Biorelativológico**: [metodo-biorelativo.md](./metodo-biorelativo.md)
- **Arquitetura do Sistema**: [arquitetura.md](./arquitetura.md)
- **Habilidades do Sistema**: [habilidades.md](./habilidades.md)
- **APIs Integradas**: [APIs-integradas.md](./APIs-integradas.md)
- **Manifesto Biorelativológico**: [manifesto.md](./manifesto.md)

---

## 🎯 Passo 10: Próximos Passos

Agora que você já configurou e testou o BioDev Hub, aqui estão algumas **ideias para explorar**:

1. **Implementar um novo módulo**: Adicione um módulo para gerenciar tarefas.
2. **Integrar uma nova IA**: Adicione suporte para a [Groq API](https://groq.com/).
3. **Otimizar para mobile**: Ajuste o sistema para rodar no **TECNO KH7** (Mali-G52).
4. **Criar um shader**: Use o **Assistente de Código** para gerar um shader para Minecraft.
5. **Automatizar workflows**: Configure **GitHub Actions** para CI/CD.

---

## 📢 Conclusão

O **BioDev Hub** é uma **ferramenta poderosa** para **desenvolvedores, criadores e organizadores**. Com este guia, você já pode:
- **Resolver problemas** de forma estruturada.
- **Gerar ideias** e expandi-las com IAs.
- **Automatizar versionamento** com o GitHub.
- **Otimizar código** para performance.

> **"O BioDev Hub não é apenas uma ferramenta — é um multiplicador de produtividade."**

---

## 🔗 Links Úteis

- [Repositório do BioDev Hub](https://github.com/denotas235/Biodev-Hub)
- [Documentação do Fabric](https://fabricmc.net/wiki/start)
- [OpenGL ES 3.2 Docs](https://www.khronos.org/opengles/sdk/docs/man32/)
- [Mali-G52 Docs](https://developer.arm.com/ip-products/graphics/mali-g52)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

## 🙏 Agradecimentos

Obrigado por usar o **BioDev Hub**! Se você tiver **dúvidas, sugestões ou bug reports**, abra uma *issue* no [GitHub](https://github.com/denotas235/Biodev-Hub/issues).

> **"Juntos, evoluímos sem quebrar."**
