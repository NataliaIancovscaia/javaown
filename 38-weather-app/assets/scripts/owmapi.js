/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

const API_KEY = "d7daf5c2d230692299fd9ff34e84594e";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const FAKE_DELAY = 1500;

/**
 * Get current weather for city from OpenWeatherMap API
 *
 * @param {string} city City to get current weather for
 */
const getCurrentWeather = async (city) => {
	// Get current weather conditions in `city`
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// Check if response is ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);   // "404 Not Found"
	}

	// Fake a slow API
	!!FAKE_DELAY && await new Promise(r => setTimeout(r, FAKE_DELAY));

	// Convert response body from JSON
	const data = await response.json();

	// Return current weather conditions
	return data;
}
