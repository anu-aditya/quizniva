---
title: "Python Variables Explained With Examples"
slug: "variables"
topicId: "python-variables"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python variables with simple examples, naming rules, common mistakes, and MCQ practice."
---

## What Is A Variable?

A variable is a name that refers to a value in a program. When you write Python code, you often need to store information so you can use it later. That information may be a number, a piece of text, a true-or-false value, or a larger structure such as a list.

In beginner terms, think of a variable as a useful label. The label helps you remember what a value means. Instead of writing the number `85` everywhere, you can write `score = 85`. Now the name `score` makes your code easier to read.

```python
score = 85
name = "Asha"
is_passed = True
```

In these examples, `score`, `name`, and `is_passed` are variable names. The values are `85`, `"Asha"`, and `True`.

## Basic Assignment Syntax

Python uses the equals sign `=` for assignment.

```python
variable_name = value
```

The right side is evaluated first. Then the result is stored using the name on the left side.

```python
price = 50
quantity = 3
total = price * quantity

print(total)
```

This prints:

```text
150
```

Python first finds the values of `price` and `quantity`, multiplies them, and stores the result in `total`.

## Variables Can Change

A variable can receive a new value later in the program.

```python
score = 5
score = 8

print(score)
```

This prints:

```text
8
```

The second assignment replaces the value that the name `score` refers to. Python does not keep both values inside the same variable name.

You can also update a variable by using its old value:

```python
marks = 70
marks = marks + 5

print(marks)
```

This prints:

```text
75
```

Python evaluates `marks + 5` first. Since `marks` is currently `70`, the expression becomes `75`. Then the name `marks` is updated to refer to `75`.

## Naming Rules

Python variable names must follow a few rules:

- A name can contain letters, digits, and underscores.
- A name cannot start with a digit.
- A name cannot contain spaces.
- A name cannot use Python keywords such as `for`, `if`, `class`, or `while`.
- Variable names are case-sensitive.

Valid examples:

```python
student_name = "Riya"
marks2 = 91
total_score = 450
```

Invalid examples:

```python
2marks = 91
student name = "Riya"
class = "Python"
total-score = 450
```

The name `total-score` is invalid because Python treats the hyphen as a minus operator. Use `total_score` instead.

## Recommended Naming Style

Python style usually uses `snake_case` for normal variable names. That means lowercase words separated by underscores.

```python
first_name = "Aman"
total_marks = 478
average_score = 79.6
```

Names like `firstName` or `TotalMarks` may work, but they are not the usual style for normal Python variables. A clear name is better than a very short or confusing one.

Compare these:

```python
x = 80
y = 90
z = x + y
```

This works, but it is not very meaningful. The next version is easier to understand:

```python
math_marks = 80
science_marks = 90
total_marks = math_marks + science_marks
```

Readable names become more important as programs become longer.

## Printing Variables And Text

There is an important difference between printing a variable and printing text.

```python
name = "Python"

print(name)
print("name")
```

Output:

```text
Python
name
```

`print(name)` prints the value stored in the variable. `print("name")` prints the exact text inside quotes.

This mistake is common for beginners. If you expect the variable value, do not put the variable name inside quotes.

## Multiple Variables

Python can assign values to more than one variable in one line:

```python
x, y = 10, 20
```

Now `x` stores `10` and `y` stores `20`.

This is also useful for swapping values:

```python
a = 5
b = 9

a, b = b, a

print(a)
print(b)
```

Output:

```text
9
5
```

Python evaluates the right side first, then assigns the values to the names on the left.

## Common Mistakes

One common mistake is using `==` when you mean assignment.

```python
score == 10
```

This does not assign `10` to `score`. The `==` operator compares two values. To assign, use:

```python
score = 10
```

Another common mistake is using a variable before assigning it.

```python
print(total)
```

If `total` has not been assigned yet, Python raises a `NameError` because it does not know what value the name should refer to.

A third mistake is using unclear names:

```python
a = 1200
b = 18
c = a * b
```

The code may run, but another learner cannot easily understand what the values mean. Better names make the purpose clear:

```python
monthly_fee = 1200
months = 18
total_fee = monthly_fee * months
```

## Quick Summary

- A variable is a name that refers to a value.
- Use `=` to assign a value.
- Python evaluates the right side before assigning to the left side.
- Variable names should be clear and usually use `snake_case`.
- Do not put a variable name in quotes when you want its stored value.
- Use `==` for comparison, not assignment.
- A variable must be assigned before you use it.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Variables quiz](/quizzes/python-variables)
