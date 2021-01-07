import React from 'react';

class UserPresentationComponent extends React.Component {
    render () {
      return (
        <>
          <p>https://randomuser.me/api</p>
          <div style={{"marginLeft": "40px", "marginBottom": "15px" }}>
              {this.props.persons.map(p => { 
                return (
                  <ul>
                    <li>{p.name.first}</li>
                    <li>{p.gender}</li>
                    <li>{p.location.country}</li>
                    <li>{p.location.city}</li>
                  </ul>
                )}
              )}
          </div>
          <button onClick={this.props.newPerson} >Novo</button>
        </>  
      );
    }
  }  
  export default UserPresentationComponent;