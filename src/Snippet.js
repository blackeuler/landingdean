import React from 'react';

export const Snippet = (props) =>{
    return(
        <li>
            <div className="f3 dib ma2 dim">
            <h2 className='fl-r'>{props.text}</h2>
                <img src={`${props.photo}`} className='br-100 fl-l h4 w4'alt=""/>
                
            </div>
        </li>
    );

}