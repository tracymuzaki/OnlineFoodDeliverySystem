import React from "react";
import { Link } from "react-router-dom";



export function NoPage(){
    return(
        <div>
        <h2>Page not found</h2>
        <Link to='/form1'>
        Click to return to homepage
        </Link>
        </div>
    )

}
