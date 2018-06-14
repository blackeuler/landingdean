import React from 'react';
import {Snippet} from './Snippet';

export const Anouncements = (props) =>{
    return(
        <ul class="list bg-white br3 pa3 pa4-ns mv3 ba b--black-10 pl0">
        <li class="pa3 pa4-ns bb b--black-10">
            <Snippet/>
        </li>
        </ul>
    );
}

export default Anouncements;