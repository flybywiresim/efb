import React from 'react';
import {
    Link
} from 'react-router-dom';
import logo from '../fbw.svg';

type ToolbarProps = {
    fetchSimbrief: Function;
};

type ToolbarState = {
    activeIndex: number;
};

class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
    constructor(props: ToolbarProps) {
        super(props);
        this.state = { activeIndex: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    tabs = [
        { id: 1, name: 'Preparation', link: 'preparation '},
        { id: 2, name: 'Flight & Navigation', link: 'flight-navigation' },
        { id: 3, name: 'Multiplayer', link: 'multiplayer' },
        { id: 4, name: 'Settings', link: 'settings' }
    ];

    handleClick(index: number) {
        console.log("Active index is " + this.state.activeIndex);
        return (() => {
            this.setState({activeIndex: index });
        });
    }

    render() {
        return (
            <div className="Toolbar">
                <img src={logo} className="FBW-Logo" alt="logo" />

                <div id="Tabs">
                    {
                        this.tabs.map((tab) =>
                            <div key={tab.id} className={tab.id === this.state.activeIndex ? 'Tab Active' : 'Tab'} onClick={this.handleClick(tab.id)}>
                                <Link to={"/" + tab.link}>{tab.name}</Link>
                            </div>
                        )
                    }
                </div>

                <div id="LoadSimbrief">
                    <button onClick={() => this.props.fetchSimbrief()}>
                        Load SimBrief
                    </button>
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

export default Toolbar;