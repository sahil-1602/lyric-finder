import React, { createContext, useState} from 'react';
import useToggleState from '../hooks/useToggleState';

export const PopupContext = createContext();

export function PopupProvider(props){

    const [isOpen, togglePopup] = useToggleState(true);

    return(
        <PopupContext.Provider value={{isOpen, togglePopup}}>
            {props.children}
        </PopupContext.Provider>
    )
}