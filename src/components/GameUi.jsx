import React from 'react';

//styles
import '../sass/GameUi.scss';

//components
import {GameSideBar} from './GameSideBar';
import {GameDisplay} from './GameDisplay';
import {GameControlPanel} from './GameControlPanel';

export const GameUi = () => {

  return (
    <div className='gameCont'>
      {/* *******************NOT MOBILE FRIENDLY******YET********** */}
      {/* incase someone views from a phone. display is good down to 700px */}
      <h1 className= 'notMobile'>Not made for mobile, please use a larger device.</h1>
      {/* ********************************************************** */}

      <div className='rowFlex'>
        <GameSideBar />
        <GameDisplay />
      </div> {/* end  rowFlex*/}

      <GameControlPanel />

    </div> // end gameCont
  ) //end main component return
}//end GameUi
