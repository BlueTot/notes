# Proof Examples 

#### Styled Proof and Derivation Example

<div class="proof">

**Claim.** The sum of the first $n$ odd positive integers is $n^2$.

**Proof.** Suppose the claim holds for some $n \in \mathbb{N}$. For the inductive step,

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