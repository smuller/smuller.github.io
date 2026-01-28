module list where

data nat : Set where
 zero : nat
 succ : nat -> nat

data list (A : Set) : nat -> Set where
 nil : list A zero
 cons : ∀ {n} (x : A) (xs : list A n) -> list A (succ n)

data fin : nat -> Set where
 z : ∀ {n} -> fin (succ n)
 s : ∀ n (m : fin n) -> fin (succ n)

lookup : ∀ {n} {A} -> list A n -> fin n -> A
lookup (cons x xs) z = x
lookup (cons x xs) (s _ i) = lookup xs i
