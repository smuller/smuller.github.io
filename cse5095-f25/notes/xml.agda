module xml where

open import Agda.Builtin.String
open import Agda.Builtin.Nat
open import Relation.Binary.PropositionalEquality using (_≡_; refl; cong; trans)
open import Agda.Builtin.TrustMe

data xml : Set where
  `  : String -> xml
  <_>  : String -> xml
  <_>_</> : String -> xml -> xml
  _·_ : xml -> xml -> xml

test : xml
test = < "a" > ` "Hi" </>

openangle : xml -> Nat
openangle (` s) = 0
openangle < s > = 1
openangle < s > x </> = 2 + openangle x
openangle (x · y) = (openangle x + openangle y)

closeangle : xml -> Nat
closeangle (` s) = 0
closeangle < s > = 1
closeangle < s > x </> = 2 + closeangle x
closeangle (x · y) = (closeangle x + closeangle y)

transitive : ∀ {A : Set} {x y z : A} -> (x ≡ y) -> y ≡ z -> x ≡ z
transitive refl refl = refl

op_eq_close : ∀ (x : xml) -> ((openangle x) ≡ (closeangle x))
op_eq_close (` x) = refl
op_eq_close < x > = refl
op_eq_close < x > x₁ </> = cong suc (cong suc (op_eq_close x₁))
op_eq_close (x · y) = transitive ( cong (λ a -> openangle x + a) (op_eq_close y)) ( cong (λ a -> a + closeangle y) ((op_eq_close x)))
