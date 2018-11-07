import React from "react";
// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('https://www.baidu.com/img/bd_logo1.png');

class ThemedImg extends React.Component {
    // ThemedButton 组件从 context 接收 theme
    render() {
        return (
            <ThemeContext.Consumer>
                {value => <img {...this.props} src={value} alt="图片"/>}
            </ThemeContext.Consumer>
        );
    }

}

// 中间组件
class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <ThemedImg />
            </div>
        );
    }

}

export {Toolbar,ThemeContext};
