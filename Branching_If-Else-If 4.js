let year = prompt(
  "In which year was the ECMAScript specification published?",
  ""
);

if (year < 2015) {
  alert("Too early");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}

document.write(`<p>Answer: ${weightStatus}</p>`);
