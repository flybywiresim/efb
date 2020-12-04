import React from "react";
import Efb from "./EFB/Efb";

import logo from "./EFB/fbw.svg";

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Efb logo={logo.toString()} />
            </div>
        );
    }
}

export default App;