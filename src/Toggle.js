import React,{Component} from 'react';
class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggle:true,name:"wsf"};
        // this.myclick = this.myclick.bind(this);
    }

    // myclick(){
    //     this.setState((prevState)=>({
    //         isToggle:!prevState.isToggle
    //     }));
    // }

    myclick=()=>{
        this.setState((prevState)=>({
            isToggle:!prevState.isToggle
        }));
    }

    popAlert(name,e){
        e.preventDefault();
        alert(name);
    }

    render(){
        return(
            <button 
                onClick={this.popAlert.bind(this,this.state.name)}>
                {this.state.isToggle?"ON":"OFF"}
            </button>
        );
    }
}

export default Toggle;