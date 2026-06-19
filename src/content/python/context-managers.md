---
title: "Python Context Managers Explained With Examples"
slug: "context-managers"
topicId: "python-context-managers"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python context managers with with statements, __enter__, __exit__, contextlib, cleanup, common mistakes, and MCQ practice."
---

## What Is A Context Manager?

A context manager controls setup and cleanup around a block of code. The most familiar example is opening a file.

```python
with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

The file is automatically closed when the block ends. This works even if an exception happens inside the block.

## The Context Manager Protocol

Objects used in a `with` statement implement two special methods: `__enter__()` and `__exit__()`.

```python
class ManagedResource:
    def __enter__(self):
        print("setup")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("cleanup")
```

`__enter__()` runs before the block. `__exit__()` runs after the block.

## Handling Exceptions

`__exit__()` receives exception information if the block raises an error.

```python
def __exit__(self, exc_type, exc_value, traceback):
    return False
```

Returning `False` means the exception should continue normally. Returning `True` suppresses the exception, which should be done carefully.

## Using `contextlib`

The `contextlib.contextmanager` decorator lets you write a context manager as a generator.

```python
from contextlib import contextmanager

@contextmanager
def section(name):
    print(f"enter {name}")
    try:
        yield
    finally:
        print(f"exit {name}")
```

The code before `yield` is setup. The code after `yield` is cleanup.

## When Context Managers Help

Use context managers for files, locks, database sessions, temporary settings, timers, and any resource that must be cleaned up reliably.

They make cleanup visible at the call site and reduce forgotten cleanup bugs.

## Common Mistakes

A common mistake is doing cleanup only after the `with` block manually. If an exception happens, manual cleanup may be skipped.

Another mistake is returning `True` from `__exit__()` without meaning to. That suppresses exceptions and can hide bugs.

## Quick Summary

- A context manager wraps setup and cleanup around a block.
- `with` calls `__enter__()` and `__exit__()`.
- The value returned by `__enter__()` can be bound with `as`.
- `__exit__()` receives exception details.
- Returning `True` from `__exit__()` suppresses exceptions.
- `contextlib.contextmanager` can create context managers from generator functions.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Context Managers quiz](/quizzes/python-context-managers)
