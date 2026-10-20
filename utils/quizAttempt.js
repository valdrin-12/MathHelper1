// Builds one quiz attempt from a quiz set: questions and answer options are shuffled every time,
// so students can't memorise positions. `correct` and `whyWrong` are remapped to the new option order.

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const shuffleQuestion = (question) => {
  const order = shuffle(question.options.map((_, i) => i));
  const whyWrong = Array.isArray(question.whyWrong) ? question.whyWrong : [];
  return {
    ...question,
    options: order.map((i) => question.options[i]),
    whyWrong: order.map((i) => whyWrong[i] ?? null),
    correct: order.indexOf(question.correct),
  };
};

/**
 * @param quizSet  localized quiz set
 * @param options.questionIds  only include these questions (e.g. "practise mistakes")
 * @param options.isPractice   practice attempts are not counted in scores or the daily challenge
 */
export function createQuizAttempt(quizSet, { questionIds, isPractice = false } = {}) {
  const pool = questionIds
    ? quizSet.questions.filter((q) => questionIds.includes(q.id))
    : quizSet.questions;
  return {
    ...quizSet,
    isPractice,
    questions: shuffle(pool).map(shuffleQuestion),
  };
}
