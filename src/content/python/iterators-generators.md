---
title: "Python Iterators And Generators Explained With Examples"
slug: "iterators-generators"
topicId: "python-iterators-generators"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python iterators, iter(), next(), generators, yield, lazy evaluation, common mistakes, and MCQ practice."
---

## What Is Iteration?

Iteration means getting values one at a time. Lists, strings, dictionaries, ranges, files, and many other Python objects can be used in a `for` loop because they are iterable.

```python
for letter in "abc":
    print(letter)
```

Behind the scenes, Python asks the iterable for an iterator.

## Iterables And Iterators

An iterable is an object that can provide an iterator. An iterator is an object that remembers where it is during iteration.

```python
numbers = [10, 20, 30]
iterator = iter(numbers)

print(next(iterator))
print(next(iterator))
```

This prints `10` and then `20`. When there are no more values, `next()` raises `StopIteration`.

## What Is A Generator?

A generator is a special kind of iterator created by a function that uses `yield`.

```python
def count_up_to(limit):
    number = 1
    while number <= limit:
        yield number
        number += 1
```

Calling the function does not run the whole body immediately. It returns a generator object.

```python
for value in count_up_to(3):
    print(value)
```

This prints `1`, `2`, and `3`.

## Why Generators Are Useful

Generators are lazy. They produce values when requested instead of building the whole collection in memory.

This is useful for large data, streams, files, and sequences that may be expensive to build all at once.

```python
def squares(limit):
    for number in range(limit):
        yield number * number
```

## Generator Expressions

A generator expression looks like a list comprehension with parentheses.

```python
squares = (number * number for number in range(5))
```

It produces values lazily. A list comprehension creates the whole list immediately.

## Common Mistakes

A common mistake is expecting to reuse an exhausted iterator. Once an iterator has produced all its values, it does not restart automatically.

Another mistake is using `return` when you mean `yield`. `return` ends the function. `yield` produces a value and pauses the function until the next value is requested.

## Quick Summary

- An iterable can provide an iterator.
- An iterator returns values one at a time.
- `iter()` gets an iterator.
- `next()` requests the next value.
- Exhausted iterators raise `StopIteration`.
- A generator function uses `yield`.
- Generators are lazy and memory-friendly.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Iterators and Generators quiz](/quizzes/python-iterators-generators)
