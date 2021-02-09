const input = document.querySelector('.input')
const select = document.querySelector('.select1')
const answer = document.querySelector('.answer')
const botsTotal = document.querySelector('.botsTotal')
const betsTotal = document.querySelector('.betsTotal')

const arr2 = []

select.addEventListener('change', (event) => {
  const selectValue = Number(event.target.value)
  const value = Number(input.value)

  if (selectValue === 100) {
    let num = value * selectValue - 100
    arr2.push(num)
    input.value = ''
    select.value = ''
  }
  if (selectValue === 250) {
    let num = value * selectValue - 350
    arr2.push(num)
    input.value = ''
    select.value = ''
  }
  if (selectValue === 625) {
    let num = value * selectValue - 975
    arr2.push(num)
    input.value = ''
    select.value = ''
  }
  if (selectValue === 1562) {
    let num = value * selectValue - 2537
    arr2.push(num)
    input.value = ''
    select.value = ''
  }
  if (selectValue === 3905) {
    let num = value * selectValue - 6442
    arr2.push(num)
    input.value = ''
    select.value = ''
  }

  let sum = 0
  
  for(let i = 0; i < arr2.length; i ++) {
    sum += arr2[i]
  }
  answer.innerHTML = Math.floor(sum)
  botsTotal.innerHTML = sum / 500
  betsTotal.innerHTML = arr2.length
})

