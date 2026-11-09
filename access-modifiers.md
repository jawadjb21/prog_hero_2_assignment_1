# Access Modifiers in TypeScript OOP

## Introduction

Encapsulation is a fundamental concept in object-oriented programming that restricts access to certain components of an object, thereby protecting the internal state and behavior of the object from unintended interference and misuse. In many programming languages, access modifiers are used to define the visibility and accessibility of classes, methods, and variables.

There are typically three main access modifiers: `public`, `private`, and `protected`.

## Public

Members declared as public are accessible from any other class or object. This means that there are no restrictions on access, and these members can be freely used throughout the program.

## Private

Members declared as private are only accessible within the class in which they are defined. This means that they cannot be accessed or modified directly from outside the class, providing a level of protection for the internal state of the object.

## Protected

Members declared as protected are accessible within the class in which they are defined and by subclasses (derived classes). This allows for controlled access to certain members while still maintaining a level of encapsulation.

## Readonly

Readonly properties are a special type of access modifier that allows a property to be read but not modified after it has been initialized. This is useful for creating immutable objects or ensuring that certain values remain constant throughout the lifetime of an object.

## Code Example

```TS
class Example {
    public name: string;
    private _salary: number;
    protected department: string;
    readonly role: string;

    constructor(name: string, _salary: number, department: string, role: string) {
        this.name = name;
        this._salary = _salary;
        this.department = department;
        this.role = role;
    }

}

const example = new Example("John Doe", 50000, "Engineering", "Developer");
console.log(example.name); // Accessible
console.log(example._salary); // Error: Property '_salary' is private and only accessible within class 'Example'.
console.log(example.department); // Error: Property 'department' is protected and only accessible within class 'Example' and its subclasses.
example.role = "Manager"; // Error: Cannot assign to 'role' because it is a read-only property.
```

## Conclusion

Access modifiers define the visibility and accessibility of class members, helping protect the internal state and behavior of an object. The `public`, `private`, and `protected` modifiers control where a member can be accessed, while `readonly` ensures a property cannot be modified after it has been initialized.