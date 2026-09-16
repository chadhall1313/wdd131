document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();


let windSpeed = parseFloat(document.querySelector(".windSpeed").textContent);
let temperature = parseFloat(document.querySelector(".temperature").textContent);
if (temperature <= 50 && windSpeed > 3) {
    document.getElementById("chill").textContent = calculateWindChill(temperature, windSpeed);
}
else
{
    document.getElementById("chill").textContent = "N/A";
}

function calculateWindChill(temperature, windSpeed)
{
    return (35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16))).toFixed(1);
}