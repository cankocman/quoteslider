// local reviews data
const reviews = [
	{
		id: 1,
		name: "John Wick",
		job: "Serial Killer",
		img: "img/john-wick.jpg",
		quote: "Whoever comes, whoever it is... I’ll kill them. I’ll kill them all.",
	},
	{
		id: 2,
		name: "Morpheus",
		job: "The Chosen One Seeker",
		img: "img/morpheus.jpg",
		quote:
			"You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.",
	},
	{
		id: 3,
		name: "Don Vito Corleone",
		job: "Godfather",
		img: "img/godfather.jpg",
		quote:
			"I understand. You found paradise in America, you had a good trade, you made a good living. The police protected you and there were courts of law. You didn't need a friend like me. But, now you come to me, and you say: 'Don Corleone, give me justice.' But you don't ask with respect. You don't offer friendship. You don't even think to call me Godfather. Instead, you come into my house on the day my daughter is to be married, and you ask me to do murder for money.",
	},
	{
		id: 4,
		name: "Ellis Boyd Redding",
		job: "Prisoner",
		img: "img/red.jpg",
		quote:
			"There’s not a day  goes by I don’t feel regret. Not because I’m in here, or because you think I should. I look back on the way I was then: a young, stupid kid who committed that terrible crime. I want to talk to him. I want to try and talk some sense to him, tell him the way things are. But I can’t. That kid’s long gone and this old man is all that’s left. I got to live with that. Rehabilitated? It’s just a bullshit word. So you can go and stamp your form, Sonny, and stop wasting my time. Because to tell you the truth, I don’t give a shit.",
	},
];
// SELECTING HTML ITEMS
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// declaring counter element
let counter = 0;
// default content loader
window.addEventListener("DOMContentLoaded", function () {
	const elem = reviews[counter];
	img.src = elem.img;
	author.textContent = elem.name;
	job.textContent = elem.job;
	info.textContent = elem.quote;
});
// to show selected content
function showQuote(number) {
	const elem = reviews[number];
	img.src = elem.img;
	author.textContent = elem.name;
	job.textContent = elem.job;
	info.textContent = elem.quote;
}
// next button
nextBtn.addEventListener("click", function () {
	counter++;
	if (counter > reviews.length - 1) {
		counter = 0;
	}
	showQuote(counter);
});
// prev button
prevBtn.addEventListener("click", function () {
	counter--;
	if (counter < 0) {
		counter = reviews.length;
	}
	showQuote(counter);
});
//random button
randomBtn.addEventListener("click", function () {
	let randomNumber = Math.floor(Math.random() * reviews.length);
	showQuote(randomNumber);
});
// This project was created by Can Koçman on July 12, 2020