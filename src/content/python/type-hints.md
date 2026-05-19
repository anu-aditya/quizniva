---
title: "Python Type Hints Explained With Examples"
slug: "type-hints"
topicId: "python-type-hints"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python type hints with annotations, collections, Optional, Union, aliases, static checking, common mistakes, and MCQ practice."
---

## What Are Type Hints?

Type hints document the expected types of variables, function parameters, and return values. Python still runs dynamically, but type hints help editors, readers, and static checking tools.

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

The annotation says `name` should be a string and the function should return a string.

## Collection Types

Modern Python can annotate built-in collections directly.

```python
scores: list[int] = [80, 90, 75]
profile: dict[str, int] = {"age": 16}
```

These hints say what types the collection should contain.

## Optional And Union

Use `|` to express more than one possible type in modern Python.

```python
def find_user(user_id: int) -> str | None:
    ...
```

This means the function may return a string or `None`.

## Type Aliases

Aliases can make complex hints easier to read.

```python
UserRow = dict[str, str | int]

def load_user() -> UserRow:
    ...
```

Good aliases clarify domain meaning.

## Static Checking

Tools such as mypy and pyright can inspect type hints without running the program. They can catch mismatched argument types, missing returns, and many design mistakes early.

Type hints do not replace tests. They complement tests by checking a different kind of correctness.

## Common Mistakes

A common mistake is assuming type hints enforce values at runtime. By default, Python does not stop this:

```python
greet(42)
```

Another mistake is making hints so complex that they reduce readability. Use aliases or simpler designs when annotations become hard to understand.

## Quick Summary

- Type hints document expected types.
- Function return types use `->`.
- Collection hints can include item types.
- `str | None` means a string or `None`.
- Type aliases improve readability.
- Static checkers can find type-related mistakes before runtime.
- Type hints usually are not runtime enforcement.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Type Hints quiz](/quizzes/python-type-hints)
