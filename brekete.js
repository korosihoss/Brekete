
setTimeout(function(){
    document.querySelector(".loading-container").style.display = "none";     
},3000);
let defaultFeedBackMsg;

function checkUserInput(){
    let userInput = document.getElementById("userInput");
    //check if user input is string
    if(isNaN(userInput.value)){
        document.getElementById("feedBack").textContent = "INVALID INPUT ☹️ It seems your input is letter(s). Please enter the correct input";
       
       defaultFeedBackMsg = false;
        document.getElementById("feedBack").style.color = "red";

    }
    //check if user input is empty
    else if(userInput.value === ""){
        document.getElementById("feedBack").textContent = "Please 🥺 Enter amount recharged to proceed your calculation";
        
       defaultFeedBackMsg = false;
        document.getElementById("feedBack").style.color = "red";
    }
    else{
        giveBonus(parseInt(userInput.value));
    }
    userInput.value = "";
}

function giveBonus(rechargedAmount){
    //bonusEligible is the current amount minus the nearest hundred always rounding down using modular 
    let bonusEligible = (rechargedAmount - rechargedAmount%100);
    
    let airtimeBonus = bonusEligible*4;
    let dataBonus = airtimeBonus*0.1;
    
    if(airtimeBonus === 0){
    //say something in feedback when bonus is 0
        document.getElementById("feedBack").textContent = "Oops 😬 You can't get any bonus with the entered amount";
        document.getElementById("feedBack").style.color = "darkorange";
        defaultFeedBackMsg = false;
    }
    else{
        document.getElementById("feedBack").textContent = "Yeee 😃 You received bonuses on this recharge. Good to go!";
        
       defaultFeedBackMsg = false; document.getElementById("feedBack").style.color = "green";
    }
    //display the results even if it's zero 
    document.getElementById("rechargedAmount").textContent = rechargedAmount;
    document.getElementById("airtimeBonus").textContent = airtimeBonus;
    document.getElementById("dataBonus").textContent = dataBonus;
    //convert to seconds
    talkTimeInSec(rechargedAmount, airtimeBonus);
}
//Convert bonus and main account balance to seconds they equate using the deductible kobo per second 
function talkTimeInSec(mainAcct, bonusAcct){
    let mainTalkTimeInSec = Math.trunc(mainAcct/0.36);
    let bonusTalkTimeInSec = Math.trunc(bonusAcct/0.83);
     calculateAndDisplayMainTalkTime(mainTalkTimeInSec);    
      calculateAndDisplayBonusTalkTime(bonusTalkTimeInSec );
      calculateOverallTalkTime(mainTalkTimeInSec,bonusTalkTimeInSec);
}



//calculate main account talk time
function calculateAndDisplayMainTalkTime(mainTalkTimeInSec){

    let talkTime;
    // main talk time remaining seconds 
    let seconds = Math.trunc(mainTalkTimeInSec%60);
    let minutes = Math.trunc(mainTalkTimeInSec/60);
    let hour = Math.trunc(minutes/60);
    let remainingMinutes = Math.trunc(minutes%60);
    if(minutes >= 60){
        talkTime = `${hour}hr ${remainingMinutes}min`;
    }
    else{
        talkTime = `${minutes}min ${seconds}sec (36kps)`;
    }  
    document.getElementById("mainTalkTime").textContent = talkTime;
}
//calculate and display bonus talk time 
function calculateAndDisplayBonusTalkTime(bonusTalkTimeInSec){
    let talkTime;
    // remaining seconds
    let seconds = Math.trunc(bonusTalkTimeInSec%60);
    let minutes = Math.trunc(bonusTalkTimeInSec/60);
    let hour = Math.trunc(minutes/60);
    let remainingMinutes = Math.trunc(minutes%60);
    if(minutes >= 60){
        talkTime = `${hour}hr ${remainingMinutes}min`;
    }
    else{
        talkTime = `${minutes}min ${seconds}sec (83kps)`;
    }
    
    document.getElementById("bonusTalkTime").textContent = talkTime;
}

//calculate overall talk time 
function calculateOverallTalkTime(mainTalkTimeInSec,bonusTalkTimeInSec){
    
    let talkTime;
    //seconds plus together 
    let seconds = Math.trunc(bonusTalkTimeInSec%60) + Math.trunc(mainTalkTimeInSec%60);
    //minutes plus together 
    let minutes = Math.trunc(bonusTalkTimeInSec/60) + Math.trunc(mainTalkTimeInSec/60);
    
    let hour = Math.trunc(minutes/60);
    let remainingMinutes = Math.trunc(minutes%60);
    
    if(minutes >= 60){
        talkTime = `${hour}hr ${remainingMinutes}min`;
    }
    else{
        talkTime = `${minutes}min ${seconds}sec`;
    }
     document.getElementById("allTalkTime").textContent = talkTime;
}
//reset all dom elements to default 
function reset(){
    if(defaultFeedBackMsg === false){
        showDefaultFeedBackMsg();
    }
         document.getElementById("rechargedAmount").textContent = "--";
    document.getElementById("airtimeBonus").textContent = "--";
    document.getElementById("dataBonus").textContent = "--";
  document.getElementById("mainTalkTime").textContent = "--";
   document.getElementById("bonusTalkTime").textContent = "--";
    document.getElementById("allTalkTime").textContent = "--";
}

function showDefaultFeedBackMsg(){
    document.getElementById("feedBack").textContent = "Calculate bonuses and talk time on a single recharge🔋";
    
   defaultFeedBackMsg = true; document.getElementById("feedBack").style.color = "black";
}