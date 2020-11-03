import React from 'react';
import {
    Link
} from 'react-router-dom';
import logo from './fbw.svg';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.handleClick = this.handleClick.bind(this);

        this.tabs = [
            { name: 'Preparation', link: 'preparation '},
            { name: 'Flight & Navigation', link: 'flight-navigation' },
            { name: 'Multiplayer', link: 'multiplayer' },
            { name: 'Settings', link: 'settings' },
        ];
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

                <div id="Tabs">
                    {/* Tabs */}

                    {
                        this.tabs.map((tab, index) =>
                            <ToolbarItem key={index} tabData={tab} isActive={index === this.state.activeIndex} action={this.handleClick(index)} />
                        )
                    }
                </div>

                <div id="Profile">
                    <p>Profile</p>
                    <i className="material-icons" id="Icon">account_circle</i>
                </div>
            </div>
        );
    }
}

class ToolbarItem extends React.Component {
    render() {
        return (
            <div className={this.props.isActive ? 'Tab Active' : 'Tab'} onClick={this.props.action}>
                <Link to={"/" + this.props.tabData.link}>{this.props.tabData.name}</Link>
            </div>
        );
    }
}

export default Toolbar;