//fazer com que os valores sejam autenticados e adiconar borda para mostrar se está
//certo ou errado, colocar pequeno texto 'can't be 0' no input se o valor colocado for 0
//mandar o valor para as funções de cálculo e verificar qual botão está selecionado
const inputValidation = {
    billInputValidation() {
        const bill = document.querySelector('.billInput')
        const errorTitle = document.querySelector('#bill .titles h3')

        bill.addEventListener("change", (e) => {
            if (bill.value <= '0' || bill.value == undefined || bill.value == '') {
                bill.classList.add('error')
                errorTitle.classList.add('active')
            } else {
                bill.classList.remove('error')
                errorTitle.classList.remove('active')
            }
        })
    },

    peopleInputValidation() {
        const people = document.querySelector('.peopleInput')
        const errorTitle = document.querySelector('#peopleNumber .titles h3')
        people.addEventListener("change", (e) => {
            if (people.value <= '0' || people.value == undefined || people.value == '') {
                people.classList.add('error')
                errorTitle.classList.add('active')
            } else {
                people.classList.remove('error')
                errorTitle.classList.remove('active')
            }
        })
    }
}

const tipButtons = {
    selectButtons() {
        const buttons = document.querySelectorAll('#buttons .button')
        buttons.forEach((btns) => {
            btns.addEventListener("click", (e) => {
                buttons.forEach((btn) => {
                    if (btn.classList.contains('selected')) {
                        btn.classList.remove('selected')
                    }
                })
                e.target.classList.add('selected')
            })
        })
    },

    customTipValidation() {
        const customTip = document.getElementById('customTip')
        customTip.addEventListener('change', (e) => {
            if (customTip.value == '0' || customTip.value > 90 || customTip.value == '') {
                customTip.classList.add('error')
            } else {
                customTip.classList.remove('error')
            }
        })
    }
}

inputValidation.peopleInputValidation()
inputValidation.billInputValidation()
tipButtons.selectButtons()
tipButtons.customTipValidation()