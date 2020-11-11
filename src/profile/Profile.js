import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="ProfileWidgets">
                <SidebarWidget username={this.props.username} nickname={this.props.nickname} />
            </div>
        );
    }
}

const SidebarWidget = (props) => {
    return (
        <div className="SidebarWidget">
            <p className="WidgetTitle">Profile</p>
            <div id="Panel">
                <div id="UserIcon">
                    <img src="logo192.png" alt="" />
                </div>
                <div className="ProfileUser">
                    <p id="Nickname">{props.nickname}</p>
                    <p id="Username">Username: {props.username}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;