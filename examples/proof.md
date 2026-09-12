# Proof Examples 

#### Styled Proof and Derivation Example

<div class="proof">

**Claim.** The sum of the first $n$ odd positive integers is $n^2$.

**Proof.**

<div class="proof-body">

Suppose the claim holds for some $n \in \mathbb{N}$. For the inductive step,

$$
\derivation{
\sum_{k=1}^{n+1}(2k-1)
&= \sum_{k=1}^{n}(2k-1) + 2(n+1)-1 \\
&= n^2 + 2n + 1
&& \text{by the induction hypothesis} \\
&= (n+1)^2.
}
$$

The base case is $1=1^2$, so the result follows by induction. $\square$

</div>

</div>

#### Another Example

<div class="proof">

**Theorem 3**. $\sqrt{2} \notin \mathbb{Q}$

**Proof:** (by contradiction)

<div class="proof-body">

Assume $\sqrt{2} \in \mathbb{Q}$.

Then, $\sqrt{2} = \frac{n}{m}$, $n \in \mathbb{N}$, $m \in \mathbb{N} \setminus \{0\}$.

Without loss of generality, $\gcd(n, m) = 1$.

We have $2 = (\sqrt 2)^2 = \frac{n^2}{m^2}$, so $n^2 = 2m^2$, so $2|n$

So $n = 2k$ for some $k \in \mathbb{Z}$.

But $m^2 = \frac{n^2}{2} = \frac{4k^2}{2} = 2k^2$, so $2|m$, so $\gcd(n,m) > 1$

This is a contradiction!

So $\sqrt{2} \notin \mathbb{Q}$. $\square$

</div>

</div>

#### Another Example

<div class="proof">

**Theorem 2.** For every $n \in \mathbb{N}$, the integer $1 + (-1)^n(2n-1)$ is divisible by $4$.

**Proof.**

<div class="proof-body">

Every natural number is either even or odd, so we consider the two cases separately.

**Case 1:** Suppose $n$ is even. Then $n = 2k$ for some $k \in \mathbb{N}$, and

$$
\derivation{
1 + (-1)^n(2n-1)
&= 1 + (-1)^{2k}(2(2k) - 1) \\
&= 1 + 4k - 1 \\
&= 4k.
}
$$

Therefore the expression is divisible by $4$ when $n$ is even.

**Case 2:** Suppose $n$ is odd. Then $n = 2k+1$ for some $k \in \mathbb{N}$, and

$$
\derivation{
1 + (-1)^n(2n-1)
&= 1 + (-1)^{2k+1}(2(2k+1)-1) \\
&= 1 - (4k + 1) \\
&= -4k.
}
$$

Therefore the expression is divisible by $4$ when $n$ is odd. Since the two cases cover every $n \in \mathbb{N}$, the result follows. $\square$

</div>

</div>


#### Another Example

<div class="proof">

**Theorem.** $A \triangle B = (A \cup B) \setminus (A \cap B)$.

**Tip.** To prove two sets are equal, prove that each is a subset of the other.

**Proof.**

<div class="proof-body">

Recall that $A=B$ exactly when $A \subseteq B$ and $B \subseteq A$. We prove the two inclusions separately.

**Forward inclusion $(\subseteq)$.**

<div class="proof-body">

Suppose $x \in A \triangle B$. By definition, $x \in (A \setminus B) \cup (B \setminus A)$, so there are two cases.

**Case 1:** $x \in A \setminus B$.

<div class="proof-body">

$$
\derivation{
x \in A \setminus B
&\implies x \in A \land x \notin B \\
&\implies x \in A \cup B \land x \notin A \cap B \\
&\implies x \in (A \cup B) \setminus (A \cap B).
}
$$

</div>

**Case 2:** $x \in B \setminus A$.

<div class="proof-body">

$$
\derivation{
x \in B \setminus A
&\implies x \in B \land x \notin A \\
&\implies x \in A \cup B \land x \notin A \cap B \\
&\implies x \in (A \cup B) \setminus (A \cap B).
}
$$

</div>

Thus, $A \triangle B \subseteq (A \cup B) \setminus (A \cap B)$.

</div>

**Reverse inclusion $(\supseteq)$.**

<div class="proof-body">

Suppose $x \in (A \cup B) \setminus (A \cap B)$. Then $x \in A \cup B$, but $x \notin A \cap B$. Again, there are two cases.

**Case 1:** $x \in A$.

<div class="proof-body">

Since $x \notin A \cap B$, we must have $x \notin B$. Therefore $x \in A \setminus B$, and hence $x \in A \triangle B$.

</div>

**Case 2:** $x \in B$.

<div class="proof-body">

Since $x \notin A \cap B$, we must have $x \notin A$. Therefore $x \in B \setminus A$, and hence $x \in A \triangle B$.

</div>

Thus, $(A \cup B) \setminus (A \cap B) \subseteq A \triangle B$.

</div>

Both inclusions hold, so $A \triangle B = (A \cup B) \setminus (A \cap B)$. $\square$

</div>

</div>
