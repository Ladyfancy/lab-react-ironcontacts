import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts'
console.log(contacts)

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

function compareNames( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


function comparePops( a, b ) {
  if ( a.popularity < b.popularity ){
    return 1;
  }
  if ( a.popularity > b.popularity ){
    return -1;
  }
  return 0;
}

class App extends Component {

  state = {
    showContacts : contacts.splice(0,5),
    allContacts  : contacts
  }

  showTheContacts = () => {
    let listOfContacts = this.state.showContacts.map((eachContact, i)=>{ //looping
      return ( 
            <li key={i}>
              <img src={eachContact.pictureUrl}/>
              <p>{eachContact.name}</p>
              <p>{eachContact.popularity}</p>
              <button onClick={()=>this.deleteContact(i)}>Delete {i}</button>
            </li>
      )
    })
    return listOfContacts
  }
  
  addContact = () => {
    let randomIndex = Math.floor(Math.random()*this.state.allContacts.length)
    let randomContact = this.state.allContacts[randomIndex]
    let newContactList = [...this.state.showContacts] //make copy of current list 
    newContactList.push(randomContact) //add new random contact 

    let allContactList = [...this.state.allContacts]
    allContactList.splice(randomIndex, 1)

    this.setState({
      showContacts: newContactList,
      allContacts : allContactList
    })
    console.log(this.state)
  }

  sortByName = () => {

    this.setState({
      showContacts: [...this.state.showContacts].sort( compareNames ) //sort takes a function of how it wants to be sorted
    })
  }

  sortByPop = () => {

    this.setState({
      showContacts: [...this.state.showContacts].sort( comparePops ) //sort takes a function of how it wants to be sorted
    })
  }

  deleteContact = (index) => {
    console.log('delete ',index)
    let contactList = [...this.state.showContacts]
    contactList.splice(index,1)
    this.setState({
      showContacts: contactList
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPop}>Sort By Pop</button>

        <button onClick={this.addContact}>Add Random Contact</button>
        {this.showTheContacts()}
      </div>
    );
  }
}

export default App;
