import React from 'react';

import { HeaderComponent, FooterComponent } from './components';

const App = () => {
    return (
        <div className="ui-wrapper">
      <HeaderComponent/>
      <div className="ui-content-wrapper">
        <section className="ui-section">
          <div className="ui-container">
            <h1 className="ui-title-1">Hello world!</h1>
          </div>
        </section>
      </div>
      <FooterComponent/>
    </div>
    )
}

export default App;