import React, { Component } from 'react';
import './App.css';
import {Additional} from './Additional.js'
import {Welcome} from './Welcome.js'
import { OfficeLayout } from './Offices/OfficeLayout';
import { Timeline } from 'react-twitter-widgets';
class App extends Component {
   
  render() {
    return (
      <div className='cf'>
       <div className='dtc fl w-100 w-30-ns ph3 f3'>
        <Welcome/>
        <div className=' dtc bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
        <h2>News and Updates</h2>
         <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName:'alleghenycol'
            }}
            options={{
              username: 'alleghenycol',
              height: '400'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
        
       </div>
       <div className='dtc fl w-100 w-70-ns '>
        <div className='bg-white br3 mv3 ba b--black-10'>
          <OfficeLayout className='w-100'/>
        </div>
        
        <div className=' dtc bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
       <Additional/>
       </div>
       </div>
       
       
      </div>
    );
  }
}

export default App;
