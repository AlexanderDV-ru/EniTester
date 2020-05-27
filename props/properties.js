
var test=`
text How old are you?
enter number 0 15 null  test.old_number 1 0
newline
-----
text Check birds only:
checkbox 0 1 null bird.chicken_check 1 0
label Chicken
newline
checkbox 0 0 null  bird.dog_check 1 0
label Dog
newline
checkbox 0 0 null  bird.carp_check 1 0
label Carp
newline
checkbox 0 1 null  bird.parrot_check 1 0
label Parrot
newline
-----
text Check fish only:
checkbox 0 1 null fish.carp_check 1 0
label Carp
newline
checkbox 0 0 null  fish.owl_check 1 0
label Owl
newline
checkbox 0 0 null  fish.cat_check 1 0
label Cat
newline
checkbox 0 1 null  fish.shark_check 1 0
label Shark
`
