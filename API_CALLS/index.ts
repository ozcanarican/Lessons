const params = {
	"latitude": 41.33,
	"longitude": 36.27,
};

let url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&current=temperature_2m,wind_speed_10m,weather_code`

const callApi = async():Promise<CurrentWeatherType> => {
    console.log(`API ${url} üzerinden cagiriliyor...`)
    let res = await fetch(url,{
        method:"GET",
    })
    let weather:CurrentWeatherType = await res.json()
	console.log(`Hava: ${weatherCode(weather.current.weather_code)} (${weather.current.weather_code})`)
	console.log(`Sıcaklık: ${weather.current.temperature_2m} ${weather.current_units.temperature_2m}`)
	console.log(`Rüzgar hızı: ${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`)
	return weather
}

const callApi2 = async():Promise<CurrentWeatherType> => {
	let url = `https://api.open-meteo.com/v1/forecast?`
	let fd = new FormData()
	fd.append("latitude",(params.latitude).toString())
	fd.append("longitude",(params.longitude).toString())
	fd.append("current","temperature_2m,wind_speed_10m,weather_code")

	const sp = new URLSearchParams(fd as any)
	url += sp.toString()
	console.log(url)

    console.log(`API ${url} üzerinden cagiriliyor...`)
    let res = await fetch(url,{
        method:"GET",
    })
    let weather:CurrentWeatherType = await res.json()
	console.log(`Hava: ${weatherCode(weather.current.weather_code)} (${weather.current.weather_code})`)
	console.log(`Sıcaklık: ${weather.current.temperature_2m} ${weather.current_units.temperature_2m}`)
	console.log(`Rüzgar hızı: ${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`)
	return weather
}

type CurrentWeatherType = {
    current_units: {
		temperature_2m: string,
		wind_speed_10m: string,
	  },
	  current: {
		time: Date,
		interval: number,
		temperature_2m: number,
		wind_speed_10m: number,
		weather_code: number
	  }
}

const weatherCode = (code:number):string => {
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



callApi2()