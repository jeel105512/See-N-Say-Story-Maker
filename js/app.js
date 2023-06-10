// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const nounesButton = document.querySelector(".nounes");
const verbsButton = document.querySelector(".verbs");
const adjectivesButton = document.querySelector(".adjectives");
const anotherNounesButton = document.querySelector(".another-nounes");
const placesButton = document.querySelector(".places");

const surpriseButton = document.querySelector(".surprise");
const resetButton = document.querySelector(".reset");

const nounesWords = document.querySelectorAll(".column:nth-child(1) > div")
const verbsWords = document.querySelectorAll(".column:nth-child(2) > div")
const adjectivesWords = document.querySelectorAll(".column:nth-child(3) > div")
const anotherNounesWords = document.querySelectorAll(".column:nth-child(4) > div")
const placesWords = document.querySelectorAll(".column:nth-child(5) > div")

// const nounes = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
// const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
// const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
// const anotherNounes = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
// const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Just making the arrays dynamic */
const nounes = Array.from(nounesWords, e => e.textContent);
const verbs = Array.from(verbsWords, e => e.textContent);
const adjectives = Array.from(adjectivesWords, e => e.textContent);
const anotherNounes = Array.from(anotherNounesWords, e => e.textContent);
const places = Array.from(placesWords, e => e.textContent);

const textToSpeakPTag = document.querySelector("#textToSpeak");

let nounesToSpeak = "";
let verbsToSpeak = "";
let adjectivesToSpeak = "";
let anotherNounesToSpeak = "";
let placesToSpeak = "";

let textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;

function randomIndex(array){
	return Math.floor(Math.random() * array.length);
}

function pickRandomWord(array){
	return array[randomIndex(array)];
}

nounesButton.addEventListener("click", () => {
	nounesToSpeak = pickRandomWord(nounes);
	
	addSelectedClass(nounes, nounesWords, nounesToSpeak);
	
	speakNow(nounesToSpeak);
	
	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	console.log(textToSpeak);
});

verbsButton.addEventListener("click", () => {
	verbsToSpeak = pickRandomWord(verbs);

	addSelectedClass(verbs, verbsWords, verbsToSpeak);

	speakNow(verbsToSpeak);

	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	console.log(textToSpeak);
});

adjectivesButton.addEventListener("click", () => {
	adjectivesToSpeak = pickRandomWord(adjectives);

	addSelectedClass(adjectives, adjectivesWords, adjectivesToSpeak);

	speakNow(adjectivesToSpeak);

	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	console.log(textToSpeak);
});

anotherNounesButton.addEventListener("click", () => {
	anotherNounesToSpeak = pickRandomWord(anotherNounes);

	addSelectedClass(anotherNounes, anotherNounesWords, anotherNounesToSpeak);

	speakNow(anotherNounesToSpeak);

	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	console.log(textToSpeak);
});

placesButton.addEventListener("click", () => {
	placesToSpeak = pickRandomWord(places);

	addSelectedClass(places, placesWords, placesToSpeak);

	speakNow(placesToSpeak);

	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	console.log(textToSpeak);
});

// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('.speak');
// let textToSpeak = 'This is the text string that you will generate with your script';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(textToSpeak);
});

function addSelectedClass(arrOfWords, nodeListOfWords, wordToSpeak){
	var index = arrOfWords.indexOf(wordToSpeak);
	nodeListOfWords.forEach(ele => {
		ele.classList.remove("selected");
	})
	nodeListOfWords[index].classList.add("selected");
}

function surpriseHighlightWords(){
	addSelectedClass(nounes, nounesWords, nounesToSpeak);
	addSelectedClass(verbs, verbsWords, verbsToSpeak);
	addSelectedClass(adjectives, adjectivesWords, adjectivesToSpeak);
	addSelectedClass(anotherNounes, anotherNounesWords, anotherNounesToSpeak);
	addSelectedClass(places, placesWords, placesToSpeak);
}

surpriseButton.addEventListener("click", () => {
	nounesToSpeak = pickRandomWord(nounes);
	verbsToSpeak = pickRandomWord(verbs);
	adjectivesToSpeak = pickRandomWord(adjectives);
	anotherNounesToSpeak = pickRandomWord(anotherNounes);
	placesToSpeak = pickRandomWord(places);
	surpriseHighlightWords();
	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	speakNow(textToSpeak)
});

function removeSelectedClassFromNodeList(nodeListOfWords){
	nodeListOfWords.forEach(ele => {
		ele.classList.remove("selected");
	});
}

function clearClasslist(){
	removeSelectedClassFromNodeList(nounesWords);
	removeSelectedClassFromNodeList(verbsWords);
	removeSelectedClassFromNodeList(adjectivesWords);
	removeSelectedClassFromNodeList(anotherNounesWords);
	removeSelectedClassFromNodeList(placesWords);
}

resetButton.addEventListener("click", () => {
	nounesToSpeak = "";
	verbsToSpeak = "";
	adjectivesToSpeak = "";
	anotherNounesToSpeak = "";
	placesToSpeak = "";
	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	console.log(textToSpeak);
	textToSpeakPTag.textContent = textToSpeak;
	clearClasslist();
});