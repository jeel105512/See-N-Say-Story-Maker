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

const nounesWords = document.querySelectorAll(".column:nth-child(1) > div > p");
const verbsWords = document.querySelectorAll(".column:nth-child(2) > div > p");
const adjectivesWords = document.querySelectorAll(".column:nth-child(3) > div > p");
const anotherNounesWords = document.querySelectorAll(".column:nth-child(4) > div > p");
const placesWords = document.querySelectorAll(".column:nth-child(5) > div > p");

// const nounes = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
// const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
// const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
// const anotherNounes = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
// const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Just making the above commented arrays dynamic by recreating the arrays using the NodeList */
const nounes = Array.from(nounesWords, (e) => e.textContent);
const verbs = Array.from(verbsWords, (e) => e.textContent);
const adjectives = Array.from(adjectivesWords, (e) => e.textContent);
const anotherNounes = Array.from(anotherNounesWords, (e) => e.textContent);
const places = Array.from(placesWords, (e) => e.textContent);

const textToSpeakPTag = document.querySelector("#textToSpeak");

// declaring the variables to form the string text to speak
let nounesToSpeak = "";
let verbsToSpeak = "";
let adjectivesToSpeak = "";
let anotherNounesToSpeak = "";
let placesToSpeak = "";

let textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;

// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector(".speak");
// let textToSpeak = 'This is the text string that you will generate with your script';

/* Variables end
-------------------------------------------------- */

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// generating a random number(index) with the help of the array's length
function randomIndex(array) {
	return Math.floor(Math.random() * array.length);
}

// accessing a random word from the list(array of words) using the randomIndex() function
function pickRandomWord(array) {
	return array[randomIndex(array)];
}

// function that adds the css class "selected" which highlights the randomly picked word
// we first remove the "selected" class from every words to remove any previously added class to highlight the newly selected element using the removeSelectedClassFromNodeList() function
// we then select a random index using the array and then use the parentNode property to select the parent element and add the css class to the div
function addSelectedClass(arrOfWords, nodeListOfWords, wordToSpeak) {
	var index = arrOfWords.indexOf(wordToSpeak);
	removeSelectedClassFromNodeList(nodeListOfWords);
	nodeListOfWords[index].parentNode.classList.add("selected");
}

// using the addSelectedClass() function created above we utilize it to highlight the 5 words that gets selected randomly when the surprise button is clicked
function surpriseHighlightWords() {
	addSelectedClass(nounes, nounesWords, nounesToSpeak);
	addSelectedClass(verbs, verbsWords, verbsToSpeak);
	addSelectedClass(adjectives, adjectivesWords, adjectivesToSpeak);
	addSelectedClass(anotherNounes, anotherNounesWords, anotherNounesToSpeak);
	addSelectedClass(places, placesWords, placesToSpeak);
}

// function that removes the css class from each and every word in the column
function removeSelectedClassFromNodeList(nodeListOfWords) {
	nodeListOfWords.forEach((ele) => {
		ele.parentNode.classList.remove("selected");
	});
}

// utilizing the removeSelectedClassFromNodeList() function to remove css class from all the highlighted words
function clearClasslist() {
	removeSelectedClassFromNodeList(nounesWords);
	removeSelectedClassFromNodeList(verbsWords);
	removeSelectedClassFromNodeList(adjectivesWords);
	removeSelectedClassFromNodeList(anotherNounesWords);
	removeSelectedClassFromNodeList(placesWords);
}

/* Functions end
-------------------------------------------------- */

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener("click", function () {
	speakNow(textToSpeak);
});

// adding a click event listener in every one of the "five" buttons and adding a css class named "selected" to highlight the word
// we are also utilizing the functions that we build to add the class and to speak the randomly selected word (speakNow())
// and then finally assigning the word that gets picked in the textToSpeak string and display it in the p tag.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// adding a click event listener on the surprise button and then selecting a random word for each 5 columns
// and then use the surpriseHighlightWords() to highlight the randomly selected words
surpriseButton.addEventListener("click", () => {
	nounesToSpeak = pickRandomWord(nounes);
	verbsToSpeak = pickRandomWord(verbs);
	adjectivesToSpeak = pickRandomWord(adjectives);
	anotherNounesToSpeak = pickRandomWord(anotherNounes);
	placesToSpeak = pickRandomWord(places);
	surpriseHighlightWords();
	textToSpeak = `${nounesToSpeak} ${verbsToSpeak} ${adjectivesToSpeak} ${anotherNounesToSpeak} ${placesToSpeak}`;
	textToSpeakPTag.textContent = textToSpeak;
	speakNow(textToSpeak);
});

// reseating all the strings to "" and removing the css from highlighted words using the clearClasslist() function
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

/* Event Listeners end
-------------------------------------------------- */