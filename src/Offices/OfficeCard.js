import React from 'react';
import './OfficeCard.css'

const OfficeCard = (props)=> {

   const styles = {
     backgroundImage:`url(${props.bg})`,
     backgroundRepeat:'no-repeat'
     
     
   }
   /* const stylee = {
    max-width:200px;
    max-height:200px;
    width: auto;
    height: auto;
   } */
    return (
       
      
    <div role="img" aria-label={`${props.name}`} class=" link  dt hide-child br3 ma1 cover bg-center card" style={styles} >
      
      <span class="white dtc v-mid w-100 h-100 child bg-blue yellow tc f2  br3 cover bg-center">
      {`${props.name}`}
      </span>
    </div>

      
        
      
    );
  
}

export default OfficeCard;