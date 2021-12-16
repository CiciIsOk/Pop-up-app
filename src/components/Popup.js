import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? ( 
        <div className='pop-up'>
                <div className='pop-up-inner'>
                    <button className='close-btn' onClick={() => 
                        props.setTrigger(false)}>X</button>
                    {props.children}
                </div>
                
            </div>
    ) : null;
}

export default Popup
