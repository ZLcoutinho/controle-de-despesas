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

                    const li = document.createElement('li')
                    const paragraph = document.createElement('p')
                    const span = document.createElement('span')
                    const img = document.createElement('img')
            
                    li.classList.add('trasactions-list')
                    paragraph.classList.add('transaction-name-li') 
                    span.classList.add('transaction-value-li')
                    img.classList.add('delete-li')
                    img.setAttribute('src', './delete.png')
            
                    paragraph.textContent = inputName.value
                    span.textContent = `R$${Number(inputValue.value )}`
            
                    let newLi 
                    paragraph.append(span)
                    li.append(paragraph)
                    li.append(img)
                    
                 ul.append(li)   

           
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

        const li = document.createElement('li')
        const paragraph = document.createElement('p')
        const span = document.createElement('span')
        const img = document.createElement('img')

        li.classList.add('trasactions-list')
        paragraph.classList.add('transaction-name-li') 
        span.classList.add('transaction-value-li')
        img.classList.add('delete-li')
        img.setAttribute('onclick', 'removeLi(event)')
        img.setAttribute('src', './delete.png')

        if (/^\d*\.?\d+$/.test(transition.amount)) {
            span.classList.add('income')
            li.classList.add('income-li')
        } else {
            span.classList.add('outgoing') 
            li.classList.add('outgoing-li')
        }

        paragraph.textContent = transition.name
        negativeNumber.test(transition.amount) ? span.textContent =`- R$ ${Number(transition.amount.slice(1,))}` : span.textContent =`+ R$ ${Number(transition.amount)}`
        

        let newLi 
        li.append(paragraph)
        li.append(span)
        li.append(img)
        
        return li
    })

    trasitionsArray.forEach(li => {
        ul.append(li)
    })




