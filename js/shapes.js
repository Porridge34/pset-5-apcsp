window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
  }

/*
 * Exercise 1.
 */


const sayHello = function() {
  let hello = document.getElementById("student-canvas-1");
  let word = hello.getContext("2d");
  word.clearRect(0, 0, hello.width, hello.height);
  word.font = "48px sans-serif";
  let wordInput = "";
  let run = true;
  while (run == true){
    wordInput = window.prompt("Message: ", "");
    if (wordInput.length > 50){
      alert("Your message is too long. Please enter another message under 50 characters.");
    } else {
      run = false
    }
  }
  word.strokeText(wordInput, 30, 70, 940);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  let canvasRectangle = document.getElementById("student-canvas-2");
  let rectangle = canvasRectangle.getContext("2d");
  rectangle.clearRect(0, 0, canvasRectangle.width, canvasRectangle.height);
  let run = true;
  while(run == true){
    let width = window.prompt("Width: ", "");
    let height = window.prompt("Height: ", "");
    let rectX = window.prompt("x: ", "");
    let rectY = window.prompt("y: ", "");
    if(isNaN(width) == true || isNaN(height) == true || isNaN(rectX) == true || isNaN(rectY) == true){
      alert("At least one of the values was not a number. Please try again.");
    }else if(height == null || width == null || rectX == null || rectY == null){
      run = false;
    }else if(height > 512 || height < 1){
      alert("The height must be between 1 and 512.");
    }else if(width > 1024 || width < 1){
      alert("The width must be between 1 and 1024.");
    }else if(rectX > 1024 || rectX < 1){
      alert("The x-coordinate must be between 1 and 1024.");
    }else if(rectY > 512 || rectY < 1){
      alert("The y-coordinate must be between 1 and 512.");
    }else if ((Number(rectX) + Number(width)) > 1024 || (Number(rectY) + Number(height)) > 512){
      alert("The rectangle does not fit on the screen.");
    }else {
      rectangle.beginPath();
      rectangle.rect(rectX, rectY, width, height);
      rectangle.stroke();
      run = false;
    }
  }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvasColored = document.getElementById("student-canvas-3");
  let colored = canvasColored.getContext("2d");
  colored.clearRect(0, 0, canvasColored.width, canvasColored.height);
  let run = true;
  let color = null;
  while (run == true){
    color = window.prompt("Color: ");
    color = color.toLowerCase();
    color = color.trim();
    switch (color){
      case "black":
        colored.fillStyle = color;
        run = false;
        break;
      case "blue":
        colored.fillStyle = color;
        run = false;
        break;
      case "orange":
        colored.fillStyle = color;
        run = false;
        break;
      case "green":
        colored.fillStyle = color;
        run = false;
        break;
      case "purple":
        colored.fillStyle = color;
        run = false;
        break;
      case "yellow":
        colored.fillStyle = color;
        run = false;
        break;
      case "red":
        colored.fillStyle = color;
        run = false;
        break;
      case null:
        run = false;
        break;
      default:
        alert("That is not a supported color. Try again.");
        break;
    }
  }
  if(color != null){
    colored.beginPath();
    colored.rect(10, 10, 100, 50);
    colored.fill();
  }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  let triangleCanvas = document.getElementById("student-canvas-4");
  let triangle = triangleCanvas.getContext("2d");
  triangle.clearRect(0, 0, triangleCanvas.width, triangleCanvas.height);
  let run = true;
  while(run == true){
    let side1 = window.prompt("Side 1: ", "");
    let side2 = window.prompt("Side 2: ", "");
    let side3 = window.prompt("Side 3: ", "");
    (side3 >= side2)? side3 = side3 : side3 = side2;
    (side3 >= side1)? side3 = side3 : side3 = side1;
    (side2 >= side1)? side2 = side2 : side2 = side1;
    if(isNaN(side1) == true || isNaN(side2) == true || isNaN(side3) == true){
      alert("At least one of the values was not a number. Please try again.");
    }else if(side3 == null || side2 == null || side1 == null){
      run = false;
    }else if(side1 > 1024 || side1 < 1 ||side2 > 1024 || side2 < 1 || side3 > 1024 || side3 < 1){
      alert("The side must be between 1 and 1024.");
    }else if ((25 + Number(side2)) > 1024 || (Number(side1)+25) > 512){
      alert("The triangle does not fit on the screen.");
    }else if(side3*side3 != side1*side1 + side2*side2){
      alert("This triangle is invalid.");
    }else {
      triangle.beginPath();
      triangle.moveTo(25,25);
      triangle.lineTo(25,(25+Number(side1)));
      triangle.lineTo((25+Number(side2)), (25+Number(side1)));
      triangle.lineTo(25,25);
      triangle.stroke();
      run = false;
    }
  }
};

/*
 * Exercise 5.
 */

const drawFace = function() {
  let canvas = document.getElementById("student-canvas-5");
  let ctx = canvas.getContext("2d");
  let centerX = canvas.width/2;
  let centerY = canvas.height/2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let run = true;
  while(run == true){
    let radius = prompt("Radius:");
    if(radius == null){
      run = false;
    }else if(radius < 32 || radius > centerY){
      alert("The radius must be between 32 and " + centerY);
    }else{
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
      ctx.moveTo(centerX - radius*.25, centerY - radius*.4);
      ctx.arc(centerX - radius*.4, centerY - radius*.4, radius*.15, 0, 2*Math.PI);
      ctx.moveTo(centerX+radius*.55, centerY - radius*.4);
      ctx.arc(centerX + radius*.4, centerY - radius*.4, radius*.15, 0, 2*Math.PI);
      ctx.moveTo(centerX+radius*.7, centerY);
      ctx.arc(centerX, centerY, radius*.7, 0, Math.PI);
      ctx.stroke();
      run = false;
    }
  }
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  let canvas = document.getElementById("student-canvas-6");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let run = true;
  while (run == true){
    let sideLength = prompt("Side length: ");
    if (sideLength == null){
      run = false;
    }else if(sideLength < 1){
      alert("The side length must be greater or equal to 1.");
    }else if (canvas.height < (sideLength * 5 + 10)){
      alert("The pyramid does not fit on the canvas.");
    }else {
      ctx.beginPath();
      let pyramidLevel = 0;
      for (let i = 5; i > 0; i--){
        for (let j = i; j > 0; j--){
          ctx.rect(sideLength*(j-1)+10+sideLength*pyramidLevel/2, canvas.height-10-sideLength*(pyramidLevel+1), sideLength,sideLength);
        }
        pyramidLevel++;
      }
      ctx.stroke();
      run = false;
    }
  }
};
