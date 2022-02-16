function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    // inputField.value = '';  
    return inputValue;

}


// Calculate Btn Evenet Handler Add
document.getElementById('calc-btn').addEventListener('click',function(){
    // Get income field value and parse to float
    const income = getInputValue('income-field');


    // Get Food, rent, cloths field value & parse to float
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');;
    const clothCost = getInputValue('cloth-cost');
    const totalCost = foodCost + rentCost + clothCost;

    if(foodCost >= 0 && rentCost >= 0 && clothCost >=0 && income > totalCost){
        
    const getTotalCost = document.getElementById('total-cost');
    getTotalCost.innerText = totalCost;
    
    // Set Balace
    const getCurrentBalance = document.getElementById('current-balance');
    getCurrentBalance.innerText = income-totalCost;
    }
    else if(totalCost > income){
        alert('Sorry! Income can\'t\ be less than expenses.');
    }
    else{
        alert('Sorry! Please Input a positive number');
    }

    
})

document.getElementById('saving-btn').addEventListener('click',function(){
    const saving = getInputValue('saving-field');
    const income = getInputValue('income-field');


    const getsavingField = document.getElementById('saved-amount');
    const savingAmount = (income / 100) * saving;

    const currenBalanceText = document.getElementById('current-balance').innerText;
    const currentBalance = parseFloat(currenBalanceText);

    if(saving>0 && savingAmount < currentBalance){ 
        getsavingField.innerText = savingAmount;

        const remainingBalance = currentBalance - savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else if(saving < 0){
        alert('Please Input a positive Number');
    }
   
    else{
        alert('Sry! Your Savings can\'t\ be greater than your current balance');
    }
   

    
})