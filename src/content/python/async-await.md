---
title: "Python Async And Await Explained With Examples"
slug: "async-await"
topicId: "python-async-await"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python async and await with coroutines, event loops, tasks, non-blocking I/O, common mistakes, and MCQ practice."
---

## What Is Async Python?

Async Python helps programs handle waiting work efficiently, especially network requests, file-like I/O, timers, and many independent operations that spend time waiting.

```python
import asyncio

async def greet():
    await asyncio.sleep(1)
    return "Hello"

asyncio.run(greet())
```

An `async def` function creates a coroutine. The coroutine runs when awaited or scheduled.

## `await`

`await` pauses the current coroutine until another awaitable finishes. While it waits, the event loop can run other tasks.

```python
async def main():
    result = await greet()
    print(result)
```

Use `await` only inside async functions.

## Tasks

Tasks let multiple coroutines make progress concurrently.

```python
async def main():
    first = asyncio.create_task(fetch("a"))
    second = asyncio.create_task(fetch("b"))

    print(await first)
    print(await second)
```

This is useful when both operations spend time waiting.

## `gather()`

`asyncio.gather()` awaits several awaitables and returns their results.

```python
results = await asyncio.gather(fetch("a"), fetch("b"))
```

The operations can run concurrently on the event loop.

## Async Is Not Magic Speed

Async helps most with I/O-bound work. It does not automatically make CPU-heavy calculations faster. CPU-heavy work can block the event loop if it runs too long without yielding.

For CPU-bound work, multiprocessing or optimized algorithms may be more appropriate.

## Common Mistakes

A common mistake is calling an async function without awaiting it.

```python
greet()
```

This creates a coroutine object but does not run it to completion.

Another mistake is using blocking functions like `time.sleep()` inside async code. Use `await asyncio.sleep()` instead.

## Quick Summary

- `async def` defines a coroutine function.
- `await` waits without blocking the event loop.
- `asyncio.run()` starts an async program.
- Tasks schedule coroutines concurrently.
- `gather()` awaits multiple awaitables.
- Async is best for I/O-bound waiting work.
- Blocking calls can freeze the event loop.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Async and Await quiz](/quizzes/python-async-await)
