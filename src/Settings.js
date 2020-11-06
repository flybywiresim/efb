import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {darkMode: document.getElementById("root").classList.contains("darkMode")};
    }

    handleDark() {
        return () => {
            const element = document.getElementById("root");
            element.classList.toggle("darkMode");
            this.setState({ darkMode: !this.state.darkMode });
        };
    }

    render() {
        return (
            <div className="Settings">
                <div id="SettingsItem1" className="SettingsItem">
                    <p>Dark Mode</p>
                    <p className="Switch" onClick={this.handleDark()}>{this.state.darkMode ? "On" : "Off"}</p>
                </div>
                <div id="SettingsItem2" className="SettingsItem">
                    <p>Placeholder Data 2</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem3" className="SettingsItem">
                    <p>Placeholder Data 3</p>
                    <p className="Switch">Switch</p>
                </div>
            </div>
        );
    };
}

export default Settings;