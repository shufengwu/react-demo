import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {theme => (
                        <button
                            {...this.props}
                            style={{ backgroundColor: theme.background, color: theme.color }}
                        />

                    )}
                </ThemeContext.Consumer>
            </div>

        );
    }

}

export default ThemedButton;