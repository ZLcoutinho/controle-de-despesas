const form = document.querySelector('.transaction-form')
const ul = document.querySelector('.transactions-list')
let storageArray = []
const incomeValue = document.querySelector('.income-value')
const outgoingValue = document.querySelector('.outgoing-value')
const inputName = document.querySelector('.name-transaction')
const inputValue = document.querySelector('.value-transaction')
const totalMoneyAccount = document.querySelector('.total-money-value')


form.addEventListener('submit', event => {
        

        let transitions = new Array()

            if (localStorage.hasOwnProperty("transitions")) {
                transitions = JSON.parse(localStorage.getItem("transitions"))
            }

            if (localStorage.length >= 1){
            JSON.parse(localStorage.getItem("transitions")).forEach(transition => {
                if (transition.name === inputName.value) {
                    alert('Nome de transição já existente')
                   return inputName.value = err
                } else {
                   return inputName.value = inputName.value
                }
            })}

            if (/^-?\d*\.?\d+$/.test(inputValue.value)) {
                inputValue.value = inputValue.value
            } else {
                alert('insira um valor valido')
                return 
            }

            transitions.push({name: inputName.value, amount: inputValue.value})

            localStorage.setItem("transitions", JSON.stringify(transitions)) 
           
})

const negativeNumber = /^-\d*\.?\d+$/

let negativeTransitions = JSON.parse(localStorage.getItem('transitions')).filter(transition => negativeNumber.test(transition.amount)).reduce((acc, transition) => acc + Number(transition.amount.slice(1,)),0)

outgoingValue.textContent = `-${negativeTransitions}`

const positiveNumber = /^\d*\.?\d+$/

let positiveTransitions = JSON.parse(localStorage.getItem('transitions')).filter(transition => positiveNumber.test(transition.amount)).reduce((acc, transition) => acc + Number(transition.amount),0)

incomeValue.textContent = `${positiveTransitions}`

totalMoneyAccount.textContent = positiveTransitions - negativeTransitions

  function removeLi (event) {
    const  nameTransition = event.target.parentElement.children[0].textContent
    
    const transition = JSON.parse(localStorage.getItem("transitions")).filter(transition => transition.name !== nameTransition)
    
    event.target.parentElement.remove()
    location.reload()
   return localStorage.setItem("transitions", JSON.stringify(transition))
  } 

const trasitionsArray = JSON.parse(localStorage.getItem('transitions')).map(transition => {

    let incomeOrOutgoingLi  = ''
    let incomeOrOutgoingSpan  = ''
    let spanMessage = ''

    if (/^\d*\.?\d+$/.test(transition.amount)) {
        incomeOrOutgoingSpan = 'income'
        incomeOrOutgoingLi = 'income-li'

        spanMessage = `+ R$ ${transition.amount}`
    } else {
        incomeOrOutgoingSpan = 'outgoing'
        incomeOrOutgoingLi = 'outgoing-li'
        spanMessage = `- R$ ${transition.amount.slice(1,)}`
    }
    
    return ul.innerHTML += `<li class="trasactions-list ${incomeOrOutgoingLi}">
<p class="transaction-name-li">${transition.name}</p><span class="transaction-value-li ${incomeOrOutgoingSpan}">${spanMessage}</span>
<img class="delete-li" onclick="removeLi(event)" src="./delete.png">
</li> 
`
})

trasitionsArray.forEach(li => {

    li.split('  ').forEach(li => ul.innerHTML = li)
})
