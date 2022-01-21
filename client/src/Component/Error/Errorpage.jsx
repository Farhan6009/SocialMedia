import React from 'react'
import { NavLink } from 'react-router-dom'


const Errorpage = () => {
    return (
        <>
            <div id="not-found">
                <div className="not-found">
                    <div className="not-found-404">
                        <h1>404 Error</h1>
                    </div>
                    <h2>We are sorry ,page not found</h2>
                    <p className="mb-5">
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <NavLink to="/">Back to Homepage</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage
