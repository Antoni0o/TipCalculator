const bill = document.querySelector('#bill'),
      people = document.querySelector('#people'),
      billInput = document.querySelector('.billInput'),
      peopleInput = document.querySelector('.peopleInput'),
      selectedButtons = document.querySelector('#buttons .button.selected'),
      customTip = document.querySelector('#customTip'),
      buttons = document.querySelectorAll('#buttons .button')
      
let billValue = 0,
    peopleValue = 0
        
function calculateValues(bill, people, button, custom) {
    if(bill.value > 0 && people.value > 0) {
        if(custom.value > 0) {
            const tipValue = ((Number(custom.value)/ 100) * Number(bill.value)).toFixed(2) 
            const amountCalc = tipValue / Number(people.value)
            const totalCalc = (Number(bill.value) + amountCalc) / Number(people.value)
            const amount = document.querySelector('.amount h1 span')
            const total = document.querySelector('.total h1 span')
            amount.textContent = amountCalc.toFixed(2)
            total.textContent = totalCalc.toFixed(2)
        } else {
            const tipValue = ((Number(button.value)/ 100) * Number(bill.value)).toFixed(2) 
            const amountCalc = tipValue / Number(people.value)
            const totalCalc = (Number(bill.value) + amountCalc) / Number(people.value) 
            const amount = document.querySelector('.amount h1 span')
            const total = document.querySelector('.total h1 span')
            amount.textContent = amountCalc.toFixed(2)
            total.textContent = totalCalc.toFixed(2)
        }
    }
}
    
customTip.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
        if (btn.classList.contains('selected')) {
                btn.classList.remove('selected')
        }
    })
})
       
    

const Validations = {
    
    InputValidation(element) {
        const id = element.id
        const input = document.querySelector(`#${id} input`)
        const errorTitle = document.querySelector(`#${id} .titles h3`)
        element.addEventListener("change", (e) => {
            if (input.value <= 0 || input.value == undefined || input.value == '') {
                input.classList.add('error')
                errorTitle.classList.add('active')
            } else {
                let button
                input.classList.remove('error')
                errorTitle.classList.remove('active')
                buttons.forEach((btn) => {
                    if(btn.classList.contains('selected')) {
                        button = btn
                    }
                })
                calculateValues(billInput, peopleInput, button, customTip)
            }
        })
    },

    selectButtonsValidation() {
        buttons.forEach((btns) => {
            btns.addEventListener("click", (e) => {
                let button
                buttons.forEach((btn) => {
                    if (btn.classList.contains('selected')) {
                        btn.classList.toggle('selected')
                    }
                })
                e.target.classList.toggle('selected')
                customTip.value = 0
                buttons.forEach((btn) => {
                    if(btn.classList.contains('selected')) {
                        button = btn
                    }
                })
                calculateValues(billInput, peopleInput, button, customTip)
            })
        })
    },

    customTipValidation() {
        customTip.addEventListener('change', (e) => {
            if (customTip.value <= 0 || customTip.value > 99 || customTip.value == '') {
                customTip.classList.add('error')
            } else {
                let button
                customTip.classList.remove('error')
                buttons.forEach((btn) => {
                    if(btn.classList.contains('selected')) {
                        button = btn
                    }
                })
                calculateValues(billInput, peopleInput, button, customTip)
            }
        })
    }
}

Validations.InputValidation(bill)
Validations.InputValidation(people)
Validations.selectButtonsValidation()
Validations.customTipValidation()