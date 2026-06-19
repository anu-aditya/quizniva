---
title: "Python Testing Explained With Examples"
slug: "testing"
topicId: "python-testing"
subject: "Python"
difficulty: "Advanced"
description: "Learn Python testing with assertions, pytest-style tests, fixtures, parametrization, mocks, common mistakes, and MCQ practice."
---

## Why Testing Matters

Tests are small programs that check whether your code behaves as expected. Good tests help you change code with confidence and catch regressions early.

```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
```

The test describes one expected behavior.

## Assertions

An assertion checks that a condition is true.

```python
assert result == expected
```

If the condition is false, the test fails. In test code, failure is useful because it points to behavior that needs attention.

## Arrange, Act, Assert

A clear test often has three parts:

- Arrange the input data.
- Act by calling the function.
- Assert the expected result.

```python
def test_discount():
    price = 100
    result = apply_discount(price, 10)
    assert result == 90
```

## Fixtures And Parametrization

Fixtures provide reusable setup data. Parametrization runs the same test with several inputs.

```python
import pytest

@pytest.mark.parametrize("number, expected", [(2, True), (3, False)])
def test_is_even(number, expected):
    assert is_even(number) is expected
```

This avoids copying nearly identical tests.

## Test Doubles

Mocks and fakes replace slow, external, or unpredictable dependencies during tests. For example, a test can replace an API call with a predictable fake response.

Use mocks carefully. If every test knows too much about internal calls, refactoring becomes harder.

## Common Mistakes

A common mistake is testing only happy paths. Include edge cases and likely failure paths.

Another mistake is writing tests that depend on execution order. Tests should usually be independent so one failure does not create a chain of confusing failures.

## Quick Summary

- Tests check expected behavior.
- Assertions fail when behavior differs from expectations.
- Arrange, Act, Assert keeps tests readable.
- Parametrization runs the same test with multiple inputs.
- Fixtures provide reusable setup.
- Mocks replace difficult dependencies.
- Tests should be independent and meaningful.

## Practice Quiz

Now practice this topic with MCQs and explanations:

[Start the Python Testing quiz](/quizzes/python-testing)
