import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "quizNivaProgress";
const DRAFT_STORAGE_KEY = "quizNivaQuizDrafts";

function loadProgress() {
  if (typeof window === "undefined") {
    return { completedTopics: [], bestScores: {}, attempts: {}, lastVisitedTopic: null };
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : { completedTopics: [], bestScores: {}, attempts: {}, lastVisitedTopic: null };
  } catch {
    return { completedTopics: [], bestScores: {}, attempts: {}, lastVisitedTopic: null };
  }
}

function saveProgress(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Progress is helpful, but the quiz still works if browser storage is unavailable.
  }
}

function loadQuizDrafts() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const saved = window.localStorage.getItem(DRAFT_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function loadQuizDraft(topicId) {
  return loadQuizDrafts()[topicId] ?? null;
}

function saveQuizDraft(topicId, draft) {
  try {
    const drafts = loadQuizDrafts();
    drafts[topicId] = draft;
    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // Drafts are optional; the quiz still works without browser storage.
  }
}

function clearQuizDraft(topicId) {
  try {
    const drafts = loadQuizDrafts();
    delete drafts[topicId];
    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // Draft cleanup is optional.
  }
}

function calculateResult(questions, selectedAnswers, skippedQuestions) {
  let correct = 0;
  let skipped = 0;
  let wrong = 0;
  let unanswered = 0;

  const reviewedQuestions = questions.map((question) => {
    const selected = selectedAnswers[question.id];
    const isSkipped = skippedQuestions[question.id] === true;
    const isAnswered = selected !== undefined;
    const isCorrect = !isSkipped && isAnswered && selected === question.correctAnswerIndex;

    if (isCorrect) {
      correct += 1;
    }

    if (isSkipped) {
      skipped += 1;
    } else if (!isAnswered) {
      unanswered += 1;
    } else if (!isCorrect) {
      wrong += 1;
    }

    return {
      ...question,
      selectedAnswerIndex: selected,
      isSkipped,
      isAnswered,
      isCorrect
    };
  });

  return {
    total: questions.length,
    correct,
    wrong,
    skipped,
    unanswered,
    accuracy: Math.round((correct / questions.length) * 100),
    reviewedQuestions
  };
}

export default function QuizComponent({ topic, questions, nextTopic = null }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [skippedQuestions, setSkippedQuestions] = useState({});
  const [result, setResult] = useState(null);
  const [bestScore, setBestScore] = useState(null);
  const [draftLoaded, setDraftLoaded] = useState(false);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(selectedAnswers).length;
  const skippedCount = Object.keys(skippedQuestions).length;
  const completedCount = answeredCount + skippedCount;
  const remainingCount = questions.length - completedCount;
  const currentAnswered = selectedAnswers[currentQuestion?.id] !== undefined;
  const currentSkipped = skippedQuestions[currentQuestion?.id] === true;
  const currentCompleted = currentAnswered || currentSkipped;

  const progressWidth = useMemo(() => {
    return `${Math.round(((currentIndex + 1) / questions.length) * 100)}%`;
  }, [currentIndex, questions.length]);

  useEffect(() => {
    setDraftLoaded(false);
    const progress = loadProgress();
    setBestScore(progress.bestScores?.[topic.id] ?? null);
    const visitedTopics = new Set(progress.visitedTopics ?? []);
    visitedTopics.add(topic.id);
    saveProgress({
      ...progress,
      lastVisitedTopic: topic.id,
      visitedTopics: Array.from(visitedTopics)
    });

    const draft = loadQuizDraft(topic.id);
    if (draft) {
      setSelectedAnswers(draft.selectedAnswers ?? {});
      setSkippedQuestions(draft.skippedQuestions ?? {});
      setCurrentIndex(
        Number.isInteger(draft.currentIndex)
          ? Math.min(Math.max(draft.currentIndex, 0), questions.length - 1)
          : 0
      );
    } else {
      setSelectedAnswers({});
      setSkippedQuestions({});
      setCurrentIndex(0);
    }

    setResult(null);
    setDraftLoaded(true);
  }, [topic.id, questions.length]);

  useEffect(() => {
    if (!draftLoaded || result) {
      return;
    }

    saveQuizDraft(topic.id, {
      selectedAnswers,
      skippedQuestions,
      currentIndex,
      updatedAt: Date.now()
    });
  }, [currentIndex, draftLoaded, result, selectedAnswers, skippedQuestions, topic.id]);

  function selectAnswer(questionId, optionIndex) {
    setSelectedAnswers((current) => ({
      ...current,
      [questionId]: optionIndex
    }));
    setSkippedQuestions((current) => {
      const next = { ...current };
      delete next[questionId];
      return next;
    });
  }

  function skipQuestion() {
    if (!currentQuestion) {
      return;
    }

    setSelectedAnswers((current) => {
      const next = { ...current };
      delete next[currentQuestion.id];
      return next;
    });
    setSkippedQuestions((current) => ({
      ...current,
      [currentQuestion.id]: true
    }));

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  }

  function submitQuiz() {
    const nextResult = calculateResult(questions, selectedAnswers, skippedQuestions);
    setResult(nextResult);
    clearQuizDraft(topic.id);

    const progress = loadProgress();
    const completedTopics = new Set(progress.completedTopics ?? []);
    const visitedTopics = new Set(progress.visitedTopics ?? []);
    completedTopics.add(topic.id);
    visitedTopics.add(topic.id);

    const previousBest = progress.bestScores?.[topic.id] ?? 0;
    const nextBest = Math.max(previousBest, nextResult.correct);

    const nextProgress = {
      ...progress,
      completedTopics: Array.from(completedTopics),
      bestScores: {
        ...(progress.bestScores ?? {}),
        [topic.id]: nextBest
      },
      attempts: {
        ...(progress.attempts ?? {}),
        [topic.id]: (progress.attempts?.[topic.id] ?? 0) + 1
      },
      lastVisitedTopic: topic.id,
      visitedTopics: Array.from(visitedTopics)
    };

    saveProgress(nextProgress);
    setBestScore(nextBest);
  }

  function retryQuiz() {
    setSelectedAnswers({});
    setSkippedQuestions({});
    setCurrentIndex(0);
    setResult(null);
    clearQuizDraft(topic.id);
  }

  if (!questions.length) {
    return (
      <section className="quiz-empty">
        <h2>Quiz coming soon</h2>
        <p>This topic is in the content queue. Start with the available Python Variables quiz.</p>
        <a className="button button--primary" href="/quizzes/python-variables">Open Python Variables Quiz</a>
      </section>
    );
  }

  if (result) {
    return (
      <section className="quiz-result" aria-labelledby="result-title">
        <div className="result-summary">
          <p className="eyebrow">Quiz complete</p>
          <h2 id="result-title">Score: {result.correct}/{result.total}</h2>
          <p className="result-summary__accuracy">Accuracy: {result.accuracy}%</p>
          <div className="result-stats" aria-label="Quiz result breakdown">
            <span>Correct: <strong>{result.correct}</strong></span>
            <span>Wrong: <strong>{result.wrong}</strong></span>
            <span>Skipped: <strong>{result.skipped}</strong></span>
            <span>Unanswered: <strong>{result.unanswered}</strong></span>
          </div>
          {bestScore !== null && (
            <p className="muted">Best score saved on this device: {bestScore}/{result.total}</p>
          )}
          <div className="button-row">
            <button className="button button--primary" type="button" onClick={retryQuiz}>Retry quiz</button>
            <a className="button button--ghost" href={nextTopic?.contentUrl ?? "/python"}>
              {nextTopic ? `Next: ${nextTopic.title}` : "Back to Python topics"}
            </a>
          </div>
        </div>

        <div className="review-list" aria-label="Answer review">
          {result.reviewedQuestions.map((question, index) => (
            <article
              className={`review-item ${question.isCorrect ? "is-correct" : question.isSkipped ? "is-skipped" : question.isAnswered ? "is-wrong" : "is-unanswered"}`}
              key={question.id}
            >
              <div className="review-item__header">
                <span>Question {index + 1}</span>
                <strong>
                  {question.isCorrect
                    ? "Correct"
                    : question.isSkipped
                    ? "Skipped"
                    : question.isAnswered
                    ? "Review needed"
                    : "Not answered"}
                </strong>
              </div>
              <h3>{question.question}</h3>
              <p>
                Your answer:{" "}
                <strong>
                  {question.isSkipped
                    ? "Skipped"
                    : question.selectedAnswerIndex === undefined
                    ? "Not answered"
                    : question.options[question.selectedAnswerIndex]}
                </strong>
              </p>
              {!question.isCorrect && (
                <p>
                  Correct answer: <strong>{question.options[question.correctAnswerIndex]}</strong>
                </p>
              )}
              <p className="review-item__explanation">{question.fullExplanation}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="quiz-app" aria-labelledby="quiz-title">
      <div className="quiz-app__topline">
        <div>
          <p className="eyebrow">Question {currentIndex + 1} of {questions.length}</p>
          <h2 id="quiz-title">{topic.title} Quiz</h2>
        </div>
        {bestScore !== null && (
          <p className="best-score">Best: {bestScore}/{questions.length}</p>
        )}
      </div>

      <div className="quiz-progress" aria-hidden="true">
        <span style={{ width: progressWidth }}></span>
      </div>

      <div className="question-panel">
        <h3>{currentQuestion.question}</h3>
        <fieldset className="answer-options">
          <legend>Select one answer</legend>
          {currentQuestion.options.map((option, index) => {
            const inputId = `${currentQuestion.id}-${index}`;

            return (
              <label className="answer-option" htmlFor={inputId} key={inputId}>
                <input
                  id={inputId}
                  type="radio"
                  name={currentQuestion.id}
                  checked={selectedAnswers[currentQuestion.id] === index}
                  onChange={() => selectAnswer(currentQuestion.id, index)}
                />
                <span>{option}</span>
              </label>
            );
          })}
        </fieldset>
      </div>

      <div className="quiz-controls">
        <button
          className="button button--ghost"
          type="button"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
        >
          Previous
        </button>

        {currentIndex < questions.length - 1 ? (
          <div className="quiz-controls__forward">
            <button
              className="button button--ghost"
              type="button"
              disabled={currentSkipped}
              onClick={skipQuestion}
            >
              {currentSkipped ? "Skipped" : "Skip"}
            </button>
            <button
              className="button button--primary"
              type="button"
              disabled={!currentCompleted}
              onClick={() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))}
            >
              Next
            </button>
            <button
              className="button button--ghost"
              type="button"
              onClick={submitQuiz}
            >
              Submit quiz
            </button>
          </div>
        ) : (
          <div className="quiz-controls__forward">
            <button
              className="button button--ghost"
              type="button"
              disabled={currentSkipped}
              onClick={skipQuestion}
            >
              {currentSkipped ? "Skipped" : "Skip"}
            </button>
            <button
              className="button button--primary"
              type="button"
              onClick={submitQuiz}
            >
              Submit quiz
            </button>
          </div>
        )}
      </div>

      <p className="quiz-app__status">
        Answered {answeredCount}, skipped {skippedCount}, remaining {remainingCount}. You can submit anytime.
      </p>
    </section>
  );
}
