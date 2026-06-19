---
title: "Python Object-Oriented Programming Explained With Examples"
slug: "oop"
topicId: "python-oop"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python classes, objects, attributes, methods, __init__, self, common mistakes, and MCQ practice."
---

## What Is Object-Oriented Programming?

Object-oriented programming, or OOP, is a way to organize code around objects. An object groups data and behavior together. A class is the blueprint used to create objects.

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def has_passed(self):
        return self.score >= 35
```

The class describes what a student object should have and what it can do.

## Creating Objects

An object is also called an instance.

```python
student = Student("Asha", 88)

print(student.name)
print(student.has_passed())
```

`student.name` reads an instance attribute. `student.has_passed()` calls a method.

## The `__init__` Method

`__init__` runs when a new object is created. It is commonly used to store starting values.

```python
def __init__(self, name):
    self.name = name
```

The first parameter, `self`, refers to the current object. Python passes it automatically when you call a method through an object.

## Instance Attributes And Methods

Instance attributes belong to a specific object.

```python
first = Student("Asha", 88)
second = Student("Riya", 72)
```

Each object has its own `name` and `score`.

Methods are functions defined inside a class. They usually use `self` to read or update the current object's data.

```python
def improve(self, points):
    self.score += points
```

## Class Attributes

A class attribute belongs to the class and is shared by instances unless overridden.

```python
class Student:
    school = "QuizNiva Academy"
```

Use class attributes for values that should be common across all instances.

## Common Mistakes

A common mistake is forgetting `self` in a method definition.

```python
def has_passed():
    return self.score >= 35
```

Instance methods need `self` as the first parameter.

Another mistake is putting changing data in a class attribute when it should belong to each object. If every object needs its own value, use an instance attribute such as `self.score`.

## Quick Summary

- A class is a blueprint.
- An object is an instance of a class.
- `__init__` sets up new objects.
- `self` refers to the current object.
- Instance attributes belong to one object.
- Methods are functions inside classes.
- Class attributes are shared through the class.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Object-Oriented Programming quiz](/quizzes/python-oop)
