import React from 'react';
class Comment extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                <div>{this.props.comment.content}</div>
                <div>{this.props.comment.id}</div>
                <hr/>
            </div>
        );
    }
}

export default Comment;