
import React,{Component} from 'react';
class ArrayToLi extends Component{
    render(){
        const nums = this.props.numbers;
        const lis = nums.map((number,index)=>(<li key={index}>{number}</li>));
        return (
            <ul>
                {lis}
            </ul>
        );
    }
}
export default ArrayToLi;