---
title: "Python If-Else Explained With Examples"
slug: "if-else"
topicId: "python-if-else"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python if, elif, else, comparison operators, indentation, common mistakes, and MCQ practice."
---

## What Is An If-Else Statement?

An if-else statement lets a program make a decision. The program checks a condition. If the condition is true, one block of code runs. If it is false, another block can run.

```python
age = 18

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

This prints `Adult` because the condition `age >= 18` is true.

## Conditions Produce Booleans

A condition is an expression that becomes either `True` or `False`.

```python
score = 75
print(score >= 50)
print(score == 100)
```

Output:

```text
True
False
```

Common comparison operators include:

- `==` equal to
- `!=` not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

Use `==` for comparison. Use `=` for assignment.

## Indentation Matters

Python uses indentation to know which lines belong inside the `if`, `elif`, or `else` block.

```python
marks = 42

if marks >= 35:
    print("Pass")
    print("Keep practicing")
else:
    print("Try again")
```

Both indented print lines belong to the `if` block. If you remove the indentation, Python either changes the meaning or raises an error.

## Using `elif`

Use `elif` when there are several possible cases.

```python
marks = 82

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 60:
    grade = "C"
else:
    grade = "Needs practice"

print(grade)
```

Python checks from top to bottom and runs the first matching block.

## Combining Conditions

Use `and`, `or`, and `not` to combine or reverse conditions.

```python
age = 20
has_id = True

if age >= 18 and has_id:
    print("Allowed")
```

With `and`, both parts must be true. With `or`, at least one part must be true.

## Common Mistakes

A common mistake is forgetting the colon.

```python
if score >= 50
    print("Pass")
```

The correct version is:

```python
if score >= 50:
    print("Pass")
```

Another mistake is writing `else` with a condition.

```python
else score < 50:
```

Use `elif` for another condition, and use `else` as the final fallback.

## Quick Summary

- `if` checks a condition.
- `else` runs when no earlier condition matched.
- `elif` checks another condition in the same decision chain.
- Conditions evaluate to `True` or `False`.
- Indentation defines the block.
- Use `==` to compare values and `=` to assign values.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python If-Else quiz](/quizzes/python-if-else)
