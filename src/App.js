
import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import ArrayToLi from './ArrayToLi';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import ProductTable from './product_table/ProductTable';
import ListOfTenThings from './child/ListOfTenThings';
import MyComponent from './proptypes/MyComponent';
import Greeting from './proptypes/Greeting';
import CustomTextInput from './refs/CustomTextInput';
import NameFormRef from './refs/NameFormRef';
import CounterButton from './shouldUpdate/CounterButton';
import WordAdder from './shouldUpdate/WordAdder';
import TickTock from './TickTock';
import { Toolbar, ThemeContext } from './context/Toolbar';
import Dynamic from './context/dynamic-context'
// import CommentList from './hoc/CommentList';
// import BlogPost from './hoc/BlogPost';
import {CommentListWithSubscription,BlogPostWithSubscription} from './hoc/Hoc';


function formatDate(date) {
  return date.toLocaleDateString();
}
class Avatar extends Component {

  render() {
    let {
      author
    } = this.props;

    return (
      <img className="Avatar"
        src={author.avatarUrl}
        alt={author.name}
      />
    );
  }
}

class UserInfo extends Component {
  render() {
    let { author } = this.props;
    return (
      <div className="UserInfo">
        <Avatar author={author} />
        <div className="UserInfo-name">
          {this.props.author.name}
        </div>
      </div>
    );
  }
}
class Comment extends Component {
  render() {
    let { date, text, author } = this.props;
    return (
      <div className="Comment">
        <UserInfo author={author} />
        <div className="Comment-text">
          {text}
        </div>
        <div className="Comment-date">
          {formatDate(date)}
        </div>
      </div>
    );
  }
}


class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: "hehehehe",
      author: {
        name: "wsf",
        avatarUrl: "https://www.baidu.com/img/bd_logo1.png"
      }
    };
    return (
      <div>
        <Welcome name='Wsf' />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        {/* PropTypes.string测试 */}
        {/* <Welcome name={1} /> */}
        {/* PropTypes isRequired */}
        {/* <Welcome/> */}

        hahahahahahahaha
        <br></br>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <Comment date={comment.date} text={comment.text} author={comment.author} />
        <Clock></Clock>
        <Toggle></Toggle>
        <ArrayToLi numbers={['哈尔滨', '长春', '沈阳']}></ArrayToLi>
        <NameForm></NameForm>
        <FlavorForm></FlavorForm>
        <Reservation></Reservation>
        <Calculator></Calculator>
        <ProductTable></ProductTable>
        <ListOfTenThings></ListOfTenThings>
        <MyComponent>
          <div>元素1</div>
          {/* <div>元素2</div> */}
        </MyComponent>
        <Greeting></Greeting>
        <CustomTextInput></CustomTextInput>
        <NameFormRef></NameFormRef>
        <CounterButton count='5'></CounterButton>
        <WordAdder></WordAdder>
        <TickTock></TickTock>
        <ThemeContext.Provider value='https://mat1.gtimg.com/pingjs/ext2020/qqindex2018/dist/img/qq_logo_2x.png'>
          <Toolbar />
        </ThemeContext.Provider>
        <Toolbar />
        <Dynamic></Dynamic>
        {/* <CommentList></CommentList>
        <BlogPost></BlogPost> */}
        <CommentListWithSubscription></CommentListWithSubscription>
        <BlogPostWithSubscription></BlogPostWithSubscription>

      </div>

    );
  }

}

export default App;
