# Unexpected Null Handling in foo Function

This repository demonstrates a common JavaScript error: unexpected behavior when null values are passed as arguments to a function.

## Bug Description
The `foo` function doesn't explicitly handle `null` values passed as arguments.  When `null` is passed, the function silently returns without raising an error or providing any indication that a null value was received. This behavior is unexpected and can lead to subtle bugs in larger applications.

## Bug Reproduction
1. Clone the repository.
2. Run `bug.js`. Observe that when `null` is passed as an argument, the function returns without an error, and the expected calculation isn't performed.

## Solution
The `bugSolution.js` file provides a corrected version of the `foo` function.  The solution incorporates explicit checks for `null` values and handles them gracefully, either by throwing an error or returning a default value. 

This example highlights the importance of explicitly handling null values in JavaScript functions to prevent unexpected behavior and improve code robustness.