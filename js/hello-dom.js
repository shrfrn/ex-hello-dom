'use strict'

var gTimer = 0
var gTimeoutCounter = 0

function init() {
    // TODO: start an interval which updates gTimer
    // every 100ms. It will hold the number of ms
    // since the page was loaded.

    // TODO: 2 seconds after the page loads, change the
    // text in the <h1></h1> element to something else
}

function toggleSpans() {
	// TODO: Toggle highlighting all spans in the paragraph
	// using the provided .highlight class

    // TODO: When highlighting is turned on, 
    // choose a random span and append its text to
    // the <h2></h2> element's text
}

function toggleColors() {
    // TODO: toggle an interval to set the .header's 
    // background color to a ramdom color every second.
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
    console.log(`%cTimeout ${gTimeoutCounter} done.`, `color: orange;`)

    // TODO: Update the number of active timeouts
    // in the button's text
}

function getRandomColor() {
	const letters = '0123456789ABCDEF'
	var color = '#'

	for (var i = 0; i < 6; i++) {
		color += letters.at(getRandomInt(0, letters.length))
	}
	return color
}

function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}
