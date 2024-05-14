let transitionValue = false;
transition = document.getElementById("transition-button")
transition.innerHTML = "Transition: OFF";

let rotateClick = 1;
let translateClick = 1;
let scaleXClick = 1;
let scaleYClick = 1;
let skewClick = 1;
let flipClick = 1;


function Reload(){
    location.reload();
}

function TransitionValue(){
    transition = document.getElementById("transition-button")

    if(transitionValue === false){
        transitionValue = true;
        transition.innerHTML = "";
        transition.innerHTML = "Transition: ON";
    }else if(transitionValue === true){
        transitionValue = false
        transition.innerHTML = "";
        transition.innerHTML = "Transition: OFF";
    }
}


function RotateFunction() {
    if(transitionValue === true){
        console.log("test2")
        rotateAngle = 200 * rotateClick;
        rotate = document.getElementById("rotate")
        rotate.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)")
        rotateClick++;
    }
}

function TranslateFunction(){
    if(transitionValue === true){
        translatePositionX = 10 * translateClick;
        translatePositionY = -20 * translateClick;
        translate = document.getElementById("translate")
        translate.setAttribute("style", "transform: translate(" + translatePositionX + "px ," + translatePositionY+ "px)")
        translateClick++;
    }
}

function ScaleXFunction() {
    if(transitionValue === true){
        scaleValueX = 1.1 * scaleXClick;
        scaleX = document.getElementById("scaleX")
        scaleX.setAttribute("style", "transform: scaleX(" + scaleValueX + ")")
        scaleXClick++;
    }
}

function ScaleYFunction() {
    if(transitionValue === true){
        scaleValueY = 1.1 * scaleYClick;
        scaleY = document.getElementById("scaleY")
        scaleY.setAttribute("style", "transform: scaleY(" + scaleValueY + ")")
        scaleYClick++;
    }
}

function SkewFunction() {
    if(transitionValue === true){
        skewAngleX = 20 * skewClick; 
        skewAngleY = 10 * skewClick; 
        skew = document.getElementById("skew")
        skew.setAttribute("style", "transform: skew(" + skewAngleX + "deg," + skewAngleY + "deg)")
        skewClick++;
    }
}

function FlipFunction() {
    if(transitionValue === true){
        flipAngle = 180 * flipClick;
        flip = document.getElementById("flip?")
        flip.setAttribute("style", "transform: rotateX(" + flipAngle + "deg)")
        flipClick++;
    }
}
