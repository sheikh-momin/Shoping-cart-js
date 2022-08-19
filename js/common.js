function taxAmount(){
    const subtotalAmountString = document.getElementById('sub-total')
    const subtotalAmountValue = subtotalAmountString.innerText;
    const subtotalAmount = parseInt(subtotalAmountValue)
    const taxValue = subtotalAmount * 0.1;
    document.getElementById('tax-amount').innerText = (taxValue).toFixed(1);
}
function totalAmount(){
    const subtotalAmountString = document.getElementById('sub-total')
    const subtotalAmountValue = subtotalAmountString.innerText;
    const subtotalAmount = parseInt(subtotalAmountValue)

    const taxAmountString = document.getElementById('tax-amount')
    const taxAmountValue = taxAmountString.innerText;
    const taxAmount = parseInt(taxAmountValue)
    const totalValue = subtotalAmount + taxAmount
    document.getElementById('final-total').innerText = totalValue
}