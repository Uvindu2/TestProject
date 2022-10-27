import React from "react";
import { ThemeContext } from "../../providers/theme/theme";

function Header(){
    const theme=React.useContext(ThemeContext)
return(
    <h1 style={{color:theme.foreground}}>Welcome to React Everyone</h1>
)
}
export default Header;