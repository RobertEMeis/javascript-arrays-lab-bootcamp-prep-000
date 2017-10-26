const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(array, kitten) {


return array.push(kitten);

}


function destructivelyRemoveFirstKitten() {

  kittens = kittens.slice(1);


}


function destructivelyAppendKitten(name) {

  kittens.push(name);
}


function destructivelyPrependKitten(name) {

  kittens.unshift(name);

}


function destructivelyRemoveLastKitten() {

  return kittens.pop();
}


function appendKitten(name) {

 return [...kittens, name];
}


function appendKitten(name) {

  return [name, ...kittens];
}

