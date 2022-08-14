import React from "react";
import "../css/bootstrap-5.2.0-beta1-dist/css/bootstrap.css"
import "../css/style.css"
import "./Homedata.css"
import Header from "./Header";
import Footer from "./Footer"

function Homedata() {
    return ( <
        section className = "nd-section " >
        <
        div className = "container " >
        <
        h1 > We are One in the Universe < /h1> <
        h3 > Our goal is to make education abroad accessible to all < /h3> < /
        div > <
        div className = "container " >
        <
        div className = "row" >


        <
        div className = "col-lg-4" >

        <
        a className = " btn btn-edit1  m-d1  "
        href = "#"
        role = "button" > prep - course < /a>

        <
        /div> <
        div className = "col-lg-4" >
        <
        a className = " btn btn-edit1 m-d "
        href = "/portfolio.html"
        role = "button" > portfolio < /a>

        <
        /div> <
        div className = "col-lg-4" >
        <
        a className = " btn btn-edit1  m-d1"
        href = "#"
        role = "button" > Universities < /a>

        <
        /div> < /
        div >

        <
        /div> < /
        section >

    )
}

function Home() {
    return ( <
        div className = "d-flex flex-column min-vh-100 bg-colo" >

        <
        Header / >

        <
        Homedata / >

        <
        Footer / >
        <
        /div>

    )
}
export default Home