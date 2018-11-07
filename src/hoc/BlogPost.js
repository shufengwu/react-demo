import React from 'react';
import {DataSource2} from './DataSource2';
import TextBlock from './TextBlock';
class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: DataSource2.getBlogPost(props.id)
        };
    }

    componentDidMount() {
        DataSource2.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource2.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            blogPost: DataSource2.getBlogPost(this.props.id)
        });
    }

    render() {
        return <TextBlock text={this.state.blogPost} />;
    }
}

export default BlogPost;