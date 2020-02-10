import React, { Component } from 'react'
import { connect } from "react-redux";
import * as usersActions from '../../usersActions'
import * as postsActions from '../../postsAction'

const { getAll: usersGetAll } = usersActions;
const { getByUser: getAllPostsByUser } = postsActions;

class Posts  extends Component {

    async componentDidMount(){
        if(!this.props.usersReducers.users.length){
            await this.props.usersGetAll()
        }
        this.props.getAllPostsByUser(this.props.match.params.key)
    }





    render() {
        console.log(this.props)
        return (
           
            <div>
                <h1>Post from</h1>
                { this.props.match.params.key } 
            </div>
               
        )
    }
}

const mapStateProps = ({ postsReducers, usersReducers }) => {
    return{
        usersReducers,
        postsReducers
    };
};

const mapDispatchToProps = {
    usersGetAll,
    getAllPostsByUser
}

export default connect (mapStateProps, mapDispatchToProps) (Posts);
