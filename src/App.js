import React from 'react';

import { HeaderComponent, FooterComponent, AvatarComponent } from './components';

const App = () => {

  const handleAvatarClick = () => console.log('avatar clicked');
  const handlePrintClick = () => console.log('print clicked');
    return (
        <div className="ui-wrapper">
      <HeaderComponent onClick={handlePrintClick}/>
      <div className="ui-content-wrapper">
        <section className="ui-section">
          <div className="ui-container">
            <AvatarComponent onClick={handleAvatarClick} isSquare="ddd"/>
            <h1 className="ui-title-1">Hello world!</h1>
          </div>
        </section>
      </div>
      <FooterComponent/>
    </div>
    )
}

export default App;