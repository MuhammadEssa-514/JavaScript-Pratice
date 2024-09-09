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
////// =======================5 =Temperature=================

//////Convert Celcious TO Fareheight
function cfcheck(){
    let cfcheck=document.getElementById("cfvalue").value;
    let f=(1.8*cfcheck)+32;
  let a=  document.getElementById("cfshow").innerText=`The Farenheit of ${cfcheck} Number is ${f}`;
}
//////Convert Fareheight TO Celcious  

function fccheck(){
     let fccheck=document.getElementById("cfvalue").value;
    let c=(fccheck-32)/1.8;
  let b=  document.getElementById("cfshow").innerText=`The Celcious of ${fccheck} Number is ${c}`;
}
//////Celcious TO Kelvin

function ckcheck(){
    let ckcheck=document.getElementById("cfvalue").value;
   let kel=273+ckcheck;
 let b=  document.getElementById("cfshow").innerText=`The Kelvin of ${ckcheck} Number is ${kel}`;
}
////// Kelvin To Celcious  

function kccheck(){
    let kccheck=document.getElementById("cfvalue").value;
   let cel=kccheck-273;
 let b=  document.getElementById("cfshow").innerText=`The Celcious of ${kccheck} Number is ${cel}`;
}

////// =======================6 =Mathi=================

//////// for aquare root
function MathiFun(){
    let dataVal=document.getElementById("mathinput").value;
    let valroot=Math.sqrt(dataVal);
    // let valEvOd=Math.sign(dataVal);
    
    if (dataVal>0){
        document.getElementById("shomathi").
        innerText=`the number ${dataVal} is Positive`;
        
    }else if(dataVal==0){
        document.getElementById("shomathi").
        innerText=`the number ${dataVal} is Equa; To Zero`;
    }else if(dataVal<0){
        document.getElementById("shomathi").
        innerText=`the number ${dataVal} is Negative`;
    }else if(dataVal){

   
    document.getElementById("shomathi").
    innerText=valroot;
        // document.getElementById("shomathi").
        // innerText=`the number ${dataVal} is In valid`;
    }

   
    document.getElementById("shomathi").
    innerText=valroot; 
}
//////// for even and odd numbe checking

// function Evnod(){
//     let Evnod=document.getElementById("mathinput").value;

//     let valeveodd=Math.sign(Evnod);
//     document.getElementById("shomathi").innerText=valeveodd;


// }

//////////======== generate random number =====
// let d=Math.random();
// console.log(d);
// d=d*(100-1)+1;
// console.log(d);
// console.log(Math.floor(d));
// ////////// new method
// let c=Math.random();
// c=c*1000;
// console.log(Math.floor(c));

//////////======== find greatest number========
// let a=prompt("enter first no")
// let b=prompt("enter second no")
// let c=prompt("enter third no")
// let d=prompt("enter forth no")
// let e=prompt("enter five no")

// let o=Math.max(a,b,c,d,e);
// console.log(`${a},${b},${c},${d},${e} the largest number is : ${o}`);



// =============================================new pra start from 09 september=============================================


// function showdata(){

//     let email=document.getElementById("email").value;
//     let pass=document.getElementById("pass").value;
//     document.getElementById("showdetail").innerHTML+=`<div><ol><li>email : ${email}</li><li>password : ${pass}</li></ol></div>`;
    
//     ["email", "pass"].forEach(e => document.getElementById(e).value = "");
// }
function showdata() {
    window.c="capital";
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    document.getElementById("showdetail").innerHTML += `<div><ol><li>email : ${email}</li><li>password : ${pass}</li></ol></div>`;

    localStorage.setItem("userData", JSON.stringify({ email, pass }));

    ["email", "pass"].forEach(e => document.getElementById(e).value = "");//2 tarikha ha iska data empty karna kaliya 
}
document.write(window.c)


    // document.getElementById("email").value="";
    // document.getElementById("pass").value="";

// document.getElementById("showdetail").innerHTML+=`<div><ol><li>Your Email is =  ${email} </li>\n<li> Your Password is =${pass} </li></ol></div>`;
    // document.getElementById("showdetail").innerHTML+=`<div><ol><li>Your Email is =  ${email} </li></ol></div>`;
    // document.getElementById("showdetaill").innerHTML+=`<div><ol><li>Your Email is =  ${pass} </li></ol></div>`;







