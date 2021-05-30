import React, { useState }  from 'react';
import './style.css';


const Joke = ({id, userAvatar, userName, text, likes, dislikes }) => {
const [plusLike, setplusLike]= useState(0)
const [disLike, setDisLike]= useState(0)

  const handleSubmitLike = () =>{
    setplusLike(plusLike + 1);
  }
  const handleSubmitDislike = () =>{
    setDisLike(disLike + 1);
  }

    return (
        <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={`https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/${id}.png`}/>
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text} </p>
        </div>
        <div className="joke__likes">
          <button onClick={handleSubmitLike} id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">{likes + plusLike}</span>
          <button onClick={handleSubmitDislike} id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">{dislikes + disLike}</span>
        </div>
      </div>
        </>
    )
}

export default Joke;