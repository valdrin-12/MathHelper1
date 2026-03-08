const https = require('https');

const WOLFRAM_APP_ID = process.env.WOLFRAM_APP_ID;
const WOLFRAM_API_BASE = 'https://api.wolframalpha.com/v2/query';

/**
 * Call Wolfram Alpha Full Results API
 * @param {string} query - Math problem
 * @returns {Promise<object>} Raw Wolfram response
 */
function callWolframAPI(query) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({
      input: query,
      appid: WOLFRAM_APP_ID,
      output: 'json',
      format: 'plaintext',
      podstate: 'Step-by-step solution',
    });

    const url = `${WOLFRAM_API_BASE}?${params.toString()}`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(new Error('Failed to parse Wolfram response'));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Parse Wolfram API response into answer/steps/explanation format
 */
function parseWolframResponse(queryResult) {
  const pods = queryResult.pods || [];

  let answer = '';
  let steps = [];
  let inputInterpretation = '';

  for (const pod of pods) {
    const title = (pod.title || '').toLowerCase();
    const text = (pod.subpods || []).map(s => s.plaintext || '').filter(Boolean).join('\n').trim();

    if (!text) continue;

    if (title === 'input interpretation' || title === 'input') {
      inputInterpretation = text;
    } else if (
      title === 'result' ||
      title === 'results' ||
      title === 'solution' ||
      title === 'solutions' ||
      title === 'value' ||
      title === 'exact result' ||
      title === 'decimal approximation'
    ) {
      if (!answer) answer = text;
    } else if (title.includes('step') || title.includes('derivation') || title.includes('working')) {
      // Step-by-step pod
      steps = text
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
    }
  }

  // Fallback: if no answer found, look at all pods except input
  if (!answer) {
    for (const pod of pods) {
      const title = (pod.title || '').toLowerCase();
      if (title === 'input interpretation' || title === 'input') continue;
      const text = (pod.subpods || []).map(s => s.plaintext || '').filter(Boolean).join('\n').trim();
      if (text) {
        answer = text;
        break;
      }
    }
  }

  // If no steps from step-by-step pod, create minimal steps
  if (steps.length === 0 && answer) {
    if (inputInterpretation) {
      steps = [`Problem: ${inputInterpretation}`, `Result: ${answer}`];
    } else {
      steps = [`Result: ${answer}`];
    }
  }

  const explanation = inputInterpretation
    ? `Wolfram Alpha solved: ${inputInterpretation}`
    : 'Solved using Wolfram Alpha computational engine.';

  return { answer, steps, explanation };
}

/**
 * Solve a math problem using Wolfram Alpha
 * @param {string} query - The math problem text
 * @returns {Promise<{success: boolean, answer: string, steps: string[], explanation: string, source: string}>}
 */
async function solveWithWolfram(query) {
  if (!WOLFRAM_APP_ID) {
    return { success: false, reason: 'Wolfram App ID not configured' };
  }

  try {
    console.log('🐺 [Wolfram] Querying:', query);
    const data = await callWolframAPI(query);
    const queryResult = data.queryresult;

    if (!queryResult) {
      return { success: false, reason: 'Invalid Wolfram response' };
    }

    if (queryResult.success === false || queryResult.success === 'false') {
      console.log('🐺 [Wolfram] Could not solve:', query);
      return { success: false, reason: 'Wolfram could not solve the problem' };
    }

    const { answer, steps, explanation } = parseWolframResponse(queryResult);

    if (!answer) {
      return { success: false, reason: 'No answer found in Wolfram response' };
    }

    console.log('✅ [Wolfram] Answer:', answer);
    return {
      success: true,
      answer,
      steps,
      explanation,
      source: 'wolfram',
    };
  } catch (error) {
    console.error('❌ [Wolfram] Error:', error.message);
    return { success: false, reason: error.message };
  }
}

module.exports = { solveWithWolfram };
