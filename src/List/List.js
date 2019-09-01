import React from 'react';
import './List.css';
import Card from '../Card/Card';


//accepts 2 props from App: listHeader and cardsArray 
class List extends React.Component {

  render(){
    
    const cards = this.props.cards.map((card,index)=> {
      return(
        <li key={index}>
          <Card title={card.title} content={card.content} deleteCard={this.props.deleteCard} crd={card} />
        </li>
      )
    });
    

    return(

      <section className='List'>

        <header className="List-header">
        {this.props.header}
        </header>

        <div className='List-cards'>
          <button onClick={()=>this.props.addCard(this.props.listId)}>+Add Card</button>
          <ul>
            {cards}
          </ul>
        </div>

      </section>

    )

  }
}

export default List;