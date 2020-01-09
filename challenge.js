let timer = window.setInterval(printTime, 3000);
const counter = document.getElementById("counter");
let currentCount = 0

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");

const ul = document.querySelector("ul");
const buttons = document.getElementsByTagName("button");

const comments = document.getElementById("comments");
const commentInput = document.getElementById("comment-input");

// Timer
function printTime() {
  currentCount ++;
  document.getElementById("counter").innerHTML = currentCount;
}

minus.addEventListener("click", function(event) {
  currentCount = currentCount - 1
  document.getElementById("counter").innerHTML = currentCount;
}, false);

plus.addEventListener("click", function(event) {
  currentCount = currentCount + 1
  document.getElementById("counter").innerHTML = currentCount;
}, false);

// As a user, I can 'like' an individual number of the counter.
// I should see count of the number of 'likes' associated with that number.
let likedCounts = [];
let numCurrentCount = 1;
let object = {}

heart.addEventListener("click", function(event) {
  const li = document.createElement("li");

  console.log(object)

  // 1:1, 2:1, 3:10,

   // {
   //   1:1,
   //   2:1,
   //   3:10
   // }\

   // Why doesn't dot notation work????

  if (object[currentCount]) {
    object[currentCount]+= 1;
  } else {
    object[currentCount] = 1;
  }

  li.id = currentCount;
  li.innerText = `Number ${currentCount} has been liked ${object[currentCount]} times`;

  if (document.getElementById(currentCount)) {
    let element = document.getElementById(currentCount)
    element.innerText = `Number ${currentCount} has been liked ${object[currentCount]} times`
  } else {
    ul.appendChild(li);
  }



  //
  //
  // console.log(`The current time is: ${currentCount}`);
  // likedCounts.push(currentCount);
  //
  // console.log(`The current time is: ${currentCount}`);
  // numCurrentCount = 0;
  // const li = document.createElement("li");
  //
  // if (likedCounts.includes(currentCount) == false) {
  //   numCurrentCount++;
  //   likedCounts.push(currentCount);
  //   li.innerText = `Number ${currentCount} has been liked ${numCurrentCount} times`;
  //   ul.appendChild(li)
  // } else {
  //   numCurrentCount = 0;
  //   likedCounts.push(currentCount);
  //   for (i = 0; i < likedCounts.length; i++) {
  //     if (likedCounts[i] == currentCount) {
  //       numCurrentCount++;
  //     }
  //     console.log(numCurrentCount);
  //     li.innerText = `Number ${currentCount} has been liked ${numCurrentCount} times`;
  //     numCurrentCount;
  //   }
  // }




  // li.innerText = `Number ${currentCount} has been liked X times`


}, false);

// Pause the timer and disable all other buttons
pause.addEventListener("click", function(event) {

  if (pause.innerText == "pause") {
    clearInterval(timer);
    pause.innerText = "resume"
    console.log("The timer has been paused");
  } else {
    timer = window.setInterval(printTime, 1000);
    pause.innerText = "pause"
    console.log("The timer has been started");
  }

  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].id != "pause") {
      if (buttons[i].disabled == false) {
        buttons[i].disabled = true;
        console.log(`${buttons[i].id} has been disabled`);
      } else {
        buttons[i].disabled = false;
        console.log(`${buttons[i].id} has been enabled`);
      }
    }
  }
 }, false);

 // Leave a comment
 submit.addEventListener("click", function(event) {
    let text = commentInput.value; // This game is awesome!
    const p = document.createElement("p");

    p.innerText = text;
    comments.appendChild(p);

    commentInput.value = null

    event.preventDefault();
}, false);
