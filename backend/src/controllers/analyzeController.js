const { getModel } = require('../config/gemini');

const LANGUAGE_NAMES = {
  sq: 'Albanian (Shqip)',
  en: 'English',
  de: 'German (Deutsch)',
};

function getMathAnalysisPrompt(language) {
  const lang = LANGUAGE_NAMES[language] || 'Albanian (Shqip)';
  return `You are an expert math teacher who helps students solve math problems.

TASK: Analyze the given image containing a math problem and provide a complete solution in ${lang}.

RESPONSE FORMAT (VERY IMPORTANT - use these EXACT English markers):
1. ANSWER: Give the final answer clearly and concisely
2. STEPS: Show each solution step in detail (use numbers: Step 1, Step 2, etc.)
3. EXPLANATION: Give a complete explanation and reasoning why this is the correct solution

RULES:
- Respond in ${lang} (the actual content must be in ${lang}, but keep the markers ANSWER:, STEPS:, EXPLANATION: in English)
- Use correct mathematical symbols (×, ÷, =, ≠, ≤, ≥, π, √, ∫, Σ, etc.)
- Explain concepts in a simple and understandable way
- If the image does not contain a clear math problem, say so in ${lang}
- If the image is too unclear, say so in ${lang}

EXAMPLE FORMAT:

ANSWER: x = 5

STEPS:
Step 1: Start with equation 2x + 3 = 13
Step 2: Subtract 3 from both sides: 2x = 10
Step 3: Divide both sides by 2: x = 5

EXPLANATION: To solve a linear equation, we isolate variable x by performing the same operations on both sides of the equation.

Now, analyze the image and provide the solution:`;
}

function getTextAnalysisPrompt(problemText, language) {
  const lang = LANGUAGE_NAMES[language] || 'Albanian (Shqip)';
  return `You are an expert math teacher who helps students solve math problems.

TASK: Analyze and solve the following math problem. Respond in ${lang}.

PROBLEM:
${problemText}

RESPONSE FORMAT (VERY IMPORTANT - use these EXACT English markers):
1. ANSWER: Give the final answer clearly and concisely
2. STEPS: Show each solution step in detail (use numbers: Step 1, Step 2, etc.)
3. EXPLANATION: Give a complete explanation and reasoning why this is the correct solution

RULES:
- Respond in ${lang} (the actual content must be in ${lang}, but keep the markers ANSWER:, STEPS:, EXPLANATION: in English)
- Use correct mathematical symbols (×, ÷, =, ≠, ≤, ≥, π, √, ∫, Σ, etc.)
- Explain concepts in a simple and understandable way
- If the text does not contain a clear math problem, say so in ${lang}

EXAMPLE FORMAT:

ANSWER: x = 5

STEPS:
Step 1: Start with equation 2x + 3 = 13
Step 2: Subtract 3 from both sides: 2x = 10
Step 3: Divide both sides by 2: x = 5

EXPLANATION: To solve a linear equation, we isolate variable x by performing the same operations on both sides of the equation.

Now, solve the problem:`;
}

function parseGeminiResponse(text) {
  try {
    let answer = '';
    let steps = [];
    let explanation = '';

    // Extract answer
    const answerMatch = text.match(/ANSWER:\s*(.+?)(?=\n\nSTEPS:|$)/s);
    if (answerMatch) answer = answerMatch[1].trim();

    // Extract steps
    const stepsMatch = text.match(/STEPS:\s*(.+?)(?=\n\nEXPLANATION:|$)/s);
    if (stepsMatch) {
      const stepsText = stepsMatch[1].trim();
      steps = stepsText
        .split(/Step \d+:/)
        .filter(step => step.trim())
        .map(step => step.trim());
    }

    // Extract explanation
    const explanationMatch = text.match(/EXPLANATION:\s*(.+)/s);
    if (explanationMatch) explanation = explanationMatch[1].trim();

    // Fallback: Albanian markers
    if (!answer && !steps.length && !explanation) {
      const answerMatchSq = text.match(/PËRGJIGJA:\s*(.+?)(?=\n\nHAPAT:|$)/s);
      if (answerMatchSq) answer = answerMatchSq[1].trim();

      const stepsMatchSq = text.match(/HAPAT:\s*(.+?)(?=\n\nSHPJEGIMI:|$)/s);
      if (stepsMatchSq) {
        steps = stepsMatchSq[1].trim()
          .split(/Hapi \d+:/)
          .filter(step => step.trim())
          .map(step => step.trim());
      }

      const explanationMatchSq = text.match(/SHPJEGIMI:\s*(.+)/s);
      if (explanationMatchSq) explanation = explanationMatchSq[1].trim();
    }

    // Final fallback
    if (!answer && !steps.length && !explanation) {
      return {
        answer: 'See analysis below',
        steps: [text],
        explanation: '',
      };
    }

    return { answer, steps, explanation };
  } catch (error) {
    console.error('Parse error:', error);
    return { answer: 'Error parsing response', steps: [text], explanation: '' };
  }
}

async function analyzeImage(req, res) {
  try {
    const { imageBase64, mimeType, language } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ success: false, error: 'imageBase64 is required' });
    }

    const model = getModel();
    const imagePart = {
      inlineData: {
        data: imageBase64,
        mimeType: mimeType || 'image/jpeg',
      },
    };

    const result = await model.generateContent([
      getMathAnalysisPrompt(language || 'sq'),
      imagePart,
    ]);

    const response = await result.response;
    const text = response.text();
    const parsed = parseGeminiResponse(text);

    res.json({ success: true, ...parsed });
  } catch (error) {
    console.error('Image analysis error:', error);

    if (error.message?.includes('API key')) {
      return res.status(500).json({ success: false, error: 'API key invalid' });
    }
    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      return res.status(429).json({ success: false, error: 'API quota exceeded' });
    }

    res.status(500).json({ success: false, error: 'Analysis failed' });
  }
}

async function analyzeText(req, res) {
  try {
    const { problemText, language } = req.body;

    if (!problemText) {
      return res.status(400).json({ success: false, error: 'problemText is required' });
    }

    const model = getModel();
    const result = await model.generateContent(
      getTextAnalysisPrompt(problemText, language || 'sq')
    );

    const response = await result.response;
    const text = response.text();
    const parsed = parseGeminiResponse(text);

    res.json({ success: true, ...parsed });
  } catch (error) {
    console.error('Text analysis error:', error);

    if (error.message?.includes('API key')) {
      return res.status(500).json({ success: false, error: 'API key invalid' });
    }
    if (error.message?.includes('quota') || error.message?.includes('limit')) {
      return res.status(429).json({ success: false, error: 'API quota exceeded' });
    }

    res.status(500).json({ success: false, error: 'Analysis failed' });
  }
}

module.exports = { analyzeImage, analyzeText };
