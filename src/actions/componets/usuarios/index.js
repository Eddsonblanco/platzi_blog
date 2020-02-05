import React, { Component } from 'react';
import { connect  } from 'react-redux'
import * as usersActions from '../../usersActions'
import Spinner from '../../../general/Spinner';


class users extends Component {

  componentDidMount() {
    this.props.getAll();
  }

  displayContent = () => {
    if (this.props.loading) {
      return <Spinner/>
    }
    return(
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
    )

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
        {this.displayContent()}
      </div>  
    );
  }
  
}


const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
}

export default connect(mapStateToProps,usersActions) (users);