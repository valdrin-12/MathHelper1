import { useState, useEffect } from 'react';
import { parseDurationSeconds } from '../quizAttempt';

// Countdown for test mode (wall-clock based so it stays correct if the app was in the background).
// Returns the seconds left, or null when there is no timer (practice mode / closed).
export default function useQuizTimer(visible, quizSet, onTimeUp) {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    if (!visible || !quizSet || quizSet.mode !== 'test') {
      setRemaining(null);
      return undefined;
    }
    const total = parseDurationSeconds(quizSet.duration, quizSet.questions.length);
    const endAt = Date.now() + total * 1000;
    setRemaining(total);
    const id = setInterval(() => {
      const left = (endAt - Date.now()) / 1000;
      setRemaining(Math.max(0, left));
      if (left <= 0) {
        clearInterval(id);
        onTimeUp();
      }
    }, 500);
    return () => clearInterval(id);
  }, [visible, quizSet, onTimeUp]);

  return remaining;
}
