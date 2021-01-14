import React, {Component} from 'react';
import {api, apiFlags} from '../service/api';
import UserPresentationComponent from './UserPresentationComponent'

class UserListContainer extends Component {
  constructor () {
    super();    
    this.state = {
      persons: [],
      flag: '',
      img: null,
      alpha2Code: ''
    };
  }

  newPerson = async () => {
    await api.get().then( async response => {
      let person = response.data.results[0]
      await apiFlags.get(`${response.data.results[0].location.country}`).then(response => {
        this.setState({ persons: [...this.state.persons, Object.assign(person, { alpha2Code : response.data[0].alpha2Code })] })
      })
    }) 
  }

  componentDidMount = async () => {
    await api.get().then( async response => {
        let person = response.data.results[0]
        await apiFlags.get(`${response.data.results[0].location.country}`).then(response => {
          this.setState({ persons: [...this.state.persons, Object.assign(person, { alpha2Code : response.data[0].alpha2Code })] })
        })
    })
  }

  removePerson = (index) => { 
    this.state.persons.splice(index, 1)
    this.setState({persons: this.state.persons})
  } 

  render () {
    return (
      <div className="container">
          <UserPresentationComponent 
              flag={this.state.flag} 
              persons={this.state.persons} 
              newPerson={this.newPerson} 
              removePerson={this.removePerson}
          />
      </div>
     
    );
  }
}

export default UserListContainer;