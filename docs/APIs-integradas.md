# 🤖 APIs Integradas no BioDev Hub

> **Guia Completo de Integração com IAs e Serviços**
> *Como configurar e usar as APIs de IAs no BioDev Hub.*

---

## 📌 Introdução

O **BioDev Hub** integra **múltiplas IAs e APIs** para oferecer funcionalidades avançadas, como:
- **Pesquisa web** (Perplexity).
- **Autocomplete de código** (GitHub Copilot, Codeium).
- **Geração de código** (Le Chat, Claude, ChatGPT).
- **Otimização de shaders** (IA de Shader).
- **Geração de áudio** (IA de Áudio).

Este documento explica **como configurar e usar** cada API, incluindo:
- **Chaves de API** necessárias.
- **Endpoints** e parâmetros.
- **Exemplos de código** para integração.
- **Limites e cotações** (rate limits, custos).

---

## 🔑 Configuração Geral

### **1. Arquivo `.env`**
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

# Codeium
CODEIUM_API_KEY=your_codeium_api_key

# IA de Áudio (Stable Audio)
STABLE_AUDIO_API_KEY=your_stable_audio_api_key

# GitHub Token (para integração com GitHub API)
GITHUB_TOKEN=your_github_personal_access_token
```

> **⚠️ Importante**: Nunca compartilhe o arquivo `.env` publicamente (ele está no `.gitignore`).

---

## 🌐 APIs de IAs

---

### **1. Perplexity API**
**Finalidade**: Pesquisa web, documentação, fatos.
**Documentação**: [Perplexity API Docs](https://docs.perplexity.ai/)

#### **Configuração**
- **Chave de API**: Obtenha em [Perplexity AI](https://www.perplexity.ai/).
- **Variável de ambiente**: `PERPLEXITY_API_KEY`.

#### **Exemplo de Uso**
```javascript
// src/ai/perplexity.js
const axios = require('axios');

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;
const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

async function searchWeb(query) {
  try {
    const response = await axios.post(
      PERPLEXITY_API_URL,
      {
        model: 'sonar',
        messages: [
          {
            role: 'user',
            content: `Pesquise sobre: ${query}`,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Erro na Perplexity API:', error.message);
    return null;
  }
}

module.exports = { searchWeb };
```

#### **Casos de Uso**
- Pesquisar documentação de APIs.
- Encontrar soluções para problemas técnicos.
- Obter fatos ou dados atualizados.

#### **Limites**
- **Rate Limit**: 100 requisições por minuto (grátis).
- **Custo**: Plano grátis disponível.

---

### **2. GitHub Copilot API**
**Finalidade**: Autocomplete de código, sugestões em tempo real.
**Documentação**: [GitHub Copilot Docs](https://docs.github.com/en/copilot)

#### **Configuração**
- **Token**: Obtenha um token de acesso pessoal no GitHub com escopo `copilot`.
- **Variável de ambiente**: `GITHUB_COPILOT_TOKEN`.

#### **Exemplo de Uso**
```javascript
// src/ai/copilot.js
const { Copilot } = require('@github/copilot-api'); // Hypothetical (GitHub Copilot não tem API pública ainda)

// Nota: GitHub Copilot não tem uma API pública para integração direta.
// Para usar o Copilot, é necessário integrar com o VS Code ou GitHub Codespaces.
// Este é um exemplo conceitual:

async function getCodeSuggestion(prompt) {
  // Simulação de uma API de autocomplete
  const suggestions = {
    'função em JavaScript': 'function example() { console.log("Hello, World!"); }',
    'classe em Java': 'public class Example { public static void main(String[] args) { System.out.println("Hello, World!"); } }',
  };
  return suggestions[prompt] || 'Nenhuma sugestão disponível.';
}

module.exports = { getCodeSuggestion };
```

#### **Casos de Uso**
- Autocomplete de código em tempo real.
- Sugestões de funções ou classes.
- Geração de código base.

#### **Limites**
- **Disponibilidade**: Apenas no VS Code ou GitHub Codespaces.
- **Custo**: Grátis para usuários individuais (com restrições).

---

### **3. Mistral AI (Le Chat) API**
**Finalidade**: Geração de código, explicações, brainstorm.
**Documentação**: [Mistral AI Docs](https://docs.mistral.ai/)

#### **Configuração**
- **Chave de API**: Obtenha em [Mistral AI](https://mistral.ai/).
- **Variável de ambiente**: `MISTRAL_API_KEY`.

#### **Exemplo de Uso**
```javascript
// src/ai/lechat.js
const axios = require('axios');

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';

async function generateCode(prompt) {
  try {
    const response = await axios.post(
      MISTRAL_API_URL,
      {
        model: 'mistral-tiny',
        messages: [
          {
            role: 'user',
            content: `Gere código para: ${prompt}`,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${MISTRAL_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Erro na Mistral API:', error.message);
    return null;
  }
}

module.exports = { generateCode };
```

#### **Casos de Uso**
- Gerar código em JavaScript, Python, Java, etc.
- Explicar conceitos complexos.
- Brainstorm de soluções para problemas.

#### **Limites**
- **Rate Limit**: 100 requisições por minuto (grátis).
- **Custo**: Plano grátis disponível.

---

### **4. Anthropic Claude API**
**Finalidade**: Explicações detalhadas, brainstorm, geração de código.
**Documentação**: [Anthropic API Docs](https://docs.anthropic.com/)

#### **Configuração**
- **Chave de API**: Obtenha em [Anthropic](https://www.anthropic.com/).
- **Variável de ambiente**: `ANTHROPIC_API_KEY`.

#### **Exemplo de Uso**
```javascript
// src/ai/claude.js
const axios = require('axios');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';

async function explainConcept(concept) {
  try {
    const response = await axios.post(
      ANTHROPIC_API_URL,
      {
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `Explique o seguinte conceito: ${concept}`,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${ANTHROPIC_API_KEY}`,
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
        },
      }
    );
    return response.data.content[0].text;
  } catch (error) {
    console.error('Erro na Anthropic API:', error.message);
    return null;
  }
}

module.exports = { explainConcept };
```

#### **Casos de Uso**
- Explicar conceitos técnicos (ex: como funciona um *mixin* no Fabric).
- Brainstorm de soluções para problemas complexos.
- Geração de código com contexto detalhado.

#### **Limites**
- **Rate Limit**: 100 requisições por minuto (grátis).
- **Custo**: Plano grátis disponível.

---

### **5. OpenAI ChatGPT API**
**Finalidade**: Geração de código, otimização, explicações.
**Documentação**: [OpenAI API Docs](https://platform.openai.com/docs/)

#### **Configuração**
- **Chave de API**: Obtenha em [OpenAI](https://platform.openai.com/).
- **Variável de ambiente**: `OPENAI_API_KEY`.

#### **Exemplo de Uso**
```javascript
// src/ai/chatgpt.js
const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

async function optimizeCode(code) {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `Otimize o seguinte código: ${code}`,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Erro na OpenAI API:', error.message);
    return null;
  }
}

module.exports = { optimizeCode };
```

#### **Casos de Uso**
- Otimizar código para performance.
- Gerar código em qualquer linguagem.
- Explicar conceitos ou algoritmos.

#### **Limites**
- **Rate Limit**: 100 requisições por minuto (grátis).
- **Custo**: Plano grátis com créditos limitados.

---

### **6. Codeium API**
**Finalidade**: Autocomplete de código (alternativa ao GitHub Copilot).
**Documentação**: [Codeium Docs](https://codeium.com/)

#### **Configuração**
- **Chave de API**: Obtenha em [Codeium](https://codeium.com/).
- **Variável de ambiente**: `CODEIUM_API_KEY`.

#### **Exemplo de Uso**
```javascript
// src/ai/codeium.js
const axios = require('axios');

const CODEIUM_API_KEY = process.env.CODEIUM_API_KEY;
const CODEIUM_API_URL = 'https://api.codeium.com/v1/completions';

async function getCodeiumSuggestion(prompt) {
  try {
    const response = await axios.post(
      CODEIUM_API_URL,
      {
        prompt: prompt,
        language: 'javascript',
      },
      {
        headers: {
          'Authorization': `Bearer ${CODEIUM_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Erro na Codeium API:', error.message);
    return null;
  }
}

module.exports = { getCodeiumSuggestion };
```

#### **Casos de Uso**
- Autocomplete de código em tempo real.
- Sugestões de funções ou trechos de código.
- Alternativa ao GitHub Copilot.

#### **Limites**
- **Rate Limit**: 100 requisições por minuto (grátis).
- **Custo**: Plano grátis disponível.

---

### **7. IA de Áudio (Stable Audio API)**
**Finalidade**: Geração de efeitos sonoros e música.
**Documentação**: [Stable Audio Docs](https://stableaudio.com/)

#### **Configuração**
- **Chave de API**: Obtenha em [Stable Audio](https://stableaudio.com/).
- **Variável de ambiente**: `STABLE_AUDIO_API_KEY`.

#### **Exemplo de Uso**
```javascript
// src/ai/audio-ai.js
const axios = require('axios');
const fs = require('fs');

const STABLE_AUDIO_API_KEY = process.env.STABLE_AUDIO_API_KEY;
const STABLE_AUDIO_API_URL = 'https://api.stableaudio.com/v1/generate';

async function generateAudio(prompt, outputFile = 'output.mp3') {
  try {
    const response = await axios.post(
      STABLE_AUDIO_API_URL,
      {
        prompt: prompt,
        duration: 10, // Segundos
      },
      {
        headers: {
          'Authorization': `Bearer ${STABLE_AUDIO_API_KEY}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );
    fs.writeFileSync(outputFile, response.data);
    return `Áudio gerado: ${outputFile}`;
  } catch (error) {
    console.error('Erro na Stable Audio API:', error.message);
    return null;
  }
}

module.exports = { generateAudio };
```

#### **Casos de Uso**
- Criar trilhas sonoras para jogos.
- Gerar efeitos sonoros para mods.
- Produzir música para projetos multimídia.

#### **Limites**
- **Rate Limit**: 50 requisições por minuto (grátis).
- **Custo**: Plano grátis com créditos limitados.

---

### **8. IA de Shader (NVIDIA Kaolin ou Custom)**
**Finalidade**: Otimização de shaders (GLSL, HLSL, WGSL).
**Documentação**: [NVIDIA Kaolin](https://github.com/NVIDIA/kaolin)

#### **Configuração**
- **Chave de API**: Não requer chave (local ou via NVIDIA).
- **Variável de ambiente**: Não aplicável.

#### **Exemplo de Uso**
```javascript
// src/ai/shader-ai.js
const { optimizeShader } = require('kaolin-shader-optimizer'); // Hypothetical

async function optimizeShader(shaderCode, targetGPU = 'mali-g52') {
  try {
    const optimizedShader = await optimizeShader(shaderCode, {
      target: targetGPU,
      optimizeFor: 'performance',
    });
    return optimizedShader;
  } catch (error) {
    console.error('Erro ao otimizar shader:', error.message);
    return null;
  }
}

module.exports = { optimizeShader };
```

#### **Casos de Uso**
- Otimizar shaders para **Mali-G52** (TECNO KH7).
- Converter shaders entre linguagens (GLSL → WGSL).
- Gerar shaders para efeitos visuais (ex: iluminação, sombras).

#### **Limites**
- **Disponibilidade**: Requer instalação local ou acesso a APIs específicas.
- **Custo**: Grátis (open-source).

---

## 🔄 Integração com o BioDev Hub

### **1. Módulo `ai-unificada.js`**
Centraliza todas as IAs em um único ponto de acesso:

```javascript
// src/ai/ai-unificada.js
const { searchWeb } = require('./perplexity');
const { generateCode } = require('./lechat');
const { explainConcept } = require('./claude');
const { optimizeCode } = require('./chatgpt');
const { getCodeiumSuggestion } = require('./codeium');
const { generateAudio } = require('./audio-ai');
const { optimizeShader } = require('./shader-ai');

module.exports = {
  searchWeb,
  generateCode,
  explainConcept,
  optimizeCode,
  getCodeiumSuggestion,
  generateAudio,
  optimizeShader,
};
```

### **2. Uso nos Módulos**
Exemplo de como usar as IAs no **Gestor de Problemas**:

```javascript
// src/modules/gestor-problemas.js
const { generateCode, explainConcept } = require('../ai/ai-unificada');

async function resolveProblem(problem) {
  // 1. Observação
  const observation = observe(problem);
  
  // 2. Hipoterelação
  const hypotheses = generateHypotheses(observation);
  
  // 3. Usar IA para analisar
  const analysis = await explainConcept(hypotheses[0]);
  
  // 4. Gerar solução
  const solution = await generateCode(`Resolva: ${problem}`);
  
  return { observation, hypotheses, analysis, solution };
}
```

---

## 📌 Boas Práticas

1. **Sempre use variáveis de ambiente** para chaves de API.
2. **Trate erros**: Adicione `try/catch` em todas as chamadas de API.
3. **Limite requisições**: Respeite os *rate limits* de cada API.
4. **Cache resultados**: Armazene respostas frequentes para evitar chamadas desnecessárias.
5. **Documente**: Adicione comentários no código explicando o uso de cada API.

---

## 🚀 Próximos Passos

1. **Configure as chaves de API** no arquivo `.env`.
2. **Teste cada integração** individualmente.
3. **Integre com os módulos** do BioDev Hub.
4. **Monitore o uso** para evitar exceder *rate limits*.

---

## 📜 Licença e Termos de Uso

- **Perplexity**: [Termos de Uso](https://www.perplexity.ai/terms)
- **GitHub Copilot**: [Termos de Uso](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)
- **Mistral AI**: [Termos de Uso](https://mistral.ai/terms/)
- **Anthropic**: [Termos de Uso](https://www.anthropic.com/legal)
- **OpenAI**: [Termos de Uso](https://openai.com/policies/terms-of-use)
- **Codeium**: [Termos de Uso](https://codeium.com/legal)
- **Stable Audio**: [Termos de Uso](https://stableaudio.com/terms)

---

## 🔗 Links Úteis

- [Perplexity AI](https://www.perplexity.ai/)
- [GitHub Copilot](https://github.com/features/copilot)
- [Mistral AI](https://mistral.ai/)
- [Anthropic](https://www.anthropic.com/)
- [OpenAI](https://openai.com/)
- [Codeium](https://codeium.com/)
- [Stable Audio](https://stableaudio.com/)
- [NVIDIA Kaolin](https://github.com/NVIDIA/kaolin)

---

## 📢 Notas Finais

- **Atualize as chaves de API** regularmente.
- **Monitore os custos** se usar planos pagos.
- **Contribua**: Se encontrar uma nova API útil, adicione-a ao BioDev Hub!

> **"As IAs são ferramentas poderosas — use-as com sabedoria."**
