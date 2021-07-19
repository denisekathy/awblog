import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

export default function Header(){
    return(
        <nav>
        <Link to="/">
            Home
        </Link>
        &nbsp; | &nbsp;
        <Link to="/school">
            School
        </Link>
        &nbsp; | &nbsp;
        <Link to="/career">
            Career
        </Link>
        &nbsp; | &nbsp;
        <Link to="/dear-aunty-wahala">
           Dear Aunty Wahala
        </Link>
        &nbsp; | &nbsp;
        <Link to="/about">
            About
        </Link>
    </nav>
    )
  
}