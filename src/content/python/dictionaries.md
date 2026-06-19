---
title: "Python Dictionaries Explained With Examples"
slug: "dictionaries"
topicId: "python-dictionaries"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python dictionaries, keys, values, updating, looping, common mistakes, and MCQ practice."
---

## What Is A Dictionary?

A dictionary stores data as key-value pairs. A key is the label you use to look up a value.

```python
student = {
    "name": "Asha",
    "age": 16,
    "city": "Delhi"
}
```

Here `"name"` is a key and `"Asha"` is its value. Dictionaries are useful when data has clear labels.

## Reading Values

Use square brackets with a key to read a value.

```python
print(student["name"])
```

Output:

```text
Asha
```

If the key might be missing, use `get()`.

```python
print(student.get("grade", "Not assigned"))
```

The second argument is the default value to return when the key is not found.

## Adding And Updating Values

Use assignment with a key to add or update a value.

```python
student["age"] = 17
student["grade"] = "A"
```

If the key already exists, the value is updated. If the key does not exist, a new pair is added.

## Removing Values

Use `pop()` to remove a key and get its value.

```python
city = student.pop("city")
print(city)
```

You can also use `del` when you only want to delete.

```python
del student["grade"]
```

## Looping Through A Dictionary

Loop through keys:

```python
for key in student:
    print(key)
```

Loop through values:

```python
for value in student.values():
    print(value)
```

Loop through both keys and values:

```python
for key, value in student.items():
    print(key, value)
```

## Dictionary Keys

Keys must be unique. If the same key is written twice, the later value replaces the earlier one.

```python
data = {"score": 80, "score": 90}
print(data["score"])
```

This prints `90`.

Common key types include strings and numbers. Lists cannot be used as dictionary keys because lists are mutable.

## Common Mistakes

A common mistake is using a missing key with square brackets.

```python
print(student["marks"])
```

If `"marks"` does not exist, Python raises a `KeyError`. Use `get()` when missing keys are expected.

Another mistake is confusing a dictionary with a list. Lists use numeric positions. Dictionaries use meaningful keys.

## Quick Summary

- A dictionary stores key-value pairs.
- Use a key to read, add, or update a value.
- Use `get()` to avoid errors for missing keys.
- Use `items()` to loop through keys and values together.
- Keys are unique.
- Missing keys with square brackets raise `KeyError`.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Dictionaries quiz](/quizzes/python-dictionaries)
