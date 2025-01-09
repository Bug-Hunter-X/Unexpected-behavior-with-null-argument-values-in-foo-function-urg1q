function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed for parameters a and b.');
  }
  // ... rest of the function
}