---
title: "Python File Handling Explained With Examples"
slug: "file-handling"
topicId: "python-file-handling"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python file handling with open(), context managers, read and write modes, common mistakes, and MCQ practice."
---

## Why File Handling Matters

Many programs need to read data from files or write results to files. Python gives you the `open()` function for working with files.

```python
file = open("notes.txt", "r")
content = file.read()
file.close()
```

This works, but it is easy to forget `close()`. A better pattern is a context manager.

## Using `with open(...)`

The `with` statement closes the file automatically, even if an error happens inside the block.

```python
with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

This is the recommended style for most beginner and intermediate file work.

## File Modes

The second argument to `open()` is the mode.

- `"r"` reads an existing file.
- `"w"` writes to a file and replaces old content.
- `"a"` appends to the end of a file.
- `"x"` creates a new file and fails if it already exists.

Use write mode carefully because it overwrites the file.

```python
with open("result.txt", "w", encoding="utf-8") as file:
    file.write("Practice complete")
```

## Reading Lines

Use `read()` to read the whole file, or loop over the file line by line.

```python
with open("names.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

`strip()` removes the newline at the end of each line.

## Writing Multiple Lines

You can write strings one at a time.

```python
lines = ["Asha\n", "Riya\n", "Kabir\n"]

with open("names.txt", "w", encoding="utf-8") as file:
    file.writelines(lines)
```

Remember that `write()` and `writelines()` do not automatically add newline characters.

## Common Mistakes

A common mistake is using `"w"` when you mean `"a"`. Write mode replaces the entire file. Append mode keeps existing content and adds new content at the end.

Another mistake is ignoring encoding. Using `encoding="utf-8"` makes text handling more predictable across systems.

A third mistake is assuming a missing file will be created in read mode. Mode `"r"` requires the file to already exist.

## Quick Summary

- Use `open()` to work with files.
- Prefer `with open(...) as file` so files close automatically.
- `"r"` reads, `"w"` overwrites, and `"a"` appends.
- Use `encoding="utf-8"` for text files.
- `read()` reads the whole file.
- Looping over a file reads one line at a time.
- Add newline characters yourself when writing lines.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python File Handling quiz](/quizzes/python-file-handling)
