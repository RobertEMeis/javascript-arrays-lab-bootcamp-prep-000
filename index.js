const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(array, kitten) {


return array.push(kitten);

}


function destructiveRemoveFirstKitten() {

  kittens.slice(1, 2);
  return kittens;

}
