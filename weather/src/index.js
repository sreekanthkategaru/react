import React from 'react';
import ReactDOM from 'react-dom';

import WeatherDisplay from './Components/WeatherDisplay';

class App extends React.Component {
	state = {lat:null,err:null};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position=>this.setState({lat: position.coords.latitude}), 
			error=>this.setState({err: error.message})
		);
	}

	render() {
		console.log("component renders");
		if(this.state.lat && !this.state.err) {
			return <WeatherDisplay lat={this.state.lat}/>;
		}

		if(!this.state.lat && this.state.err) {
			return <div>Error</div>;
		}

		return <div>Loading...</div>;
	}
}

ReactDOM.render(
	<App />, 
	document.querySelector('#root')
);


