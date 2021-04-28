import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <FontAwesomeIcon icon={faBookOpen} className="fa-2x"/>
            <h1>Search Books</h1>
        </header>
    )
}

export default Header

