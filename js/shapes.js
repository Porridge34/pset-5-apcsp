window.onload = function() {
  document.getElementById("hello-student").addEventListener("click", function() {
alert("Hello World!");
});
}

/*
 * Exercise 1.
 */

function sayHello() {
  alert("it worked");
  let hello = document.getElementById("student-canvas-1");
  let word = hello.getContext("2d");
  let wordInput = window.prompt("eeeeeeeeeeee", "eeeeeee");
  word.font = "48px san-serif";
  word.fillText(wordInput, 10, 50);
}

/*
 * Exercise 2.
 */

const drawRectangle = function() {

};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

};

/*
 * Exercise 5.
 */

const drawFace = function() {

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {

};
