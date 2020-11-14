import React from 'react';

type ProfileProps = {
    displayname: string
}

type ProfileState = {

}

type SidebarWidgetProps = {
    displayname: string
}

class Profile extends React.Component<ProfileProps, ProfileState> {
    constructor(props: ProfileProps) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="ProfileWidgets">
                <SidebarWidget displayname={this.props.displayname} />
            </div>
        );
    }
}

const SidebarWidget = (props: SidebarWidgetProps) => {
    return (
        <div className="SidebarWidget">
            <p className="WidgetTitle">Profile</p>
            <div id="Panel">
                <div id="UserIcon">
                    <img src="logo192.png" alt="" />
                </div>
                <div className="ProfileUser">
                    <p id="Displayname">{props.displayname}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;