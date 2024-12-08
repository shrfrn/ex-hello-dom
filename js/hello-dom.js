'use strict'

// var state = {

// }
var gTimer = 0
var gHeaderIntervalId = null
var gHeaderColorIntervalId = null
var gModalRefreshIntervalId = null
var gTimeoutCounter = 0
var gOriginalPadding = 0
// var gSecondsSinceModalIsOpen = 0
var gHeaderBackgroundColor = null
var gCloseModalTimeoutId = null

window.addEventListener('load', () => init())

var isSpanHighLight = false

function init() {
	// TODO: start an interval which updates gTimer
	// every 100ms. It will hold the number of ms
	// since the page was loaded.
	gHeaderIntervalId = setInterval(updateInitTimer, 100)

	// TODO: 2 seconds after the page loads, change the
	// text in the <h1></h1> element to something else

	//alternative1
	// setTimeout(updateH1Text, 2000, 'alternative 1')
	setTimeout(() => {
        const elHeading = document.querySelector('h1')
        elHeading.innerText += ' alternative 1'
    }, 2000)

	// assuming all spans share the same highlighted state
	// var elements = document.querySelectorAll("p span")
	// var clssList = []
	// for (var i = 0; i < elements.length; i++){
	//   clssList = [...elements[i].classList]
	//   if (clssList.includes("highlight")) {
	//     isSpanHighLight = true
	//     break
	//   }
	// }

	// save header original left padding
	const headerElement = document.querySelector('.header h1')
	gOriginalPadding = window.getComputedStyle(headerElement).paddingLeft
}

function updateInitTimer() {
	gTimer += 100

	//alternative2
	// if (gTimer === 4500) {
	// 	updateH1Text('alternative 2')
	// 	clearInterval(gHeaderIntervalID)
	// 	gHeaderIntervalID = null
	// }
}

function updateH1Text(prefix) {
	document.querySelector('h1').innerText = prefix + ' Setting a new h1 text after 2 seconds'
}

function toggleSpans() {
	// TODO: Toggle highlighting all spans in the paragraph
	// using the provided .highlight class

	// alternative 1 toggle individual
	var elements = Array.from(document.querySelectorAll('p span')).filter(el => el.innerText != '')
	// ? sometimes elements[i].innerText is empty... how?
	var rndSpanIdx = getRandomInt(0, elements.length)

	for (var i = 0; i < elements.length; i++) {
		// classList = [...elements[i].classList]
		if (elements[i].classList.contains('highlight')) {
			elements[i].classList.remove('highlight')
		} else {
			elements[i].classList.add('highlight')
			if (i === rndSpanIdx) document.querySelector('h2').innerText += ' ' + elements[i].innerText
		}
	}

	//alternative 2 toggle as group - assume all spans have the same state
	// for (var i = 0; i < elements.length; i++){
	//   if (isSpanHighLight) {
	//     elements[i].classList.remove("highlight")
	//   }
	//   else {
	//     elements[i].classList.add("highlight")
	//     if (i === rndSpanIdx) document.querySelector("h2").innerText += " " + elements[i].innerText
	//   }
	// }
	// isSpanHighLight = !isSpanHighLight

	// TODO: When highlighting is turned on,
	// choose a random span and append its text to
	// the <h2></h2> element's text
}

function toggleColors() {
	// TODO: toggle an interval to set the .header's
	// background color to a ramdom color every second.
	if (gHeaderColorIntervalId === null) {
		gHeaderColorIntervalId = setInterval(() => {
            var rndColor = getRandomColor()
            document.querySelector('.header').style.backgroundColor = rndColor
        }, 1000)
		// save original backgraound color
		var el = document.querySelector('.header')
		gHeaderBackgroundColor = window.getComputedStyle(el).backgroundColor
	} else {
		clearInterval(gHeaderColorIntervalId)
		gHeaderColorIntervalId = null
		// restore original background color
		var elHeader = document.querySelector('.header')
        elHeader.style.backgroundColor = gHeaderBackgroundColor
        // elHeader.style = 'background-color: ' + gHeaderBackgroundColor
	}
}

function setHeaderColor() {
	var rndColor = getRandomColor()
	var elHeader = document.querySelector('.header')
    elHeader.style.backgroundColor = rndColor
}

// function setHeaderColor() {
// 	var rndColor = getRandomColor()
// 	var elements = Array.from(document.querySelectorAll('.header'))
// 	for (var i = 0; i < elements.length; i++) {
// 		elements[i].style = 'background-color: ' + rndColor
// 	}
// }

function showModal() {
    // TODO: change the display state of the .modal to
    // make it visible

    const elModal = document.querySelector('.modal')
    elModal.classList.remove('hidden')

    // TODO: when the modal is displayed, update the
    // time since the page was loaded in the modal.

    gModalRefreshIntervalId = setInterval(refreshModal, 500)

    // TODO: when the <span></span> element inside the 
    // modal's <h2></h2> is clicked, close the modal

    // TODO: make the modal auto-close after 5 seconds
    // using setTimeout()

    gCloseModalTimeoutId = setTimeout(onCloseModal, 5000)
}

// function showModal() {
// 	// TODO: change the display state of the .modal to
// 	// make it visible
// 	var elModal = document.querySelector('.modal')
// 	elModal.style.display = 'block'

// 	// TODO: when the modal is displayed, update the
// 	// time display every second.
// 	gSecondsSinceModalIsOpen = 0
// 	gModalRefreshIntervalId = setInterval(refreshModal, 1000)

// 	// TODO: when the <span></span> element inside the
// 	// modal's <h2></h2> is clicked, close the modal
// 	var elCloseSpan = document.querySelector('.modal h2 span')
// 	elCloseSpan.addEventListener('click', () => (elModal.style.display = 'none'))

// 	// try to see the counter starting from 0 other than modal first call
// 	// console.log(`gSecondsSinceModalIsOpen = ${gSecondsSinceModalIsOpen}`)
// 	// var elTimeSpans = Array.from(document.querySelectorAll('.modal time span'))
// 	// for (var i = 0; i < elTimeSpans.length; i++) {
// 	// 	elTimeSpans[i].innerText = gSecondsSinceModalIsOpen
// 	// }
// 	//try to force the model to re-render
// 	var modalEl = document.querySelector('.modal')
// 	modalEl.classList.add('tempClass')
// 	setTimeout(() => modalEl.classList.remove('tempClass'), 0)

// 	// TODO: make the modal auto-close after 5 seconds
// 	// using setTimeout()
// 	setTimeout(() => {
// 		elModal.style.display = 'none'
// 		clearInterval(gModalRefreshIntervalId)
// 		gSecondsSinceModalIsOpen = 0
// 	}, 5000)
// }

function refreshModal() {
    
	const elMinutes = document.querySelector('.minutes')
	const elSeconds = document.querySelector('.seconds')

	const mins = String(Math.floor(gTimer / 60000)).padStart(2, '0')
	const secs = String(Math.floor((gTimer / 1000) % 60)).padStart(2, '0')

    elMinutes.innerText = mins
    elSeconds.innerText = secs
}

function onCloseModal() {
    clearTimeout(gCloseModalTimeoutId)
    clearInterval(gModalRefreshIntervalId)

    const elModal = document.querySelector('.modal')
    elModal.classList.add('hidden')
}

function shiftText() {
	// TODO: add another 10px padding to the .header's
	// left side each time the function runs
    const elHeader = document.querySelector('.header')
    const padding = parseInt(elHeader.style.paddingLeft) || '0'
    elHeader.style.paddingLeft = padding + 10 + 'px'
}

// function shiftText() {
// 	// TODO: add another 10px padding to the .header's
// 	// left side each time the function runs

// 	var headerElements = Array.from(document.querySelectorAll('.header h1, .header h2'))
// 	for (var i = 0; i < headerElements.length; i++) {
// 		var leftPadding = getComputedStyle(headerElements[i]).paddingLeft
// 		leftPadding = parseInt(leftPadding) + 10
// 		headerElements[i].style.paddingLeft = leftPadding + 'px'
// 	}
// }

function resetText() {
	// TODO: reset the .header's padding
    const elHeader = document.querySelector('.header')
    elHeader.style.paddingLeft = '0'
}

function addTimeout() {
	// TODO: add a timeout which will run
	// the logTimerDone() function after 5 seconds
	setTimeout(logTimerDone, 5000)

	// TODO: Update the number of active timeouts
	// in the gTimeoutCounter var & in the button's text
	gTimeoutCounter++
	updateBttnCounter()
}

function logTimerDone() {
	gTimeoutCounter--
	console.log(`%cTimeout ${gTimeoutCounter} done.`, `color: orange;`)

	// TODO: Update the number of active timeouts
	// in the button's text
	updateBttnCounter()
}

function updateBttnCounter() {
	var bttnSpan = document.querySelector('button span')
	bttnSpan.innerText = '(' + gTimeoutCounter + ')'
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
