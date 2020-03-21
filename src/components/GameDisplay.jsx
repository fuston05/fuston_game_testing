import React from 'react';

//styles
import '../sass/GameDisplay.scss';

export const GameDisplay = () => {
  return (
    <div className='columnFlex'>
      <div className='gameDisplay'>
        <div className='infoDisplay'>information display for any game information the might need to be displayed to the dumbass gamer </div>
        <h3>Im a gameDisplay</h3>
      </div> {/* end gameDisplay */}
    </div> // end columnFlex
  )
}
