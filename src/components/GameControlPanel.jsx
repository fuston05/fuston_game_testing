import React from 'react';

//styles
import '../sass/GameControlPanel.scss';

export const GameControlPanel = () => {
  return (

    <div className='gameControlPanel'>

      <div className='rowController'>
        <div className='controlsDivider'>
          <div className='buttonsCont'>
            <button>button1</button>
            <button>button2</button>
            <button>button3</button>
            <button>button4</button>
          </div> {/* end buttonsCont*/}
        </div> {/* end controlsDivider */}

        <div className='controlsDivider'>
          <h3>More controls can go here</h3>
        </div> {/* end controlsDivider */}
      </div> {/* end controller */}

    </div> //end gameControlPanel

  )
}
