woman(fudd).
woman(strong).
woman(quinonez).
woman(maric).
man(mullins).
man(karaban).
man(muller).

dog(jonathan).
dog(hugo).

husky(fudd).
husky(strong).
husky(mullins).
husky(karaban).
husky(jonathan).
husky(quinonez).

coach(hurley, X) :- man(X), husky(X).
coach(auriemma, X) :- woman(X), husky(X).

playedWith(basketball, ball(Round, brown)).
playedWith(basketball, hoop).
playedWith(football, ball(oval, brown)).

gohuskies.