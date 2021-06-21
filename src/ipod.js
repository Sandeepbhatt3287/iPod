
import React from 'react';



const Ipod = (props) =>{
  

  return(

    <div>
      <div className="ipod">

        {/*  starting inner screen */}
              <div className="inner-player">
                <img style ={styles.image} src="" alt="inner screen"/>
              </div>
        {/* endding inner screen */}
          
           {/* starting wheel screen */}
              <div className="wheel">
                  <div className="menu">
                    <p>menu</p>
                  </div>
                  <div className="back">
                    <p>back</p>
                  </div>
                  <div className="select">
                    <p>select</p>
                  </div>
                  <div className="next">
                    <p>next</p>
                  </div>
                  
                  <div className="play">
                    <p>play</p>
                  </div>
              </div>
            {/*endding wheel screen  */}
      </div>
      </div>
  );
}
        
const styles ={
  image :{
    height : 110,
    width:110,
    borderRadius:4,
    background: 'aqua'
  }
}

export default Ipod;