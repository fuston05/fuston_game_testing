import React from 'react';
import {Route} from 'react-router-dom';

//components
import {SignUpForm} from './Forms/SignUpForm';
import {LogInForm} from './Forms/LogInForm';

//styles
import '../sass/Main.scss';

export const Main = () => {


  return (
    <div className='mainCont'>

    <Route path= '/signup'>
      <SignUpForm />
    </Route>

    <Route exact path= '/'>
      <LogInForm />
    </Route>

    </div>
  )
}//end main
