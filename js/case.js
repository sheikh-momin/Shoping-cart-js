function updatePhoneFunction(isIncrease){
  const caseNumbersString = document.getElementById('case-number-field');
  const caseNumbersValue = caseNumbersString.value;
  const caseNumbers = parseInt(caseNumbersValue)
  if(isIncrease === false){
    if(caseNumbers > 1){
    caseNumbersString.value = caseNumbers - 1;
    const totalManyString = document.getElementById('case-total')
    const totalManyValue = totalManyString.innerText;
    const previousTotalMany = parseInt(totalManyValue)
    const newTotalMany = previousTotalMany - 59;
    totalManyString.innerText = newTotalMany;
    return totalManyString.innerText;
  }}
  else{
    caseNumbersString.value = caseNumbers + 1;

    const totalManyString = document.getElementById('case-total')
    const totalManyValue = totalManyString.innerText;
    const PreviousTotalMany = parseInt(totalManyValue)
    const newTotalMany = PreviousTotalMany + 59;
    totalManyString.innerText = newTotalMany;
    return totalManyString.innerText;
  }
}

document.getElementById('btn-case-minus').addEventListener('click',()=>{
  updatePhoneFunction(false)
  subtotalAmount()
  taxAmount()
  totalAmount()
})

document.getElementById('btn-case-plus').addEventListener('click',()=>{
  updatePhoneFunction(true)
  subtotalAmount()
  taxAmount()
  totalAmount()
})