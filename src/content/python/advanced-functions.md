---
title: "Python Advanced Functions Explained With Examples"
slug: "advanced-functions"
topicId: "python-advanced-functions"
subject: "Python"
difficulty: "Advanced"
description: "Learn advanced Python functions with args, kwargs, closures, nonlocal, higher-order functions, common mistakes, and MCQ practice."
---

## Beyond Basic Functions

Advanced function skills help you write reusable APIs, decorators, callbacks, and flexible helpers. Once you know parameters and return values, the next step is understanding flexible arguments, nested functions, closures, and functions as values.

```python
def describe_user(name, *roles, active=True, **extra):
    print(name)
    print(roles)
    print(active)
    print(extra)
```

This function can receive normal arguments, extra positional arguments, keyword-only values, and extra keyword arguments.

## `*args` And `**kwargs`

`*args` collects extra positional arguments into a tuple.

```python
def total(*numbers):
    return sum(numbers)

print(total(2, 4, 6))
```

`**kwargs` collects extra keyword arguments into a dictionary.

```python
def build_profile(**details):
    return details
```

Use them when a function genuinely needs flexible inputs. Avoid them when clear named parameters would be easier to understand.

## Keyword-Only Arguments

Arguments after `*` must be passed by keyword.

```python
def connect(host, *, timeout=10):
    print(host, timeout)

connect("example.com", timeout=5)
```

Keyword-only arguments make calls more explicit, especially for options.

## Closures

A closure happens when an inner function remembers values from an outer function after the outer function has finished.

```python
def make_multiplier(factor):
    def multiply(number):
        return number * factor
    return multiply

double = make_multiplier(2)
print(double(5))
```

The inner function remembers `factor`.

## `nonlocal`

Use `nonlocal` when an inner function needs to update a variable from the nearest enclosing function scope.

```python
def counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment
```

Without `nonlocal`, assigning to `count` inside `increment()` would create a new local variable.

## Common Mistakes

A common mistake is using mutable default arguments.

```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

The same list is reused between calls. Use `None` as the default and create a new list inside.

Another mistake is making function signatures too flexible. If every function accepts `*args` and `**kwargs`, callers lose helpful clues about required inputs.

## Quick Summary

- `*args` collects extra positional arguments.
- `**kwargs` collects extra keyword arguments.
- Keyword-only arguments improve clarity for options.
- Functions can be passed around like values.
- Closures let inner functions remember outer variables.
- `nonlocal` updates a variable from an enclosing function scope.
- Avoid mutable default arguments.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Advanced Functions quiz](/quizzes/python-advanced-functions)
