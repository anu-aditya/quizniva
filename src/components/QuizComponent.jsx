import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "quizNivaProgress";
const DRAFT_STORAGE_KEY = "quizNivaQuizDrafts";

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function getDefaultProgress() {
  return {
    completedTopics: [],
    bestScores: {},
    attempts: {},
    lastVisitedTopic: null,
    visitedTopics: []
  };
}

function normalizeStringArray(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}

function normalizeProgress(value) {
  if (!isRecord(value)) {
    return getDefaultProgress();
  }

  return {
    completedTopics: normalizeStringArray(value.completedTopics),
    bestScores: isRecord(value.bestScores) ? value.bestScores : {},
    attempts: isRecord(value.attempts) ? value.attempts : {},
    lastVisitedTopic: typeof value.lastVisitedTopic === "string" ? value.lastVisitedTopic : null,
    visitedTopics: normalizeStringArray(value.visitedTopics)
  };
}

function normalizeDraft(value) {
  if (!isRecord(value)) {
    return null;
  }

  return {
    selectedAnswers: isRecord(value.selectedAnswers) ? value.selectedAnswers : {},
    skippedQuestions: isRecord(value.skippedQuestions) ? value.skippedQuestions : {},
    currentIndex: Number.isInteger(value.currentIndex) ? value.currentIndex : 0
  };
}

function loadProgress() {
  if (typeof window === "undefined") {
    return getDefaultProgress();
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return normalizeProgress(saved ? JSON.parse(saved) : null);
  } catch {
    return getDefaultProgress();
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
    const drafts = saved ? JSON.parse(saved) : {};
    return isRecord(drafts) ? drafts : {};
  } catch {
    return {};
  }
}

function loadQuizDraft(topicId) {
  return normalizeDraft(loadQuizDrafts()[topicId]);
}

function saveQuizDraft(topicId, draft) {
  if (!topicId) {
    return;
  }

  try {
    const drafts = loadQuizDrafts();
    drafts[topicId] = draft;
    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // Drafts are optional; the quiz still works without browser storage.
  }
}

function clearQuizDraft(topicId) {
  if (!topicId) {
    return;
  }

  try {
    const drafts = loadQuizDrafts();
    delete drafts[topicId];
    window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(drafts));
  } catch {
    // Draft cleanup is optional.
  }
}

function calculateResult(questions, selectedAnswers, skippedQuestions) {
  const quizQuestions = Array.isArray(questions) ? questions : [];
  let correct = 0;
  let skipped = 0;
  let wrong = 0;
  let unanswered = 0;

  const reviewedQuestions = quizQuestions.map((question) => {
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
    total: quizQuestions.length,
    correct,
    wrong,
    skipped,
    unanswered,
    accuracy: quizQuestions.length ? Math.round((correct / quizQuestions.length) * 100) : 0,
    reviewedQuestions
  };
}

export default function QuizComponent({ topic, questions, nextTopic = null }) {
  const quizQuestions = Array.isArray(questions) ? questions : [];
  const topicId = typeof topic?.id === "string" ? topic.id : "";
  const topicTitle = typeof topic?.title === "string" ? topic.title : "Topic";
  const contentUrl = typeof topic?.contentUrl === "string" ? topic.contentUrl : "/subjects";
  const courseRoot = contentUrl.split("/").filter(Boolean)[0] ?? "subjects";
  const courseUrl = `/${courseRoot}`;
  const subjectName = topic?.subject ?? "this course";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [skippedQuestions, setSkippedQuestions] = useState({});
  const [result, setResult] = useState(null);
  const [bestScore, setBestScore] = useState(null);
  const [draftLoaded, setDraftLoaded] = useState(false);

  const currentQuestion = quizQuestions[currentIndex] ?? null;
  const answeredCount = Object.keys(selectedAnswers).length;
  const skippedCount = Object.keys(skippedQuestions).length;
  const completedCount = answeredCount + skippedCount;
  const remainingCount = Math.max(quizQuestions.length - completedCount, 0);
  const currentAnswered = selectedAnswers[currentQuestion?.id] !== undefined;
  const currentSkipped = skippedQuestions[currentQuestion?.id] === true;
  const currentCompleted = currentAnswered || currentSkipped;

  const progressWidth = useMemo(() => {
    if (!quizQuestions.length) {
      return "0%";
    }

    return `${Math.round(((currentIndex + 1) / quizQuestions.length) * 100)}%`;
  }, [currentIndex, quizQuestions.length]);

  useEffect(() => {
    setDraftLoaded(false);
    const progress = loadProgress();
    setBestScore(progress.bestScores?.[topicId] ?? null);
    const visitedTopics = new Set(progress.visitedTopics ?? []);
    if (topicId) {
      visitedTopics.add(topicId);
    }
    saveProgress({
      ...progress,
      lastVisitedTopic: topicId || progress.lastVisitedTopic,
      visitedTopics: Array.from(visitedTopics)
    });

    const draft = loadQuizDraft(topicId);
    if (draft) {
      setSelectedAnswers(draft.selectedAnswers ?? {});
      setSkippedQuestions(draft.skippedQuestions ?? {});
      const maxIndex = Math.max(quizQuestions.length - 1, 0);
      setCurrentIndex(
        Number.isInteger(draft.currentIndex)
          ? Math.min(Math.max(draft.currentIndex, 0), maxIndex)
          : 0
      );
    } else {
      setSelectedAnswers({});
      setSkippedQuestions({});
      setCurrentIndex(0);
    }

    setResult(null);
    setDraftLoaded(true);
  }, [topicId, quizQuestions.length]);

  useEffect(() => {
    if (!draftLoaded || result) {
      return;
    }

    saveQuizDraft(topicId, {
      selectedAnswers,
      skippedQuestions,
      currentIndex,
      updatedAt: Date.now()
    });
  }, [currentIndex, draftLoaded, result, selectedAnswers, skippedQuestions, topicId]);

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

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  }

  function submitQuiz() {
    const nextResult = calculateResult(quizQuestions, selectedAnswers, skippedQuestions);
    setResult(nextResult);
    clearQuizDraft(topicId);

    const progress = loadProgress();
    const completedTopics = new Set(progress.completedTopics ?? []);
    const visitedTopics = new Set(progress.visitedTopics ?? []);
    if (topicId) {
      completedTopics.add(topicId);
      visitedTopics.add(topicId);
    }

    const previousBest = progress.bestScores?.[topicId] ?? 0;
    const nextBest = Math.max(previousBest, nextResult.correct);

    const nextProgress = {
      ...progress,
      completedTopics: Array.from(completedTopics),
      bestScores: {
        ...(progress.bestScores ?? {}),
        [topicId]: nextBest
      },
      attempts: {
        ...(progress.attempts ?? {}),
        [topicId]: (progress.attempts?.[topicId] ?? 0) + 1
      },
      lastVisitedTopic: topicId || progress.lastVisitedTopic,
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
    clearQuizDraft(topicId);
  }

  if (!quizQuestions.length) {
    return (
      <section className="quiz-empty">
        <h2>Quiz temporarily unavailable</h2>
        <p>The lesson is available, but this quiz could not be loaded. Open the course index and choose another practice set.</p>
        <a className="button button--primary" href={courseUrl}>Open course</a>
      </section>
    );
  }

  if (!currentQuestion) {
    return (
      <section className="quiz-empty">
        <h2>Preparing quiz</h2>
        <p>The quiz is resetting its saved position. Please reload this page if it does not appear.</p>
        <a className="button button--primary" href={courseUrl}>Open course</a>
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
            <a className="button button--ghost" href={nextTopic?.contentUrl ?? courseUrl}>
              {nextTopic ? `Next: ${nextTopic.title}` : `Back to ${subjectName} topics`}
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
          <p className="eyebrow">Question {currentIndex + 1} of {quizQuestions.length}</p>
          <h2 id="quiz-title">{topicTitle} Quiz</h2>
        </div>
        {bestScore !== null && (
          <p className="best-score">Best: {bestScore}/{quizQuestions.length}</p>
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

        {currentIndex < quizQuestions.length - 1 ? (
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
              onClick={() => setCurrentIndex((index) => Math.min(quizQuestions.length - 1, index + 1))}
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
