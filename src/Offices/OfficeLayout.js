import React from 'react';
import OfficeCard from './OfficeCard';
import {offices} from './info.js';

export const OfficeLayout = () =>{
    return (
        <div className='cf '>
            
                <div className=' fl w-100 w-50-m w-33-l  tc  '>
                    <OfficeCard 
                            
                            bg = {offices[0].img}
                            name={offices[0].name}
                            />
                </div>
                <div className=' fl w-100 w-50-m w-33-l  tc  '>
                    <OfficeCard 
                            
                            bg = {offices[1].img}
                            name={offices[1].name}
                            />
                </div>
                <div className=' fl w-100 w-50-m w-33-l  tc  '>
                    <OfficeCard 
                            
                            bg = {offices[2].img}
                            name={offices[2].name}
                            />
                </div>
                <div className=' fl w-100 w-50-m w-33-l  tc  '>
                    <OfficeCard 
                            
                            bg = {offices[3].img}
                            name={offices[3].name}
                            />
                </div>
                <div className=' fl w-100 w-50-m w-33-l  tc '>
                    <OfficeCard 
                            
                            bg = {offices[4].img}
                            name={offices[4].name}
                            />
                </div>
                <div className=' fl w-100 w-50-m w-33-l  tc '>
                    <OfficeCard 
                            
                            bg = {offices[5].img}
                            name={offices[5].name}
                            />
                </div>
        </div>
      );
}

