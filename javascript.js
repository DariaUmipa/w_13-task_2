const birthDate = document.querySelector("#date");

function birthDay(){
const birthDateValue = birthDate.value;
const dateTimestamp = Date.parse(birthDateValue);
const currentDate = Date.now();
const timeDiff = dateTimestamp - currentDate;
const daysLeft = Math.floor(timeDiff/(1000*60*60*24));
const resultMessage = document.getElementById("message");

if (birthDateValue === ""){ 
    resultMessage.textContent = `Пожалуйста, выберете  дату`;
    resultMessage.style.color = 'red';
}
else if(daysLeft === 1 ||daysLeft % 10 === 1||daysLeft% 100 === 1 ){
    
    resultMessage.textContent = `До вашего дня рождения осталось ${daysLeft} день`;
    resultMessage.style.color = 'black';
}
else if(daysLeft === 2 || daysLeft === 3 || daysLeft === 4 ||daysLeft % 10 === 2 ||daysLeft % 10 === 3 ||daysLeft % 10 === 4 ||daysLeft % 100 === 2 ||daysLeft % 100 === 3||daysLeft % 100 === 4){
    resultMessage.textContent = `До вашего дня рождения осталось ${daysLeft} дня`;
    resultMessage.style.color = 'black';
}
else 
{
    resultMessage.textContent = `До вашего дня рождения осталось ${daysLeft} дней`;
    resultMessage.style.color = 'black';
    
}

}

const countButton = document.getElementById("count");
countButton.addEventListener('click', birthDay);

