import React, {Component} from 'react';
import api from '../service/api';
import UserPresentationComponent from './UserPresentationComponent'

class UserListContainer extends Component {
  constructor () {
    super();    
    this.state = {
      persons: [],
    };
  }

  newPerson = async () => {
    await api.get().then(response => {
      this.setState({ persons : this.state.persons.concat(response.data.results)})
    }) 
  }

  componentDidMount = async () => {
    const response = await api.get();     
    this.setState({ persons : response.data.results });
  }
  
  render () {
    return (
      <UserPresentationComponent persons={this.state.persons} newPerson={() => this.newPerson()} />
    );
  }
}

export default UserListContainer;