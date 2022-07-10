const MACA = {
  value: 2
}

const LARANJA = {
  value: 3
}

function mapComThis(array, thisArg) {
  return array.map(function (item) {
    return item * this.value
  }, thisArg)
}
const NUMS = [1, 2]

//quando this for maçã ou laranja, vai logar

/*console.log(`this -> MACA`, mapComThis(NUMS, MACA))
console.log(`this -> LARANJA`, mapComThis(NUMS, LARANJA))*/

function mapSemThis(array) {
  return array.map(function (item) {
    return item * 2
  })
}

const NUMBERS = [1, 2, 3, 4]

console.log(mapSemThis(NUMBERS))
