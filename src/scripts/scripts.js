let numRandom = Math.floor(Math.random() * (100 - 1))
let health = 5
const inputNum = document.getElementById('numrs')
const coracoes = document.querySelectorAll('svg')
let ganhou = false

btn.addEventListener('click', () => {
  Number(inputNum)
  if (ganhou == true) {
    res.style.backgroundColor = ''
    res.style.color = 'var(--text-color)'
    res.innerHTML = `Click em reset para recomeçar.`
    return
  }
  if (inputNum.value <= 0) {
    res.style.backgroundColor = 'var(--error-color)'
    res.style.color = 'white'
    res.innerHTML = `Apenas números acima de <strong>0</strong>!`
    return
  } else if (inputNum.value > 100) {
    res.style.backgroundColor = 'var(--error-color)'
    res.style.color = 'white'
    res.innerHTML = `Somente números entre <strong>1</strong> e <strong>100</strong> serão aceitos.`
    return
  } else {
    if (health == 0) {
      res.style.backgroundColor = 'var(--error-color)'
      res.style.color = 'white'
      res.innerHTML = `Sem vidas! O número era <strong>${numRandom}</strong>`
      btnR.style.display = 'block'
      return
    }
    if (numRandom == inputNum.value) {
      res.style.backgroundColor = 'var(--positive-color)'
      res.style.color = 'white'
      if (health == 5) {
        res.innerHTML = `Você só pode ser um gênio(a) acertou de primeira o número era o${numRandom}`
      } else if (health == 1) {
        res.innerHTML = `Por pouco ein o número era o ${numRandom}`
      } else {
        res.innerHTML = `Parabéns você acertou o número era o ${numRandom}`
      }
      btnR.style.display = 'block'
      ganhou = true
      return
    } else if (numRandom < inputNum.value) {
      res.style.backgroundColor = ''
      res.style.color = 'var(--text-color)'
      res.innerHTML = `Errou! Sou <strong>menor</strong>!`
      health -= 1
      removerVida()
      return
    } else {
      res.style.backgroundColor = ''
      res.style.color = 'var(--text-color)'
      res.innerHTML = `Errou! Sou <strong>maior</strong>!`
      health -= 1
      removerVida()
    }
  }
})

function removerVida() {
  if (health === 4) {
    coracoes[0].classList.add('lose')
  } else if (health === 3) {
    coracoes[1].classList.add('lose')
  } else if (health === 2) {
    coracoes[2].classList.add('lose')
  } else if (health === 1) {
    coracoes[3].classList.add('lose')
  } else if (health === 0) {
    coracoes[4].classList.add('lose')
  }
}

btnR.addEventListener('click', () => {
  numRandom = Math.floor(Math.random() * (100 - 1))
  health = 5
  coracoes.forEach(cora => {
    cora.classList.remove('lose')
  })
  res.innerHTML = ``
  res.style.backgroundColor = ''
  ganhou = false
  btnR.style.display = 'none'
})