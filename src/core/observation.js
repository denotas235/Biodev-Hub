/**
 * 📌 BioDev Hub - Core Module: Observation
 * 
 * @description
 * Módulo de Observação/Fé - Captura e armazena observações sobre problemas e ideias.
 * Este módulo é o primeiro passo do método Biorelativológico.
 * 
 * @author Antonio Recebeumoney (denotas235)
 * @version 0.0.0
 * @license MIT
 */

---

/**
 * Classe Observation
 * 
 * Responsável por:
 * - Capturar observações de problemas e ideias.
 * - Armazenar dados de forma estruturada.
 * - Preparar dados para a próxima etapa (Hipoterelação).
 */
class Observation {
  constructor() {
    this.observations = [];
    this.currentId = 1;
  }

  /**
   * Adiciona uma nova observação.
   * @param {string} type - Tipo da observação (ex: 'problema', 'ideia', 'hipotese').
   * @param {string} description - Descrição detalhada da observação.
   * @param {Object} metadata - Metadados adicionais (ex: { source: 'GitHub', tags: ['bug', 'urgente'] }).
   * @returns {Object} - Observação criada com ID único.
   */
  addObservation(type, description, metadata = {}) {
    const observation = {
      id: this.currentId++,
      timestamp: new Date().toISOString(),
      type,
      description,
      metadata,
      status: 'raw', // raw, processed, analyzed
    };
    this.observations.push(observation);
    return observation;
  }

  /**
   * Busca uma observação pelo ID.
   * @param {number} id - ID da observação.
   * @returns {Object|null} - Observação encontrada ou null.
   */
  getObservationById(id) {
    return this.observations.find(obs => obs.id === id) || null;
  }

  /**
   * Lista todas as observações.
   * @param {string} [type] - Filtro por tipo (opcional).
   * @returns {Array} - Lista de observações.
   */
  listObservations(type) {
    if (type) {
      return this.observations.filter(obs => obs.type === type);
    }
    return this.observations;
  }

  /**
   * Atualiza o status de uma observação.
   * @param {number} id - ID da observação.
   * @param {string} status - Novo status ('processed', 'analyzed').
   * @returns {boolean} - True se atualizado com sucesso.
   */
  updateObservationStatus(id, status) {
    const observation = this.getObservationById(id);
    if (observation) {
      observation.status = status;
      return true;
    }
    return false;
  }

  /**
   * Exporta observações para JSON.
   * @returns {string} - JSON com todas as observações.
   */
  exportToJSON() {
    return JSON.stringify(this.observations, null, 2);
  }

  /**
   * Importa observações de um JSON.
   * @param {string} json - JSON com observações.
   */
  importFromJSON(json) {
    const data = JSON.parse(json);
    this.observations = data;
    this.currentId = this.observations.length > 0 
      ? Math.max(...this.observations.map(obs => obs.id)) + 1 
      : 1;
  }

  /**
   * Limpa todas as observações.
   */
  clearObservations() {
    this.observations = [];
    this.currentId = 1;
  }
}

---

/**
 * Função para criar uma instância global de Observation.
 * @returns {Observation} - Instância única.
 */
function createObservationInstance() {
  return new Observation();
}

---

/**
 * Função para observar um problema ou ideia de todos os ângulos.
 * @param {Object} input - Dados de entrada (description, logs, feedback, code, environment).
 * @returns {Object} - Observações técnicas, de usuário, negócio e temporal.
 */
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

---

/**
 * Exemplo de uso:
 * 
 * const observation = createObservationInstance();
 * 
 * // Adicionar uma observação
 * observation.addObservation('problema', 'O shader não compila no Mali-G52', {
 *   source: 'GitHub Issue #123',
 *   tags: ['shader', 'bug', 'mali']
 * });
 * 
 * // Observar um problema
 * const problem = { description: 'Crash no app', logs: ['Error: NullPointer'], feedback: ['Usuário relata crash'] };
 * const result = observeProblem(problem);
 * 
 * // Listar todas as observações
 * console.log(observation.listObservations());
 * 
 * // Exportar para JSON
 * const json = observation.exportToJSON();
 */

module.exports = {
  Observation,
  createObservationInstance,
  observe,
  observeProblem,
  observeIdea,
};
