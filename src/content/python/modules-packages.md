---
title: "Python Modules And Packages Explained With Examples"
slug: "modules-packages"
topicId: "python-modules-packages"
subject: "Python"
difficulty: "Intermediate"
description: "Learn Python modules, imports, packages, __init__.py, reusable structure, common mistakes, and MCQ practice."
---

## What Is A Module?

A module is a Python file that contains reusable code. If you have a file named `math_tools.py`, another file can import functions from it.

```python
# math_tools.py
def double(number):
    return number * 2
```

```python
# app.py
import math_tools

print(math_tools.double(5))
```

Modules help you split a growing program into smaller files.

## Import Styles

You can import the whole module:

```python
import math
print(math.sqrt(16))
```

You can import a specific name:

```python
from math import sqrt
print(sqrt(16))
```

You can also use an alias:

```python
import statistics as stats
```

Aliases are useful when a module name is long or has a common short form.

## What Is A Package?

A package is a folder of modules. A simple package might look like this:

```text
shop/
  __init__.py
  cart.py
  discounts.py
```

The `__init__.py` file marks the folder as a package in many Python project structures and can also run package setup code.

## Avoiding Import Problems

Python searches for modules in certain locations, including the current project path and installed packages. Import errors often happen because of spelling mistakes, running a file from the wrong folder, or naming your file after a standard library module.

Avoid creating files named `random.py`, `math.py`, or `json.py` in small practice projects. Those names can shadow built-in modules.

## The `if __name__ == "__main__"` Pattern

This pattern lets a file behave differently when run directly versus imported.

```python
def main():
    print("Running the program")

if __name__ == "__main__":
    main()
```

When another file imports this module, `main()` does not run automatically.

## Common Mistakes

A common mistake is using `from module import *`. It can make code unclear because many names appear without showing where they came from.

Another mistake is creating circular imports, where file A imports file B and file B imports file A. This often means shared code should move to a third module.

## Quick Summary

- A module is a Python file with reusable code.
- A package is a folder of modules.
- `import module` keeps names under the module namespace.
- `from module import name` imports one name directly.
- Aliases can make imports shorter.
- Avoid naming your files after standard library modules.
- Use `if __name__ == "__main__"` for direct-run code.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Modules and Packages quiz](/quizzes/python-modules-packages)
