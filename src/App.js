import React from 'react';
import './App.css';
import List from './List/List';
import { lists, allCards } from './store';



class App extends React.Component {

  state = {
    lists,
    allCards
  }




  deleteCard=(card)=> {

    const newLists = this.state.lists.map(list=> {
      const newCardIds = list.cardIds.filter(id => id !== card.id)
      return(
        {
          id: list.id,
          header: list.header,
          cardIds: newCardIds
        }
      )
    });

    const allCards = this.state.allCards;

    function deleteCardObject(object,id){
      if(object.hasOwnProperty(id)){
        delete object[id];
        return object;
    }
  }

    const newAllCards= deleteCardObject(allCards,card.id);
    
    this.setState(
      {
        allCards: newAllCards,
        lists: newLists,
      }
    )
   
  }

   newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  
  handleAddCard = (listId) => {
    const newCard = this.newRandomCard()

    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
	return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      
        lists: newLists,
        allCards: {
          ...this.state.allCards,
          [newCard.id]: newCard
        }
      
    })

  }



  render(){
    const {lists, allCards} = this.state;

    const listsArray = lists.map((list,index)=> {
      const cards = list.cardIds.map(id=> allCards[id]);
      return(
        
          <List key={index} listId={list.id} header={list.header}  cards={cards} deleteCard={this.deleteCard} addCard={this.handleAddCard}/>
        
      )
    })

    return(
      
      <main className='App'>
        <header className='App-header'>
          <h1>TRELLOYES-FINAL-X</h1>
        </header>

        <div className="App-list">
          
            {listsArray}
          
        </div>

      </main>


    )

  
  }

}

export default App;