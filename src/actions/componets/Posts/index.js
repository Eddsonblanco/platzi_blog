import React, { Component } from 'react'
import { connect } from "react-redux";
import Loading from '../../../general/Spinner'
import Fatal from '../../../general/Fatal'
import Comments from './Comments'

import * as usersActions from '../../usersActions'
import * as postsActions from '../../postsAction'


const { getAll: usersGetAll } = usersActions;
const {
    getByUser: getAllPostsByUser,
    openAndClose,
    getComments

} = postsActions;

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
    };

    writePosts = () => {
        const {
            usersReducers,
            usersReducers: { users },
            postsReducers,
            postsReducers: { posts },
            match: { params: { key } }
        } = this.props;

        if (!users.length) return;
        if (usersReducers.error) return;

        if (postsReducers.Loading){
            return <Loading />
        }
        if ( postsReducers.error ){
            return <Fatal message={ postsReducers.error } />
        }
        if (!posts.length) return;
        if (!('posts_key' in users[key])) return;
        const { posts_key } =users[key];
        
    return this.newMethod(posts, posts_key);
};


    newMethod(posts, posts_key) {
        return posts[posts_key].map((posts, comment_key) => (<div className='post_title' key={posts.id} onClick={() => this.props.displayComments(posts_key, comment_key, posts.comments)}>
            <h2>
                {posts.title}
            </h2>
            <h4>
                {posts.body}
            </h4>
            {
                (posts.open) ? < Comments /> : ''
            }
        </div>));
    }

    displayComments = (posts_key, comment_key, comments ) => {
        this.props.openAndClose(posts_key, comment_key);
        this.props.getComments(posts_key, comment_key)

    }

    render() {
        console.log(this.props)
        return (
            <div>
                { this.writeUser() } 
                { this.writePosts() }
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
    getAllPostsByUser,
    openAndClose,
    getComments
}




export default connect (mapStateProps, mapDispatchToProps) (Posts);
