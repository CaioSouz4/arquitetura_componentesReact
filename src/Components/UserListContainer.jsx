import React, {Component} from 'react';
import api from '../service/api';
import UserPresentationComponent from './UserPresentationComponent'

class UserListContainer extends Component {
  constructor () {
    super();    
    this.state = {
      users: 'Exemplo de arquitetura separando componentes em componentes container e de apresentação',
      json: []
    };
    this.reloadpage = this.reloadpage.bind(this);
  }

  reloadpage = () =>{
    console.log("entrou")
    window.location.reload(); 
  }

  componentDidMount = async() => {
    const response = await api.get();     
    this.setState({ json : response.data.results });
    console.log(this.state.json)   
  }
  
  render () {
    return (
      <UserPresentationComponent users={this.state.users} json={this.state.json} reloadpage={() => this.reloadpage()} />
    );
  }
}

export default UserListContainer;