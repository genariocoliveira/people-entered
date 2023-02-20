// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el') //argumento que será manipulado
let count = 0

function increment() {
  count = count + 1
  countEl.textContent = count
}
// function decrement() {
//   count = count - 1
//     if(count < 0) {
    
//   } else {
//     countEl.innerHTML = count
//     console.log(count)
//   }
// }
function save() {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}