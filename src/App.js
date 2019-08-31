import React from 'react';
import './App.css';
import List from './List/List';
import { lists, allCards } from './store';



class App extends React.Component {

  state = {
    lists,
    allCards
  }

  


  render(){
    const {lists, allCards} = this.state;

    const listsArray = lists.map((list,index)=> {
      const cards = list.cardIds.map(id=> allCards[id]);
      return(
        
          <List key={index} header={list.header}  cards={cards}/>
        
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