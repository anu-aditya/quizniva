---
title: "Python Strings Explained With Examples"
slug: "strings"
topicId: "python-strings"
subject: "Python"
difficulty: "Beginner"
description: "Learn Python strings, indexing, slicing, methods, formatting, common mistakes, and MCQ practice."
---

## What Is A String?

A string is text in Python. It can contain letters, numbers, spaces, and symbols. Strings are written inside quotes.

```python
name = "Asha"
message = 'Welcome to Python'
```

Single quotes and double quotes both work. Choose one style and use it consistently.

## String Length

Use `len()` to count the number of characters in a string.

```python
word = "Python"
print(len(word))
```

Output:

```text
6
```

Spaces count as characters too.

## Indexing Strings

Each character has an index. Python starts counting at `0`.

```python
word = "Python"

print(word[0])
print(word[1])
```

Output:

```text
P
y
```

Negative indexes count from the end.

```python
print(word[-1])
```

This prints `n`, the last character.

## Slicing Strings

Slicing extracts part of a string.

```python
word = "Python"
print(word[0:3])
```

Output:

```text
Pyt
```

The slice starts at index `0` and stops before index `3`.

You can leave out one side:

```python
print(word[:2])
print(word[2:])
```

## Useful String Methods

String methods return new strings or useful results.

```python
text = "  Python Practice  "

print(text.strip())
print(text.lower())
print(text.upper())
```

`strip()` removes extra spaces at the ends. `lower()` and `upper()` change letter case.

Other useful methods include:

- `replace(old, new)` to replace text
- `split()` to break text into a list
- `startswith()` to test the beginning of text

## Strings Are Immutable

Strings cannot be changed in place. This will not work:

```python
word = "cat"
word[0] = "b"
```

Instead, create a new string:

```python
word = "cat"
word = "b" + word[1:]
print(word)
```

This prints `bat`.

## Common Mistakes

A common mistake is using an index that does not exist.

```python
word = "Python"
print(word[6])
```

The last valid index is `5`, so this raises an `IndexError`.

Another mistake is expecting string methods to edit the original value automatically.

```python
name = "asha"
name.upper()
print(name)
```

This still prints `asha`. Store the result if you need it:

```python
name = name.upper()
```

## Quick Summary

- Strings store text.
- Use quotes to create strings.
- Indexing starts at `0`.
- Slices stop before the ending index.
- String methods such as `strip()` and `lower()` return useful results.
- Strings are immutable, so create a new string when changing text.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Strings quiz](/quizzes/python-strings)
