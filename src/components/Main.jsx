import React from 'react';

//styles
import '../sass/Main.scss';

export const Main = () => {
  return (
    <div className= 'mainCont'>
      
      <h1>Welcome to Fuston Gaming</h1>
      <form>
        <label htmlFor=""></label>
        <input type="text" placeholder= 'Name'/>
        <input type="text" placeholder= 'Email' />
        <input type="text" placeholder= 'Password' />
        <input type="text" placeholder= 'Confirm Password' />

        <button type= 'button'>Let's Play</button>
      </form>
      <p>Already have an account? <span><a href= '/'>Log In</a></span></p>
    </div>
  )
}//end main
