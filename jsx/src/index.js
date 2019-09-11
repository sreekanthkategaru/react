import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
    	<div>
    		<label className="app" htmlFor="name">Enter your name:</label>
    		<input type="text" id="name" />
    		<button style={{backgroundColor:"orange", color:"white"}}>Submit</button>
    	</div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));