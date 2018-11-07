import React from 'react';
import CommentList2 from './CommentList2';
import BlogPost2 from './BlogPost2';
import {DataSource} from './DataSource';
import {DataSource2} from './DataSource2';
// 函数接受一个组件参数……
function withSubscription(WrappedComponent, selectData, dataSource) {
    // ……返回另一个新组件……
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(dataSource, props)
            };
        }

        componentDidMount() {
            // ……注意订阅数据……
            dataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            dataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            console.log("handleChange");
            
            this.setState({
                data: selectData(dataSource, this.props)
            });
        }

        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}

export const CommentListWithSubscription = withSubscription(
    CommentList2,
    (dataSource) => dataSource.getComments(),
    DataSource
);

export const BlogPostWithSubscription = withSubscription(
    BlogPost2,
    (dataSource, props) => dataSource.getBlogPost(props.id),
    DataSource2
);
