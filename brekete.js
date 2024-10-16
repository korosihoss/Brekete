function checkInput() {
    let userInput = document.getElementById("inputField").value;
    userInput = parseInt(userInput);
    if(!isNaN(userInput)){
       document.getElementById("inputField").value = "";
        document.getElementById("feedBack").textContent = "CONGRATULATIONS! The entered amount is qualify for bonuses";
        return checkAndParseEligibility(userInput);
    }else {
        reset();
        
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
           document.getElementById("feedBack").textContent = "Note: The entered amount is NOT qualify for bonuses ";
           
           document.getElementById("airtimeBonus").textContent = "--";
    document.getElementById("dataBonus").textContent = "--";        
    document.getElementById("bonusTalkTime").textContent = "--";
   
   
    let mainTalkTime = document.getElementById("mainTalkTime").textContent;    
    document.getElementById("allTalkTime").textContent = mainTalkTime;
        }    
}

function giveBonuses(bonusEligible, rechargeAmnt){
    let airtimeBonus = bonusEligible*4;
    let dataBonus = (airtimeBonus*0.1);
    if(dataBonus > 899){
        dataBonus = dataBonus/1024;
        document.getElementById("dataBonus").textContent = dataBonus.toFixed(1)+"GB";
    }else{
        document.getElementById("dataBonus").textContent = dataBonus+"MB";
    }
    document.getElementById("airtimeBonus").textContent = "N"+airtimeBonus;

    calculateBonusTalkTime(airtimeBonus, rechargeAmnt);
}

function calculateBonusTalkTime(airtimeBonus, rechargeAmnt) {
    let bonusTalkTime
    let bonusTalkTimeInSec = (airtimeBonus / 0.83);  // Calculate total bonus time in seconds

    let minutes = Math.trunc(bonusTalkTimeInSec / 60);  // Calculate the whole minutes
    let seconds = Math.trunc(bonusTalkTimeInSec % 60);  // Get the remaining seconds
    let hours = Math.trunc(minutes/60);
    let remainingMinutes = Math.trunc(minutes%60);
    if(minutes >= 60){
        bonusTalkTime = `${hours}hr ${remainingMinutes}min (83kps)`;  // Format the output string

    }else{
        bonusTalkTime = `${minutes}min ${seconds}sec (83kps)`;  // Format the output string

    }

    
    document.getElementById("bonusTalkTime").textContent = bonusTalkTime;  // Display thepp result
   let rechargeAmntTime =  calculateMainTalkTime(rechargeAmnt);
   
   let overallTalkTime;
   
   let overallMinutes = Math.trunc((minutes*60+seconds+rechargeAmntTime)/60);
      let overallSeconds = Math.trunc((minutes*60+seconds+rechargeAmntTime)%60);
      let overallHours = Math.trunc(overallMinutes/60);
      let overallRemMinutes = Math.trunc(overallMinutes%60);
      if(overallMinutes >= 60){
         overallTalkTime = `${overallHours}hr ${overallRemMinutes}min`; 
      }else{
          overallTalkTime = `${overallMinutes}min ${overallSeconds}sec`;
      }
      document.getElementById("allTalkTime").textContent = overallTalkTime;
   
}


function calculateMainTalkTime(airtime) {
     let talkTime;
     let talkTimeInSec = (airtime/0.36);
     //total bonus in seconds 
     let minutes = Math.trunc(talkTimeInSec /60);
     let seconds = Math.trunc(talkTimeInSec % 60);
     let hours = Math.trunc(minutes/60);
     let remainingMinutes = Math.trunc(minutes%60);
     
     if(minutes >= 60){
         talkTime = `${hours}hr ${remainingMinutes}min (36kps)`;  // Format the output string
     } else{
         talkTime = `${minutes}min ${seconds}sec (36kps)`;  // Format the output string
     }
     
      document.getElementById("mainTalkTime").textContent = talkTime;
      return(minutes*60+seconds);
}
function reset(){
    document.getElementById("rechargeAmnt").textContent = "--";
    document.getElementById("balance").textContent = "--";
    document.getElementById("airtimeBonus").textContent = "--";
    document.getElementById("dataBonus").textContent = "--";
    document.getElementById("mainTalkTime").textContent = "--";
    document.getElementById("bonusTalkTime").textContent = "--";
    document.getElementById("mainTalkTime").textContent = "--";
    document.getElementById("allTalkTime").textContent = "--";
    document.getElementById("feedBack").textContent = "Calculate bonuses and talk time on a single recharge";
}
