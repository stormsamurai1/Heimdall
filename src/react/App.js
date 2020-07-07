import React, { useState, useEffect } from 'react';
import './App.css';

import { channels } from '../shared/constants';

const { ipcRenderer } = window;

function App() {

  const [appName, setAppName] = useState("")
  const [appVersion, setAppVersion] = useState("")

  useEffect(()=>{
    function teste(){
      ipcRenderer.send(channels.APP_INFO);
      ipcRenderer.on(channels.APP_INFO, (event, arg) =>{
        ipcRenderer.removeAllListeners(channels.APP_INFO);
        
        setAppName(arg.appName);
        setAppVersion(arg.appVersion);
      })
    }
    
    teste();
  })

  return (
    <div className="App">
      <p>{appName} version {appVersion}</p>
    </div>
  );
}

export default App;
