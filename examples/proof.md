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
