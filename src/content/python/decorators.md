---
title: "Python Decorators Explained With Examples"
slug: "decorators"
topicId: "python-decorators"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python decorators, wrapper functions, @ syntax, functools.wraps, common mistakes, and MCQ practice."
---

## What Is A Decorator?

A decorator is a function that takes another function and returns a new function with extra behavior. Decorators are useful when you want to add the same behavior to many functions without copying code.

```python
def simple_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper
```

The wrapper function controls what happens before and after the original function.

## Using The `@` Syntax

The `@decorator_name` syntax is a shortcut.

```python
@simple_decorator
def greet():
    print("Hello")
```

This is similar to writing:

```python
greet = simple_decorator(greet)
```

Now calling `greet()` actually calls the wrapper returned by the decorator.

## Handling Arguments

Most real decorators need to accept arguments for the wrapped function.

```python
def log_call(func):
    def wrapper(*args, **kwargs):
        print("Calling function")
        return func(*args, **kwargs)
    return wrapper
```

`*args` collects positional arguments, and `**kwargs` collects keyword arguments.

## Preserving Function Metadata

Use `functools.wraps` so the wrapper keeps the original function's name and documentation.

```python
from functools import wraps

def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Calling function")
        return func(*args, **kwargs)
    return wrapper
```

This helps debugging and documentation tools.

## When Decorators Help

Decorators are common for logging, timing, access checks, caching, validation, and framework behavior. They are powerful, but they can also make code harder to trace if overused.

Use a decorator when the added behavior is reusable and separate from the main purpose of the function.

## Common Mistakes

A common mistake is forgetting to return the wrapper from the decorator. Another is forgetting to return the original function's result from inside the wrapper.

```python
def wrapper(*args, **kwargs):
    func(*args, **kwargs)
```

If the wrapped function returns a value, this wrapper loses it. Use:

```python
return func(*args, **kwargs)
```

## Quick Summary

- A decorator wraps a function with extra behavior.
- `@decorator` is shorthand for reassigning the function.
- A wrapper usually calls the original function.
- Use `*args` and `**kwargs` to support flexible arguments.
- Use `functools.wraps` to preserve metadata.
- Return the wrapped function's result when needed.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Decorators quiz](/quizzes/python-decorators)
