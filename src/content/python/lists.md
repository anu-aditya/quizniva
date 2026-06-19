---
title: "Python Lists Explained With Examples"
slug: "lists"
topicId: "python-lists"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python lists, indexing, updating, common methods, loops, common mistakes, and MCQ practice."
---

## What Is A List?

A list stores multiple values in one variable. Lists are useful when values belong together, such as scores, names, prices, or tasks.

```python
scores = [80, 75, 92]
names = ["Asha", "Riya", "Kabir"]
```

List items can be accessed, changed, added, and removed.

## Indexing Lists

Python list indexes start at `0`.

```python
fruits = ["apple", "banana", "mango"]

print(fruits[0])
print(fruits[2])
```

Output:

```text
apple
mango
```

Negative indexes count from the end.

```python
print(fruits[-1])
```

This prints `mango`.

## Updating Items

Lists are mutable, which means you can change their contents.

```python
fruits = ["apple", "banana", "mango"]
fruits[1] = "orange"

print(fruits)
```

Output:

```text
['apple', 'orange', 'mango']
```

## Adding And Removing Items

Use `append()` to add an item at the end.

```python
tasks = ["read", "practice"]
tasks.append("review")
```

Use `pop()` to remove and return an item by index. Without an index, it removes the last item.

```python
last_task = tasks.pop()
```

Use `remove()` when you want to remove by value.

```python
tasks.remove("read")
```

## Looping Through A List

You can use a `for` loop to process every item.

```python
scores = [80, 75, 92]

for score in scores:
    print(score)
```

To count items, use `len()`.

```python
print(len(scores))
```

## List Slices

Slicing creates part of a list.

```python
numbers = [10, 20, 30, 40]
print(numbers[1:3])
```

Output:

```text
[20, 30]
```

The slice starts at index `1` and stops before index `3`.

## Common Mistakes

A common mistake is using an index that is too large.

```python
items = ["pen", "book"]
print(items[2])
```

The valid indexes are `0` and `1`, so this raises an `IndexError`.

Another mistake is mixing up `append()` and `remove()`. `append()` adds a value. `remove()` deletes the first matching value and raises an error if the value is not found.

## Quick Summary

- A list stores multiple values.
- List indexes start at `0`.
- Lists are mutable, so items can be changed.
- Use `append()` to add, `pop()` to remove by index, and `remove()` to remove by value.
- Use `len()` to count items.
- Use a `for` loop to process list items.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Lists quiz](/quizzes/python-lists)
