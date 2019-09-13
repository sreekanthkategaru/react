import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: {query:term},
			headers: {Authorization: 'Client-ID e07373cafbd94c94b71ef52dac0b37018acdb1e0ff60513939f854d95b998820'}
		});
		this.setState({images: response.data.results})
	}
	
	render() {
		return (
			<div className="ui container" style={{marginTop: "10px"}}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList result={this.state.images} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));