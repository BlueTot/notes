
## Topic 2 - Variables

- **Refinement** - Process of conversion from the specification to high-level program code

**Understanding the Specification**
- Precondition - *When should the program work?*
- Input - *Does the program need any data?*
- Calculates - *What should the program calculate?*
- Output - *Does the program return any results?*
- Postcondition - *What is the state after execution?*

**Taking Input**  - `Scanner <scanner> = new Scanner(System.in)`

**Java Primitive Data Types:**

| Data Type | No. of Bytes           | Range                               |
| --------- | ---------------------- | ----------------------------------- |
| `byte`    | $1$                    | $-128 \to 127$                      |
| `short`   | $2$                    | $-32768 \to 32767$                  |
| `int`     | $4$                    | $-2^{31} \to 2^{31}  -1$            |
| `long`    | $8$                    | $-2^{63} \to 2^{63}-1$              |
| `float`   | $4$ (32 bits)          | $-3.4e38 \to 3.4e38$ (6-7 s.f.)     |
| `double`  | $8$ (64 bits)          | $-1.7e308 \to 1.7e308$ (14-15 s.f.) |
| `char`    | $4$ ($\equiv$ `short`) | unsigned - $0 \to 2^{16}-1$         |
| `boolean` | $1$                    | `true` or `false`                   |
**Returning Output**
- `System.in` - Input Stream
- `System.out` - Output Stream
- `System.err` - Error Stream

Java `+` operator:
- Two numerical data types - addition
- One string object - Concatenated

**IEEE-754 Floating Point Notation:**
$$-1^{s} \times (1+f)\times2^{e-127}$$
where
	$s$ = sign bit
	$f$ = fraction
	$e$ = exponent bits

![[Pasted image 20250412162730.png]]

If $e = 0000 0000$:
	If $f = 0$: value is $0$ or $-0$
	Else: Renormalise number with form
	$$(-1)^s \times f \times 2^{-127}$$
If $e = 11111111$:
	If $f = 0$: value is $\pm \infty$
	Else: value is `NaN` (not a number)

Similarly for the `double` data type, we use 11-bit exponent and 52-bit mantissa, calculated using the below formula:

$$(-1)^s \times (1+f) \times 2^{e-1023}$$

- **Implicit Cast** - moving from one type to another with no loss of precision
- **Explicit Cast** - moving from one type to another with less precision; meaning data is possibly lost!
	- Must be used using an explicit *type cast*

**Boolean Operators:**
- `>`, `<`, `>=`, `<=`
- `||`, `&&`, `|`, `&`, `^`, `!`

Note that two symbols means *LAZY*, one symbol is *STRICT*

**Watch out for partial initialisation of variables (compiler error)**

**Short Hand Operators**
- `+=`, `-=`, `*=`, `/=`
- `++` and `--`
- `a++` is post-increment, use `a` then increment
- `++a` is pre-increment, increment then use `a`
- Only makes a difference when it is used in-line with other statements

**Operator Precedence**
- Postfix (`a++`, `a--`)
- Unary (`++a`, `--a`)
- Multiplicative (`*`, `/`, `%`)
- Additive (`+`, `-`)
- Shift (`<<`, `>>`, `>>>`)
	- Note that `>>>` is unsigned right shift, `>>` is signed right shift
- Relational (`<`, `>`, `<=`, `>=`)
- Equality (`==`, `!=`)
- Strict Operators (`&`,`|`, `^`, `!`)
- Lazy Operators (`&&`, `||`)
- Assignment (`=`, `+=`, `-=`, `*=`, `/=`, $\cdots$)

Note - **API** = Application Programming Interface

## Topic 4 - Conditional Statements

- `if`, `else` keywords

Note - **braces are optional if we only have a single statement**
Note - **indentation is optional but is good practice**

**Dangling Else Problem**
- Else statement matches to nearest if statement when without braces.
- Beware of consequences of not using braces!

**Ternary Operator:**
```java
value = (booleanCondition) ? valueIfTrue : valueIfFalse;
```

- *If in doubt, avoid the ternary operator*

**Switch Statement:**
```java
switch (variable) {
	case VALUE:
		break;
	case VALUE:
		break;
	default:
}
```

**NOTES:**
- `variable` must yield a value of type `long`, `int`, `short`, `byte` or `char`.
- `VALUE` must have same data type as `variable`
- First `case` match will be evaluated, then all other statements will be executed
- `break` is optional, but terminates execution of rest of `switch` statement.
- `default` is optional, used when no cases match.

**NOTE** - `break` stops execution in the current **scope**.

**Switch Expression:**
```java
<type> val = switch (variable) {
	case VALUE -> ...;
	case VALUE -> ...;
	...
	default -> {
		if (condition) yield x;
		else yield y;
	}
};
```

NOTE - `break` is not required in the *switch expression*.
NOTE - `yield` is used to "return" a value out of the *switch expression*.

**Precondition of an If Statement**
- The condition that makes the statement in the if statement run

```java
if (x) {
	p1;
} else if (y) {
	p2;
} else if {z} {
	p3;
} else {
	p4;
}
```

`p1` precondition - `x`
`p2` precondition - `!x & y`
`p3` precondition - `!x & !y & z`
`p4` precondition - `!x & !y & !z`

**Precondition of a Switch Statement**
```java
switch (var) {
	case v1:
		S1;
		break;
	case v2;
		S2;
		break;
	default:
		SD;
}
```

`S1` precondition - `var == v1`
`S2` precondition - `var != v1 & var == v2`
`SN` precondition - `var != v1 & ... & var != v{N-1} & var == vN`
`SD` precondition - `var != v1 & ... & var != vN`

*If there are no break statements for some of the cases, the precondition for subsequent cases includes the previous cases with an OR operator.*

```java
switch (var) {
	case v1:
		S1;
	case v2:
		S2; break;
}
```

`S1` precondition - `var == v1`
`S2` precondition - `var == v1 | var == v2`

**This approach should be applied when:**
- The logic is complicated
- When there can be no question as to the result
- Safety critical code
- When your programs fail

## Topic 5 - Iteration

- **Bounded Repetition** - We repeat something a *fixed* number of times
	- *When we know where to **start**, where to **end**, what **iterative step** to take each repetition*
	- `for` loop!
- **Unbounded Repetition** - We are unsure how many times something will repeat
	- `while` loop!
	- While statements can be **dangerous** as they do not have strict bounds, can easily end up in an **infinite loop**
	- `do while` loop:
		- Execute loop body **before** checking `booleanExpression`

**`do while`, `while` equivalence:**
```java
do {
	S1;
} while (booleanExpression);
```
is equivalent to...
```java
boolean doneOnce = false;
while (booleanExpression | !doneOnce) {
	doneOnce = true;
	S1;
}
```

`continue` - it goes to the **next** iteration

## Topic 6 - Arrays, Methods, Scope & Recursion

**Declaring an Array**
```java
<type>[] array; // 1d arary
<type>[][] array; // 2d array
```

*Note: Square brackets can be attached to the type or the variable name*
*Note: be careful as where you put the square brackets, as it matters!*
```java
int[] a, b; // is same as:
int a[], b[];

int[] a, b, c[]; // is same as:
int a[], b[], c[][];
```

*Note: when we declare an array, its value will be initialised to be special value `null`*

**Creating an Array**
```java
<type>[] array = new <type>[size];
<type>[] array = {a, b, c, ..., n};
```

**Default values for arrays:**
- Numerical - `0`
- `boolean` - `false`
- `Object` - `null`

*Note: Array of size `n` have indices go from `0` to `n-1`*

**Length of an array** - `array.length`;

**Main Method**
- Entry point for a Java application
- Signature:
```java
public static void main(String[] args) {}
```
- Contains:
	- Access privileges: `public`, `private`, `protected`
	- Return type: `int`, `double`, `String`
		- `void` means return nothing
	- Name
	- Comma separated list of function parameters

**Function Overloading**
- Methods are defined by their *name*, *return type* and *parameters*.
- Multiple method with different parameter lists is called **function overloading**.

**Scope**
- Variables have scope from the moment they are declared, until the block its declared within is closed
- A new computational environment begins when we call a function
- Variables must have a unique name within a particular scope

**NOTE: Objects are passed by reference!**

**Recursion:**
- A function calls itself
- Must have a termination condition (base case) to prevent an infinite loop

## Topic 7 - Object Oriented Programming

- Data and operations on data are bundled together in a structure called an Object
	- Properties - store state
	- Methods - Operate on this data / change state

- **Class** - *A blueprint of an object, describes how to create the object*
- **Object** - *Specific instance of a class*

- **Rules of making classes:**
	- **public classes must be in their own file**
	- **class names begin with a capital letter**

- **Constructor Method**
	- special method that has
		- *no return type (not even void)*
		- *same name as the class*
	- Are optional, Java will create a default constructor if you don't make one

- **this** is used to refer to the instance of the class
	- used to refer to class variables when names are the same

- **Creating objects:**

```java
[ObjectType] variableName = new [ObjectType]([paramters]);
```

**A note on comparisons**
- All objects have an `equals` method
- Using `==` with objects is asking if the two objects have the same reference

## Topic 8 - Modifiers and Encapsulation

- `public` - can be accessed outside the class
- `private` - can be accessed only inside the class
- Reasoning:
	- Some data we want to restrict access to
	- We want to maintain a good interface between programmers
- If an access modifier is not specified, they are `package-private`
	- somewhere between `private` and `protected`
	- Can only be accessed by other objects in the same `package`

- **Encapsulation**
	- *Data-hiding* : making data private and some methods public
	- Encapsulation doesn't mean data-hiding, but leads to it
	- Users are driven to use a class by its interface
	- Implementation of class can be done in whatever way the programmer wants, the external functionality will remain the same
	- **Three purposes:**
		- *Boundaries of responsibility are clear*
		- *Unnecessary detail is hidden*
		- *Implementation can change without ruining dependant applications*
	- getter (accessor) and setters (mutators)

- **Static Keyword**
	- Method/variables belong to the whole class, not to any single instance
	- E.g. `Math.PI`, `Math.round(x)`
	- `main` has to be `public` so the Java runtime can see the method
	- `main` has to be `static` so the Java runtime can run the method without having to create an instance of an unknown class

- **Final Keyword**
	- `final` declares that a value is a constant
	- Can only be set once after initialising

- Enumerated Types
	- `enum`'s are special classes that can hold a range of constant values
```java
public enum Day {
	SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

Day d = Day.MONDAY;
switch (d) {
	case Day.MONDAY: ...
	etc.
}
```

## Topic 10 - Inheritance and Polymorphism

- **Classes can inherit from a parent class**
	- Base class - Superclass
	- Derived classes - Subclasses
- Subclasses inherits some features from its parent class and may have some additional ones of its own

```java
public class Lion extends Cat {...}
```

**Method overriding**
- Same as inherited method, and if we call it on the *subclass*, it will override the method in the *superclass*

**Super keyword**
- `super` refers to the instance of the *superclass*
- `this`refers to the instance of the class
- `super()` must be the first thing you do in the subclass constructor
	- If the superclass **doesn't have a no-argument constructor**, you will get a **compile time error**
- `super` can also refer to the superclass's methods, such as `super.sleep()`

**Protected keyword**
- Subclasses can see `protected` elements of super-classes

**Polymorphism**
- Ability to process objects of different types through a single uniform interface
- **overloading** is static polymorphism
- Polymorphism in OOP is referred as **run-time polymorphism**

**Instance Of operator**
- Used to check if an object is of a particular type
```java
if (c instanceof Tiger) { /* c is a Tiger */}
```
- Casting objects when they you can't causes a `ClassCastException`, e.g. casting an `Object` to a `Cat` when it's not a `Cat`

## Topic 11 - Abstract Classes and Inheritance

- An `abstract` class is a special class that cannot be instantiated
- Allows us to capture common properties and behaviours at an abstract level
- Can contain a mix of **abstract methods** and **concrete methods**

```java
public abstract class Feline {
	...
	public Feline mate(Feline c) {...}
	abstract public int getCatYears();
	abstract public String toString();
}
```

- **NOTE:** *abstract method declarations end in a semi-colon. No implementation is provided*
- Abstract classes must be extended before instantiations can be made
```java
public class Cat extends Feline {...}
```
- All the abstract methods MUST BE IMPLEMENTED in a concrete class extending an abstract class
- **NOTE:** if an abstract class is extended, the subclass doesn't have to be concrete, it can be abstract and have some methods that are not implemented

- **Interfaces**
	- *An interface is an abstract class that can only contain methods and the methods cannot be implemented*
	- But they shouldn't be declared abstract

- Interfaces are used in concrete classes using `implements`
```java
public class TestImpl implements Test {...}
```
- **NOTE: multiple interfaces can be implemented**
	- This kind of allows for *"multiple inheritance"* but there is no confusion, as the interface contains no implementation

## Topic 12 - Exceptions

- `try` ... `catch` blocks catch Exceptions
- Ordering of `catch` blocks is important
- If the first `catch` block is a *superclass* of any of the others, the `catch` blocks for the *subclasses* will never be used
- E.g. if `catch (Exception e)` is put first, the below catch statements will not be reached.
- `finally` block - will be executed even after a return statement
	- E.g. tidying up (e.g. streams need closing)

```java
try {
	// Code that may generate an exception
} catch (Exception e) {
	// Code to handle particular exception
} finally {
	// Code that will always be executed at the end
}
```

**Throwable**
- All errors and exceptions are subclasses of the `Throwable` class
- It has two direct subclasses, `Error` and `Exception`
- `Error` - serious problem that a reasonable application should not try to catch
- `Exception` - conditions that a reasonable application might want to catch
- (`Error` and its subclasses are quite rare)

**Exceptions**
- There are (broadly speaking) two forms of `Exception`
	- *Checked Exceptions*
		- Must be **caught** or **re-thrown**
		- Two solutions
			- Can use a try-catch block
			- Or use `throws` keyword, added to method declaration and lists all checked exceptions that may be thrown by the method
	- *Unchecked Exceptions*
		- Any exception that extends either `Error` or `RuntimeException` are unchecked
		- Do not need to be declared in the `throws` clause
		- E.g. `ArrayIndexOutOfBoundsException`
		- E.g. `NullPointerException`
- Writing exceptions:
	- Choose the **most specific** exception that exists, and extend that
	- For **unchecked** exceptions, extend `RuntimeException`
- Four constructors for most Exception classes:
	- `CustomException()`
	- `CustomException(String s)`
	- `CustomException(String message, Throwable cause)`
	- `CustomException(Throwable cause)`
- Exception Methods
	- `getMessage()`
	- `printStackTrace()`
	- `getCause()`
	- `initCause(Throwable cause)`

## Topic 13 - Generics

- **Two kinds of error**
	- Syntactic error - usually picked up at compile-time
		- *Easier to fix*
		- *Transforming run-time errors into compile-time errors is an approach to reducing software errors*
	- Semantic error - present themselves at run-time

- Generics allow programmers to write "generic" code that enforces some stronger type checks at compile time
- Use angle brackets to state type of variables you are using

```java
Stack<String> myStack = new Stack<String>();
```

- If the generic type is already known from initialisation, you can omit the type when creating it:
```java
Stack<String> myStack = new Stack<>();
```

**Benefits of Generics**
- Stronger type checks at compile-time
- Elimination of type casts
- Implementation of generic algorithms tailored to different types

**Naming Convention**
- Single upper case letter
- E - element
- K - key
- N - number
- T - type
- V - value

```java
public clas Box<T> {
	private T item
	
	public box(T o) {
		item = o;
	}

	public void set(T o) {
		item = o;
	}

	public T get() {
		return item;
	}
}
```

- **NOTE: primitives are not allowed in generics, so you have to use the boxed type**
	- *Integer, Float, Double, Long, Short, Byte, Boolean, Character*

- If you use a primitive value as a parameter, Java will **auto-box** the value into an object type.

- If a generic type is not given, an Object type is stored instead, and Java will show a compile-time warning.

- Generic Methods: add the generic type variables before the return type.

```java
public static <K,V> boolean compare(Pair<K,V> p1, Pair<K,V> p2) {
	return p1.getKey().equals(p2.getKey()) && p1.getValue().equals(p2.getValue());
}
```

- Type variables can be restricted to a subclass of a particular type using the `extends` keyword.

```java
public class Box<T extends Number> {
	private T item;
	...
}
```

- This means that `T` must extend the `Number` class.
