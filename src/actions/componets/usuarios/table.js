import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

const Table = (props) => {

    const createRow = () => props.users.map((users, key) => (
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
            <td>
            <Link to={`/posts/${key}`} >
                <div className="eye-solid icon"></div>
            </Link>
            </td>
          </tr>
        ));

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
            { createRow()}
        </tbody>
        </table>
        </div>
    );
}


const mapStateToProps = (reducers) => {
    return reducers.usersReducers
}
 
export default connect(mapStateToProps) (Table) ;