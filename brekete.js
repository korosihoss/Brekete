function checkInput() {
    let userInput = 300;//document.getElementById("inputField").value;
    userInput = parseInt(userInput);
    if(!isNaN(userInput)){
        return checkAndParseEligibility(userInput);
    }else {
        
    }
}


checkInput()

function checkAndParseEligibility(rechargeAmnt) {    
    if(rechargeAmnt >= 100){
        //parse eligible amount by using modulos
            let bonusEligAmnt = rechargeAmnt - (rechargeAmnt%100);
            calculateMainTalkTime(rechargeAmnt);
            return giveBonuses(bonusEligAmnt);
        }
   else{
            return calculateMainTalkTime(rechargeAmnt);
        }    
}

function giveBonuses(bonusEligible){
    let airtimeBonus = bonusEligible*4;
    let dataBonus = (airtimeBonus*0.1);
    console.log(airtimeBonus, dataBonus)
    return calculateBonusTalkTime(airtimeBonus);
}

function calculateBonusTalkTime(airtimeBonus) {
     let bonusTalkTimeInSec = (airtimeBonus/0.83);
     let bonusTalkTime = Math.trunc(bonusTalkTimeInSec/60)+ ":" +Math.trunc(bonusTalkTimeInSec/60%1*60);
}

function calculateMainTalkTime(airtime) {
     let talkTimeInSec = (airtime/0.36);
     let talkTime = Math.trunc(talkTimeInSec/60)+ ":" +Math.trunc(talkTimeInSec/60%1*60);//find reminder
     console.log(airtime);
}