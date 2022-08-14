import React from "react";
import "../css/bootstrap-5.2.0-beta1-dist/css/bootstrap.css"
import "../css/style.css"
import "./Footer.css"

const currentdate = new Date().getFullYear();

function Footer() {

    return ( <
        footer className = "mt-auto" >
        copy right { currentdate + " " }
        Ahmed Abdrabou <
        /footer >
    )

}
export default Footer