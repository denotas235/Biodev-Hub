/**
 * 🧠 BioDev Hub - Módulo de Ponto Nulo
 * 
 * Parte do Núcleo Biorelativológico.
 * Responsável por garantir o equilíbrio (-1 + 1 = 0) no sistema.
 */

// Função principal: Calcular o Ponto Nulo
function calculatePontoNulo(problem, solution) {
  // 1. Avaliar o impacto do problema (negativo)
  const problemImpact = evaluateImpact(problem);
  
  // 2. Avaliar o impacto da solução (positivo)
  const solutionImpact = evaluateImpact(solution);
  
  // 3. Calcular o equilíbrio
  const equilibrium = problemImpact + solutionImpact;
  
  // 4. Determinar o status
  const status = getEquilibriumStatus(equilibrium);
  
  return {
    problemImpact,
    solutionImpact,
    equilibrium,
    status,
    recommendation: getRecommendation(equilibrium, problem, solution),
  };
}

// Função para avaliar o impacto (retorna um valor entre -1 e 1)
function evaluateImpact(item) {
  if (!item) return 0;
  
  // Avaliar com base em critérios
  let score = 0;
  
  // Critério 1: Gravidade
  if (item.severity === 'critical' || item.impact === 'Alto') {
    score -= 0.5; // Impacto negativo
  } else if (item.severity === 'low' || item.impact === 'Baixo') {
    score += 0.2; // Impacto positivo
  }
  
  // Critério 2: Escopo
  if (item.scope === 'global' || item.affects === 'Todos os usuários') {
    score -= 0.3;
  } else if (item.scope === 'local' || item.affects === 'Usuário específico') {
    score += 0.1;
  }
  
  // Critério 3: Recorrência
  if (item.recurring) {
    score -= 0.2;
  }
  
  // Critério 4: Solução
  if (item.type === 'solution' || item.fixes) {
    score += 0.5; // Soluções têm impacto positivo
  }
  
  // Garantir que o score esteja entre -1 e 1
  return Math.max(-1, Math.min(1, score));
}

// Função para determinar o status do equilíbrio
function getEquilibriumStatus(equilibrium) {
  if (equilibrium === 0) {
    return 'Equilíbrio perfeito';
  } else if (equilibrium > -0.2 && equilibrium < 0.2) {
    return 'Quase equilibrado';
  } else if (equilibrium >= 0.2) {
    return 'Desequilíbrio positivo (solução supera o problema)';
  } else {
    return 'Desequilíbrio negativo (problema supera a solução)';
  }
}

// Função para gerar recomendações
function getRecommendation(equilibrium, problem, solution) {
  if (equilibrium === 0) {
    return 'Solução está em equilíbrio. Pode ser implementada.';
  } else if (equilibrium > -0.2 && equilibrium < 0.2) {
    return 'Solução está quase equilibrada. Revise os detalhes.';
  } else if (equilibrium >= 0.2) {
    return 'Solução supera o problema. Verifique se não está sobrecarregando o sistema.';
  } else {
    return 'Problema supera a solução. Reavalie a abordagem.';
  }
}

// Função para verificar equilíbrio de um problema e solução
function checkEquilibrium(problem, solution) {
  return calculatePontoNulo(problem, solution);
}

module.exports = {
  calculatePontoNulo,
  evaluateImpact,
  getEquilibriumStatus,
  getRecommendation,
  checkEquilibrium,
};