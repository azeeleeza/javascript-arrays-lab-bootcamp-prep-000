function destructivelyAppendKitten(name){
kittens.push(name);
} //appends a kitten to the end of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name);
} //prepends a kitten to the beginning of the kittens array
function destructivelyRemoveLastKitten(){
  kittens.pop()
} //removes the last kitten from the kittens array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
} //removes the First kitten from the kittens array
function appendKitten(name){

  window.kittens = ['Milo', 'Otis', 'Garfield']
  var newKittens = kittens
  newKittens.push("Broom")
  return newKittens
} //appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  var newKittens = kittens
  newKittens.unshift(name)
  return newKittens
} //prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
  var newKittens = kittens
  newKittens.pop()
  return newKittens
} //removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
var newKittens = kittens
newKittens.shift()
return newKittens
} //removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
