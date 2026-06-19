---
title: "Python Lambda, Map, And Filter Explained With Examples"
slug: "lambda-map-filter"
topicId: "python-lambda-map-filter"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python lambda functions, map(), filter(), readable alternatives, common mistakes, and MCQ practice."
---

## What Is A Lambda Function?

A lambda function is a small anonymous function written as an expression.

```python
double = lambda number: number * 2
print(double(5))
```

This prints `10`. A normal `def` function is usually better for important or multi-line logic, but lambda is useful for short functions passed into another function.

## The `map()` Function

`map()` applies a function to every item in an iterable.

```python
numbers = [1, 2, 3]
doubled = map(lambda number: number * 2, numbers)

print(list(doubled))
```

Output:

```text
[2, 4, 6]
```

In Python 3, `map()` returns an iterator, so convert it with `list()` if you want to see all results at once.

## The `filter()` Function

`filter()` keeps items where the function returns true.

```python
numbers = [1, 2, 3, 4]
evens = filter(lambda number: number % 2 == 0, numbers)

print(list(evens))
```

Output:

```text
[2, 4]
```

## Readability Matters

Many `map()` and `filter()` examples can also be written as comprehensions.

```python
doubled = [number * 2 for number in numbers]
evens = [number for number in numbers if number % 2 == 0]
```

These versions are often easier for Python learners to read.

## Sorting With Lambda

Lambda is common with `sorted()` when choosing a key.

```python
students = [("Asha", 88), ("Riya", 92)]
ordered = sorted(students, key=lambda student: student[1])
```

The lambda tells Python to sort by the score.

## Common Mistakes

A common mistake is writing too much logic in a lambda. Lambda functions are limited to a single expression and quickly become hard to read.

Another mistake is forgetting that `map()` and `filter()` return iterators. If you print the object directly, you will not see the final list of values.

## Quick Summary

- `lambda` creates a small anonymous function.
- Lambda syntax is `lambda arguments: expression`.
- `map()` transforms each item.
- `filter()` keeps items that pass a test.
- `map()` and `filter()` return iterators in Python 3.
- Comprehensions are often clearer for simple transformations.
- Use normal `def` functions for complex logic.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Lambda, Map, and Filter quiz](/quizzes/python-lambda-map-filter)
