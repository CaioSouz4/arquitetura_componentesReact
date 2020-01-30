import React from 'react';

class UserPresentationComponent extends React.Component {
    render () {
      return (
        <>
          <p>api que carrega dados aleatórios:  https://randomuser.me/api</p>
          <ul>
              {this.props.users}
              {this.props.json.map(json =><li>Nome: {json.name.first}</li>)}
              {this.props.json.map(json =><li>Genêro: {json.gender}</li>)}
              {this.props.json.map(json =><li>País: {json.location.country}</li>)}
              {this.props.json.map(json =><li>Cidade: {json.location.city}</li>)}                         
          </ul>
          <button onClick={this.props.reloadpage} >Recarregar</button>
        </>  
      );
    }
  }  
  export default UserPresentationComponent;