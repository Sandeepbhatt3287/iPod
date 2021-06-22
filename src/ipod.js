
import React from 'react';

// import './fontawesome';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {FaForward,FaBackward,FaPlay} from 'react-icons/fa';

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
                    <p>Menu</p>
                  </div>
                  <div className="back">
                     <FaBackward/>
                  </div>
                  <div className="select">
                    {/* <p>select</p> */}
                  </div>
                  <div className="next">
                     <FaForward/>
                  </div>
                  
                  <div className="play">
                  <FaPlay/>
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