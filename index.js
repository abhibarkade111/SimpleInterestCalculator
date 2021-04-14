let buttonEnter= document.getElementById('buttonEnter');
let inputDisplay= document.getElementById('inputDisplay');
let inputAmount= document.getElementById('inputAmount');
let inputInterest= document.getElementById('inputInterest');
let inputPeriod= document.getElementById('inputPeriod');


function calculate(){

    inputDisplay.value=(inputAmount.value*inputInterest.value*inputPeriod.value)/100;
}

buttonEnter.addEventListener('click',()=>{
    calculate();
});



inputAmount.addEventListener("keyup", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode == 13) {
     KeyboardEvent.preventDefault();
    buttonEnter.click();
    console.log("hello");
    }
  });

  inputInterest.addEventListener("keyup", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode == 13) {
     KeyboardEvent.preventDefault();
    buttonEnter.click();
    console.log("hello");
    }
  });

  inputPeriod.addEventListener("keyup", function(KeyboardEvent) {
    if (KeyboardEvent.keyCode == 13) {
     KeyboardEvent.preventDefault();
    buttonEnter.click();
    console.log("hello");
    }
  });
  
