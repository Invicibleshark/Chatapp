import React from 'react'
import filepin from "../utils/filepin.png"
import pingimage from "../utils/pingimage.png"
export const Input = () => {
  return (
    <div className="Input">
        <input type="text" placeholder='Message' />
        <div className="send">
            <input type="file" style={{display:"none"}} id="File" />
            <label forHtml="File"> <img className="Setimage" src={filepin}/></label>
            <img className="Setimage" src={pingimage} alt="" />
            <button>Send</button>
        </div>
    </div>
  )
}
