function checkUserInput(){
    let userInput = document.getElementById("userInput").value;
    //check if user input is string
    if(isNaN(userInput)){
        document.getElementById("feedBack").textContent = "INVALID INPUT ☹️"
    }
    //check if user input is empty
    else if(userInput === ""){
        document.getElementById("feedBack").textContent = "Please 🥺 Enter amount recharged"
    }
    else{
        giveBonus(parseInt(userInput));
    }
}
function giveBonus(rechargedAmount){
    //bonusEligible is the current amount minus the nearest hundred always rounding down using modular 
    let bonusEligible = (rechargedAmount - rechargedAmount%100);
    
    let airtimeBonus = bonusEligible*4;
    let dataBonus = airtimeBonus*0.1;
    
    if(airtimeBonus === 0){
        document.getElementById("feedBack").textContent = "Oops 😬 You can't get any bonus "
    }
    else{
        document.getElementById("feedBack").textContent = "Yeee 😃 You received bonus "
    }
    //display the results
    document.getElementById("rechargedAmount").textContent = rechargedAmount;
    document.getElementById("airtimeBonus").textContent = airtimeBonus;
    document.getElementById("dataBonus").textContent = dataBonus;
    
    function talkTimeInSec(rechargedAmount, airtimeBonus);
}

function talkTimeInSec(mainAcct, bonusAcct){
    let mainTalkTimeInSec = Math.trunc(mainAcct/0.36);
    let bonusTalkTimeInSec = Math.trunc(bonusAcct/0.83);
    
    if(bonusAcct === 0){
        calculateAndDisplayMainTalkTime(mainTalkTimeInSec);    
    }
    else{
       calculateAndDisplayMainTalkTime(mainTalkTimeInSec);    
        calculateAndDisplayBonusTalkTime(mainTalkTimeInSec,bonusTalkTimeInSec );
    }
}




calculateAndDisplayMainTalkTime(mainTalkTimeInSec){
    let talkTime;
    
    let seconds = Math.trunc(mainTalkTimeInSec%60);
    let minutes Math.trunc(mainTalkTimeInSec/60);
    let hour = Math.trunc(minutes/60);
    let remainingMinutes = Math.trunc(minutes%60);
    if(minutes >= 60){
        talkTime = `${hour}hr ${remainingMinutes}min`;
    }
    else{
        talkTime = `${minutes}min ${seconds}sec`;
    }
    
}

calculateAndDisplayBonusTalkTime(bonusTalkTimeInSec){
    let talkTime;
    
    let seconds = Math.trunc(mainTalkTimeInSec%60);
    let minutes Math.trunc(mainTalkTimeInSec/60);
    let hour = Math.trunc(minutes/60);
    let remainingMinutes = Math.trunc(minutes%60);
    if(minutes >= 60){
        talkTime = `${hour}hr ${remainingMinutes}min`;
    }
    else{
        talkTime = `${minutes}min ${seconds}sec`;
    }
    
}