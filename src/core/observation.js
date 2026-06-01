/**
 * 🧠 BioDev Hub - Módulo de Observação
 * 
 * Parte do Núcleo Biorelativológico.
 * Responsável por coletar dados de todos os ângulos (técnico, usuário, negócio, temporal).
 */

// Função principal: Observar um problema ou ideia de todos os ângulos
function observe(input) {
  const { description, logs, feedback, code, environment } = input;
  
  // 1. Observação Técnica
  const technicalObservation = {
    description: `Análise técnica: ${description}`,
    logs: logs || [],
    codeSnippets: code || [],
    environment: environment || {},
  };

  // 2. Observação do Usuário
  const userObservation = {
    feedback: feedback || [],
    userImpact: `Impacto no usuário: ${feedback ? feedback.join(', ') : 'Nenhum feedback disponível'}`,
  };

  // 3. Observação de Negócio
  const businessObservation = {
    impact: `Impacto no negócio: ${description.includes('crítico') ? 'Alto' : 'Médio/Baixo'}`,
    priority: description.includes('urgente') ? 'Alta' : 'Normal',
  };

  // 4. Observação Temporal
  const temporalObservation = {
    timestamp: new Date().toISOString(),
    historicalContext: `Contexto histórico: ${description.includes('recorrente') ? 'Problema recorrente' : 'Novo problema'}`,
  };

  // Retorna todas as observações
  return {
    technical: technicalObservation,
    user: userObservation,
    business: businessObservation,
    temporal: temporalObservation,
    rawInput: input,
  };
}

// Função para observar um problema específico
function observeProblem(problem) {
  return observe({
    description: problem.description,
    logs: problem.logs,
    feedback: problem.feedback,
    code: problem.code,
    environment: problem.environment,
  });
}

// Função para observar uma ideia
function observeIdea(idea) {
  return observe({
    description: idea.description,
    feedback: idea.feedback,
    environment: idea.context,
  });
}

module.exports = {
  observe,
  observeProblem,
  observeIdea,
};