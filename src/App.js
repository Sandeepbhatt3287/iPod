
import React from 'react';
import Ipod from './ipod';


class App extends React.Component {

  constructor(){
    super();
    this.state ={

      // loading: true   
    }
  }
  render()
    {
    return (
      <div className="App">
       <h1>Ipod</h1>
         {/* {loading && <h1>loading pages ....</h1>} */}
        <Ipod/>
      </div>
           );
    }

  }
export default App;
