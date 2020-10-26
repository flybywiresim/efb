import React from 'react';
import logo from './fbw.svg';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(() => ({ activeIndex: 1 }));
        console.log('click!');
        console.log(this.state.activeIndex);
    };

    #tabs = ['Preparation', 'Flight & navigation', 'Multiplayer', 'Settings'];

    render() {
        return (
            <div className="Toolbar">
                <div className="Toolbar-div">
                    <img src={logo} className="FBW-Logo" alt="logo" />

                    {/* Tabs */}

                    {
                        this.#tabs.map((tabName, index) => <ToolbarItem
                            content={tabName}
                            isActive={index === this.state.activeIndex}
                            action={this.handleClick} />)
                    }
                </div>
            </div>
        );
    }
}

class ToolbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: this.props.isActive };
    }

    render() {
        return (
            <div id={this.state.isActive ? 'ToolbarItemActive' : 'ToolbarItem'}
                onClick={this.props.action}>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Toolbar;