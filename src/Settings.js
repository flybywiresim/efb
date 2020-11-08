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
                <div id="SettingsItem4" className="SettingsItem">
                    <p>Placeholder Data 4</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem5" className="SettingsItem">
                    <p>Placeholder Data 5</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem6" className="SettingsItem">
                    <p>Placeholder Data 6</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem7" className="SettingsItem">
                    <p>Placeholder Data 7</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem8" className="SettingsItem">
                    <p>Placeholder Data 8</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem9" className="SettingsItem">
                    <p>Placeholder Data 9</p>
                    <p className="Switch">Switch</p>
                </div>
                <div id="SettingsItem10" className="SettingsItem">
                    <p>Placeholder Data 10</p>
                    <p className="Switch">Switch</p>
                </div>
            </div>
        );
    };
}

export default Settings;