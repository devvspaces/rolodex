
import React from "react";

import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

import './App.css';


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      'monsters':[],
      'searchField': ''
    }

  }

  // Called when the component is about to be rendered
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({ monsters: users })
    })
  }

  handleChange = (e) => {
    this.setState({'searchField': e.target.value})
  }

  handleClick1(){
    console.log('button 1 clicked')
    return
  }

  render(){

    const {monsters, searchField} = this.state;
    let filteredMonster = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>

        <Search handleChange={this.handleChange }></Search>

        <CardList monsters={filteredMonster}></CardList>

        
      </div>
    ) 
  }
   
}

export default App;