
import React from 'react';



const Ipod = (props) =>{

  return(
      <div className="ipod">

        {/*  starting inner screen */}
              <div className="inner-player">
                <img style ={StyleSheet.image} src="" alt="inner screen"/>
              </div>
        {/* endding inner screen */}
          
           {/* starting wheel screen */}
              <div className="wheel">
              <h1>wheel</h1>
              </div>
            {/*endding wheel screen  */}
      </div>

  );
}
        
const styles ={
  image :{
    height : 110,
    width:110,
    borderRadius:4,
    background: 'blue'
  }
}

export default Ipod;