/**
 * 🧠 BioDev Hub - Módulo de Hipoterelação
 * 
 * Parte do Núcleo Biorelativológico.
 * Responsável por gerar hipóteses afirmativas e negativas.
 */

// Função principal: Gerar hipóteses para um problema ou ideia
function generateHypotheses(observation) {
  const { technical, user, business } = observation;
  const hypotheses = {
    affirmative: [], // Hipoteafirmações
    negative: [],   // Hiponegações
  };

  // 1. Hipóteses Técnicas
  if (technical.logs && technical.logs.length > 0) {
    hypotheses.affirmative.push(
      `O problema é causado por um erro nos logs: ${technical.logs[0]}`
    );
    hypotheses.negative.push(
      `O problema NÃO é causado por erros nos logs, mas por um bug não registrado.`
    );
  }

  if (technical.codeSnippets && technical.codeSnippets.length > 0) {
    hypotheses.affirmative.push(
      `O problema está no código: ${technical.codeSnippets[0].substring(0, 50)}...`
    );
    hypotheses.negative.push(
      `O problema NÃO está no código, mas em uma dependência externa.`
    );
  }

  // 2. Hipóteses de Usuário
  if (user.feedback && user.feedback.length > 0) {
    hypotheses.affirmative.push(
      `O problema é causado por uma ação do usuário: ${user.feedback[0]}`
    );
    hypotheses.negative.push(
      `O problema NÃO é causado pelo usuário, mas por um bug no sistema.`
    );
  }

  // 3. Hipóteses de Negócio
  if (business.impact.includes('Alto')) {
    hypotheses.affirmative.push(
      `O problema tem alto impacto no negócio e deve ser resolvido urgentemente.`
    );
    hypotheses.negative.push(
      `O problema NÃO tem alto impacto no negócio, apesar da descrição.`
    );
  }

  // 4. Hipóteses Gerais (se não houver dados suficientes)
  if (hypotheses.affirmative.length === 0 && hypotheses.negative.length === 0) {
    hypotheses.affirmative.push(
      `O problema é causado por um bug no módulo principal.`
    );
    hypotheses.negative.push(
      `O problema NÃO é causado por um bug, mas por uma configuração incorreta.`
    );
  }

  return hypotheses;
}

// Função para gerar hipóteses para um problema
function generateProblemHypotheses(problem) {
  const observation = require('./observation').observeProblem(problem);
  return generateHypotheses(observation);
}

// Função para gerar hipóteses para uma ideia
function generateIdeaHypotheses(idea) {
  const observation = require('./observation').observeIdea(idea);
  return generateHypotheses(observation);
}

module.exports = {
  generateHypotheses,
  generateProblemHypotheses,
  generateIdeaHypotheses,
};