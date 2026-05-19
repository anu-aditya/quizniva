---
title: "Python Basic Errors Explained With Examples"
slug: "basic-errors"
topicId: "python-basic-errors"
subject: "Python"
difficulty: "Beginner"
description: "Learn common Python beginner errors, traceback reading, SyntaxError, NameError, TypeError, and MCQ practice."
---

## Why Errors Are Useful

Errors are not just failures. They are messages that help you find what Python could not understand or could not run. When you learn to read errors, debugging becomes much less stressful.

Python usually shows a traceback. A traceback points to the file, line number, and error type.

```text
NameError: name 'score' is not defined
```

This means Python tried to use `score`, but no value had been assigned to that name.

## SyntaxError

A `SyntaxError` happens when Python cannot understand the structure of the code.

```python
if score >= 50
    print("Pass")
```

The colon is missing after the condition. The fixed version is:

```python
if score >= 50:
    print("Pass")
```

Syntax errors must be fixed before the program can run.

## NameError

A `NameError` happens when a name is used before Python knows it.

```python
print(total)
```

If `total` has not been assigned, Python raises a `NameError`.

Check spelling and make sure the variable is assigned before use.

## TypeError

A `TypeError` happens when an operation is used with an unsuitable type.

```python
age = "16"
print(age + 1)
```

Python cannot add a string and an integer. Convert first:

```python
age = int(age)
print(age + 1)
```

## ValueError

A `ValueError` happens when the type is correct, but the value is not valid for the operation.

```python
age = int("sixteen")
```

The string type is allowed as input to `int()`, but `"sixteen"` cannot be converted into a number.

## IndexError And KeyError

An `IndexError` happens when a list or string index is outside the valid range.

```python
items = ["pen", "book"]
print(items[2])
```

The valid indexes are `0` and `1`.

A `KeyError` happens when a dictionary key does not exist.

```python
student = {"name": "Asha"}
print(student["marks"])
```

Use `get()` if the key might be missing.

## Reading A Traceback

When you see a traceback, read from the bottom first to identify the error type. Then look at the line number near the top of the message. Check that line and the line just before it, especially for missing colons, quotes, or parentheses.

## Common Mistakes

A common mistake is changing several lines before reading the exact message. Slow down and identify the error type first.

Another mistake is assuming the highlighted line is always the real cause. With syntax errors, the mistake is sometimes on the previous line.

## Quick Summary

- Error messages help you debug.
- `SyntaxError` means Python could not understand the code structure.
- `NameError` means a name is not defined.
- `TypeError` means an operation used the wrong type.
- `ValueError` means a value is invalid for an operation.
- `IndexError` and `KeyError` happen during invalid lookups.
- Read the error type and line number before changing code.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Basic Errors quiz](/quizzes/python-basic-errors)
