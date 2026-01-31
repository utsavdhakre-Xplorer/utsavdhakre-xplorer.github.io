const form = document.getElementById('weather-form');
const input = document.getElementById('city-input');
const result = document.getElementById('weather-result');

form.onsubmit = function(e) {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;
  result.innerHTML = 'Loading...';

  setTimeout(() => {
    // Simulated weather data
    const temps = [22, 25, 28, 30, 32, 35, 18, 20, 24, 27];
    const hums = [40, 50, 60, 70, 80, 90];
    const descs = [
      "clear sky", "few clouds", "scattered clouds", "light rain",
      "moderate rain", "thunderstorm", "haze", "mist", "overcast clouds"
    ];
    const temp = temps[Math.floor(Math.random() * temps.length)];
    const hum = hums[Math.floor(Math.random() * hums.length)];
    const desc = descs[Math.floor(Math.random() * descs.length)];

    result.innerHTML = `
      <strong>${city.charAt(0).toUpperCase() + city.slice(1)}</strong><br>
      🌡️ Temp: ${temp}°C<br>
      💧 Humidity: ${hum}%<br>
      ${desc}
    `;
  }, 700);
}; 