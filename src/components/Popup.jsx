import React from 'react'
import "./Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className='pop'>
            <div className="popp">
                <button className="closeb" onClick={()=>props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup