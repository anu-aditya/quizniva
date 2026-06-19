---
title: "Python Inheritance Explained With Examples"
slug: "inheritance"
topicId: "python-inheritance"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python inheritance with parent classes, child classes, overriding, super(), common mistakes, and MCQ practice."
---

## What Is Inheritance?

Inheritance lets one class reuse behavior from another class. The existing class is often called the parent class or base class. The new class is called the child class or subclass.

```python
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    pass
```

`Dog` inherits the `speak()` method from `Animal`.

## Creating A Child Class

Put the parent class name in parentheses.

```python
class ElectricCar(Car):
    pass
```

The child class can use methods and attributes defined in the parent, as long as normal access rules allow it.

## Method Overriding

A child class can replace a parent method by defining a method with the same name.

```python
class Dog(Animal):
    def speak(self):
        return "Bark"
```

Now `Dog().speak()` returns `"Bark"` instead of `"Some sound"`.

## Using `super()`

Use `super()` to call behavior from the parent class.

```python
class Student(User):
    def __init__(self, name, grade):
        super().__init__(name)
        self.grade = grade
```

This lets the parent class initialize its part of the object before the child adds more details.

## Is-A Relationship

Inheritance works best when the child class is a more specific kind of the parent class. A `Dog` is an `Animal`. An `ElectricCar` is a `Car`.

If the relationship is only "uses" or "has", composition may be clearer than inheritance. For example, a `Car` has an `Engine`, but a `Car` is not an `Engine`.

## Common Mistakes

A common mistake is using inheritance only to share a few helper functions. If the classes do not form an is-a relationship, a separate function or composed object may be simpler.

Another mistake is forgetting to call `super().__init__()` when the parent initialization is still needed. This can leave required parent attributes unset.

## Quick Summary

- Inheritance lets a child class reuse parent class behavior.
- The parent class goes in parentheses after the child class name.
- A child class can override parent methods.
- `super()` calls parent class behavior.
- Use inheritance when there is a true is-a relationship.
- Prefer simpler composition when classes do not naturally inherit.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Inheritance quiz](/quizzes/python-inheritance)
