# CS130 Revision Notes

## 1. Sets and Functions

### Introduction to Sets

**Def**. A set is an ***unordered collection** of mathematical objects that is *uniquely characterised by their elements*
* This means that order does not matter: $\{a, b\} = \{b, a\}$
* This means that duplicates do not count: $\{a, b\} = \{a, a, b\}$

**Def**. The ***cardinality*** of a set is the size of the set, i.e. the number of elements in the set

Common sets in maths are:
* Natural Numbers - $\mathbb{N}$ (includes 0)
* Integers - $\mathbb{Z}$
* Rational Numbers - $\mathbb{Q}$
* Real Numbers - $\mathbb{R}$
* Complex Numbers - $\mathbb{C}$
	
All of these sets are infinite sets, but not all infinities are the same. 

We can define a set to be countably infinite if there exists a one-to-one mapping between every natural number and every element in the set

The cardinality of $\mathbb{N}$, $\mathbb{Z}$ and $\mathbb{Q}$ are the same, hence all of these sets are countably infinite.
* $\mathbb{Z}$ -- We can traverse 0, then -1 and 1, then -2 and 2, and so on and so forth.
* $\mathbb{Q}$ -- We can think of this a pair of integers such that the denominator is not 0, so it represents a 2D-coordinate plane. We can traverse this coordinate plane in a spiral formation, hitting every possible rational number.
* $\mathbb{R}$ - The cardinality of $\mathbb{R}$ is uncountably infinite, which is strictly greater than the cardinality of the other sets. This is proved using Cantor's Diagonalisation Argument

#### Basic Set Operations

Elements can be part of a set. The statement $a \in A$ means that $a$ is an element of the set $A$.

Sets can be also a subset of another set. The statement $A \subseteq B$ means that $A$ is a subset of $B$.
* There is also the proper subset operation, $\subset$, which means that $A \subseteq B \land A \ne B$

The definition of a subset is: "Every element of A is an element of B", otherwise written as:

$$A\subseteq B \iff \forall x(x \in A \to x \in B)$$

#### Empty Sets

The empty set is a set that contains no elements, written as $\emptyset$
* Tip: The empty set is a subset of any set.
* P.S. A set cannot be an element of itself (i.e. $X \notin X \space \forall X$)

#### Set Builder Notation

One common way of representing sets is with Set-Roster Notation, which is listing out the elements in the set, e.g. $\mathbb{N} = \{0, 1, 2, ...\}$

The other way of representing sets is with set comprehension, or Set-Builder Notation. The general form of this is: $S = \{x \space |\space  ...\}$, where the $|$ is read as "such that"
* E.g. $\{(-1)^n : n \in \mathbb{N}\} = \{-1, 1\}$
* E.g. $\{k^2 : k \in \mathbb{Z}\} = \{k^2 : k \in \mathbb{N}\}$
* E.g. $\{3a + 7b : a, b \in \mathbb{Z}\} = \mathbb{Z}$

### Finite Sequences

**Def**. $X^n$ is the set of all ordered sequences of length $n$ elements in $X$
* E.g. $X = \{a, b, c\}$, so $X^2 = \{aa, ab, ac, ba, bb, bc, ca, cb, cc\}$
* Most of the time, the tuple brackets are included but sometimes it is possible to omit it.
* The elements of $X^n$ are ordered sequences of elements in $X$, also known as a tuple.

For any set $X$, $|X^n| = |X|^n$
* $X^n = \{(x_0, x_1, ..., x_n) : x_0, x_1, ..., x_n \in X\}$

Special Case: $X^0 = \{()\}$, which is a set containing an empty sequence
* This makes sense due to the law of cardinality: $|X^n|$ = $|X|^n$, so $|X^0| = |X|^0 = 1$
* Reason: 1 is the multiplicative identity so your base of multiplying is 1

Hence, $\mathbb{Z}^2$ is the set of all possible integer coordinates on a grid
* $\mathbb{R}^2$ is the entire cartesian plane.

### Interval Notation

**Def**. The closed interval is defined as $[a;  b] = \{x : a \le x \le b\}$

**Def**. Similarly, the open interval is defined as $(a;b) = \{x : a<x<b\}$
* Closed and open interval notation can be combined, e.g. $[0, 3)$
* Intervals can also be raised to a power: $[0, 1]^2 = \{(x, y) : x, y \in \mathbb{R}, 0 \le x \le 1, 0 \le y \le 1 \}$, which is the unit square

### Functions

**Def**. A function is a **mapping** from a **domain** to a **codomain** satisfy the properties below:
* Every input in the domain must map to an output in the codomain
* Every input must map to exactly one output

Definitions:
* **DOMAIN**: The set of inputs to the function
* **CODOMAIN**: The set of possible outputs to the function that contains the range, can be thought of as the **type** of the output
* **RANGE**: The literal set of outputs

For example, the function $f(x) = \pm\sqrt{1-x^2}$ is not a function because one $x$ value maps to multiple $y$ values, e.g. $f(0) = \pm 1$

However, the function $g(x) = \sqrt{1-x^2}$ is a function because one $x$ value maps to exactly one $y$ value, provided that we choose a suitable domain, e.g. $-1 \le x \le 1$. In this case, the range would be $0 \le x \le 1$, or the interval $[0;1]$
* E.g. if the domain was $(-1;1)$, the range would be $(0;1]$.
* E.g. if the domain was $\{-1, 0, 1\}$, the range would be $\{0, 1\}$

#### Definition of a Function

If there is a rule that assigns to every $x \in X$ an unambiguously determined $y \in Y$, then we say there is a function from $X$ to $Y$

**Notation:** $f : X \to Y$

**Terminology:** 
* $X$ is the domain, $Y$ is the codomain
* Range = $\{f(x) : x \in X\} \subseteq Y$

E.g. to make the unit circle a function:
* $f(x) = \sqrt{1-x^2}$
* $f : [-1;1] \to [0;1]$
* Other possible codomains are $\mathbb{R}$, $\mathbb{R_+}$, $\mathbb{R_{\ge 0}}$ (the last one is more precise, use that)
* It happens to be that $[0;1]$ is also the range

E.g.
* $U$ : the set of all Warwick undergraduate students
* $S$ : the set of all Warwick staff
* $t(u)$ = the personal tutor of $u$, $t : U \to S$

E.g. 
* $D = \{0, 1\}$
* $g(x) = \begin{cases} y & \exists y,x=y0 \\ y & \exists y,x=y1\end{cases}$
* $g : D^n \to D^{n-1}, n \geq 2$
* This function divides the binary number $x$ by 2 by removing the last digit (bitwise right shift)

## 2. Logic of Propositions

### Introduction to Propositions

**Propositions can be true or false**
* Atomic propositions are denoted by single lowercase letters $p$, $q$ 
* Compound propositions:
	- $\neg p$ (negation)
	- $p \land q$ (conjunction)
	- $p \lor q$ (disjunction)
	- $p \implies q$ (implication)
	- $p \iff q$ (if and only if, equivalence)
	- $p \oplus q$ (exclusive or - XOR)
	- $m(p, q, r)$ (majority, which is true iff at least two inputs are true)

**Truth table for conjunction**

| $p$ | $q$ | $p \land q$ |
| --- | --- | ----------- |
| F   | F   | F           |
| F   | T   | F           |
| T   | F   | F           |
| T   | T   | T           |

**Truth table for disjunction**

| $p$ | $q$ | $p \lor q$ |
| --- | --- | ---------- |
| F   | F   | F          |
| F   | T   | T          |
| T   | F   | T          |
| T   | T   | T          |
**Truth table for implication**

**Def**. Definition of implication: $p \implies q \iff \neg p \lor q$

| $p$ | $q$ | $p \implies q$ |
| --- | --- | -------------- |
| F   | F   | T              |
| F   | T   | T              |
| T   | F   | F              |
| T   | T   | T              |

### Boolean Functions

**Def**. $\mathbb{B} = \{F, T\}$

**Def**. A boolean function is $f : \mathbb{B}^n \to \mathbb{B}$, where $n$ is the number of boolean variables

If a boolean function acts on an atomic proposition, there are four possible boolean functions:

| $p$ | $f(p) = F$ | $f(p) = p$ | $f(p) = \neg p$ | $f(p) = T$ |
| :-- | ---------- | ---------- | --------------- | ---------- |
| F   | F          | F          | T               | T          |
| T   | F          | T          | F               | T          |

If there are $n$ atomic propositions as inputs, there are $2^{2^n}$ possible boolean functions
* **Beware:** exponentiation is not associative!

| $p$ | $q$ | $r$ | $m(p,q,r)$ |
| :-- | --- | --- | ---------- |
| F   | F   | F   | F          |
| F   | F   | T   | F          |
| F   | T   | F   | F          |
| F   | T   | T   | ***T***    |
| T   | F   | F   | F          |
| T   | F   | T   | ***T***    |
| T   | T   | F   | ***T***    |
| T   | T   | T   | ***T***    |

**NOTE**. $m(p, q, r)$ is defined to be true when at least 2 inputs are true.
* Notice that 4 outputs are true and 4 outputs are false.

**Truth Table for Equivalence (If and Only If):**

| $p$ | $q$ | $p \iff q$ |
| --- | --- | ---------- |
| F   | F   | T          |
| F   | T   | T          |
| T   | F   | T          |
| T   | T   | T          

| $p$ | $q$ | $\neg p$ | $\neg p \lor q$ | $(\neg p \lor q) \iff (p \implies q)$ |
| :-- | --- | -------- | --------------- | ------------------------------------- |
| F   | F   | T        | T               | T                                     |
| F   | T   | T        | T               | T                                     |
| T   | F   | F        | F               | T                                     |
| T   | T   | F        | T               | T                                     |

$(\neg p \lor q) \iff (p \implies q)$ is always true (*tautology*)
Hence the definition of implication $p \implies q$ is $\neg p \lor q$

**Def.** A proposition is a *tautology* if it is TRUE regardless of the values of atomic propositions.

**Def.** Propositions $A$ and $B$ are *logically equivalent* if $A \iff B$ is a $tautology$
* Notation of Logical Equivalence: $A \equiv B$

#### Understanding Logical Implication

**Promise:** Every card has a shape on one side and a pattern on the other side
**Check:** For every card if it has a triangle on one side, then it has stripes on the other side.

E.g. Card 1 has a triangle, Card 2 has stripes, Card 3 has a circle, Card 4 has zigzags

- Card 1 must be checked to see if there are stripes on the other side.

- Card 2 doesn't have to be checked because there are already stripes we can see, so it doesn't matter what shape is on the other side.
	- If the shape revealed is a triangle, the check is successful.
	- If the shape revealed is not a triangle, we don't care.
	
* Card 3 doesn't have to be checked because a circle is not a triangle so we don't care.

* Card 4 has to be checked to see if there is a triangle on the other side to disprove the claim.
	- $p \implies q$ is the same as $\neg q \implies \neg p$ so we need to check if there is NO triangle.

#### Laws of Propositional Logic

**Associativity** $(x \lor y) \lor z \equiv x \lor (y \lor z)$, $(x \land y) \land z \equiv x \land (y \land z)$
- This also applies to XOR, as it is addition modulo 2

**Commutativity** $x \lor y \equiv y \lor x$, $x \land y \equiv y \land x$

**De Morgan's Laws** $\neg(x \lor y) \equiv \neg x \land \neg y$, $\neg(x \land y) \equiv \neg x \lor \neg y$

**Double Negation** $\neg \neg x \equiv x$

**Excluded Middle Law**  $x \lor \neg x \equiv T$, $x \land \neg x \equiv F$

**Distributivity** (two laws)
* $x \lor (y \land z) \equiv (x \lor y) \land  (x \lor z)$
* $x \land (y \lor z) \equiv (x \land y) \lor (x \land z)$

**Absorption** (two laws)
* $x \lor (x \land y) \equiv x$
* $x \land (x \lor y) \equiv x$

**Identity** (two laws)
* $x \lor F \equiv x$
* $x \land T \equiv x$

**Annihilation** (two laws)
* $x \lor T \equiv T$
* $x \land F \equiv F$

**Idempotence** (two laws)
* $x \land x \equiv x$
* $x \lor x \equiv x$

#### Contrapositive of an Implication

***Theorem***:
* $A \implies B \equiv \neg B \implies \neg A$
* Sometimes it is easier to prove the contrapositive than the original statement

***Proof:***
	$\neg B \implies \neg A \equiv \neg(\neg B) \lor \neg A$ (using the definition of implication)
			$\equiv B \lor \neg A$ (double negation)
			$\equiv \neg A \lor B$ (commutativity)
			$\equiv A \implies B$ (using the definition again)

## 3. Logic of Predicates

#### Introduction to Predicates

* $x < 0$ is a **predicate** as the value of this predicate depends on the value of $x$
	* It is **not** a statement as it is not true or false at the moment
	* One way of turning this into a statement is by specifying the value of $x$

#### Quantifiers

* **Quantifiers** can be used on a **predicate** to turn it into a statement.
	* E.g. $\exists x \in \mathbb{Z}, x < 0 = T$
	* E.g. $\exists x \in \mathbb{N}, x < 0 = F$
	* E.g. $\forall x \in \mathbb{R}, x < 0 = F$
	* E.g. $\forall x \in \mathbb{R_{<0}}, x < 0 = T$

- Two types of quantifiers:
	- "For all": $\forall$
	- "There exists": $\exists$

- E.g. $(\forall x \space \exists y, \space x = y) = T$ regardless of the set $x, y$ are from because we can select a value of $y$ that is equal to $x$. 

* E.g. $(\exists y \space \forall x, \space x = y) = F$, but only when the cardinality of the universe is at least 2, because there is only one value of $y$ but there are multiple values of $x$ that have to be equal to.
* But if $(\exists y \in \{5\} \space \forall x \in \{5\}, \space x = y) = T$ as the universe is a singleton set

* $\forall x \in \emptyset, \phi(x) = T$, because $\forall$ is closely related to $\land$, and the identity of $\land$ is $T$. 
* Similarly, $\exists x \in \emptyset, \phi(x) = F$

* From yesterday's lecture: $\forall i \in \{1, 2, 3, 4\}, t(i) \implies s(i) \equiv t(1) \implies s(1) \land t(2) \implies s(2) \land t(3) \implies s(3) \land t(4) \implies s(4)$

$P(x, y), \space x \in \{a, b, c, d\}, \space y \in \{1, 2, 3, 4, 5, 6\}$
- A predicate is a function that maps an input to a boolean value, True or False
- e.g. $P(b, 2) \equiv T$
* e.g. $\exists x P(x, 2) \equiv T$
* e.g. $\exists x P(x, 6) \equiv F$
* e.g. $\forall x \exists y P(x, y) \equiv T$ means that for every row, there exists a column that contains True. 
-  e.g. $\forall y \exists x P(x, y) \equiv F$ means that for every column, there exists a row that contains True.
* e.g. $\exists x \exists y, \neg P(x, y) \equiv T$ means that there exists a cell in the table such that it contains a False.
* e.g. $\forall x \forall y, \neg P(x, y) \equiv F$ means that all cells contain False.
* e.g. $\exists y \forall x P(x, y) \equiv T$ means that there exists a column such that all rows contain True.
* e.g. $\exists y \forall x, \neg P(x, y) \equiv T$ means that there exists a column such that all rows contain False.

**Analogy:**
- The universal quantifier (for all) attempts to find a value that is false to disprove the statement.
- The existential quantifier (there exists) attempts to find a value that is true to prove the statement.

**For example**,

<div class="math-left">

$$
\begin{aligned}
\forall x \in \mathbb{Z} \space (Even(x) \lor Odd(x))
& \equiv T \\
& \equiv \forall x \in \mathbb{Z} \space ((\exists y \in \mathbb{Z}, x = 2y) \lor (\exists y \in \mathbb{Z}, x = 2y + 1)) \\
& \equiv \forall x \in \mathbb{Z} \space ((\exists y \in \mathbb{Z}, x = 2y) \lor (\exists u \in \mathbb{Z}, x = 2u + 1)) \\
\end{aligned}
$$

</div>

* This is because the values $u$ and $y$ only exist within the $\exists$ statement, so the two $y$'s are not related at all outside the $\exists$ statement.

$\equiv \forall x \in \mathbb{Z} \space \exists y \in \mathbb{Z}, (x = 2y \lor x = 2y + 1) \equiv T$

This is because either or statement will be true, so the disjunction of those statements would be true.

**Law:**
$\exists y \space (Q(y) \lor R(y)) \equiv (\exists y \space Q(y)) \lor (\exists y \space R(y))$
* This is true because for the LHS to be true, there must be a value of $Q(y)$ or $R(y)$ is true, so either $\exists$ statement must contain the true value, and $T \lor x \equiv T$
* Another explanation: $\exists$ is a multi-or operation, and OR is commutative.

**Note:**
$\forall y \space (Q(y) \lor R(y)) \ne ((\forall y \space Q(y)) \lor (\forall y \space R(y))$

An example: 
- For all y, it is either even or odd = true.
- For all y it is even OR for all y it is odd = false or false = false.

#### Unique Existential Operator

$\exists ! x : x^2 + 2x + 1 = 0 \equiv T$

$\exists ! x, P(x)$ means that there exists only one value of $x$ such that $P(x)$ is true

**Definition of Unique Existential Operator**
$\exists! x, P(x) :\equiv (\exists x, P(x)) \land (\forall y, y \ne x \implies \neg P(y))$


$\exists ! x : x^2 + 2x+1 = 0 \equiv T$ (x = -1 is the only solution)
$\exists! x : x^2 - 1 = 0 \equiv F$ (x = 1 or x = -1)

- Note: "There exists unique" is not one of the two main quantifiers
- $:\equiv$ is the definition operator (also $:=$)

$\exists! x \space P(x) :\equiv \exists x \space:P(x) \land \forall y \space (y \ne x \implies \neg P(y))$
$\equiv \exists x : P(x) \land \neg \exists y (y \ne x \land P(y))$

**Law:**
$\neg \exists y \space Q(y) \equiv \forall y \space \neg Q(y)$
$\neg \forall y \space Q(y) \equiv \exists y \space \neg Q(y)$

**Law:**
$\neg (p \implies q) \equiv \neg (\neg p \lor q) \equiv p \land \neg q$

**Proof:**
$\neg \exists y \space (y \ne x \land P(y)) \equiv \forall y \space \neg (y \ne x \land P(y))$
				$\equiv \forall y \space (\neg (y \ne x) \lor (\neg P(y)))$
				$\equiv \forall y \space (y \ne x \implies \neg P(y))$

## 4. Introduction to Proofs

#### Theorem 1:

If $x \in \mathbb{Z}$ and $5x+3$ is odd, then $x$ is even

**Proof 1:**

Assume $5x+3$ is odd
Then $5x = (5x + 3) - 3$ is even, because 3 is odd, and the difference between two odd numbers is even.
So, $x = \frac{5x}{5}$ is even because even / odd is even if the result is an integer.
**QED**

**Proof 2:** (by Contrapositive)

We try to prove (x is odd $\implies$ $5x+3$ is even)
Assume $x$ is odd
Then $x = 2y + 1$ for some $y \in \mathbb{Z}$
Then $5x + 3 = 5(2y+1) + 3 = 10y + 8 = 2(5y+4) = 2z$ for some $z \in \mathbb{Z}$
Therefore $5x + 3$ is even
**QED**

#### Theorem 2:

$\forall n \in \mathbb{N}, 1 + (-1)^n(2n-1)$ is divisible by 4
We could consider two cases, $n$ is even and $n$ is odd

**Case 1:** $n$ is even $\iff n = 2k$ for some $k \in \mathbb{N}$

$1 + (-1)^n(2n-1) = 1 + (-1)^{2k}(2(2k) - 1) = 1 + 4k - 1 = 4k$
Therefore $1 + (-1)^n(2n-1)$ is a multiple of 4 if $n$ is even

**Case 2:** $n$ is odd $\iff n = 2k + 1$ for some $k \in \mathbb{N}$

$1 + (-1)^n(2n-1) = 1 + (-1)^{2k+1}(2(2k+1)-1) = 1 -(4k + 1) = 1 - 4k - 1 = -4k$
Therefore $1 + (-1)^n(2n-1)$ is a multiple of 4 if $n$ is odd

**QED**

- Note: make sure that all of the cases cover all of the possibilities (cases do not have to be disjoint)

#### Theorem 3:

$\sqrt{2} \notin \mathbb{Q}$

**Proof:** (by Contradiction)

Assume $\sqrt{2} \in \mathbb{Q}$
Then $\sqrt{2} = \frac{n}{m}, n \in \mathbb{N}, m \in \mathbb{N} \setminus \{0\}$
Without loss of generality, $gcd(n, m) = 1$
We have $2 = (\sqrt 2)^2 = \frac{n^2}{m^2}$, so $n^2 = 2m^2$, so $2|n$
So $n = 2k$ for some $k \in \mathbb{Z}$
But $m^2 = \frac{n^2}{2} = \frac{4k^2}{2} = 2k^2$, so $2|m$, so $gcd(n,m) > 1$
This is a contradiction
So $\sqrt 2 \notin \mathbb{Q}$
**QED**

#### Theorem 4:

$(\exists x \space P(x)) \lor (\exists x \space Q(x)) \equiv \exists x \space (P(x) \lor Q(x))$
$(\forall x \space P(x)) \land (\forall x \space Q(x)) \equiv \forall x \space (P(x) \land Q(x))$

**Proof for second theorem:**

RHS $\equiv \forall x \space (P(x) \land Q(x))$
	$\equiv \neg \neg \forall x (P(x) \land Q(x))$ (double negation)
	$\equiv \neg \exists x \space (\neg (P(x) \land Q(x)))$ (converting $\neg \forall \space P(x)$ into $\exists x \space \neg P(x)$)
	$\equiv \neg \exists x \space (\neg P(x) \lor \neg Q(x))$ (De-Morgan's law)
	$\equiv \neg(\exists x \space \neg P(x) \lor \exists x \space \neg Q(x))$ (distributing the $\lor$ via $\exists$ using first theorem)
	$\equiv \neg \exists x \space \neg P(x) \land \neg \exists x \space \neg Q(x)$ (De-Morgan's law)
	$\equiv \forall x \space P(x) \land \forall x \space Q(x)$ (converting $\neg \exists x \space P(x)$ into $\forall x \space \neg P(x)$)
	$\equiv$ LHS
**QED**

#### Theorem 5: 

There exists irrational $a$ and $b$ such that $a^b$ is rational.

**Proof:**
	We have $(\sqrt{2} ^ \sqrt{2}) ^ \sqrt{2} = \sqrt{2} ^ {2} = 2$ which is rational
	Case $\sqrt 2 ^ \sqrt 2$ is irrational:
		- Then the proof is complete as $a = \sqrt 2 ^ \sqrt 2$, and $b = \sqrt 2$, and $a ^ b = 2$ which is rational
		- $b$ is irrational by Theorem 3.
	Case $\sqrt 2 ^ \sqrt 2$ is rational:
	- The proof is also complete as $a = \sqrt 2$ and $b = \sqrt 2$, and $b$ is irrational by Theorem 3.
	Hence the proof is complete for both disjoint cases, so the proof is complete.
	**QED**

- Note: we didn't have to find values $a$ and $b$ such that $a^b$ is irrational to prove the theorem

## 5. More on Sets

#### Set Operations
- **Set Intersection** - $A \cap B \equiv \{x \space | \space x \in A \land x \in B\}$
- **Set Difference** - $A \setminus B \equiv \{x \space | \space x \in A \land \neg x \in B\}$
	- $\neg x \in B \equiv x \notin B$
- **Symmetric Difference** - $A \triangle B = (A \setminus B) \cup (B \setminus A)$
	- Analogous to the XOR operation in propositional logic

#### Theorem regarding Symmetric Difference

$A \triangle B \equiv (A \cup B) \setminus (A \cap B)$

**Proof:**

Recall $A = B \equiv \forall x, x \in A \iff x \in B$

**SUBSET direction**
Suppose $x \in A \triangle B$ (we need to show that $x \in (A \cup B) \setminus (A \cap B)$)
$\implies x \in (A \setminus B) \cup (B \setminus A)$

Divide into two disjoint cases (check venn diagram)
**Case** $x \in $A \setminus B$:
	$\implies x \in A \land x \notin B$
	From $x \in A, x \in A \cup B$
	From $x \notin B, x \notin A \cap B$
	$\implies x \in (A \cup B) \setminus (A \cap B)$
Case $x \in B \setminus A$:
	$\implies x \in B \land x \notin A$
	From $x \in B, x \in A \cup B$ 
	From $x \notin A, x \notin A \cap B$
	$\implies x \in (A \cup B) \setminus (A \cap B)$

**SUPERSET direction**
Proving the other direction: $x \in (A \cup B) \setminus (A \cap A) \implies x \in (A  \setminus B) \cup (B \setminus A)$

#### Laws of Set Operations

**Associativity**
$(A \cup B) \cup C \equiv A \cup (B \cup C)$
$(A \cap B) \cap C \equiv A \cap (B \cap C)$

**Commutativity**
$A \cup B \equiv B \cup A$
$A \cap B \equiv B \cap A$

**Distributivity**
$A \cup (B \cap C) \equiv (A \cup B) \cap (A \cup C)$
$A \cap (B \cup C) \equiv (A \cap B) \cup (A \cap C)$

**Idempotence**
$A \cup A \equiv A$
$A \cap A \equiv A$

If $A \subseteq U$, where $U$ is the universal set, then:

**Annihilation**
$A \cap \emptyset \equiv \emptyset$
$A \cup U \equiv U$

**Identity**
$A \cup \emptyset \equiv A$
$A \cap U \equiv A$

- $U$ plays the role of $T$ in propositional logic
- $\emptyset$ plays the role of $F$ in propositional logic

From there, we can define the equivalent of "negation" in propositional logic:

**Complement**
$\bar{A}^U$ = $U \setminus A$

#### Cartesian Product

**Definition**: The cartesian product of sets $A$ and $B$ is:
$A \times B \equiv \{(a, b) : a \in A$ and $b \in B\}$

In general, $(a, b) \ne (b, a)$ (except $a = b$), as this is an ordered pair
$\{a, b\} \equiv \{b, a\}$ because sets are unordered

$A \times B \times C$ = $\{(a, b, c) : a \in A, b \in B,  c \in C\}$
- defined as the set of ordered triplets from $A, B, C$

$(A \times B) \times C$ is generally not the same as $A \times (B \times C)$
The first one contains elements $((a, b), c)$, and the second one contains elements $(a, (b, c))$

The Cartesian Product is **NOT** commutative
$A \times B \ne B \times A$ in general

#### Power Set

**Power Set**: The power set of a set $A$ is:
$2^A = \{X : X \subseteq A\}$ = The set of all subsets of $A$

$2^{\{a, b, c\}} \equiv \{\emptyset, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}$

The motivation for this notation is that the number of subsets of a set $A$ is $2^{|A|}$
So for finite sets $A$, $|2^A| = 2^{|A|}$
- This is because there is a binary choice for whether an element is IN, or OUT.
- So the cardinality of the power set is $2$ multiplied $n$ times, where $n$ is the cardinality of the set.

For finite sets $A$ and $B$, we have $|A \times B| = |A| \times |B|$

Note: $2^{\emptyset} = \{\emptyset\}$
Note: $2^{2^{\emptyset}} = 2^{\{\emptyset\}} = \{\emptyset, \{\emptyset\}\}$, so $|2^{2^{\emptyset}}| = 2^{2^0} = 2^1 = 2$

#### Big Intersection and Big Union Operators

**Notation:**
$a \space| \space b$ if and only if $\exists k \in \mathbb{Z}, b = ak$
- read "a divides b"
- equivalent to $b \bmod a = 0$
- equivalent to $b \equiv 0 \pmod a$

$\{k \in \mathbb{Z} : 2\space |\space b\}$ is the set of all even integers

Lets define some new notation:
	$D_a = \{k \in \mathbb{Z} : a \space | \space b\}$
- Using this notation, the above set is $D_2$

$\{b \in \mathbb{Z} : \forall \space prime \space a < 7, a | b\}$  = all the multiples of 30
= $\{k \in \mathbb{Z} : 2 \space | \space b \land 3 \space | \space b \land 5 \space | \space b\}$ 
= $\{k \in \mathbb{Z} : b \in D_2 \land b \in D_3 \land b \in D_5\}$
= $D_2 \cap D_3 \cap D_5$
= $\bigcap_{a \in \{2, 3, 5\}}{D_a}$
- where the $\bigcap$ symbol is the big intersection symbol
- Similar to $\sum$ being the big summation symbol, $1+2+...+n = \sum_{i=1}^n{i}$
- Can also write like $\bigcap{\{D_2, D_3, D_5\}}$

Let $P = \{a \in \mathbb{N} : a \space is \space prime\}$

$\bigcup_{a \in P}{D_a}$ = $\mathbb{Z} \setminus \{1, -1\}$
$\bigcap_{a \in P}{D_a} = \{0\}$

e.g. the Big Union $\bigcup$
$\bigcup{\{\emptyset, \{1, 2\}, \{\emptyset\}, \{1, \{2\}\}\}}$ = $\{1, 2, \emptyset, \{2\}\}$
- contains 4 elements

## 6. Relations

#### Introduction to Relations

**Definition**: A relation between sets $A$ and $B$, 
		i.e. $R : A \leftrightarrow B$, i.e. $A \underleftrightarrow{R} B$
		is a set $R \subseteq A \times B$
Alternative notation is $aRb \iff(a, b) \in R$

Examples: 
- Divisibility Relation: $\{(a, b) \in \mathbb{Z}^2 : a \space| \space b\}$
- $\{(a, b) \in \{2, 3, 4\} \times \{5, 6, 7, 8\} : a \space | \space b\}$ = $\{(2, 6), (2, 8), (3, 6), (4, 8)\}$

Relations can be depicted as a **bipartite graph** between two sets of nodes, elements in A and elements in B, and by drawing edges where $(a, b) \in R \subseteq A \times B$

E.g. $A = B$ = set of all people
	$P = (a, b) :a$ is a parent of $b \}$

$G = \{(a, b) : (a, c) \in P \land (c, b) \in P$ for some $c\}$
$aGb \iff \exists c : aPc \land cPb$

#### Relation Composition

**Definition**: The composition of two relations $R : A \leftrightarrow B$ and $S : B \leftrightarrow C$ is the relation
		$R \circ S \equiv \{(a, c) : aRb \land bRc$ for some $b \in B\}$, $(a, b) \in R, (b, c) \in S$

E.g.
$R = \{(n, m) \in \{2, 3, ..., 9\}^2 : n = m^2\} = \{(4, 2), (9, 3)\}$

E.g.
$S = \{(m, k) \in \{2, 3, ..., 9\}^2 : m \space | \space k\}$
$=\{(2, 2), (2, 4), (2, 6), (2, 8), (3, 3), (3, 6), (3, 9), (4, 4), (4, 8), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9)\}$

A relation is said to be **ON** a set if the relation spans between the same set on both sides.
- One copy of the set can be drawn instead of two copies if the relation is **ON** the set.
- If $(a, a) \in R : A \leftrightarrow A, a \in A$, then a "self-loop" can be drawn going from the number to itself.

$R \circ S = \{(4, 2), (4, 4), (4, 6), (4, 8), (9, 3), (9, 6), (9, 9)\}$
- Composition of relations is following arrows from the first set in the first relation to the second set in the last relation

$S \circ R = \{(2, 2), (4, 2), (3, 3), (9, 3)\}$

Hence in general, $R \circ S \ne S \circ R$ (except $R = R, \space R : A \leftrightarrow A$)

$< : \mathbb{N} \leftrightarrow \mathbb{N}$
$> : \mathbb{N} \leftrightarrow \mathbb{N}$

$< \circ >$ relates every natural number to every natural number (e.g. 0 -> 10 and 10  -> 5 so 0 -> 5)
$< \circ > \space \ne \space > \circ <$ because 0 is not greater than any natural number, so there is no edge coming from 0, but 0 is less than every natural number (exclude 0)

#### Inverse of a Relation

**Definition:** The inverse of a relation $R : A \leftrightarrow B$ is the relation $R^{-1} = \{(b, a) : aRb\}$
- e.g. $> = <^{-1}$, $< = >^{-1}$

The empty set is its own inverse: $\emptyset ^{-1} = \emptyset$
The equality relation is its own inverse: $(=^{-1}) = (=)$
$=_ {A} \space = \{(a, a) : a \in A\}$
e.g. $(2, 4), (4, 8) \in R^{-1} \circ S$ because 4 divides the square of 2, and 8 divides the square of 2.

**Theorem:**
$S^{-1} \circ R^{-1} \equiv (R \circ S) ^{-1}$
- The inverse operator distributes but reverses the order of $R$ and $S$

#### Properties of Relations

Consider a relation $R$ **on** a set $S$, defined as $R : S \leftrightarrow S$

**Reflexive:** $\forall x \in S : \space xRx$ -> every element is related to itself
**Symmetric:** $\forall x, y \in S : \space xRy \implies yRx$
- $\forall x, y \in S \equiv \forall x \in S, \forall y \in S$
**Anti-symmetric:** $\forall x, y \in S : (xRy \land yRx) \implies x = y$
**Transitive:** $\forall x, y, z \in S : (xRy \land yRz) \implies xRz$

#### Examples (on $\mathbb{Z}$)

Consider the relation $x = y$
- It is reflexive, as every integer is equal to itself
- It is symmetric, as $y = x$, then $x = y$
- It is anti-symmetric, as $x = y \land y = x \implies x = y$ as $x = y \implies x = y$
- It is transitive, as if $x = y \land y = z$, then $x = z$

Consider the relation $x \le y$
- It is reflexive, as every integer is less than or equal to itself
- It is not symmetric, as e.g. $5 \le 7$ but $7 \centernot\le 5$
- It is anti-symmetric, as if $x \le y \land y \le x$ then $x = y$
- It is transitive, as if $x \le y \land y \le z$ then $x \le z$

Consider the relation $x < y$
- It is not reflexive, as $x < x \equiv F$
- It is not symmetric, as e.g. $5 < 7$ but $7 \centernot\le 5$
- It is anti-symmetric, as there are no values of $x, y$ such that $x < y \land y > x$, so the vacuous implication holds for all $x, y$
- It is transitive, similar to $x \le y$

Consider the total relation, every integer is related to every integer:
	$xRy \space \forall x, y \in \mathbb{Z} \equiv T \equiv \mathbb{Z}^2$
- It is reflexive
- It is symmetric, as all $x$ and $y$ are related
- It is not anti-symmetric, as $5R7 \land 7R5$ but $5 \ne 7$
- It is transitive, as the RHS of the implication is always true

Consider the relation $x \equiv y \pmod 3$
- It is reflexive, as $x = x$ for all $x$
- It is symmetric, as $x \bmod 3 = y \bmod 3 \equiv y \bmod 3 = x \bmod 3$
- It is not anti-symmetric, as $5 \equiv 2 \pmod 3$ and $2 \equiv 5 \bmod 3$ but $2 \ne 5$
- It is transitive, as they all share the same remainder

#### Examples (on $2^A$, the power set of $A$)

Consider the relation $\subseteq$
- It is reflexive, as $X \subseteq X$ for all $X$
- It is not symmetric, as smaller sets can be a subset of a larger set but the larger set cannot be a subset of the smaller set
- It is anti-symmetric, as if $X \subseteq Y \land Y \subseteq X \equiv X = Y$
- It is transitive, as if $X \subseteq Y$ and $Y \subseteq Z$, every element of $X$ is in $Y$, and every element of $Y$ is in $Z$, so every element of $X$ is in $Z$

#### Equivalence and Partial Order Relations

**Definition:** A relation $R$ on a set $S$ is an **equivalence** relation if it is *reflexive, symmetric and transitive*

**Definition:** A relation $R$ on a set $S$ is a **partial order** if it is *reflexive, anti-symmetric and transitive*

**Definition:** A total relation is a partial-order relation if also $\forall x, y \in S, xRy \lor yRx$

**Note:** An equivalence relation can be depicted as diving a set into partitions, were each partition has an **equivalence class*

#### Equivalence Relations

Suppose $E$ is an equivalence relation on a set $S$
- Reminder: $E$ is reflexive, symmetric and transitive

**Definition**: $[x] := \{y \in S : xEy\}$ is the **equivalence class** of $x$
- An alternative notation is $[x]_E$, which denotes that the equivalence class is with respect to the equivalence relation $E$
- Equivalence classes form a partition of the set $S$, such that each equivalence class is a **disjoint subset** of the set $S$

**Lemma 1:** If $y \in [x]$, then $[y] = [x]$ (for all $x, y \in S$)
**Proof:** 
	**Subset direction:**
		Suppose $z \in [y]$. Then $yEz$
		Also from $y \in [x]$, we have $xEy$
		By transitivity of $E$, $xEy \land yEz \implies xEz$
		$\therefore z \in [x], \therefore [y] \subseteq [x]$ *(endcase)*
	**Superset direction:**
		Suppose $z \in [x]$. Then $xEz$
		Also from $y \in [x]$, we have $xEy$
		By symmetry of $E$, $xEy \implies yEx$
		By transitivity of $E$, $yEx \land xEz \implies yEz$
		$\therefore z \in [y], \therefore [x] \subseteq [y]$ *(endcase)*
	$\therefore [y] = [x]$
	**QED**

**Lemma 2:** Either $[x] = [y]$, or $[x] \cap [y] = \emptyset$ (for all $x, y \in S$)

**Proof technique:**
- $P \lor Q \equiv \neg P \implies Q \equiv \neg Q \implies P$

**Proof:** It suffices to show that $[x] \cap [y] \ne \emptyset \implies [x] = [y]$ 
													($Q = [x] \cap [y] = \emptyset$, $P = [x] = [y]$)
	Suppose $z \in [x] \cap [y]$
	Then $z \in [x] \land z \in [y]$
	By Lemma 1, $[z] = [x]$ and $[z] = [y]$
	$\therefore [x] = [y]$
	**QED**

**Theorem:** The equivalence classes of $E$ partition $S$,
		i.e. their union is $S$ and they are pairwise disjoint
		i.e. $\bigcup \space \{[x] : x \in S\} = S \land \forall x, y \in S, x \ne y \implies [x] \cap [y] = \emptyset$
- Notice that the second statement was already proved in **Lemma 2**
- To prove the first case, $\{[x] : x \in S\} \subseteq S$ and $S \subseteq \{[x] : x \in S\}$
	- The second half is trivial, because $E$ is reflexive, so $x \in [x]$, so every value of $x$ belongs to an equivalence class
	
#### Quotient Sets of Equivalence Relations

Suppose $E$ is an equivalence relation on a set $S$
Then $\frac{S}{E}$ the quotient of $S$ with respect to $E$
is $\{[x]_E : x \in S\}$, the set of all equivalence classes with respect to $E$

| Equivalence relation on $\mathbb{Z}$ | Quotient Set                                                                 |
| :----------------------------------- | ---------------------------------------------------------------------------- |
| $x = y$                              | $\{\{x\} : x \in \mathbb{Z}\}$                                               |
| $\mathbb{Z}^2$                       | $\{\mathbb{Z}\}$                                                             |
| $x \equiv y \pmod 3$                 | $\{\{..., -3, 0, 3, ...\}, \{..., -2, 1, 4, ...\}, \{..., -1, 2, 5, ...\}\}$ |

## 7. Functions

#### Introduction to Functions

**Definition:** A relation $F : X \leftrightarrow Y$ is a function if $\forall x \in X, \exists! \space y \in Y : xFy$
- This means that every value of $x$ is related to one and only one value of $y$

For such $F$, we write $F(x) = y$ instead of $xFy$

| Example relations                                   | Is a Function?                                   |
| :-------------------------------------------------- | ------------------------------------------------ |
| $\{(x, x^2) : x \in \mathbb{R}\}$                   | Yes                                              |
| $\{(x^2, x) : x \in \mathbb{R}\}$                   | No                                               |
| $A := \{(x^2, x) : x \in \mathbb{R}_{\ge 0}\}$      | Yes, provided the domain is $\mathbb{R}_{\ge 0}$ |
| $A : \mathbb{R} \leftrightarrow \mathbb{R}$         | No                                               |
| $A : \mathbb{R}_{\ge 0} \leftrightarrow \mathbb{R}$ | Yes                                              |
First function: $g : \mathbb{R} \to \mathbb{R}, g(x) = x^2$
Third function: $h : \mathbb{R}_{\ge 0} \to \mathbb{R}, h(x) = \sqrt{x}$

#### Function Notation

$f(X) = \{f(x) : x \in X\}$ is the "image" of the function, where $X$ is a set
	E.g. $g(\mathbb{R}) = \{x^2 : x \in \mathbb{R}\} = \mathbb{R}_{\ge 0}$
$f^{-1}(Y) = \{x : f(x) \in Y\}$ is the "inverse image" of the function
	E.g. $g^{-1}([-1;1]) = \{x : -1 \le x^2 \le 1\} = [-1; 1] = g^{-1}([0;1])$
$f^{-1}(y) = \{x : f(x) = y\}$.
	E.g. $g^{-1}(1) = \{-1, 1\}$
$f^{-1}(Y) = \bigcup_{y \in Y}f^{-1}(y)$

Restricted Function: $f |_X = \{(x, f(x)) : x \in X\}$
	$X$ must be included within the domain of $f$

E.g. $h|_{[0;4]} = \{(x, \sqrt{x}) : 0 \le x \le 4\}$

$f \circ f'(x) := f'(f(x))$
for $f : X \to Y$ and $f' : Y \to Z$

E.g. $f(x) = x^2 + 1$, $f'(x) = x - 1$
	$f \circ f'(x) = x^2$
	$f' \circ f(x) = (x-1)^2+1 = x^2 - 2x + 2$

$Y^X := \{ f : X \leftrightarrow Y : f$ is a function $\}$, where $X, Y$ are sets
	or $\{f : X \to Y\}$
$2^X$ is the power set of $X$
$Y^n$ is the set of all $n$-tuples
	$Y^n = \{(y_1, ..., y_n) : y_1, ... y_n \in Y\}$
	$Y^{\{1, ..., n\}}$ is the set of all functions from $\{1, ..., n\}$ to $Y$
	
#### More on Functions and Sets

$X^Y$ is the set of all functions from $Y$ to $X$
	$\{Y, N\}^{\{a, b, c\}} = \{\{(a, N), (b, N), (c, N)\}, \{(a, N), (b, N), (c, Y)\}, \{(a, N), (b, Y), (c, N)\}, ..., \{(a, Y), (b, Y), (c, Y)\}\}$
	- There are 8 functions in the set

$2^{\{a, b, c}\} = \{\emptyset, \{c\}, \{b\}, \{b, c\}, \{a\}, \{a, c\}, \{a, b\}, \{a, b, c\}\}$
$\{Y, N\}^3 = \{(N, N, N), (N, N, Y), (N, Y, N), (N, Y, Y), (Y, N, N), (Y, N, Y), (Y, Y, N), (Y, Y, Y)\}$

**Definition:** A function $f : A \to B$ is
- _injective_ (one-to-one) if $\forall a, b \in A : a \ne b \implies f(a) \ne f(b)$
- _surjective_ (onto) if $\forall b \in B : \exists a \in A : f(a) = b$ which is the same as $f(A) = B$
- _bijective_ (one-to-one correspondence) if it is both _injective_ and _surjective_

#### Equinumerous Sets

**Definition:** Sets $A$ and $B$ are _equinumerous_, written $A \cong B$ if there exists a bijection $f : A \to B$.

If $f$ is one-to-one (_injective_), there may still be elements in $B$ that are unmatched.
**Fact:** For every one-to-one function $f : A \to B$, we have $A \cong f(A)$

If $f$ is onto (_surjective_), there may still be elements in $A$ that are unmatched.
**Fact:** For every onto function $f : A \to B$, there exists a subset $A' \subseteq A$ such that $A \cong B$,
$A'$ consists of for each $b \in B$, only one $a \in A$ with $f(a) = b$.

**Reflexive:** For every set $A$, $A \cong A$ (Use the identity function $f(a) = a$)
**Symmetric:** If $A \cong B$, then $B \cong A$ (Use $f^{-1}$)
**Transitive:** If $A \cong B$ and $B \cong C$, then $A \cong C$ (Use $f \circ g$)

Equinumerous relations are not equivalence relations, as there is no set we are **ON**. (The set of all sets is impossible)

If $A, B, C \subseteq U$, where $U$ is the universal set,
$2^U \setminus \cong$ is the set of all sets with a particular size (dividing by cardinality)


**Example:** The equinumerosity relation $\cong$ is an equivalence relation on $2^{\{a, b, c\}} = \{\emptyset, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}$.

$\emptyset \cong \emptyset$, $\emptyset \centernot\cong \{a, b\}$, $\{a\} \cong \{c\}$, …

$(2^{\{a, b, c\}} \setminus \cong) \space = \{\{\emptyset\}, \{\{a\}, \{b\}, \{c\}\}, \{\{a, b\}, \{b, c\}, \{a, b\}\}, \{\{a, b, c\}\}\}$.

## 8. Cardinality of Sets

**Definition:** A set $X$ is:
	- *finite* if $X \cong F_n$ for some $n \in \mathbb{N}$ where $F_n := \{0, 1, 2, ..., n-1\}$.
	- _countably infinite_ if $X \cong \mathbb{N}$.
	- _countable_ if it is either _finite_ or _countably infinite_.
	- _uncountable_ if it is not _countable_

$\mathbb{N} \cong \mathbb{N}$ ($f(n) = n$, $f^{-1}(n) = n$)
$\mathbb{N} \cong \mathbb{N} \setminus \{0\}$ ($f(n) = n + 1$, $f^{-1}(n) = n - 1$)
$\mathbb{N} \cong \{n^2 : n \in \mathbb{N}\} = \{0, 1, 4, 9, 16, 25, 36, ...\}$ ($f(n) = n^2$, $f(n) = \sqrt{n}$)
$\mathbb{N} \cong \mathbb{N^2}$ (by drawing diagonal lines on a coordinate plane)
$\mathbb{N} \cong \mathbb{N}^k$ for all $k \in \mathbb{N} \setminus \{0\}$
$\mathbb{N} \cong \mathbb{Q}$
$\mathbb{N} \cong \mathbb{Z} \times \mathbb{N}$
$\mathbb{N} \centernot\cong \mathbb{R}$ ($\mathbb{R}$ is uncountable)

**Theorem:** For every set $X$, there does not exist an injection $f : 2^X \to X$
- For a finite set $X$, $2^n > n$, and $f : A \to B$ where $f$ is injective, implies that $|A| \le |B|$

**Proof:**
	Suppose for a contradiction, we have a function $f : 2^X \to X$ that is injective.
	Consider $Y = \{x \in X : (\exists Z \in 2^X : f(Z) = x \land x \notin Z)\}$
	Is $f(Y) \in Y$?

**Theorem:** For any set $X$, there does not exist an injection $f : 2^X \to X$
**Proof:**
	Suppose $f : 2^X \to X$ is an injection, to get a contradiction
	Let $Z = \{f(Y) : Y \subseteq X \land f(Y) \notin Y\}$
		- Notice that $Y \subseteq X \equiv Y \in 2^X$, so $f(Y) \in X$. Hence $Z \subseteq X$
	If $f(Z) \in Z$: 
		Then $f(Z) = f(Y)$ for some $Y : Y \subseteq X \land f(Y) \notin Y$
		Because $f$ is an injection, $f(Z) = f(Y) \implies Z = Y$
		Then $Z \subseteq Y \land f(Z) \notin Z$
		$\therefore f(Z) \notin Z$
	If $f(Z) \notin Z$:
		Since $Z \subseteq X$, and $f(Z) \notin Z$, by the definition of $Z$, we have $f(Z) \in Z$

**Theorem:** $\mathbb{R} \centernot\cong \mathbb{N}$
**Proof:**
	Consider $x \in [0; 1)$.
	Then $x$ in binary is of the form $0.[0-1]*$, where $[0-1]*$ represents zero or more 0s or 1s. (binary decimal expansion).
	By representing the position of each $1$ in the binary decimal expansion of $x$ by a natural number, we can create a _bijection_ between each $x$ and a subset of the natural numbers. 
		- E.g. $0.10101$ is related to $\{0, 2, 4\}$ in this bijection.
	For any $x \in \mathbb{R}$, consider $g(x) = \{q \in \mathbb{Q} : q < x\}$
		- $g(x)$ is a injection, as each set of rational numbers uniquely define any real $x$, as the rational numbers are dense.
	We can then establish an injection between the reals and the power set of the naturals.
	Hence by using the theorem from above, we can prove $R \centernot\cong N$

**Theorem (Cantor):** For any set $X$, there is no injection $2^X \to X$.
**Lemma 1:** There exists an injection $\mathbb{R} \to 2^\mathbb{N}$.
**Proof:** 
	$f(x) = \{g(q) : q \in \mathbb{Q}, q < x\}$, where $g : \mathbb{Q} \to \mathbb{N}$ is a bijection.
**Lemma 2:** There exists an injection $2^\mathbb{N} \to \mathbb{R}$.
**Proof:** 
	$f(X) = 0.d_0 d_1 d_2 ...$ where $d_n = \begin{cases} 1 & n \in X \\ 0 & n \notin X \end{cases}$
		$= \sum_{n=0}^\infty d_n * 10^{-n-1}$
**Corollary:** $\mathbb{N} \centernot\cong \mathbb{R}$
**Proof:**
	Suppose $h : \mathbb{N} \to \mathbb{R}$ is a bijection.
	Then for $f : 2^\mathbb{N} \to \mathbb{R}$ an injection by Lemma 2,
	$f \circ h^{-1} : 2^\mathbb{N} \to \mathbb{N}$ is an injection $\implies$ contradiction!
	**QED**

**Cantor-Schroeder-Bernstein Theorem**
	- If there exist an injection from $A \to B$, and if there exist an injection from $B \to A$, then there exists a bijection $A \leftrightarrow B$.
	
## 9. Mathematical Induction

$s(0) = 0$
$s(n+1) = s(n) + (n+1)$

**Fact:** For all $n$, $s(n) = \frac{n(n+1)}{2}$
**Proof:**
	_Base Case_: $s(0) = 0$ and $\frac{0 (0 + 1)}{2} = 0$
	_Inductive Step_: 
		Assume $s(n) = \frac{n(n+1)}{2}$ for some $n \ge 0$ --> Inductive Hypothesis
		Consider $s(n+1) = s(n) + (n+1)$
					  $= \frac{n(n+1)}{2} + (n+1)$
					  $= \frac{n(n+1) + 2n + 2}{2}$
					  $= \frac{n^2 + 3n + 2}{2}$
					  $= \frac{(n+1)(n+2)}{2}$
					  $= \frac{(n+1)((n+1) + 1)}{2}$
**QED**

**Principle of Induction**:
	For any predicate $P$ on $\mathbb{N}$, if we have:
	- $P(0)$ is true, and
	- For all $n \in \mathbb{N}, P(n) \implies P(n+1)$.
	Then we have that for all $n \in \mathbb{N}$, $P(n)$ is true

**Big Fact:**
Every non-empty set $X \subseteq N$ has a smallest element.

### Induction

**Principle of Induction 1:**
If $P(0)$ and $P(n) \implies P(n+1)$ for all $n \in \mathbb{N}$, then $P(n)$ for all $n \in \mathbb{N}$.

**Big Fact:**
Every non-empty $X \in \mathbb{N}$ has a smallest element.

**Principle of Induction 2:**
If $(\forall m < n : P(m)) \implies P(n) \implies P(n)$ for all $n \in \mathbb{N}$, then $P(n)$ for all $n \in \mathbb{N}$.

## 10. Graphs

#### Introduction to Graphs

**Definition:** A graph $G$ consists of a non-empty finite set of vertices $V$ and a collection of edges $E$.
- Directed graph: edges are ordered pairs - $(u, v)$ for $u, v \in V$.
- Undirected graph: edges are sets - $\{u, v\}$ for $u, v \in V$.
- A collection is a set that allows duplicates (but is still unordered)
- With parallel (or multiple) edges: bag of edges
- Without parallel edges: set of edges

$u \to v$ means $(u, v) \in E$.
- $u$ and $v$ are *adjacent*.
- $u$ and $v$ are the *endpoints* of the edge.
- In directed graphs, $u$ is the _source_ and $v$ is the _target_ or _destination_.
- The edge $u \to v$ is _incident_ on $u$ and on $v$.

A _loop_ or _self-loop_ is an edge $u \to u$.

**Definition:** The _degree_ of a vertex $v$ is the number of edges incident on $v$, with each loop counted twice. In directed graphs, $\deg(v) = \deg_{in}(v) + \deg_{out}(v)$, where $\deg_{in}$ is the number of incoming incident edges, and $\deg_{out}$ is the number of outgoing incident edges.

**Theorem** (_The Handshake Lemma_):    $\sum_{v \in V} deg(v) = 2|E|$.
**Proof:**
	In the sum $\sum_{v \in V} \deg(v)$, each edge is counted twice, once for each of its two endpoints.
**QED**

**Definition:** An _isomorphism_ between graphs $(V, E)$ and $(V', E')$ is a bijection $f : V \to V'$ such that $\forall u, v \in V : (u, v) \in E \iff (f(u), f(v)) \in E'$.

Up to _isomorphism_, for any $n \ge 1$, there is a unique _simple_ undirected graph on $n$ vertices with $n\choose2$ $= \frac{n(n-1)}{2}$ edges.

**Definition:** A graph is _simple_ if it has no parallel edges and no loops.

$K_n$ is the _complete_ simple undirected graph on $n$ vertices
(the word _the_ means "up the isomorphism")

#### Graph Isomorphisms

![[Pasted image 20250415173138.png]]

**Definition of Isomorphism:**
- There exists a function $f :V \to V'$ such that $\forall u, v \in V : (u,v) \in E \iff (f(u), f(v)) \in E'$

![[Pasted image 20250415173354.png]]

**Example:** *the two graphs above are not isomorphic.*
**Proof:** (by contradiction)
	Suppose $f : \{1, 2, 3, 4\} \to \{a, b, c, d\}$ is an isomorphism.
	For some $V \in \{1, 2, 3, 4\}$, we have $f(v) = a$
	Let $V' \ne V$ such that $(V, V')$ is an edge in the first graph.
	Then $f(V')$ must be an edge in the second graph.
	But there is no edge incident on $a$.
	This is a contradiction!
	$\therefore$ The two graphs are not isomorphic.
**QED**

#### Graph Terminology, Reachability

In a graph $G = (V,E)$:
- A **walk** is a sequence $(v_0,v_1), (v_1,v_2),\dots,(v_{n-1},v_n)$ such that $v_0, v_1, ..., v_n \in V$, and $(v_0,v_1), (v_1,v_2), \dots, (v_{n-1}, v_n) \in E$. The walk is of length $n$.
- A **path** is a walk without repetitions of edges.
- A **simple path** is a walk without repetition of vertices
- A **tour** is a walk such that $v_0 = v_n$
- A **cycle** is a tour without repetition of edges
- A **simple cycle** is a cycle without repetitions of vertices, except $v_0 = v_n$.

**Reachability Relation**
- $u \to*v$ means there is a **walk** from $u$ to $v$.
- **Fact:** If there is a walk $u \to*v$ then there is a path $u \to^*v$.

**Proposition:** If $u \ne v$ and $u \to^*v$ then there exists a simple path  from $u$ to $v$.

**Proof** (by contradiction):
	Assume $u \to^*v$ and there does not exist a simple path
	There must be a shortest walk
	But there are no simple paths, so we can cut out a segment of a shortest walk to get an even shorter walk
	This is a contradiction!

**Theorem:** On the vertices $V$ of any undirected graph $(V,E)$, the reachability relation $\to^*$ is an equivalence relation.

**Proof:**
	**Reflexive** - $a \to^*a$, as this is a walk of length 0
	**Symmetry** - $a\to^*b \implies b\to^*a$
	**Transitive** - Concatenate walks

#### Eulerian Cycles

A cycle is **Eulerian** if it contains every edge in the graph (necessarily exactly one because it is a cycle)

**Euler-Hierholzer Theorem**: An undirected graph without isolated vertices has an *Eulerian cycle* iff it is connected and every vertex has even degree.
	
**Proof (_forwards_) direction:**
	Suppose $v_0 \to v_1 \to \dots \to v_k = v_n$ is a an Eulerian cycle.
	**Proof for connectiveness:**
		Consider any two vertices $u$, $w$.
		Since $u, w$ are not isolated, $u = v_i, w = v_j$ from some $i, j \in \{0, \dots, k-1\}$ because the cycle is Eulerian.
		If $i \le j$, then follow the Eulerian cycle from $v_i \to v_j$
		Otherwise, the same via $v_k$.
	**Proof for even degree:**
		Consider any vertex in the graph.
		Its degree is twice the number of times it occurs in the Eulerian cycle, because every edge in the graph occurs in the cycle exactly once.
**End**
**Proof (_backwards_) direction:** - by induction on $|E|$
	Inductive Hypothesis - The implication is true for all graphs $(V', E')$ such that $|E'| < |E|$ (strong induction)
	Since there are no isolated vertices, pick $v_0 \in V$ with an edge $v_0 \to v_1$
	Consider any path $\pi = v_0 \to v_1 \to \dots \to v_k$ and $G' = (V, E')$ be the graph obtained from $G$ by removing all edges in $\pi$.
	**Claim 1:** If $v_k \ne v_0$, then $\deg_{G'}(v_k)$ is odd. Otherwise, $\deg_{G'}(v)$ is even $\forall v \in V$.
	Let $k$ be such that $v_k = v_0$.
	This is possible by the first part of **Claim 1**, and because the number of edges is finite.
	By the second part of **Claim 1**, let $G_1, \dots, G_n$ be the connected components of $G'$, then the degree of every vertex in any $G_i$ is even.
	By the inductive hypothesis, each $G_i$ has an Eulerian cycle $\kappa_i$ provided $G_i$ is not an isolated vertex.
	**Claim 2:** $\pi$ visits each $G_i$, so for each $i \in \{1, 2, \dots, n\}$, $\pi$ contains some vertex $u_i$ of $G_i$.
	By inserting each Eulerian cycle $\kappa_i$ (for $G_i$ which are not isolated vertices) in $\pi$ at the vertex $u_i$, we obtain an Eulerian cycle in $G$.
**End**

#### Trees, Forests and K-Colourability

- A **forest** is a graph without proper cycles (length of at least 1)
- A **tree** is a connected forest
- A **leaf** is a vertex of degree 1

- A graph is K-Colourable if there exists a **proper** K-colouring $f : V \to \{1, 2, \dots, k\}$ such that $\forall (u,v) \in E : f(u) \ne f(v)$.

- A graph is **bipartite** if it is 2-colourable.
- $K_{n,m}$ is the **complete bipartite** graph with bipartitions of sizes $n$ and $m$.

#### Planar Graphs

- A graph is **planar** if it can be drawn without edges crossing.
	- *mathematical definition is outside scope of this module*

**Kuratowski's Theorem:** a graph is planar iff it does not have a subgraph which is isomorphic to a graph obtained from $K_5$ or $K_{3,3}$ by zero or more edge subdivisions.

**Four Colour Theorem:** Every planar graph is 4-colourable

**Euler's Theorem for Planar Graphs:**
$$|V| - |E| + |F| = 2$$
where $|F|$ is the number of faces

- For forests, $|F| = 1$ (obviously forests are planar) so:
$$|V| - |E| = 1$$

## 11. Partial Orders

#### Introduction to Posets

- A **poset** is a set $X$ with a relation $\preccurlyeq : X \leftrightarrow X$ which is reflexive, antisymmetric and transitive.
	- Reflexive: $\forall x : x \preccurlyeq x$
	- Anti-symmetric: $\forall x, y : x \preccurlyeq y \land y \preccurlyeq x \implies x = y$
	- Transitive: $\forall x, y, z : x \preccurlyeq \land y \preccurlyeq z \implies x \preccurlyeq z$

- An element $x$ is **maximal** if there is no other element $y \in X$ such that $x \preccurlyeq y$.
	- There can be multiple maximal elements
- An element $x$ is the **greatest** if $\forall y : X: y \preccurlyeq x$.
- An element $x$ is **minimal** if there is no other element $y \in X$ such that $y \preccurlyeq x$.
	- There can be multiple minimal elements
- An element $y$ is the **least** if $\forall y : X : x \preccurlyeq y$
- Two elements $x, y$ are **incomparable** when $x \centernot\preccurlyeq y \land y \centernot\preccurlyeq x$
- Notation: $x < y$ if $x \preccurlyeq y \land x \ne y$
- Notation: $x <\cdot y$ means "x is covered by y", if $x < y \land \neg\exists z : x < z \land z < y$

#### Examples of Posets

$$(\mathbb{N}\setminus\{0\}, |)$$ 
- The minimal elements are the primes (2, 3, 5, 7, ...)
- There is no least element as there are multiple minimal elements
- There is no maximal element, hence no greatest element.

$$(2^{\{a,b,c\}}\setminus\{\{a,b,c\}\}, \subseteq)$$

- There is only one minimal element, that is $\emptyset$, and that is also the least element.
- The maximal elements are $\{a,b\}, \{a,c\}, \{b,c\}$. Since there is more than one maximal element, there is no greatest element.

#### Hasse Diagrams

- Edges are drawn where one element covers the other
	- do not draw lines inferred by transitivity

- $(\mathbb{Q}, \le)$ fails on a Hasse Diagram, because there are infinitely many rationals between any two given rationals.

#### Products of Partial Orders

Suppose we have two posets $(p_1, \preccurlyeq_1), (p_2, \preccurlyeq_2)$

Product Partial Order:
$$(p_1, p_2) \preccurlyeq_{pr} (p_1', p_2') \iff p_1 \preccurlyeq_1 p_1' \land p_2 \preccurlyeq_2 p_2'$$
Lexicographical Partial Order:
$$(p_1, p_2) \preccurlyeq_{lex}(p_1',p_2') \iff p_1\preccurlyeq_1p_1'\lor(p_1=p_1'\land p_2\preccurlyeq_2p_2')$$

*Note that the Lexicographical Ordering preserves Total Ordering (if $\preccurlyeq_1, \preccurlyeq_2$ are total orders, then $\preccurlyeq_{lex}$ is a total order)*

**Note that:**
- $(\{0,1\}^n, \preccurlyeq_{pr})$ is the same as the power set partial order
- $(\{0,1\}^n, \preccurlyeq_{lex})$ is the order of n-digit binary numbers

#### Total Ordering

- A relation is a **total order** if it is a partial order and there are no incomparable elements
	- For all $a, b \in X$, either $a \preccurlyeq b$ or $b \preccurlyeq a$.

## 12. Trees

**In this section, we work with undirected simple graphs**

#### Lemmas about Graphs

**Lemma 1**: In any connected graph, removing an edge from a cycle keeps the graph connected.

**Proof:** 
	Consider removing from a cycle $\kappa$ an edge $e$. 
	Suppose $v, w$ are vertices in the graph $G$.
	Let $\omega$ be a walk $v \to^*w$ in the original graph $G$. 
	If $\omega$ does not contain $e$, $\omega$ is a walk in the new graph $G' = G \setminus \{e\}$.
	Otherwise, let $\omega'$ be the walk obtained from $\omega$ by replacing every occurrence of $e$ in $\omega$ by a walk obtained from the cycle $\kappa$ by removing $e$.
	Then, $\omega'$ is a walk $v \to^* w$ in $G'$.
**End**

**Lemma 2:** In any connected graph, adding a _new_ edge introduces a cycle.

**Proof:** 
	Suppose a new edge is $\{u,v\}$. 
	Since the graph was connected, there is a walk $\omega = u \to^*v$ in the original graph. 
	Then adding $\{u, v\}$ to the end of $\omega$ creates a tour.
	We obtain a cycle by repeatedly shortening the tour to eliminate repetitions of edges.
**End**

**Lemma 3**: Let $n$ be the number of connected components. (a) $n \ge |V| - |E|$, and (b) if the graph is acyclic, then $n = |V| - |E|$.

**Proof:** (by induction on $|E|$)
	**Base Case:** Here $|E| = 0$, so $n = |V| = |V| - |E|$
	**Inductive Step:**
		Consider adding an edge $e$ to a graph $G = (V,E)$.
		**Case $(*)$** - Edge $e$ is within a connected component of $G$. 
			Then $n$ in the new graph is the same as in $G$. Also by Lemma 2, (b) does not apply.
		Case $(**)$ - Edge $e$ is between two connected components of $G$.
			Then $n$ in the new graph is one less than in $G$. By the inductive hypothesis and the fact that $|V| - (|E| + 1) = |V| - |E| - 1$, we have (a) and (b).
**End**
		
#### Spanning Tree

For a graph $G = (V,E)$, a **spanning tree** is a subgraph $T = (V', E')$ such that $V = V'$ and $T$ is a tree (connected, acyclic graph)

**Theorem 1:** Every connected graph has a spanning tree.
**Proof:** (by induction on $|E|$, and by Lemma 1)
	If $G$ is a tree, we are done.
	Otherwise, $G$ must contain a cycle.
		By Lemma 1, we can remove an edge and it would be connected.
		By induction, $G'$ would contain a spanning tree.

#### Five Definitions of Trees TFAE
- TFAE = "the following are equivalent"

1. $G = (V,E)$ is a tree
2. $G$ is acyclic and $|V| - |E| = 1$
3. $G$ is connected and $|V| - |E| = 1$
4. $G$ is connected and removing an edge makes it disconnected
5. $G$ is acyclic and inserting an edge introduces a cycle

**Proof:** (by the cycle method)

$(1) \implies (2)$:
	$G$ is acyclic because it is a tree.
	It is connected for the same reason, so $|V| - |E| = 1$ by Lemma 3(b)
$(2) \implies (3)$:
	Since $G$ is acyclic, and $|V| - |E| = 1$, by Lemma 3(b), we have that the number of connected components is 1, i.e. $G$ is connected.
$(3) \implies (4)$:
	Let $G'=(V,E')$ be obtained from $G$ by removing an edge.
	By Lemma 3(a), the number of connected components $\ge |V| - (|E| - 1) = |V| - |E| + 1$
$(4) \implies (5)$:
	$G$ is acyclic by Lemma 1.
	Inserting any edge introduces a cycle by Lemma 2.
$(5) \implies (1)$:
	Assume for a contradiction that $G$ is disconnected.
	Then we can insert an edge that does not introduce a cycle
	This contradicts the second part of $(5)$
	So $G$ is connected, thus a tree.

## 13. Probability
	
#### Introduction to Probability

**Probability Space:** $(\Omega,2^\Omega, P)$
- $\Omega$ = samples
- $2^\Omega$ = power set of samples = events
- $P$ = probability function, where $P : 2^\Omega \to \mathbb{R}$

**Probability Axioms**
1. $P(E) \ge 0$ $\forall E$
	- All probabilities are non-negative
2. $P(\Omega) = 1$
	- Probability of sample space is 1
3. $P(E \cup E') = P(E) + P(E'), \forall E, E' : E \cap E' = \emptyset$
	- For $E, E'$ that are disjoint, $P(E \cup E') = P(E) + P(E')$.

**Example:** Rolling a dice
- $\Omega = \{1, 2, 3, 4, 5, 6\}$
- $P(E) = \frac{|E|}{6}$

#### Claims and Theorems about Probability

**Claim 1**: $P(\emptyset) = 0$
**Proof:**
	$P(\Omega) = P(\Omega \cup \emptyset)$
	$P(\Omega) = P(\Omega) + P(\emptyset)$
	$\therefore P(\emptyset) = 0$
**End**

**Claim 2:** $P(\bar{E}) = 1 - P(E), \forall E \subseteq \Omega$ where $\bar{E} = \Omega \setminus E$
**Proof:** 
	$P(E \cup \bar{E}) = P(\Omega)$
	$P(E) + P(\bar{E}) = 1$
	$\therefore P(\bar{E}) = 1 - P(E)$

**Claim 3:** $P(E \cup F) = P(E) + P(F) - P(E \cap F)$
**Proof:** 
	$P(E \cup F) = P(E \cup (F \setminus E))$
	$= P(E) + P(F \setminus E)$
	$= P(E \setminus F) + P(E \cap F) + P(F \setminus E)$
	$= [P(E \setminus F) + P(E \cap F)] + [P(F \setminus E) + P(E \cap F)] - P(E \cap F)$
	$= P(E) + P(F) - P(E \cap F)$

**Theorem:** $P(E \cup F) \le P(E) + P(F)$
**Proof:** By claim 3 and axiom 1

#### Conditional Probability

**Suppose** $P(B) > 0$
$$P(A|B) := \frac{P(A \cap B)}{P(B)}$$
**Example:**
	$\Omega = \{1,2,3,4,5,6\}$
	$P(E) = \frac{|E|}{6}$
	$A = \{1,2,3,4,5\}$ "not 6"
	$B$ = $\{2,4,6\}$ "even"
	$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(\{2,4\})}{P(\{2,4,6\})} = \frac{\frac{2}{6}}{\frac{3}{6}} = \frac{2}{3}$
	$P(B|A) = \frac{P(B \cap A)}{P(A)} = \frac{P(\{2,4\})}{P(\{1,2,3,4,5\})} = \frac{\frac{2}{6}}{\frac{5}{6}} = \frac{2}{5}$
	"Prosecutors Fallacy" - $P(A|B) \ne P(B|A)$ in general.

#### Law of Total Probability

Suppose $B_1, B_2, ... , B_n$ disjointly partition $\Omega$ and $P(B_i) > 0, \forall i$.
For all events $A$:
$$P(A) = \sum_{i=1}^n{P(A|B_i)P(B_i)}$$
**Proof:**
	$P(A) = \sum_{i=1}^n{P(A \cap B_i)}$
	$= P(A \cap B_1 \cup A \cap B-2 \cup \dots \cup A \cap B_n)$
	= $P(A \cap (B_1 \cup B_2 \cup \dots \cup B_n))$
	$= P(A \cap \Omega)$
	$= P(A)$

**Example**: "Zoggles"
	$\Omega$ = the set of all zoggles.
	$F_1$ = the zoggles made in factory 1
	$F_2$ = the zoggles made in factory 2
	$X$ = the set of all faulty zoggles
	$P(F_1) = 2P(F_2)$
		We know that $P(F_1) + P(F_2) = 1$
		$\therefore P(F_1) = \frac{2}{3}, P(F_2) = \frac{1}{3}$
	**Given:** $P(X|F_1) = 0.2$, $P(X|F_2) = 0.05$
	$P(X) = P(X|F_1)P(F_1) + P(X|F_2)P(F_2)$
	$= \frac{1}{5}\times\frac{2}{3}+\frac{1}{20}\times\frac{1}{3}$
	$=\frac{2}{15} + \frac{1}{60} = \frac{9}{60} = \frac{3}{20} = 0.15$
	
#### Bayes' Rule

Assume $P(A) > 0$
$$P(B_i|A) = \frac{P(B_i \cap A)}{P(A)} = \frac{P(A|B_i)P(B_i)}{\sum_{j=1}^n{P(A|B_j)P(B_j)}}$$
$P(B_i|A)$ is the posterior
$P(B_i)$ is the prior

**Example:**
	$D$ is the event of having a disease
	$T$ is the event of being tested positive for a disease
	$P(D) = 0.001$
	$P(T|D) = 0.9$
	$P(T|\bar{D}) = 0.01$
	Calculate $P(D|T)$
	$$= \frac{P(T|D)P(D)}{P(T|D)P(D) + P(T|\bar{D})P(\bar{D})}$$
	$$= \frac{0.9 \times 0.001}{0.9 \times 0.001 + 0.01 \times 0.999}$$
	$$ = \frac{90}{1089}$$

#### Independent Events

Events $A$ and $B$ are **independent** if $P(A \cap B) = P(A)P(B)$
So $P(A|B) = \frac{P(A\cap B)}{P(B)} = \frac{P(A)P(B)}{P(B)} = P(A)$

**Example**:
	$\Omega = \{1,2,3,4,5,6\}$
	$A = \{1,2,3,4,5\}$ "not 6"
	$B = \{2,4,6\}$
	$P(A) = \frac{5}{6}, P(B) = \frac{1}{2}$
	$P(A \cap B) = P(\{2,4\}) = \frac{2}{6} = \frac{1}{3}$
	$P(A)P(B) = \frac{5}{6}\times\frac{1}{2} = \frac{5}{12} \ne \frac{1}{3}$
	Hence $A,B$ are not independent.
 	$E$ = $\{1, 2\}$ "< 3"
	$P(E) = \frac{2}{6} = \frac{1}{3}$
	$P(B \cap E) = P(\{2\}) = \frac{1}{6}$
	$P(B)P(E) = \frac{1}{2} \times \frac{1}{3} = \frac{1}{6}$
	Hence $E, B$ are independent.


