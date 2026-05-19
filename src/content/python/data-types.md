---
title: "Python Data Types Explained With Examples"
slug: "data-types"
topicId: "python-data-types"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python data types with strings, integers, floats, booleans, type checking, examples, and MCQ practice."
---

## What Is A Data Type?

A data type tells Python what kind of value it is working with. The value `25` is a number, `"25"` is text, and `True` is a boolean value. They may look similar to a beginner, but Python treats them differently.

Data types matter because they decide which operations are allowed. Python can add two numbers, join two strings, and test a boolean in an `if` statement, but it will not automatically guess every operation you meant.

```python
age = 16
name = "Asha"
height = 1.62
is_student = True
```

Here `age` is an integer, `name` is a string, `height` is a float, and `is_student` is a boolean.

## Common Beginner Types

An `int` stores a whole number.

```python
marks = 88
```

A `float` stores a number with a decimal point.

```python
price = 49.99
```

A `str` stores text. Strings must be written inside quotes.

```python
city = "Delhi"
```

A `bool` stores either `True` or `False`. Notice the capital first letters.

```python
is_open = False
```

Python also has `None`, which represents the absence of a value.

```python
middle_name = None
```

## Checking A Type

Use `type()` when you want to inspect a value.

```python
score = 90
print(type(score))
```

Output:

```text
<class 'int'>
```

This is useful while learning and debugging. If your program behaves strangely, check whether a value is really the type you expect.

## Same Looking Values Can Behave Differently

The values `10` and `"10"` are not the same type.

```python
print(10 + 5)
print("10" + "5")
```

Output:

```text
15
105
```

The first line adds numbers. The second line joins strings. Python is doing exactly what the data types tell it to do.

## Converting Between Types

Sometimes you need to convert a value. This is common when using `input()`, because `input()` always returns a string.

```python
age_text = "16"
age = int(age_text)

print(age + 1)
```

This prints:

```text
17
```

Use `int()` for whole numbers, `float()` for decimal numbers, and `str()` when you need text.

## Common Mistakes

A common mistake is trying to add a string and a number directly.

```python
age = "16"
print(age + 1)
```

This raises a `TypeError` because Python cannot join text with a number. Convert first:

```python
age = int(age)
print(age + 1)
```

Another mistake is writing booleans in lowercase:

```python
is_ready = true
```

Python uses `True` and `False`, not `true` and `false`.

## Quick Summary

- A data type describes the kind of value Python is using.
- Common beginner types include `int`, `float`, `str`, `bool`, and `NoneType`.
- Use `type()` to inspect a value.
- `10` and `"10"` behave differently because one is a number and one is text.
- Convert types with `int()`, `float()`, and `str()` when needed.
- `input()` always returns a string.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Data Types quiz](/quizzes/python-data-types)
