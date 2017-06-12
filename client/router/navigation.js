import React from "react";
import {NavLink} from "react-router-dom";

export const Navigation = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink exact activeClassName='active' to={"/"} activeStyle={{color: "red"}}>Home</NavLink></li>
                        <li><NavLink exact activeClassName='active' to={"/login"} activeStyle={{color: "red"}}>Login</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
