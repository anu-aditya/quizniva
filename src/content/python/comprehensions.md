---
title: "Python Comprehensions Explained With Examples"
slug: "comprehensions"
topicId: "python-comprehensions"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python list, set, and dictionary comprehensions with filtering, transformations, common mistakes, and MCQ practice."
---

## What Is A Comprehension?

A comprehension is a compact way to build a collection from another iterable. It combines a loop, an expression, and sometimes a condition into one readable line.

```python
numbers = [1, 2, 3, 4]
squares = [number * number for number in numbers]

print(squares)
```

Output:

```text
[1, 4, 9, 16]
```

This is equivalent to creating an empty list and appending inside a loop, but shorter.

## List Comprehensions

The basic pattern is:

```python
[expression for item in iterable]
```

The expression decides what goes into the new list.

```python
names = ["asha", "riya", "kabir"]
capitalized = [name.title() for name in names]
```

## Filtering Values

Add an `if` condition at the end to keep only some values.

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = [number for number in numbers if number % 2 == 0]
```

This produces `[2, 4, 6]`.

## Set And Dictionary Comprehensions

Set comprehensions use braces and keep unique results.

```python
words = ["hi", "hello", "hi"]
lengths = {len(word) for word in words}
```

Dictionary comprehensions create key-value pairs.

```python
scores = {"Asha": 90, "Riya": 84}
passed = {name: score >= 35 for name, score in scores.items()}
```

## Conditional Expressions

An `if` at the end filters items. A conditional expression before the `for` chooses between two output values.

```python
labels = ["even" if number % 2 == 0 else "odd" for number in numbers]
```

This expression produces one label for every number.

## When To Avoid Comprehensions

Comprehensions are great when the transformation is simple. If the logic needs several steps, nested conditions, or side effects, a normal loop is usually clearer.

Readable code matters more than short code.

## Common Mistakes

A common mistake is placing the filter condition in the wrong location.

```python
[number if number > 0 for number in numbers]
```

That is invalid because the conditional expression is incomplete. Use a filter at the end:

```python
[number for number in numbers if number > 0]
```

Another mistake is using comprehensions only for side effects such as printing. Use a normal loop for that.

## Quick Summary

- A comprehension builds a collection from an iterable.
- List comprehensions use square brackets.
- Set and dictionary comprehensions use braces.
- An `if` at the end filters items.
- A conditional expression before `for` chooses output values.
- Prefer normal loops when logic becomes hard to read.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Comprehensions quiz](/quizzes/python-comprehensions)
