import React from 'react';
class TextBlock extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                <div>{this.props.text}</div>
                <hr/>
            </div>
        );
    }
}

export default TextBlock;