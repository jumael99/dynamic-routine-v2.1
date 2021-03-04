
const button = document.querySelector("#buttonId");
const header = document.querySelector("#firstHeader");

button.addEventListener("click", function() {

	const r = Math.floor(Math.random() * 255) +1;
	const g = Math.floor(Math.random() * 255) +1;
	const b = Math.floor(Math.random() * 255) +1;

	// Condition for dark-colorr yo!
	if (r <= 20 || g <= 20 || b <= 20) {
    	var newHeader = document.querySelector("#firstHeader");
    	newHeader.style.color = `rgb(255, 255, 255)`;
  	} else {
		var newHeader = document.querySelector("#firstHeader");
		newHeader.style.color = `rgb(46, 46, 46)`;
	}
	newColor = `RGB(${r},${g},${b})`;
	header.innerText = newColor;
	document.body.style.backgroundColor = newColor;

});

