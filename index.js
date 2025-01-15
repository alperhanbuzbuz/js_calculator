//CALCULATOR PROGRAM

const display = document.getElementById("display");
const displayhist = document.getElementById("displayhist");
let tempHist = "";
let tempDisp = "";


//Ekrana yazdırma
function appendToDisplay(input){
    if(display.value == "Error"){
        clearDisplay();
        display.value += input;
    }
    else{
        display.value += input;
    }
    
}

//Ekranı temizleme
function clearDisplay(){
    display.value = "";
    displayhist.value = "";
    temp = "";
}

//Hesaplama
function calculate(){
    try{

    if (display.value != "") {
        tempDisp = display.value;
    }
    

    if (display.value[0] != "+" && 
        display.value[0] != "-" &&
        display.value[0] != "*" && 
        display.value[0] != "/") 
    {
        tempHist = displayhist.value;
        displayhist.value = "";
    }
    else{
        tempHist = displayhist.value;
    }
        if (displayhist.value == "") {
            displayhist.value = eval(tempDisp);
        }
        else{
            displayhist.value = eval(tempDisp + "+" + tempHist);
        }
    display.value = "";

    }catch(error){
        display.value = "Error";
    }

}