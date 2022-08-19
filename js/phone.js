function updateCaseFunction(isIncrease){
    const caseNumbersString = document.getElementById('phone-number-field');
    const caseNumbersValue = caseNumbersString.value;
    const caseNumbers = parseInt(caseNumbersValue)
    if (isIncrease === false){
        if(caseNumbers > 1){
        caseNumbersString.value = caseNumbers - 1;
        const totalManyString = document.getElementById('phone-total')
        const totalManyValue = totalManyString.innerText;
        const PreviousTotalMany = parseInt(totalManyValue)
        const newTotalMany = PreviousTotalMany - 1219;
        totalManyString.innerText = newTotalMany;
        return totalManyString.innerText;
    }}
    else {
        caseNumbersString.value = caseNumbers + 1;

    const totalManyString = document.getElementById('phone-total')
    const totalManyValue = totalManyString.innerText;
    const previousTotalMany = parseInt(totalManyValue)
    const newTotalMany = previousTotalMany + 1219;
    totalManyString.innerText = newTotalMany;
    return totalManyString.innerText;
    }
}

function subtotalAmount(){
    const phoneNumbersString = document.getElementById('phone-total')
    const totalPhoneManyValue = phoneNumbersString.innerText;
    const previousPhoneTotalMany = parseInt(totalPhoneManyValue)

    const caseNumbersString = document.getElementById('case-total')
    const totalCaseManyValue = caseNumbersString.innerText;
    const previousCaseTotalMany = parseInt(totalCaseManyValue)

    const subtotalValue = previousPhoneTotalMany + previousCaseTotalMany;
    document.getElementById('sub-total').innerText = subtotalValue;
}


document.getElementById('btn-phone-minus').addEventListener('click',()=>{
    updateCaseFunction(false)
    subtotalAmount()
    taxAmount()
    totalAmount()
})

document.getElementById('btn-phone-plus').addEventListener('click',()=>{
    updateCaseFunction(true)
    subtotalAmount()
    taxAmount()
    totalAmount()
})