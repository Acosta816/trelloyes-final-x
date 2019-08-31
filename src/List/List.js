import React from 'react';
import './List.css';
import Card from '../Card/Card';


//accepts 2 props from App: listHeader and cardsArray 
class List extends React.Component {

  render(){
    
    const cards = this.props.cards.map((card,index)=> {
      return(
        <li key={index}>
          <Card title={card.title} content={card.content} />
        </li>
      )
    });
    

    return(

      <section className='List'>
        <header className="List-header">
        {this.props.header}
        </header>

        <div className='List-cards'>
          <ul>
            {cards}
          </ul>
        </div>

      </section>

    )

  }
}

export default List;