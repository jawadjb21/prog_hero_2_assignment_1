# Generics in TypeScript

## Introduction

Generics are used to create flexible and reusable components, like functions, classes, and interfaces, that work with various data types while maintaining type safety. They eliminate the need for rigidly defined data types, or rewriting the same code for different data types.

## Basic Usage of Generics

A generic function uses a type placeholder, usually `T`, in place of a specific data type:

```TS
const genericFunc = <T>(arg: T): T {
    // function logic
}
```

In the example above, `T` acts as a placeholder for any data type, and we can then use type narrowing for specific logic based on the type of `T`.

## Generics with Async Promise

Generics can also be used with async functions to define the type of data a `Promise` resolves to:

```TS
const fetchData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const data: T = await response.json();
    return data;
}
```

Here, we are using generics to define the return type of the `fetchData` function, which allows us to specify the expected data type when calling the function. This ensures type safety for the response from API calls and helps avoid potential runtime errors caused by unexpected data types.

## Conclusion

Generics allow us to write flexible and reusable code without giving up type safety. They remove the need to rewrite the same logic for different data types, and when used with `Promise<T>`, they help ensure that API responses match the expected data type, avoiding potential runtime errors.
