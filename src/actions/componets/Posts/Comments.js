import React from 'react';
import { connect } from 'react-redux';
import Fatal from '../../../general/Fatal'
import Loading from '../../../general/Spinner'



const Comments = (props) => {
    if(props.cargando){
        return <Loading />;
    }
    if(props.error){
        return  <Fatal message={ props.error } />;
    }
    const displayCommentsOfEachPost = () => (
        props.comments.map((comment) => (
            <li>
                <b>
                    <u >
                        {comment.email}
                    </u>
                </b>
                <br/>
                { comment.body }
            </li>
        ))
    )

    return(
        <ul>
           { displayCommentsOfEachPost() }
        </ul>
    )
}


const mapStateToProps = ({ postReducers }) => postReducers

export default connect(mapStateToProps)(Comments);
