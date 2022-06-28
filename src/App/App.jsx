import React from 'react';

import './App.scss';

// import Backing from '../Backing';
import Modal from '../Modal';

const App = () => {
  return (
    <main className='app'>
      <div className="app__content">
        {/* <Backing /> */}
        <Modal />
      </div>
    </main>
  )
}

export default App;