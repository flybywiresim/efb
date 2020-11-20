import React, {ChangeEvent} from 'react';

type ProfileProps = {
    changeSimbriefUsername: (event: ChangeEvent<HTMLInputElement>) => void,
}

type ProfileState = {}

type SidebarWidgetProps = {
    changeSimbriefUsername: (event: ChangeEvent<HTMLInputElement>) => void,
}

class Profile extends React.Component<ProfileProps, ProfileState> {
    render() {
        return (
            <div className="ProfileWidgets">
                <SidebarWidget changeSimbriefUsername={this.props.changeSimbriefUsername} />
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
                    <input type="text" placeholder="Insert Username" onChange={props.changeSimbriefUsername} id="DisplayName" />
                </div>
            </div>
        </div>
    );
};

export default Profile;