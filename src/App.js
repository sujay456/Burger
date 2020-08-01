import React from 'react';
import Layout from './components/Layout/layout';
import BurgerBilder from './containers/BurgerBuilder/burgerbuilder';

class App extends React.Component {
  render()
  {
    return (
      <div>
          <Layout>
              <BurgerBilder/> 
          </Layout>
      </div>
    );
  }
}

export default App;
