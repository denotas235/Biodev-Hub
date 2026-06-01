/**
 * 🧠 BioDev Hub - Módulo de 1ª Analítica (Predição)
 * 
 * Parte do Núcleo Biorelativológico.
 * Responsável por fazer uma predição inicial baseada nas hipóteses.
 */

// Função principal: Fazer uma predição inicial
function predict(hypotheses) {
  const { affirmative, negative } = hypotheses;
  
  // 1. Classificar hipóteses por probabilidade
  const classifiedHypotheses = {
    high: [],   // Alta probabilidade
    medium: [], // Média probabilidade
    low: [],    // Baixa probabilidade
  };

  // Classificar hipóteses afirmativas
  affirmative.forEach(hypothesis => {
    if (hypothesis.includes('erro nos logs') || hypothesis.includes('bug no módulo')) {
      classifiedHypotheses.high.push(hypothesis);
    } else if (hypothesis.includes('ação do usuário') || hypothesis.includes('configuração')) {
      classifiedHypotheses.medium.push(hypothesis);
    } else {
      classifiedHypotheses.low.push(hypothesis);
    }
  });

  // Classificar hipóteses negativas
  negative.forEach(hypothesis => {
    if (hypothesis.includes('NÃO é causado por erros') || hypothesis.includes('NÃO está no código')) {
      classifiedHypotheses.medium.push(hypothesis);
    } else {
      classifiedHypotheses.low.push(hypothesis);
    }
  });

  // 2. Selecionar a hipótese mais provável
  const mostLikelyHypothesis = classifiedHypotheses.high[0] || 
                          classifiedHypotheses.medium[0] || 
                          classifiedHypotheses.low[0];

  // 3. Gerar predição
  const prediction = {
    hypothesis: mostLikelyHypothesis,
    probability: classifiedHypotheses.high.includes(mostLikelyHypothesis) ? 'Alta' : 
                 classifiedHypotheses.medium.includes(mostLikelyHypothesis) ? 'Média' : 'Baixa',
    evidence: `Baseado em ${affirmative.length} hipóteses afirmativas e ${negative.length} negativas.`,
    classifiedHypotheses,
  };

  return prediction;
}

// Função para fazer predição de um problema
function predictProblem(problem) {
  const hypotheses = require('./hipoterelacao').generateProblemHypotheses(problem);
  return predict(hypotheses);
}

// Função para fazer predição de uma ideia
function predictIdea(idea) {
  const hypotheses = require('./hipoterelacao').generateIdeaHypotheses(idea);
  return predict(hypotheses);
}

module.exports = {
  predict,
  predictProblem,
  predictIdea,
};