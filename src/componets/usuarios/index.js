import React, { Component } from 'react';
import { connect  } from 'react-redux'
import * as usersActions from '../../actions/usersActions'

class users extends Component {

  async componentDidMount() {
    


    this.props.getAll();
  }

createRow = () =>(
  this.props.users.map((users) =>(
    <tr key={users.id}>
      <td>
        {users.name}
      </td>
      <td>
        {users.email}
      </td>
      <td>
        {users.website}
      </td>
    </tr>
  ))
);

  render(){
    return(
      <div>
        <table className='table' >
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          { this.createRow()}
        </tbody>
      </table>
    </div>  
    );
  }
  
}


const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
}

export default connect(mapStateToProps,usersActions) (users);