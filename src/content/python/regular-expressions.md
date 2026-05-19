---
title: "Python Regular Expressions Explained With Examples"
slug: "regular-expressions"
topicId: "python-regular-expressions"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python regular expressions with re.search, groups, quantifiers, anchors, substitution, common mistakes, and MCQ practice."
---

## What Are Regular Expressions?

Regular expressions, often called regex, describe text patterns. Python provides the `re` module for searching, matching, extracting, and replacing text.

```python
import re

match = re.search(r"\d+", "Order 452")
print(match.group())
```

This finds the first group of digits.

## Raw Strings

Regex patterns often contain backslashes. Use raw strings with `r""` so Python does not treat backslashes as escape sequences first.

```python
pattern = r"\w+@\w+\.\w+"
```

This makes regex patterns easier to read.

## Common Pattern Symbols

- `.` matches almost any single character.
- `\d` matches a digit.
- `\w` matches a word character.
- `\s` matches whitespace.
- `*` means zero or more.
- `+` means one or more.
- `?` means zero or one.
- `^` anchors the start.
- `$` anchors the end.

## Groups

Parentheses capture parts of a match.

```python
match = re.search(r"(\d{4})-(\d{2})-(\d{2})", "2026-05-19")

print(match.group(1))
print(match.group(2))
```

Groups help extract structured pieces from text.

## `search`, `match`, And `fullmatch`

`re.search()` looks anywhere in the string. `re.match()` checks from the beginning. `re.fullmatch()` requires the entire string to match.

```python
re.fullmatch(r"\d{6}", "560001")
```

Use `fullmatch()` for validation.

## Replacing Text

Use `re.sub()` to replace matching patterns.

```python
cleaned = re.sub(r"\s+", " ", "Too     many   spaces")
```

This replaces repeated whitespace with a single space.

## Common Mistakes

A common mistake is using regex for problems that simple string methods can solve. Use `split()`, `replace()`, `startswith()`, or `in` when they are clearer.

Another mistake is forgetting that `re.match()` starts at the beginning. If you want to find a pattern anywhere, use `re.search()`.

## Quick Summary

- Regex patterns describe text.
- Python uses the `re` module for regex work.
- Raw strings are recommended for regex patterns.
- `search()` finds a pattern anywhere.
- `match()` checks from the beginning.
- `fullmatch()` checks the whole string.
- Groups capture parts of a match.
- `re.sub()` replaces matching patterns.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Regular Expressions quiz](/quizzes/python-regular-expressions)
