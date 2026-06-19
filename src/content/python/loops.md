---
title: "Python Loops Explained With Examples"
slug: "loops"
topicId: "python-loops"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python for loops, while loops, range, break, continue, common mistakes, and MCQ practice."
---

## What Is A Loop?

A loop repeats a block of code. Loops are useful when you need to process many values, count through a range, or keep asking until a condition changes.

Python has two main beginner loop types: `for` loops and `while` loops.

## For Loops

A `for` loop repeats once for each item in a sequence.

```python
names = ["Asha", "Riya", "Kabir"]

for name in names:
    print(name)
```

Output:

```text
Asha
Riya
Kabir
```

The variable `name` receives one list item at a time.

## Using `range()`

Use `range()` when you want to repeat a fixed number of times.

```python
for number in range(5):
    print(number)
```

Output:

```text
0
1
2
3
4
```

`range(5)` starts at `0` and stops before `5`. This "stop before" rule is important.

You can also provide a start and stop:

```python
for number in range(1, 6):
    print(number)
```

This prints `1` through `5`.

## While Loops

A `while` loop repeats as long as a condition is true.

```python
count = 1

while count <= 3:
    print(count)
    count += 1
```

Output:

```text
1
2
3
```

The update `count += 1` is necessary. Without it, the condition may stay true forever.

## `break` And `continue`

`break` stops a loop early.

```python
for number in range(1, 6):
    if number == 3:
        break
    print(number)
```

This prints `1` and `2`.

`continue` skips the rest of the current loop step and moves to the next one.

```python
for number in range(1, 6):
    if number == 3:
        continue
    print(number)
```

This prints every number from `1` to `5` except `3`.

## Common Mistakes

A common mistake is an infinite loop.

```python
count = 1
while count <= 3:
    print(count)
```

The value of `count` never changes, so the condition never becomes false.

Another mistake is expecting `range(1, 5)` to include `5`. It stops before the second number.

## Quick Summary

- A loop repeats a block of code.
- `for` loops work well with sequences and fixed counts.
- `while` loops repeat while a condition is true.
- `range(stop)` starts at `0` and stops before `stop`.
- `break` exits a loop early.
- `continue` skips to the next loop step.
- Be careful to avoid infinite `while` loops.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Loops quiz](/quizzes/python-loops)
