function tableCalculation() {
    let numberInput = document.getElementById('numberInput').value; 
    let resultTable = document.getElementById('resultTable');

    if(numberInput.length == 0) {
        alert('[ERRO] IMPOSSÍVEL GERAR A TABUADA [ERRO]');
        return;
    }
    
    numberInput = Number(numberInput);
    
    resultTable.innerHTML = '';
    for (let i=1; i <= 10; i++) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', i);
        optionElement.innerHTML = `${i} X ${numberInput} = ${numberInput*i}`;            
        resultTable.appendChild(optionElement);
    }
    numberInput = document.getElementById('numberInput');
    if(numberInput.value != '') {
        numberInput.value = '';
    }
}