/**
 * 🌧️.
 *
 */

const alertEl = document.querySelector("#alert");
const forecastEl = document.querySelector("#forecast");
const spinnerEl = document.querySelector("#spinner");

const hideErrorAlert = () => {
	alertEl.className = "hide";
}

const showErrorAlert = (msg) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-danger";
}

const showInfoAlert = (msg) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-info";
}

const showWarningAlert = (msg) => {
	alertEl.innerText = msg;
	alertEl.className = "alert alert-warning";
}

/**
 * Update UI with the retrieved current weather conditions
 *
 * @param data
 */
const renderCurrentWeather = (data) => {
	// Transform each weather condition into a listitem
	const weatherConditions = data.weather.map((condition) => {
		return `<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" alt="${condition.main}" title="${condition.description}"></li>`;
	});

	// Determine if it's daytime or nighttime when the forecast was last updated
	// If it's after sunrise and before sunset, it's daytime. Otherwise it's nighttime
	const banner = (data.dt > data.sys.sunrise && data.dt < data.sys.sunset)
		? "assets/images/day.svg"
		: "assets/images/night.svg";

	/*
	let banner = "assets/images/night.svg";  // assume nighttime as default
	if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
		// oops, it was daytime
		banner = "assets/images/day.svg";
	}
	*/

	// Get weather condition freshness
	const freshness = new Date(data.dt * 1000);

	// Output forecast to DOM
	forecastEl.innerHTML = `
		<img src="${banner}" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${data.name}</span>,
				<span id="country">${data.sys.country}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${data.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${data.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${data.wind.speed}</span>
				m/s
			</p>

			<ul class="conditions">
				${weatherConditions.join("")}
			</ul>

			<p id="freshness" class="small">${freshness.toLocaleString("sv-SE")}</p>
		</div>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	// Hide any previous current weather conditions
	forecastEl.classList.add("hide");
	hideErrorAlert();

	// Get value from input-field
	// const city = document.querySelector("#query").value;
	const city = e.target.query.value.trim();

	if (city.length < 3) {
		showInfoAlert("Please enter at least 3 characters");
		return;
	}

	try {
		// Show loading spinner
		spinnerEl.classList.remove("hide");

		// Get weather for city
		const data = await getCurrentWeather(city);

		// Render (and show) current weather conditions
		renderCurrentWeather(data);
		forecastEl.classList.remove("hide");

	} catch (err) {
		showErrorAlert(err);

	}

	// Hide loading spinner
	spinnerEl.classList.add("hide");
});
