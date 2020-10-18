class Calculator {
	insurance(data) {
		const basePrice = 2000000,
			difrenceYear = this.diffrenceYear(data.carYear),
			Discount = difrenceYear * 3;
		let insurancePrice;
		switch (data.carMake) {
			case "1":
				insurancePrice = basePrice + (basePrice / 100) * 15;
				break;
			case "2":
				insurancePrice = basePrice + (basePrice / 100) * 30;
				break;
			case "3":
				insurancePrice = basePrice + (basePrice / 100) * 60;
				break;
		}
		insurancePrice -= (insurancePrice / 100) * Discount;
		switch (data.insuranceLevel) {
			case "base":
				insurancePrice += (insurancePrice / 100) * 30;
				break;
			case "Full":
				insurancePrice += (insurancePrice / 100) * 50;
				break;
		}
		return insurancePrice;
	}
	diffrenceYear(year) {
		const currentYear = new Date().getFullYear(),
			diffrence = currentYear - year;
		return diffrence;
	}
}
