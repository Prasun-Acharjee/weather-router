import React from 'react';
import {withRouter, NavLink ,Link} from "react-router-dom";
class Home extends React.Component
{
    render()
    {
        return(
        <div>
            <h1>Cities</h1>
            <button onClick={()=>this.props.history.push("/kolkata")}>Kolkata</button>
            <button onClick={()=>this.props.history.push("/delhi")}>Delhi</button>
            <Link to="/kolkata">Kolkata(link)</Link>
            <NavLink to="/delhi" style={{ background:'yellow', color:'white' }}>Delhi(NavLink)</NavLink>
        </div>);
    }
}
export default withRouter(Home);