import React from "react";


const NavBar = ({ handleInput }) => {
    return (
        <nav>
            <input type='text' placeholder="Search..." onChange={handleInput} />
        </nav>
    )
}

export default NavBar