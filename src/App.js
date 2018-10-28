import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';

function formatDate(date) {
  return date.toLocaleDateString();
}
class Avatar extends Component{
  
  render(){
    let {
      author
    } = this.props;
    
    return(
      <img className="Avatar"
        src={author.avatarUrl}
        alt={author.name}
      />
    );
  }
}

class UserInfo extends Component{
  render(){
    let{author} = this.props;
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
class Comment extends Component{
  render(){
    let{date,text,author} = this.props;
   return (
    <div className="Comment">
    <UserInfo author={author}/>
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
      date:new Date(),
      text:"hehehehe",
      author:{
        name:"wsf",
        avatarUrl:"https://www.baidu.com/img/bd_logo1.png"
      }
    };
    return (
      <div>
        <Welcome name='Wsf'/>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        hahahahahahahaha
        <br></br>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <Comment date={comment.date} text={comment.text} author={comment.author}/>
        <Clock></Clock>
        <Toggle></Toggle>
      </div>
      
    );
  }

}

export default App;
