import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return(
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/users/owner" className="navbar-brand">EasyAccomod</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/users/owner" className="nav-link">Notifications</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/users/owner/post" className="nav-link">Post</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/users/owner/edit" className="nav-link">Edit</Link>
                </li>
                <li className="navbar-item">
                    {/* fix later */}
                    <Link to="/users/owner" className="nav-link">Statistics</Link> 
                </li>
                <li className="navbar-item">
                    {/* fix later */}
                    <Link to="/users/owner" className="nav-link">Extend</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
}