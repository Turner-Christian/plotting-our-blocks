import React from 'react';
import '../App.css';


const Main = (props) => {
    return (
        <div className='main box'>
            {props.children}
        </div>
    )
}

export default Main;