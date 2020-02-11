import React, { Component } from 'react'
import { connect } from "react-redux";
import Loading from '../../../general/Spinner'
import Fatal from '../../../general/Fatal'

import * as usersActions from '../../usersActions'
import * as postsActions from '../../postsAction'


const { getAll: usersGetAll } = usersActions;
const { getByUser: getAllPostsByUser } = postsActions;

class Posts  extends Component {

    async componentDidMount(){
        const {
            usersGetAll,
            getAllPostsByUser,
            match:{ params: { key } }
        } = this.props;

        if ( !this.props.usersReducers.users.length ){
            await usersGetAll();
        }
        if(this.props.usersReducers.error){
            return;
        }
        if ( !('posts_key' in this.props.usersReducers.users[key])) {
            getAllPostsByUser(key);
        }

        
        
    }

    writeUser = () => {
        const {
            usersReducers,
            match: { params: { key } }
        } = this.props;

        if( usersReducers.error ){
            return <Fatal message={ usersReducers.error } />
        }

        if(!usersReducers.users.length || usersReducers.Loading ){
            return <Loading />
        }
        
        const name = usersReducers.users[key].name;


        return(
        <h1>Post by { name }</h1>
        )
    }





    render() {
        console.log(this.props)
        return (
            <div>
                { this.props.match.params.key }
                { this.writeUser() } 
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
