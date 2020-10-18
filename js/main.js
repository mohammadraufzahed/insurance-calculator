// Variabels
const html = new HTMLUI(),
	calculator = new Calculator(),
	formBody = document.querySelector("#form");

// EventListeners
eventListeners();
function eventListeners() {
	document.addEventListener("DOMContentLoaded", html.generateYears());
	formBody.addEventListener("submit", (e) => {
		e.preventDefault();
		const userInfo = html.collectInformation(),
			calculatedData = calculator.insurance(userInfo);
		html.showResult(calculatedData, userInfo);
	});
}
