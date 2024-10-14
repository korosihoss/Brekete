function checkInput() {
    let userInput = document.getElementById("inputField").value;
    userInput = parseInt(userInput);
    if(!isNaN(userInput)){
        return checkAndParseEligibility(userInput);
    }else {
        
    }
}

function checkAndParseEligibility(rechargeAmnt) {    
    if(rechargeAmnt >= 100){
        //parse eligible amount by using modulos
        let bonusEligAmnt = rechargeAmnt - (rechargeAmnt%100);
        return bonuses(bonusEligAmnt);
        }    
}

function bonuses(bonusEligible){
    let airtimeBonus = bonusEligible*4;
    let dataBonus = (airtimeBonus*0.1);
    return calculateTalkTime(airtimeBonus);
}

function calculateTalkTime(airtimeBonus) {
     let bonusTalkTimeInSec = (0.77*airtimeBonus);
     let bonusTalkTime = Math.trunc(bonusTalkTimeInSec/60)+ ":" +Math.trunc(bonusTalkTimeInSec/60%1*60);
     return bonusTalkTime;
}
