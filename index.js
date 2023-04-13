const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const info = document.querySelector('.info')
const you = document.querySelector('.you')
const computer = document.querySelector('.computer')
let computerscore = 0
let playerscore = 0
const options = ['rock','paper','scissors']

function getComputerChoice(){
    return options[Math.floor(Math.random()*3)]
}

rock.addEventListener('click',function(){
    rps(p1='rock',getComputerChoice())
})
paper.addEventListener('click',function(){
    rps(p1='paper',getComputerChoice())
})

scissors.addEventListener('click',function(){
    rps(p1='scissors',getComputerChoice())
})


const rps = (p1, p2) => {
    you.style.backgroundImage = `url(./assets/${p1}.png)`
    computer.style.backgroundImage = `url(./assets/${p2}.png)`
    const rules = {
      'scissors': 'paper',
      'rock': 'scissors',
      'paper': 'rock'
    };

    
    rules[p1] === p2 ? you.innerText = `You:${' '+ ++playerscore}` : p1 === p2 ? 'Draw!' :  computer.innerText = `Computer:${' '+ ++computerscore}`
    rules[p1] === p2 ? info.innerText = 'You won!' : p1 === p2 ? info.innerText = 'Draw!' : info.innerText = 'Computer won!'
    return rules[p1] === p2 ? 'You won!' : p1 === p2 ? 'Draw!' : 'Computer won!';
  };


