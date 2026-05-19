---
title: "Python Data Serialization Explained With Examples"
slug: "data-serialization"
topicId: "python-data-serialization"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python data serialization with JSON, CSV, pickle cautions, custom encoding, common mistakes, and MCQ practice."
---

## What Is Serialization?

Serialization converts data into a format that can be stored or sent. Deserialization converts it back into Python data.

Common formats include JSON and CSV.

```python
import json

data = {"name": "Asha", "score": 88}
text = json.dumps(data)
restored = json.loads(text)
```

`dumps()` creates a JSON string. `loads()` reads a JSON string.

## JSON Files

Use `dump()` and `load()` with files.

```python
with open("score.json", "w", encoding="utf-8") as file:
    json.dump(data, file)
```

```python
with open("score.json", "r", encoding="utf-8") as file:
    data = json.load(file)
```

JSON is readable and widely used for APIs and configuration.

## CSV Files

CSV stores rows and columns as text.

```python
import csv

with open("scores.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(["name", "score"])
    writer.writerow(["Asha", 88])
```

Use `newline=""` when working with CSV files to avoid unwanted blank lines on some systems.

## Pickle Caution

`pickle` can serialize many Python objects, but loading pickle data can execute code. Never unpickle data from an untrusted source.

For data exchange, JSON is usually safer and more portable.

## Custom Serialization

Some objects are not JSON serializable by default.

```python
from dataclasses import asdict

json.dumps(asdict(student))
```

Convert objects into dictionaries, strings, or numbers before serializing.

## Common Mistakes

A common mistake is confusing `json.load()` and `json.loads()`. The version ending in `s` works with strings. The version without `s` works with file objects.

Another mistake is expecting JSON to preserve every Python type exactly. Tuples become arrays, and non-string dictionary keys may change.

## Quick Summary

- Serialization converts data for storage or transfer.
- Deserialization restores data.
- `json.dumps()` writes to a string.
- `json.dump()` writes to a file object.
- CSV is good for tabular text data.
- Avoid untrusted pickle data.
- Convert custom objects before JSON serialization.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Data Serialization quiz](/quizzes/python-data-serialization)
