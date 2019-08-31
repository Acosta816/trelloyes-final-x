import React from 'react';
import './Card.css';

//accepts 2 props from the List component: title and content
function Card(props){

  return(
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}


export default Card;