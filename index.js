const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(array, kitten) {


return array.push(kitten);

}


function destructivelyRemoveFirstKitten() {

  kittens = kittens.slice(1);
  

}
