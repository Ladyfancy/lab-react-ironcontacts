import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './ContactList'
import './OneContact.css'


 // class ContactList extends Component {
    //   state = {
    //     contactList: [
    //       contacts[0],
    //       contacts[1],
    //       contacts[2],
    //       contacts[3],
    //       contacts[4],
    //     ]
    //   }

class App extends Component {

  state= {
    showContactList : ContactList.splice(0,5),
    allContactList : ContactList
  }

   showTheContactList = () => {
 let listOfContactList = this.state.showContactList.map((eachContactList, i) => {
  return ( 
<li key={i} >

 <img src = {eachContactList.pictureUrl} />
<p>{eachContactList.name} </p>
<button>Delete</button>

</li>
)

    })
    return listOfContactList

    addContact = () => {
      let randomIndex = Math.floor(Math.random()*this.state.allContactList.length)
      let randomContact = this.state.allContactList[randomIndex]
      let newContactList = [...this.state.showContactList] 
      newContactList.push(randomContact) 
  
      let allContactLists = [...this.state.allContactList]
      allContactLists.splice(randomIndex, 1)
  
      this.setState({
        showContacts: newContactList,
        allContactList : allContactLists 
      })
      console.log(this.state)
    }
  
  }
    // const OneContact = (props) => {
    //   return(
    //     <tr>
    //       <td><img src={props.pictureUrl} /></td>
    //       <td>{props.name}</td>
    //       <td>{props.popularity}</td>
    //       <td><button onClick={props.deleteButton}>Delete</button></td>
    //     </tr>
    //   )
    // }
    
   
      
      addRandomContact() {
        let listCopy = [...this.state.contactList];
        let random = Math.floor(Math.random() * contacts.length)
        
        listCopy.push(contacts[random]);
    
        this.setState({
          contactList: listCopy,
        })
      }
    
      sortByName() {
        let sortedList = [...this.state.contactList];
        sortedList.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name ) {
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({
          contactList: sortedList,
        }) 
      }
    
      sortByPopularity() {
        let pop = [...this.state.contactList];
    
        pop.sort((a, b) => {
          return a.popularity - b.popularity;
        })
        this.setState({
          contactList: pop,
        })
      }
    
      deleteContact(contactIndex) {
        let updatedList = [...this.state.contactList];
        updatedList.splice(contactIndex, 1);
        this.setState({
          contactList: updatedList,
        })
      }
    
      render() {
        console.log(this.state.contactList);
        return(
          <div className="ContactList">
            <h1>IronContacts</h1>
            <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
            <button onClick={() => this.sortByName()}>Sort by name</button>
            <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.contactList.map((singleContact, index) => {
                    return <OneContact key={index} deleteButton={() => this.deleteContact(index)} {...singleContact}/>
                  })
                }
              </tbody>
            </table>
          </div>
        )
      }
    }
    



export default App;
