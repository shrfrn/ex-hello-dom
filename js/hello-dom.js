"use strict";

var gTimer = 0;
var gIntervalID = null
var gTimeoutCounter = 0;
window.addEventListener("load", () => init())

var isSpanhight = false

function init() {
  // TODO: start an interval which updates gTimer
  // every 100ms. It will hold the number of ms
  // since the page was loaded.
  // ? should try with now() - now() and compare with counter += 100
  gIntervalID = setInterval(updateInitTimer, 100)
  
  // TODO: 2 seconds after the page loads, change the
  // text in the <h1></h1> element to something else
  
  //alternative1
  setTimeout(uodateH1Text, 2000, "alternative 1")

  var elements = document.querySelectorAll("p span")
  var clssList = []
  for (var i = 0; i < elements.length; i++){
    clssList = [...elements[i].classList]
    if (clssList.includes("highlight")) {
      isSpanhight = true
      break
    }
  }
}


function updateInitTimer(){
  gTimer +=100
  
  //alternative2
  if (gTimer === 4500) {
    uodateH1Text("alternative 2")
    clearInterval(gIntervalID)
    gIntervalID = 0
  }
}

function uodateH1Text(prefix){
  document.querySelector("h1").innerText = prefix + " Setting a new h1 text after 2 seconds"
}

function toggleSpans() {
  // TODO: Toggle highlighting all spans in the paragraph
  // using the provided .highlight class
  
  // alternative 1 toggle individual
  var elements = document.querySelectorAll("p span")
  var rndSpanIdx = getRandomInt(0, elements.length)
  var clssList = []

  // for (var i = 0; i < elements.length; i++){
  //   clssList = [...elements[i].classList]
  //   if (clssList.includes("highlight")) {
  //     elements[i].classList.remove("highlight")
  //   }
  //   else {
  //     elements[i].classList.add("highlight")
  //     if (i === rndSpanIdx) document.querySelector("h2").innerText += " " + elements[i].innerText
  //   }
  // }
  

  //alternative 2 toggle as group - assume all spans have the same state
  var elements = document.querySelectorAll("p span")
  for (var i = 0; i < elements.length; i++){
    if (isSpanhight) {
      elements[i].classList.remove("highlight")
    }
    else {
      elements[i].classList.add("highlight")
      if (i === rndSpanIdx) document.querySelector("h2").innerText += " " + elements[i].innerText
    }
  }
  isSpanhight = !isSpanhight

  // ? sometimes elements[i].innerText is empty... how?

  // TODO: When highlighting is turned on,
  // choose a random span and append its text to
  // the <h2></h2> element's text
}

function toggleColors() {
  // TODO: toggle an interval to set the .header's
  // background color to a ramdom color every second.
  gIntervalID = setInterval(setHeaderColor, 1000)
}

function setHeaderColor(){
  var rndColor = getRandomColor()
  elements = document.querySelectorAll(".header")
  for (var i=0; i<elements.length; i++){
    elements[i].style = "background-color: " + rndColor
  }
}

function showModal() {
  // TODO: change the display state of the .modal to
  // make it visible
  
  // TODO: when the modal is displayed, update the
  // time display every second.
  
  // TODO: when the <span></span> element inside the
  // modal's <h2></h2> is clicked, close the modal
  
  // TODO: make the modal auto-close after 5 seconds
  // using setTimeout()
}

function shiftText() {
  // TODO: add another 10px padding to the .header's
  // left side each time the function runs
}

function resetText() {
  // TODO: reset the .header's padding
}

function addTimeout() {
  // TODO: add a timeout which will run
  // the logTimerDone() function after 5 seconds
  
  // TODO: Update the number of active timeouts
  // in the gTimeoutCounter var & in the button's text
}

function logTimerDone() {
  console.log(`%cTimeout ${gTimeoutCounter} done.`, `color: orange;`);

  // TODO: Update the number of active timeouts
  // in the button's text
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters.at(getRandomInt(0, letters.length));
  }
  return color;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
