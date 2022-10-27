import React from "react";
import { ThemeContext } from "../../providers/theme/theme";

const ApplicationWrapper=(props)=>{

    const theme=React.useContext(ThemeContext);
    return(
       <header style={{background:theme.background}} className="App-header">
       {props.children}
       </header>
    )
}
export default ApplicationWrapper;