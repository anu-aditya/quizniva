---
title: "Python Input And Output Explained With Examples"
slug: "input-output"
topicId: "python-input-output"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python print statements, input values, conversions, formatted output, common mistakes, and MCQ practice."
---

## What Are Input And Output?

Input is information a program receives. Output is information a program shows. In beginner Python programs, input usually comes from the keyboard with `input()`, and output usually appears on the screen with `print()`.

```python
name = input("Enter your name: ")
print("Hello", name)
```

The prompt asks the user for a name. The program stores the typed text in `name`, then prints a greeting.

## Printing Output

The `print()` function displays values.

```python
print("Welcome to Python")
print(25)
print("Score:", 90)
```

When you pass multiple values to `print()`, Python adds spaces between them by default.

```python
first = "Asha"
last = "Rao"
print(first, last)
```

Output:

```text
Asha Rao
```

You can also use an f-string to build clear output.

```python
score = 18
total = 20
print(f"Score: {score}/{total}")
```

## Using `input()`

The `input()` function waits for the user to type something and press Enter.

```python
city = input("City: ")
print(f"You live in {city}")
```

The text inside `input()` is the prompt. It should be short and clear so the user knows what to enter.

## Input Is Always Text

This is one of the most important beginner rules: `input()` returns a string, even if the user types a number.

```python
age = input("Age: ")
print(type(age))
```

If the user types `16`, the value is still `"16"` as text.

To do math, convert the input first:

```python
age = int(input("Age: "))
next_year = age + 1
print(f"Next year you will be {next_year}")
```

Use `float()` when decimal values are allowed.

```python
price = float(input("Price: "))
```

## Controlling Print Separators

The `sep` argument changes what appears between printed values.

```python
print("2026", "05", "19", sep="-")
```

Output:

```text
2026-05-19
```

The `end` argument changes what appears after the print call.

```python
print("Loading", end="...")
print("done")
```

Output:

```text
Loading...done
```

## Common Mistakes

A common mistake is trying to do math with raw input.

```python
number = input("Number: ")
print(number + 5)
```

This raises a `TypeError` because `number` is text. Use `int()` or `float()` first.

Another mistake is forgetting quotes around prompt text.

```python
name = input(Enter name: )
```

Prompt text must be a string:

```python
name = input("Enter name: ")
```

## Quick Summary

- Use `print()` to show output.
- Use `input()` to read typed input.
- `input()` always returns a string.
- Convert input with `int()` or `float()` before doing math.
- F-strings are a clean way to include values in output.
- `sep` and `end` can customize how `print()` displays text.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Input and Output quiz](/quizzes/python-input-output)
