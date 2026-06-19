---
title: "Python Functions Explained With Examples"
slug: "functions"
topicId: "python-functions"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python functions, parameters, arguments, return values, scope, common mistakes, and MCQ practice."
---

## What Is A Function?

A function is a reusable block of code. You give it a name, put related steps inside it, and call it whenever you need that work done.

```python
def greet():
    print("Hello")

greet()
```

The `def` keyword starts a function definition. The indented block is the function body. The function runs only when it is called.

## Parameters And Arguments

Parameters let a function receive values.

```python
def greet(name):
    print(f"Hello, {name}")

greet("Asha")
greet("Kabir")
```

In the definition, `name` is a parameter. In the calls, `"Asha"` and `"Kabir"` are arguments.

## Returning Values

Use `return` when a function should send a value back to the caller.

```python
def add(a, b):
    return a + b

total = add(3, 4)
print(total)
```

Output:

```text
7
```

Printing and returning are different. `print()` displays a value. `return` gives a value back so the rest of the program can use it.

## Default Parameter Values

A parameter can have a default value.

```python
def greet(name="friend"):
    print(f"Hello, {name}")

greet()
greet("Riya")
```

The first call uses `"friend"`. The second call uses `"Riya"`.

## Function Scope

Variables created inside a function usually belong to that function.

```python
def make_score():
    score = 10
    return score

print(make_score())
```

The variable `score` is local to the function. Code outside the function should use the returned value instead of depending on the local variable.

## Why Functions Help

Functions make code easier to read and reuse. Instead of copying the same lines again and again, write the logic once and call it with different inputs.

```python
def calculate_total(price, quantity):
    return price * quantity

print(calculate_total(50, 3))
print(calculate_total(120, 2))
```

## Common Mistakes

A common mistake is forgetting to call the function.

```python
def say_hi():
    print("Hi")
```

This defines the function but prints nothing. You still need:

```python
say_hi()
```

Another mistake is expecting `print()` to return the value.

```python
def add(a, b):
    print(a + b)

result = add(2, 3)
```

Here `result` becomes `None` because the function did not return anything.

## Quick Summary

- Use `def` to define a function.
- A function body is indented.
- A function runs when it is called.
- Parameters receive values from arguments.
- `return` sends a value back to the caller.
- Variables inside a function are usually local.
- Functions reduce repetition and organize code.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Functions quiz](/quizzes/python-functions)
