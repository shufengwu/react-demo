import React from 'react';
import TextBlock from './TextBlock';
class BlogPost2 extends React.Component {
    
    render() {
        const data = this.props.data;
        return <TextBlock text={data} />;
    }
}

export default BlogPost2;