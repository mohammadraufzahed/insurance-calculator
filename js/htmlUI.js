class HTMLUI {
	generateYears() {
		const yearSelect = document.querySelector("#year");
		const currentYear = new Date().getFullYear();
		for (let i = 0; i < 20; i++) {
			const year = currentYear - i,
				resultYear = this.generateOptionTag(year);
			yearSelect.appendChild(resultYear);
		}
	}
	generateOptionTag(year) {
		const optionTag = document.createElement("option");
		optionTag.appendChild(document.createTextNode(year));
		optionTag.value = year;
		return optionTag;
	}
	collectInformation() {
		const form = document.querySelector("#form"),
			carMake = form.querySelector("#carMake").value,
			carYear = form.querySelector("#year").value,
			insuranceLevel = form.querySelector("#insuranceLevel").value;
		return {
			carMake,
			carYear,
			insuranceLevel,
		};
	}
	showResult(insurancePrice, data) {
		const resultBody = document.querySelector("#result");
		resultBody.innerHTML = "";
		resultBody.innerHTML = `
        <h3>Result</h3>
        <span>Car make : ${data.carMake}</span>
        <span>Car year : ${data.carYear}</span>
        <span>Insurance Level : ${data.insuranceLevel}</span>
        <span>Price: ${insurancePrice}</span>
        `;
	}
}
