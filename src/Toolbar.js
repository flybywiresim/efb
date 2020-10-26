import React from 'react';
import logo from './fbw.svg';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.handleClick = this.handleClick.bind(this);

        this.tabs = ['Preparation', 'Flight & Navigation', 'Multiplayer', 'Settings'];
    }

    handleClick(index) {
        return () => {
            this.setState(() => ({ activeIndex: index }));
        };
    }

    render() {
        return (
            <div className="Toolbar">
                <img src={logo} className="FBW-Logo" alt="logo" />

                {/* Tabs */}

                {
                    this.tabs.map((tabName, index) =>
                        <ToolbarItem content={tabName} isActive={index === this.state.activeIndex} action={this.handleClick(index)} />
                    )
                }
            </div>
        );
    }
}

class ToolbarItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.isActive ? 'ToolbarItem Active' : 'ToolbarItem'} onClick={this.props.action}>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Toolbar;