import React from 'react';
import {
    Link
} from 'react-router-dom';
import logo from '../fbw.svg';

type ToolbarProps = {};

type ToolbarState = {
    activeIndex: number;
};

type ToolbarItemProps = {
    tabData: Tab,
    isActive: boolean,
    action: Function,
};

type ToolbarItemState = {};

type Tab = {
    name: string,
    link: string,
};

class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
    constructor(props: ToolbarProps) {
        super(props);
        this.state = { activeIndex: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    tabs = [
        { name: 'Preparation', link: 'preparation '},
        { name: 'Flight & Navigation', link: 'flight-navigation' },
        { name: 'Multiplayer', link: 'multiplayer' },
        { name: 'Settings', link: 'settings' }
    ];

    handleClick(index: number) {
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

                <div id="ProfileToolbar">
                    <Link to="/profile">
                        <p>Profile</p>
                        <i className="material-icons" id="Icon">account_circle</i>
                    </Link>
                </div>
            </div>
        );
    }
}

class ToolbarItem extends React.Component<ToolbarItemProps, ToolbarItemState> {
    render() {
        return (
            <div className={this.props.isActive ? 'Tab Active' : 'Tab'} onClick={() => this.props.action}>
                <Link to={"/" + this.props.tabData.link}>{this.props.tabData.name}</Link>
            </div>
        );
    }
}

export default Toolbar;