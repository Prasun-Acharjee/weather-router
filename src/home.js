import React from 'react';
import {withRouter} from "react-router-dom";
class Home extends React.Component
{
    render()
    {
        return(
        <div>
            
            <button onClick={()=>this.props.history.push("/kolkata")}>Kolkata</button>
            <button onClick={()=>this.props.history.push("/delhi")}>Delhi</button>
        </div>);
    }
}
export default withRouter(Home);