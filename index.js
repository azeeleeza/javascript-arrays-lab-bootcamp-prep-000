
function appendKitten(name){
  var newKittens = kittens
  newKittens.push(name)
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
