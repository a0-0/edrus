import React from "react";
import "../css/bootstrap-5.2.0-beta1-dist/css/bootstrap.css"
import "../css/style.css"
import "./Header.css"

function Header() {
    return ( <
        nav className = "navbar navbar-expand-lg " >
        <
        div className = "container" >
        <
        a className = "navbar-brand"
        href = "./Home" > Al Saad < /a> <
        div className = "collapse navbar-collapse"
        id = "navbarNav" >
        <
        ul className = "navbar-nav ms-auto" >
        <
        li className = "nav-item" >
        <
        a className = "nav-link "
        href = "{Home}" > Home < /a> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "#" > Members < /a> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "#" > Service < /a> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link "
        href = "#" > Universities < /a> <
        /li> <
        li className = "nav-item" >
        <
        a className = "btn btn-edit"
        href = "#" > Apply_now < /a>

        <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link arabic "
        href = "/arindex.html" > العربيه < /a> <
        /li> <
        /ul> <
        /div> <
        /div> <
        /nav>
    )
}
export default Header