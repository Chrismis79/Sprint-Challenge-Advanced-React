import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const ToggleDark = (props) => { 
    const [darkMode, setDarkMode] = useDarkMode(false);
    return (
        <div>
            <button type='button' onClick={() => {
                setDarkMode(!darkMode)}}>DARK MODE</button>
                {props.data.map(item => {
                    return (
                    <div>    
                    <h2 key={item.id}>{item.name}</h2>
                    <p>{item.name} is from {item.country}</p>
                    <p>Number of Searches:{item.searches}</p>
                    </div>
                    )
                })}
        </div>
    );
}

export default ToggleDark;