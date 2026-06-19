---
title: "Python Dataclasses Explained With Examples"
slug: "dataclasses"
topicId: "python-dataclasses"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python dataclasses with generated methods, defaults, field(), frozen instances, common mistakes, and MCQ practice."
---

## What Is A Dataclass?

A dataclass is a class designed mainly to hold data. The `dataclasses` module can generate common methods such as `__init__()`, `__repr__()`, and equality checks.

```python
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    score: int
```

Now you can create objects without writing an initializer by hand.

```python
student = Student("Asha", 88)
print(student)
```

## Defaults

You can give fields default values.

```python
@dataclass
class Task:
    title: str
    done: bool = False
```

Fields without defaults must come before fields with defaults.

## Mutable Defaults

Avoid using mutable values directly as defaults.

```python
from dataclasses import field

@dataclass
class Team:
    members: list[str] = field(default_factory=list)
```

`default_factory` creates a new list for each instance.

## Frozen Dataclasses

Use `frozen=True` to make instances mostly immutable.

```python
@dataclass(frozen=True)
class Point:
    x: int
    y: int
```

Trying to assign to `point.x` later raises an error.

## Post Initialization

Use `__post_init__()` for validation or derived fields after the generated `__init__()` runs.

```python
@dataclass
class Score:
    value: int

    def __post_init__(self):
        if self.value < 0:
            raise ValueError("score cannot be negative")
```

## Common Mistakes

A common mistake is using dataclasses for behavior-heavy objects where a normal class would communicate intent better.

Another mistake is forgetting `default_factory` for lists, dictionaries, and sets. Shared mutable defaults create surprising bugs.

## Quick Summary

- `@dataclass` generates common class methods.
- Type annotations define dataclass fields.
- Defaults are allowed after required fields.
- Use `field(default_factory=...)` for mutable defaults.
- `frozen=True` makes instances harder to mutate.
- `__post_init__()` supports validation after initialization.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Dataclasses quiz](/quizzes/python-dataclasses)
