import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const SignUpForm = () => {
  
  //state
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    p: '',
    cP: ''
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

        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder='Name'
          onChange={handleChange}
          value={formValues.name}
          name='name'
          id='name'
        />

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

        <label htmlFor="Cp"></label>
        <input
          type="password"
          placeholder='Confirm Password'
          onChange={handleChange}
          value={formValues.cP}
          name='cP'
          id='cP'
        />

        <button type='submit'>Let's Do This!</button>
      </form>
      
      <p>Already have an account? <span><a href='/'>Log In</a></span></p>

    </div>
  )
}// SignUpForm
