import React from "react";
import {Link} from 'react-router-dom'

export default () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to='/'>Home</Link>
                    <Link className="nav-item nav-link active" to='/Cart'>Cart</Link>
                </div>
            </div>
        </nav>
)};