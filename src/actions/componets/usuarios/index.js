import React, { Component } from 'react';
import { connect  } from 'react-redux'
import * as usersActions from '../../usersActions'
import Spinner from '../../../general/Spinner';
import Fatal from '../../../general/Fatal';
import Table from './table'


class users extends Component {

  componentDidMount() {
    if(!this.props.users.length){
      this.props.getAll()
  }
  }

  displayContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      return < Fatal message={ this.props.error} />;
    }
    return < Table />;
    }
    

  render(){
    return(
      <div>
        <h1>Users</h1>
        {this.displayContent()}
      </div>  
    );
  }
  
}


const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
}

export default connect(mapStateToProps,usersActions) (users);