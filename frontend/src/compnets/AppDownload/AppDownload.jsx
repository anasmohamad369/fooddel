import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='AppDownload' id='AppDownload' >
    <p>
        For better Excepreice Download app
        <br/> ziigy
    </p>
    <div className="appdownload-platform">
        <img src={assets.app_store}/>
        <img src={assets.play_store}/>

    </div>

    </div>
  )
}

export default AppDownload