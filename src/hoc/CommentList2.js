import React from 'react';
import Comment from './Comment';
class CommentList2 extends React.Component {
    
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        );
    }
}

export default CommentList2;