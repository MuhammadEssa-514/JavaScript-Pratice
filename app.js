////// =======================1==================
////// show data input data in h1 

function Stextbtn(){
    let text=document.getElementById("textt").value;
    document.getElementById("shere").innerText=text;
   
}
////// =======================2==================
////// chech number ispositive,negative or zero
function ncheck(){
let incheck=document.getElementById("incheck").value;
let rescheck=Math.sign(incheck);
document.getElementById("scheck").innerText=rescheck;
}
////////// method 2 
function ncheck(){

let incheck=document.getElementById("incheck").value;

if(incheck>0){
    document.getElementById("scheck").innerText=`the number ${incheck} is positive`;
}else if(incheck==0){
    document.getElementById("scheck").innerText=`the number ${incheck} Zero`;
}else {
    document.getElementById("scheck").innerText=`the number ${incheck} is Negative`;

}

    
}

////// =======================3==================
////// find squre root of given number
function sqrotfun(){
    let sqrroot=document.getElementById("sqrroot").value;
    let maroot=Math.sqrt(sqrroot)
    document.getElementById("shosqroot").innerText=maroot;
}
////// =======================4==================
////// show and hide section
function shbt(){
    document.getElementById("parashow").style.display="block";
}
////// =======================5==================
//////Convert Celcious TO Fareheight
function cfcheck(){
    let cfcheck=document.getElementById("cfvalue").value;
    let f=(1.8*cfcheck)+32;
  let a=  document.getElementById("cfshow").innerText=f;

//////Convert Fareheight TO Celcious  

function fccheck(){
     let fccheck=document.getElementById("cfvalue").value;
    let c=(fccheck-32)/1.8;
//   let b=  document.getElementById("cfshow").innerText=c;
alert(c);
}



}