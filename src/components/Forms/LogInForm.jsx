import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const LogInForm = () => {
  
  //state
  const [formValues, setFormValues] = useState({
    email: '',
    p: '',
  });

  //variables
  const history = useHistory();

  //functions
  const handleChange = e => {
    console.log('handleChange');
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }//end handleChange

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
    // history.push('/where?');
  }//end handleSubmit

  return (
    <div className='formCont'>

      {console.log('formValues:', formValues)}

      <form onSubmit={handleSubmit}>

        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder='Email'
          onChange={handleChange}
          value={formValues.email}
          name='email'
          id='email'
        />

        <label htmlFor="p"></label>
        <input
          type="password"
          placeholder='Password'
          onChange={handleChange}
          value={formValues.p}
          name='p'
          id='p'
        />

        <button type='submit'>Let's Play!</button>
      </form>
      
      <p>Don't have an account? <span><a href='/signup'>Sign Up</a></span></p>

    </div>
  )
}// LogInForm
