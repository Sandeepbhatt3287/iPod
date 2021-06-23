
import React from 'react';

import Screen from './Screen';
import ZingTouch from 'zingtouch';
import {FaForward,FaBackward,FaPlay,FaPause} from 'react-icons/fa';


class Ipod  extends React.Component {
  


  constructor(){
    super();
    this.state = {
        activeItem : 'NowPlaying',
        activePage : 'Home',
        enter : 0,
        play : true
    }
}

rotateWheel = () => {

    var containerElement = document.getElementById('inner-container');
    var activeRegion = new ZingTouch.Region(containerElement);
    // var childElement = document.getElementById('inner-container');
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;
    
    if(self.state.enter < 2){
        activeRegion.bind(containerElement, 'rotate', function(event){
            //Perform Operations
            
            var newAngle = event.detail.distanceFromLast;
            console.log(newAngle);
    
            if(newAngle < 0){
                console.log(change);
                change++;
                if(change === 15){
                    console.log("change state");
                    change = 0;
                    if(self.state.activePage === 'Home'){
                        if(self.state.activeItem === 'NowPlaying'){
                            self.setState({
                                activeItem : "Music"
                            })
                        }else if(self.state.activeItem === 'Music'){
                            self.setState({
                                activeItem : "Games"
                            })
                        }else if(self.state.activeItem === 'Games'){
                            self.setState({
                                activeItem : "Settings"
                            })
                        }else if(self.state.activeItem === 'Settings'){
                            self.setState({
                                activeItem : "NowPlaying"
                            })
                        }
                    }else if(self.state.activePage === 'Music'){
                        if(self.state.activeItem === 'MyMusic'){
                            self.setState({
                                activeItem : "Artists"
                            })
                        }else if(self.state.activeItem === 'Artists'){
                            self.setState({
                                activeItem : "MyMusic"
                            })
                        }
                    }
                }
            }else{
                console.log(change);
                change++;
                if(change === 15){
                    console.log("change state");
                    change = 0;
                    if(self.state.activePage === 'Home'){
                        if(self.state.activeItem === 'NowPlaying'){
                            self.setState({
                                activeItem : "Settings"
                            })
                        }else if(self.state.activeItem === 'Music'){
                            self.setState({
                                activeItem : "NowPlaying"
                            })
                        }else if(self.state.activeItem === 'Games'){
                            self.setState({
                                activeItem : "Music"
                            })
                        }else if(self.state.activeItem === 'Settings'){
                            self.setState({
                                activeItem : "Games"
                            })
                        }
                    }else if(self.state.activePage === 'Music'){
                        if(self.state.activeItem === 'MyMusic'){
                            self.setState({
                                activeItem : "Artists"
                            })
                        }else if(self.state.activeItem === 'Artists'){
                            self.setState({
                                activeItem : "MyMusic"
                            })
                        }
                    }
                }
            }
            });
    }else{
        console.log("Not allowed to enter")
    }
    
}

changePage = () => {

    if(this.state.activeItem === 'Music'){
        this.setState({
            activeItem : 'MyMusic',
            activePage : this.state.activeItem
        })
    }else if(this.state.activeItem === 'NowPlaying'){
        this.setState({
            activeItem : 'NowPlaying',
            activePage : 'MyMusic'
        })
    }else{
        this.setState({
            activeItem : this.state.activeItem,
            activePage : this.state.activeItem
        })
    }
    
    
}

changePageToHomeScreen = () => {

    if(this.state.activeItem === 'MyMusic' || this.state.activeItem === 'Artists'){
        this.setState({
            activeItem : 'Music',
            activePage : 'Home'
        })
    }else{
        this.setState({
            activeItem : this.state.activeItem,
            activePage : 'Home'
        })
    }
    
}

toggle = () =>{
    if(this.state.activePage === 'MyMusic'){
        if(this.state.play === true){
            this.state.audio.pause();
            this.setState({
                play : false
            })
        }else{
            this.state.audio.play();
            this.setState({
                play : true
            })
        }
        console.log("toggled")
    }
}

componentDidMount(){
    let audio = document.getElementsByClassName("audio-element")[0];
    console.log(audio)
    this.setState({
        audio : audio,
    })
    console.log(this.state)
}

render(){
  return(

    <div>
      <div className="ipod">

        {/*  starting inner screen */}
              <div className="inner-player">
                {/* <img style ={styles.image} src="" alt="inner screen"/> */}
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
                  <FaPlay/><FaPause/>
                  </div>
              </div>
            {/*endding wheel screen  */}
      </div>
      </div>
  );
}
}
        
// const styles ={
//   image :{
//     height : 110,
//     width:110,
//     borderRadius:4,
//     background: 'aqua'
//   }
// }

export default Ipod;