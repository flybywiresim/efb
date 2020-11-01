import React from 'react';

class Settings extends React.Component {
    render() {
        return (
            <div className="Settings">
                <div id="SettingsItem1" className="SettingsItem">
                    <p>Placeholder Data 1</p>
                    <p className="Switch">Switch</p>
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