function display(card){
    document.getElementById('result').value += card;
}
function solve(){
    let x= document.getElementById('result').value
    let y = eval(x);
    document.getElementById("result").value =y
}
function clearscreen(){
    document.getElementById('result').value=''
}