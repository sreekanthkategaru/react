import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './Components/CommentDetail';
import ApproveCard from './Components/ApproveCard';

const App = () => {
    return (
      <div className="ui comments container">
      	<ApproveCard>
	        <CommentDetail author="Sreekanth" 
	        	timeAgo="Today at 5:42PM" 
	        	message="How artistic!" 
	        	avatar={faker.image.avatar()} 
	        />
        </ApproveCard>
        <ApproveCard>
        <CommentDetail author="Arif" 
        	timeAgo="Today at 6:22PM" 
        	message="Message from sreekanth" 
        	avatar={faker.image.avatar()} 
        />
        </ApproveCard>
        <ApproveCard>
        <CommentDetail author="Muqsith" 
        	timeAgo="Today at 4:42AM" 
        	message="Good Morning" 
        	avatar={faker.image.avatar()} 
        />
        </ApproveCard>
      </div>
    );
};

ReactDOM.render( <App /> , document.querySelector('#root'));