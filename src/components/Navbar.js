import React from 'react'

export const Navabar = () => {
  return (
    <div className='Navbar'>
      <span className='logo'>Eazy Chat</span>
      <div className='user'>
        <img src="https://img-getpocket.cdn.mozilla.net/404x202/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F4ace85b4-5732-4d20-bd75-eda98c53926c.jpeg" alt="keshav"/>
        <span>Keshav</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
export default  Navabar;