import React from "react"
import { Link } from "gatsby"



export default function Header(){
    return(
        <>
       
        <nav className="flex items-center justify-center my-3 space-x-24 ">
        <Link to="/">
            Home
        </Link>
        &nbsp;  &nbsp;
        <Link to="/school">
            School
        </Link>
        &nbsp;  &nbsp;
        <Link to="/lifestyle">
           Lifestyle
        </Link>
        &nbsp;  &nbsp;
      
        <Link to="/health">
           Health
        </Link>
        &nbsp;  &nbsp;
        <Link to="/love">
          Love
        </Link>
        &nbsp;  &nbsp;
        <Link to="/career">
            Career
        </Link>
        &nbsp;  &nbsp;
        <Link to="/dear-aunty-wahala">
           Dear Aunty Wahala
        </Link>
        &nbsp;  &nbsp;
        <Link to="/about">
            About
        </Link>
    </nav>
    </>
    )
  
}