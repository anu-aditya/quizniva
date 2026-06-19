---
title: "Python Tuples And Sets Explained With Examples"
slug: "tuples-sets"
topicId: "python-tuples-sets"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python tuples and sets with immutability, unpacking, unique values, set operations, common mistakes, and MCQ practice."
---

## Why Tuples And Sets Matter

Lists and dictionaries are not the only collection types you need in Python. Tuples and sets help you express different intentions. A tuple is useful when a group of values should stay together and should not be changed. A set is useful when you care about unique values and membership tests.

```python
point = (10, 20)
unique_scores = {80, 90, 80, 75}

print(point)
print(unique_scores)
```

The tuple keeps the coordinate pair together. The set removes the duplicate `80`.

## Tuples

A tuple is an ordered collection. You can read items by index, loop over it, and unpack it into variables.

```python
student = ("Asha", 16, "Delhi")

name, age, city = student
print(name)
```

Tuples are immutable. You cannot change an item after the tuple is created.

```python
student[1] = 17
```

This raises a `TypeError`. If you need to change values often, use a list instead.

## Single-Item Tuples

The comma creates a single-item tuple.

```python
value = (5,)
```

Without the comma, `(5)` is just the integer `5` inside parentheses.

## Sets

A set stores unique items with no guaranteed order.

```python
tags = {"python", "quiz", "python"}
print(tags)
```

The duplicate `"python"` appears only once.

Use `add()` to add an item and `remove()` or `discard()` to remove one.

```python
tags.add("practice")
tags.discard("old")
```

`discard()` does nothing if the item is missing. `remove()` raises a `KeyError` if the item is missing.

## Set Operations

Sets are excellent for comparisons.

```python
a = {"python", "html", "css"}
b = {"python", "sql"}

print(a | b)
print(a & b)
print(a - b)
```

`|` gives the union, `&` gives the intersection, and `-` gives items in the first set but not the second.

## Common Mistakes

A common tuple mistake is expecting to edit it like a list. Tuples are ordered, but they are immutable.

A common set mistake is expecting the printed order to stay the same. Sets are not designed for positional access or stable ordering. If you need order, use a list.

Another mistake is creating an empty set with `{}`. That creates an empty dictionary. Use `set()` for an empty set.

## Quick Summary

- Tuples are ordered and immutable.
- Tuple unpacking assigns grouped values to separate names.
- A single-item tuple needs a trailing comma.
- Sets store unique values.
- Sets are useful for membership tests and comparisons.
- Use `set()` for an empty set.
- Set order should not be relied on.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Tuples and Sets quiz](/quizzes/python-tuples-sets)
