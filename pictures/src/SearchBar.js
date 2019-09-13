import React from 'react';

class SearchBar extends React.Component {
	state={term:""};
	
	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<form className="ui form" onSubmit={this.onFormSubmit}>
				<div className="field">
					<input type="text" 
						value={this.state.term} 
						onChange={(event)=> this.setState({term:event.target.value})}/>
				</div>
			</form>
		);
	}
}


export default SearchBar;