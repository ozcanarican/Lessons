const params = {
	"latitude": 41.33,
	"longitude": 36.27,
};

const callApi = async() => {
	let url = `https://api.open-meteo.com/v1/forecast?`
	let fd = new FormData()
	fd.append("latitude",(params.latitude).toString())
	fd.append("longitude",(params.longitude).toString())
	fd.append("current","temperature_2m,wind_speed_10m,weather_code")

	const sp = new URLSearchParams(fd)
	url += sp.toString()

    console.log(`API ${url} üzerinden cagiriliyor...`)
    let res = await fetch(url,{
        method:"GET",
    })
    let weather = await res.json()
	console.log(`Hava: ${weatherCode(weather.current.weather_code)} (${weather.current.weather_code})`)
	console.log(`Sıcaklık: ${weather.current.temperature_2m} ${weather.current_units.temperature_2m}`)
	console.log(`Rüzgar hızı: ${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`)
	return weather
}


const weatherCode = (code) => {
	switch(code) {
		default:
			return "Mavi Gökyüzü";
		case 1 || 2 || 3:
			return "Parçalı Bulutlu"
		case 45 || 48:
			return "Sisli"
		case 51 || 53 || 55 || 56 || 57:
			return "Çiğseliyor"
		case 61 || 63 || 65 || 66 || 67:
			return "Yağmurlu"
		case 71 || 73 || 75 || 77 || 85 || 86:
			return "Karlı"
		case 80 || 81 || 82:
			return "Sağanak Yağışlı"
		case 95 || 96 || 99:
			return "Fırtına"
	}
}



callApi()