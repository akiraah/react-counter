import React, { useContext } from 'react';
import { ThemeContext } from './context'

const Theme = (props) => {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        <>
        </>
    )
}

export default Theme