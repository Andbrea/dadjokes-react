import React, { useState } from 'react';
import { render } from 'react-dom';
import Joke from './Joke';
import { jokes } from './jokes';
import './style.css';




const App = () => {

  const findID = (id) => {
    const newJokes = [].concat(jokes);
    const joke = newJokes.find(joke = joke.id === id)
  }



return (
<>
  <div className="container">
 
{
        jokes.map( joke => <Joke
            key={joke.id}
            id={joke.id}
            avatar={joke.userAvatar}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
            handleUpdate={findID}
          /> )
}
  </div>

</>
);
}



render(<App />, document.querySelector('#app'));
//jokes={}