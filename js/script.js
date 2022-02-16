function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

// Calculate Btn Evenet Handler Add
document.getElementById('calc-btn').addEventListener('click',function(){
    // Get income field value and parse to float
    // const inputField = document.getElementById('income-field');
    // const income = parseFloat(inputField.value);
    const income = getInputValue('income-field');

    // Get Food, rent, cloths field value & parse to float
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');;
    const clothCost = getInputValue('cloth-cost');
    
    const totalCost = foodCost + rentCost + clothCost;


    // Set total expense
    const getTotalCost = document.getElementById('total-cost');
    getTotalCost.innerText = totalCost;

    const balance = income - totalCost;
    // Set Balace
    const getCurrentBalance = document.getElementById('current-balance');
    getCurrentBalance.innerText = balance;
    



    
})