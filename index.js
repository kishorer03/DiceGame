let rand1=Math.ceil(Math.random()*6);
let rand2=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+rand1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+rand2+".png");
let dis=document.querySelector("h1");
if(rand1>rand2){
    dis.textContent="Player1 Won";
}
else if(rand1<rand2){
    dis.textContent="Player2 Won";
}
else{
    dis.textContent="DRAW";
}