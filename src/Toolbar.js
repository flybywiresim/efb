import React from "react";
import logo from "./fbw.svg";

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 }
    }

    #tabs = ['Preparation', 'Flight & navigation', 'Multiplayer', 'Settings'];

    render() {
        return (
            <div className="Toolbar">
                <div className="Toolbar-div">
                    <img src={logo} className="FBW-Logo" alt="logo" />

                    {/* Tabs */}

                    {this.#tabs.map((tabName, index) => <ToolbarItem content={tabName} isActive={index === this.state.activeIndex}/>)}
                </div>
            </div>
        );
    }
}

class ToolbarItem extends React.Component {
    render() {
        return (
            <div id={this.props.isActive ? "ToolbarItemActive" : "ToolbarItem" }>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Toolbar;