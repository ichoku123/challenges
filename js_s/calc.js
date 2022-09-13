function get_History(){
   return document.getElementById("history-value").innerText;
    
}

function PrintHistory(num){
    document.getElementById("history-value").innerText=num;
}

function GetOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    document.getElementById("output-value").innerText=getFormattedNumber(num);
    
}
//For commas
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput("99999");