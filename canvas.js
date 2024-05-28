const canvas1 = document.getElementById("canvas1");
const context1 = canvas1.getContext("2d");

context1.fillStyle = "purple";
context1.strokeStyle = "darkblue";
context1.font = "20px Arial";

//rectangle
context1.fillRect(4,4,50,50);

//smile
context1.fillStyle = "yellow";
context1.beginPath();
context1.arc(60, 100, 40, 0, 2 * Math.PI);
context1.fill();

context1.fillStyle = "black";
context1.beginPath();
context1.arc(40, 90, 5, 0, 2 * Math.PI);
context1.arc(80, 90, 5, 0, 2 * Math.PI);
context1.fill();

context1.beginPath();
context1.arc(60, 100, 30, 0, 1 * Math.PI);
context1.stroke();

//text
context1.fillStyle = "purple";
context1.fillText("Text", 70, 30);

//triangle
context1. moveTo(200, 8)
context1.lineTo(250, 40)
context1.lineTo(200, 40)
context1.lineTo(200, 8)
context1.stroke();

//path
context1.moveTo(250, 50);
context1.lineTo(275, 100);
context1.stroke();

//img
const img = document.getElementById("img")
context1.drawImage(img, 130, 60, 70, 70)






//frankrike
const france = document.getElementById("france");
const franceContext = france.getContext("2d")

franceContext.fillStyle = "darkblue"
franceContext.fillRect(0, 0, 100, 150)
franceContext.fillStyle = "red"
franceContext.fillRect(200, 0, 100, 150)


//disney 
const disney = document.getElementById("disney");
const disneyContext = disney.getContext("2d");

disneyContext.beginPath();
disneyContext.arc(145, 90, 40, 0, 2 * Math.PI);
disneyContext.stroke();

disneyContext.beginPath();
disneyContext.arc(104, 61, 30, 1.5, 1.90 * Math.PI);
disneyContext.stroke();

disneyContext.beginPath();
disneyContext.arc(185, 61, 30, 3.5, 2.5 * Math.PI);
disneyContext.stroke();



//ditto 
const ditto = document.getElementById("ditto");
const dittoContext = ditto.getContext("2d")
dittoContext.fillStyle = "plum"

dittoContext.beginPath();
dittoContext.moveTo(164, 40);
dittoContext.bezierCurveTo(175, 20, 200, 20, 210, 70); 
dittoContext.bezierCurveTo(210, 60, 300, 60, 210, 100);

dittoContext.bezierCurveTo(260, 150, 200, 140, 175, 130);
dittoContext.bezierCurveTo(175, 130, 150, 160, 140, 130);
dittoContext.bezierCurveTo(130, 165, 50, 120, 100, 100);

dittoContext.bezierCurveTo(100, 100, 50, 40, 110, 60);
dittoContext.bezierCurveTo(110, 20, 150, 20, 164, 40); 
dittoContext.closePath();

dittoContext.fill();
dittoContext.stroke();

dittoContext.fillStyle = "black"
dittoContext.beginPath();
dittoContext.arc(134, 60, 3, 0, 2 * Math.PI);
dittoContext.closePath();
dittoContext.fill();
dittoContext.beginPath();
dittoContext.arc(180, 50, 3, 0, 2 * Math.PI);
dittoContext.closePath();
dittoContext.fill();

dittoContext.beginPath();
dittoContext.moveTo(130, 80);
dittoContext.lineTo(180, 85)
dittoContext.stroke();

//nepal
const nepal = document.getElementById("nepal");
const nepalContext = nepal.getContext("2d");

nepalContext.beginPath();
nepalContext. moveTo(100, 15)
nepalContext.lineTo(100, 130)
nepalContext.lineTo(200, 130)
nepalContext.lineTo(132, 70)
nepalContext.lineTo(200, 70)
nepalContext.lineTo(100, 15)
nepalContext.fillStyle = "darkblue"
nepalContext.fill();

nepalContext.beginPath();
nepalContext. moveTo(105, 23)
nepalContext.lineTo(105, 125)
nepalContext.lineTo(185, 125)
nepalContext.lineTo(120, 65)
nepalContext.lineTo(180, 65)
nepalContext.lineTo(105, 23)
nepalContext.fillStyle = "red"
nepalContext.fill();


nepalContext.beginPath();
nepalContext.arc(150, 75, 10, 0, Math.PI * 2, false);
nepalContext.fillStyle = "white";
nepalContext.fill();

for (let i = 0; i < 12; i++) {
    nepalContext.beginPath();
    nepalContext.moveTo(150, 75);
    nepalContext.lineTo(150 + Math.cos(i * Math.PI / 6) * 20, 75 + Math.sin(i * Math.PI / 6) * 20);
    nepalContext.strokeStyle = "white";
    nepalContext.stroke();
}

