window.onload = function() {
<<<<<<< HEAD
  document.getElementById("hello-student").addEventListener("click", function() {
alert("Hello World!");
});
=======
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
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee
}

/*
 * Exercise 1.
 */

<<<<<<< HEAD
function sayHello() {
  alert("it worked");
  let hello = document.getElementById("student-canvas-1");
  let word = hello.getContext("2d");
  let wordInput = window.prompt("eeeeeeeeeeee", "eeeeeee");
  word.font = "48px san-serif";
  word.fillText(wordInput, 10, 50);
}
=======
const sayHello = function() {
    // write your exercise 1 code here
};
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee

/*
 * Exercise 2.
 */

const drawRectangle = function() {
<<<<<<< HEAD

=======
    // write your exercise 2 code here
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
<<<<<<< HEAD

=======
    // write your exercise 3 code here
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
<<<<<<< HEAD

=======
    // write your exercise 4 code here
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee
};

/*
 * Exercise 5.
 */

const drawFace = function() {
<<<<<<< HEAD

=======
    // write your exercise 4 code here
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
<<<<<<< HEAD

};
=======
    // write your exercise 5 code here
};
>>>>>>> 15938bf39968e1c927974e43ff129a43379a28ee
