import React from 'react';
import {resources} from './resources.js';
import {Snippet} from './Snippet';
import './anon.css';
export const Additional = () =>{

    const Res = resources.map((resource,i) => {
        return (
        <Snippet 
            text = {resource.name } 
            photo={resource.img} 
        />)
    });

    return(
        <div className='bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <h1>Additional Resources</h1>
            <ul className='ma3 cat'>
                {Res}
            </ul>
            
        </div>
    );
}