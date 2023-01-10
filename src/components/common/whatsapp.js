import React from 'react'
import Portal from './portal';
import icon from "../../assets/img/whatsapp.png";

export default function WhatsApp() {
    return (
        <Portal>
            <a href="https://wa.me/919500001992" rel="noopener noreferrer" target="_blank" className="float-whatsapp">
                <img src={icon} alt="" />
            </a>
        </Portal>
    )
}
