import React, {useContext} from 'react'
import '../sass/_component.scss';
import {PopupContext} from '../contexts/Popup.context';


export default function Popup() {
    const {togglePopup} = useContext(PopupContext);
    const text = "We are currently facing Cross Origin Resource Sharing (CORS) issue. We are working on it and it will be fixed soon. To use this application, you have to click on the button below and it will redirect you to herokuapp CORS access, once you reach there just click on 'request temporary access' and you are ready to use our app! Come back REFRESH and enjoy. Sorry for the inconvinience!"
    return (
        <div className="popup">
            <div style={{display:'flex', alignItems: 'center', width:'100%', justifyContent: 'space-between'}}>
                <h2 className="popup--head">Important read this</h2>
                <div onClick={togglePopup} className="popup--close"><button>X</button></div>
            </div>
            <p className="popup--text">{text}</p>
            <a href="https://cors-anywhere.herokuapp.com/corsdemo" className="popup--btn">Click here</a>    
        </div>
    )
}
