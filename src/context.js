import React, { createContext, useState } from 'react';

const ThemeContext = createContext()
const { Provider } = ThemeContext

const ThemeContextProvider = (props) => {
    const [theme, setTheme ] = useState("dark")

    return (
        <Provider value={theme}>
            {props.children} 
        </Provider>
    )
}

export {
    ThemeContext,
    ThemeContextProvider
} 