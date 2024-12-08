let rotatex=document.getElementById("rotatex")
let showx=document.getElementById("show")
let span=document.getElementById("span")
let bnqubla=document.getElementById("b4")

bnqubla.onclick=()=>{
  document.querySelector(".contime").style.display="none";
  document.getElementById("conqubla").style.display="block";
}

if (window.DeviceMotionEvent) {
  window.addEventListener("deviceorientation", function e(even){
    let alph = even.beta;  
  rotatex.style.transform= `rotate(${alph}deg)`
  span.innerHTML = `
  ${Math.round(alph)}
  ${Math.round(even.gamma)}
  ${Math.round(even.alpha)}
  
  `;
  });
}

