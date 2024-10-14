function checkInput() {
    let userInput = document.getElementById("inputField").value;
    userInput = parseInt(userInput);
    if(!isNaN(userInput)){
        return checkAndParseEligibility(userInput);
    }else {
        
    }
}


function checkAndParseEligibility(rechargeAmnt) { 
   // update recharge amount and balance in the Dom 
    document.getElementById("rechargeAmnt").textContent = "N"+rechargeAmnt;
    document.getElementById("balance").textContent = "N"+rechargeAmnt;
    if(rechargeAmnt >= 100){
        //parse eligible amount by using modulos
            let bonusEligAmnt = rechargeAmnt - (rechargeAmnt%100);
            calculateMainTalkTime(rechargeAmnt);
            giveBonuses(bonusEligAmnt, rechargeAmnt);
        }
   else{
           calculateMainTalkTime(rechargeAmnt);
        }    
}

function giveBonuses(bonusEligible, rechargeAmnt){
    let airtimeBonus = bonusEligible*4;
    let dataBonus = (airtimeBonus*0.1);
    document.getElementById("airtimeBonus").textContent = "N"+airtimeBonus;
    document.getElementById("dataBonus").textContent = dataBonus+"MB";
    return calculateBonusTalkTime(airtimeBonus, rechargeAmnt);
}

function calculateBonusTalkTime(airtimeBonus, rechargeAmnt) {
    let bonusTalkTimeInSec = (airtimeBonus / 0.83);  // Calculate total bonus time in seconds

    let minutes = Math.trunc(bonusTalkTimeInSec / 60);  // Calculate the whole minutes
    let seconds = Math.trunc(bonusTalkTimeInSec % 60);  // Get the remaining seconds

    let bonusTalkTime = `${minutes}min ${seconds}sec`;  // Format the output string

    document.getElementById("bonusTalkTime").textContent = bonusTalkTime;  // Display the result
    console.log(calculateMainTalkTime(rechargeAmnt)+(minutes*60+seconds))
}


function calculateMainTalkTime(airtime) {
     let talkTimeInSec = (airtime/0.36);
     //total bonus in seconds 
     let minutes = Math.trunc(talkTimeInSec /60);
     let seconds = Math.trunc(talkTimeInSec % 60);
     let talkTime = `${minutes}min ${seconds}sec`;  // Format the output string
      document.getElementById("mainTalkTime").textContent = talkTime;
      return(minutes*60+seconds);
}
