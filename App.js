import React,{ Component } from 'react';
import './App.css';
import Contact from './Contact';

class  App extends Component {
  constructor(props) 
  {
    super(props);
    this.addContact=this.addContact.bind(this);
  }
  state={
    contact:[{
      name:'Albert Camus',
      phone:'0555 555 5555'
    }, 
    {
      name:'Kurt Gödel',
      phone:'0555 555 5555'
    }
]
};

addContact(Contact)
{
  console.log(Contact);
  
  const{contact}=this.state;
  contact.push(contact);

  this.setState(
    {
      contact: contact
    }
  );
}



  render() 
  {
    return (
      <div className="App">
        <Contact addContact={this.addContact} contact={this.state.contact}/>
      </div>
    );
  }
}

export default App;
