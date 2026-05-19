---
title: "Python Concurrency Explained With Examples"
slug: "concurrency"
topicId: "python-concurrency"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python concurrency with threads, processes, asyncio, locks, queues, CPU-bound and I/O-bound work, common mistakes, and MCQ practice."
---

## What Is Concurrency?

Concurrency means a program can make progress on multiple tasks during the same period of time. It does not always mean tasks are literally running at the same instant.

Python offers several concurrency tools:

- Threads for many I/O-bound tasks.
- Processes for CPU-bound parallel work.
- Asyncio for cooperative non-blocking I/O.

## I/O-Bound And CPU-Bound Work

I/O-bound work spends time waiting for external systems, such as network, disk, or database operations.

CPU-bound work spends time doing calculations.

Choosing the right tool depends on this difference.

## Threads

Threads can help when tasks spend much of their time waiting.

```python
from concurrent.futures import ThreadPoolExecutor

with ThreadPoolExecutor() as executor:
    results = list(executor.map(download, urls))
```

Threads share memory, so shared data needs care.

## Processes

Processes run in separate Python interpreters. They can use multiple CPU cores for CPU-heavy work.

```python
from concurrent.futures import ProcessPoolExecutor
```

Process communication is more expensive than thread communication because data must be transferred between processes.

## Locks And Queues

A lock protects shared state so only one thread changes it at a time.

A queue is often a safer way to pass work or results between workers.

## Common Mistakes

A common mistake is using threads for CPU-heavy work and expecting major speedups. In CPython, the Global Interpreter Lock can limit CPU-bound thread parallelism.

Another mistake is changing shared data from several threads without coordination. Race conditions can create bugs that are hard to reproduce.

## Quick Summary

- Concurrency lets multiple tasks make progress.
- I/O-bound tasks spend time waiting.
- CPU-bound tasks spend time calculating.
- Threads can help with I/O-bound work.
- Processes can help with CPU-bound parallelism.
- Asyncio is cooperative and event-loop based.
- Locks and queues help coordinate shared state.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Concurrency quiz](/quizzes/python-concurrency)
