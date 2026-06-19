---
title: "Python Exceptions Explained With Examples"
slug: "exceptions"
topicId: "python-exceptions"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python exception handling with try, except, else, finally, raise, common mistakes, and MCQ practice."
---

## What Is Exception Handling?

An exception is a runtime problem that interrupts normal program flow. Exception handling lets you respond to expected failures without crashing the whole program.

```python
try:
    age = int(input("Age: "))
except ValueError:
    print("Please enter a number.")
```

If conversion fails, the `except` block runs.

## Catch Specific Exceptions

Catch the error you expect.

```python
try:
    result = 10 / number
except ZeroDivisionError:
    print("Cannot divide by zero.")
```

Specific exceptions make bugs easier to understand. A broad `except:` can hide problems you did not mean to handle.

## The `else` Block

The `else` block runs only if no exception happened in the `try` block.

```python
try:
    number = int("42")
except ValueError:
    print("Invalid number")
else:
    print("Conversion worked")
```

Use `else` for code that should run after a successful try.

## The `finally` Block

The `finally` block runs whether an exception happened or not.

```python
try:
    file = open("data.txt")
except FileNotFoundError:
    print("Missing file")
finally:
    print("Finished attempt")
```

This is useful for cleanup. For files, a `with` statement is usually cleaner.

## Raising Exceptions

Use `raise` when your code detects a problem and should report it.

```python
def set_age(age):
    if age < 0:
        raise ValueError("age cannot be negative")
    return age
```

Raising an exception is better than silently accepting invalid data.

## Common Mistakes

A common mistake is catching every exception without understanding it.

```python
try:
    run_program()
except:
    pass
```

This hides real bugs. Catch specific exceptions and give helpful responses.

Another mistake is putting too much code inside one `try` block. Keep the block focused so you know which line is likely to fail.

## Quick Summary

- Exceptions are runtime errors.
- `try` contains code that may fail.
- `except` handles a specific failure.
- `else` runs only if no exception happened.
- `finally` runs no matter what.
- `raise` reports a problem intentionally.
- Avoid broad exception handling that hides bugs.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Exceptions quiz](/quizzes/python-exceptions)
