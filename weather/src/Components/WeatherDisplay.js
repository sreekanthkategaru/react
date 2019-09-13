import React from 'react';

const getWeather = (lat, month) => {
	if(month > 2 && month<9) {
		return lat>0 ? 'hot':'cold';
	} else {
		return lat>0 ? 'cold':'hot';
	}
}

const WeatherDisplay = props => {
	const weather = getWeather(props.lat, new Date().getMonth());
	const iconName = weather === 'hot' ? 'sun': 'snowflake';
	return (
		<div>
			{weather}
		</div>
	);
};

export default WeatherDisplay;
